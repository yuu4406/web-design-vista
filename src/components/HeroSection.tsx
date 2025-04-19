import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [raindrops, setRaindrops] = useState<Array<{id: number, left: string, delay: string, duration: string}>>([]);
  const [bubbles, setBubbles] = useState<Array<{id: number, left: string, top: string, size: number}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    // Create raindrops
    const drops = [];
    for (let i = 0; i < 40; i++) {
      drops.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${0.5 + Math.random() * 0.7}s`
      });
    }
    setRaindrops(drops);

    // Add mouse move listener for bubbles
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create a new bubble occasionally when mouse moves
      if (Math.random() > 0.92) {
        const newBubble = {
          id: Date.now(),
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          size: 5 + Math.random() * 20
        };
        setBubbles(prev => [...prev.slice(-15), newBubble]); // Keep only the last 15 bubbles
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Create clouds animation
    const createClouds = () => {
      const clouds = document.querySelector('.clouds-container');
      if (clouds) {
        for (let i = 0; i < 5; i++) {
          const cloud = document.createElement('div');
          cloud.className = 'cloud-animation';
          cloud.style.left = `${Math.random() * 100}%`;
          cloud.style.top = `${Math.random() * 50}%`;
          cloud.style.animationDelay = `${Math.random() * 10}s`;
          cloud.style.opacity = `${0.4 + Math.random() * 0.3}`;
          cloud.style.transform = `scale(${0.6 + Math.random() * 0.7})`;
          clouds.appendChild(cloud);
        }
      }
    };
    
    createClouds();

    // Turtle animation sequence
    let animationTimeout: ReturnType<typeof setTimeout>;
    
    const startAnimationSequence = () => {
      // Start with empty stage
      setAnimationStage(0);
      
      // After 1s, show turtle waving
      animationTimeout = setTimeout(() => {
        setAnimationStage(1);
        
        // After 2s more, show turtle at computer
        animationTimeout = setTimeout(() => {
          setAnimationStage(2);
        }, 2000);
      }, 1000);
    };
    
    startAnimationSequence();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Clouds Animation */}
      <div className="clouds-container absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Clouds will be added dynamically via JS */}
      </div>
      
      {/* Sea Bubbles Animation */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="sea-bubble absolute rounded-full pointer-events-none z-10"
          style={{
            left: bubble.left,
            top: bubble.top,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: 'translate(-50%, -50%)',
            animation: `bubble-rise ${2 + Math.random() * 3}s ease-in-out forwards`
          }}
        />
      ))}
      
      {/* Rainfall Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {raindrops.map(drop => (
          <div
            key={drop.id}
            className="rain-drop"
            style={{
              left: drop.left,
              animationDelay: drop.delay,
              animationDuration: drop.duration
            }}
          />
        ))}
      </div>
      
      {/* Ocean Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="wave-animation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path 
              fill="currentColor" 
              className="text-design-blue/20 dark:text-design-light-blue/30" 
              d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,181.3C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <div className="wave-animation-slow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path 
              fill="currentColor" 
              className="text-design-blue/40 dark:text-design-light-blue/40" 
              d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,277.3C672,277,768,235,864,224C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </div>

      {/* 3D Ocean Wave */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="ocean-wave-animation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="currentColor"
              className="text-design-blue/15 dark:text-design-light-blue/20"
              d="M0,32L48,42.7C96,53,192,75,288,69.3C384,64,480,32,576,32C672,32,768,64,864,80C960,96,1056,96,1152,80C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Left side wave decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-[120px] overflow-hidden pointer-events-none">
        <div className="side-wave-animation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 800" className="h-full" preserveAspectRatio="none">
            <path
              d="M0,100 C20,140 40,120 60,100 C80,80 100,120 100,160 V800 H0 Z"
              fill="currentColor"
              className="text-design-blue/10 dark:text-design-light-blue/10"
            />
          </svg>
        </div>
      </div>

      {/* Right side wave decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-[120px] overflow-hidden pointer-events-none">
        <div className="side-wave-animation" style={{ animationDelay: '1s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 800" className="h-full" preserveAspectRatio="none">
            <path
              d="M0,160 C0,120 20,80 40,100 C60,120 80,140 100,100 V800 H0 Z"
              fill="currentColor"
              className="text-design-blue/10 dark:text-design-light-blue/10"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-design-blue dark:text-design-light-blue">Rua Tech</span> – Turning Your Ideas into Digital Reality
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg">
              Rua Tech: Where Innovation Meets Precision in Web Development
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-design-blue hover:bg-design-deep-purple dark:bg-design-light-blue dark:text-gray-900 dark:hover:bg-design-blue text-lg py-6 px-8">
                Contact Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-design-blue text-design-blue hover:bg-design-blue hover:text-white dark:border-design-light-blue dark:text-design-light-blue dark:hover:bg-design-light-blue dark:hover:text-gray-900 text-lg py-6 px-8">
                View Projects
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="bg-gradient-to-tr from-design-purple/20 to-design-blue/20 dark:from-design-purple/40 dark:to-design-blue/40 p-4 rounded-2xl shadow-xl">
              <div className="w-full h-auto rounded-xl shadow-lg overflow-hidden">
                {/* Turtle Animation Container */}
                <div className="relative w-full aspect-video bg-gradient-to-b from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl">
                  {/* Stage 0: Empty desk (initial) */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${animationStage === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="w-3/4 h-1/2 bg-white dark:bg-gray-700 rounded-lg shadow-md" style={{ backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.02) 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }}>
                        {/* Empty desk with subtle pattern */}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stage 1: Turtle waving */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${animationStage === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="turtle-waving relative">
                        {/* Turtle Shadow */}
                        <div className="absolute -bottom-4 w-32 h-6 bg-black/10 dark:bg-black/30 rounded-full blur-sm"></div>
                        
                        {/* Turtle Body */}
                        <div className="turtle-body bg-gradient-to-br from-green-400 to-green-600 w-32 h-24 rounded-full relative">
                          {/* Turtle Head */}
                          <div className="turtle-head bg-gradient-to-br from-green-500 to-green-700 w-16 h-16 rounded-full absolute -top-12 left-8 flex items-center justify-center shadow-sm">
                            {/* Eyes */}
                            <div className="turtle-eye bg-white w-4 h-4 rounded-full absolute top-4 left-3 flex justify-center items-center shadow-inner">
                              <div className="bg-black w-2 h-2 rounded-full absolute"></div>
                            </div>
                            <div className="turtle-eye bg-white w-4 h-4 rounded-full absolute top-4 right-3 flex justify-center items-center shadow-inner">
                              <div className="bg-black w-2 h-2 rounded-full absolute"></div>
                            </div>
                            {/* Smile */}
                            <div className="turtle-smile border-b-2 border-white w-8 h-2 rounded-b-full absolute bottom-3"></div>
                          </div>
                          
                          {/* Turtle Shell */}
                          <div className="turtle-shell bg-gradient-to-br from-yellow-700 to-yellow-900 w-40 h-32 rounded-full absolute -top-4 -left-4 z-[-1] shadow-lg">
                            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 w-32 h-24 rounded-full absolute top-4 left-4 shadow-inner"></div>
                            {/* Shell Patterns */}
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-6 h-6 rounded-full absolute top-8 left-12 shadow-inner"></div>
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-6 h-6 rounded-full absolute top-8 right-12 shadow-inner"></div>
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-6 h-6 rounded-full absolute bottom-8 left-12 shadow-inner"></div>
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-6 h-6 rounded-full absolute bottom-8 right-12 shadow-inner"></div>
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-6 h-6 rounded-full absolute top-16 left-16 shadow-inner"></div>
                          </div>
                          
                          {/* Limbs */}
                          <div className="turtle-arm-left bg-gradient-to-br from-green-500 to-green-700 w-6 h-16 rounded-full absolute top-2 -left-2 animate-wave shadow-sm">
                            <div className="bg-gradient-to-br from-green-600 to-green-800 w-5 h-5 rounded-full absolute -bottom-1 -left-1"></div>
                          </div>
                          <div className="turtle-arm-right bg-gradient-to-br from-green-500 to-green-700 w-6 h-16 rounded-full absolute top-2 -right-2 shadow-sm">
                            <div className="bg-gradient-to-br from-green-600 to-green-800 w-5 h-5 rounded-full absolute -bottom-1 -right-1"></div>
                          </div>
                          <div className="turtle-leg-left bg-gradient-to-br from-green-500 to-green-700 w-6 h-10 rounded-full absolute bottom-2 left-4 shadow-sm">
                            <div className="bg-gradient-to-br from-green-600 to-green-800 w-5 h-5 rounded-full absolute -bottom-1 -left-1"></div>
                          </div>
                          <div className="turtle-leg-right bg-gradient-to-br from-green-500 to-green-700 w-6 h-10 rounded-full absolute bottom-2 right-4 shadow-sm">
                            <div className="bg-gradient-to-br from-green-600 to-green-800 w-5 h-5 rounded-full absolute -bottom-1 -right-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stage 2: Turtle at computer */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${animationStage === 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="desk-setup relative w-3/4 h-1/2">
                        {/* Desk */}
                        <div className="w-full h-14 bg-gradient-to-r from-yellow-700 to-amber-800 rounded-lg absolute bottom-0 shadow-md"></div>
                        
                        {/* Computer */}
                        <div className="laptop absolute left-1/2 bottom-14 transform -translate-x-1/2">
                          <div className="laptop-screen w-40 h-28 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-700 dark:to-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-t-lg flex items-center justify-center overflow-hidden shadow-lg">
                            {/* Code on screen with glow effect */}
                            <div className="w-full p-2 relative overflow-hidden">
                              <div className="h-2 w-20 bg-blue-400 dark:bg-blue-500 rounded mb-1 opacity-80"></div>
                              <div className="h-2 w-32 bg-green-400 dark:bg-green-500 rounded mb-1 opacity-80"></div>
                              <div className="h-2 w-24 bg-purple-400 dark:bg-purple-500 rounded mb-1 opacity-80"></div>
                              <div className="h-2 w-28 bg-yellow-400 dark:bg-yellow-500 rounded mb-1 opacity-80"></div>
                              <div className="h-2 w-16 bg-red-400 dark:bg-red-500 rounded mb-1 opacity-80"></div>
                              {/* Screen glow */}
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent dark:from-blue-400/10"></div>
                            </div>
                          </div>
                          <div className="laptop-base w-48 h-2 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded shadow-md"></div>
                        </div>
                        
                        {/* Turtle typing */}
                        <div className="turtle-typing absolute bottom-10 left-1/2 transform -translate-x-1/2">
                          {/* Turtle Shadow */}
                          <div className="absolute -bottom-2 w-24 h-4 bg-black/10 dark:bg-black/30 rounded-full blur-sm"></div>
                          
                          {/* Turtle Body */}
                          <div className="turtle-body bg-gradient-to-br from-green-400 to-green-600 w-24 h-16 rounded-full relative">
                            {/* Turtle Head */}
                            <div className="turtle-head bg-gradient-to-br from-green-500 to-green-700 w-12 h-12 rounded-full absolute -top-8 left-6 flex items-center justify-center shadow-sm">
                              {/* Eyes */}
                              <div className="turtle-eye bg-white w-3 h-3 rounded-full absolute top-3 left-2 flex justify-center items-center shadow-inner">
                                <div className="bg-black w-1.5 h-1.5 rounded-full absolute"></div>
                              </div>
                              <div className="turtle-eye bg-white w-3 h-3 rounded-full absolute top-3 right-2 flex justify-center items-center shadow-inner">
                                <div className="bg-black w-1.5 h-1.5 rounded-full absolute"></div>
                              </div>
                              {/* Smile - focused look */}
                              <div className="turtle-smile border-b-2 border-white w-6 h-1 rounded-b-full absolute bottom-2"></div>
                            </div>
                            
                            {/* Turtle Shell */}
                            <div className="turtle-shell bg-gradient-to-br from-yellow-700 to-yellow-900 w-30 h-20 rounded-full absolute -top-2 -left-3 z-[-1] shadow-md"></div>
                            
                            {/* Arms Typing Animation */}
                            <div className="turtle-arm-left bg-gradient-to-br from-green-500 to-green-700 w-4 h-10 rounded-full absolute top-2 -left-1 animate-typing shadow-sm">
                              <div className="bg-gradient-to-br from-green-600 to-green-800 w-3 h-3 rounded-full absolute -bottom-1 -left-1"></div>
                            </div>
                            <div className="turtle-arm-right bg-gradient-to-br from-green-500 to-green-700 w-4 h-10 rounded-full absolute top-2 -right-1 animate-typing shadow-sm" style={{ animationDelay: '0.1s' }}>
                              <div className="bg-gradient-to-br from-green-600 to-green-800 w-3 h-3 rounded-full absolute -bottom-1 -right-1"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Coffee Mug */}
                        <div className="absolute bottom-14 right-16">
                          <div className="w-6 h-8 bg-gradient-to-br from-red-400 to-red-600 dark:from-red-500 dark:to-red-700 rounded-b-lg shadow-md"></div>
                          <div className="w-2 h-5 bg-gradient-to-br from-red-300 to-red-500 dark:from-red-400 dark:to-red-600 rounded-full absolute -right-1 top-1 shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-design-purple dark:bg-design-light-blue dark:text-gray-900 text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold">+500</p>
              <p className="text-sm">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
