
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [raindrops, setRaindrops] = useState<Array<{id: number, left: string, delay: string, duration: string}>>([]);
  const [bubbles, setBubbles] = useState<Array<{id: number, left: string, top: string, size: number}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
              We create beautiful, modern, and optimized websites for your business.
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
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="Web Design Process"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              />
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
