
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="py-4 fixed w-full z-50 bg-background/90 backdrop-blur-md shadow-sm relative overflow-hidden">
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <div className="wave-animation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-8 translate-y-4">
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              className="text-design-blue dark:text-design-light-blue"
              d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,133.3C672,149,768,139,864,133.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </div>

      {/* Left side wave decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-[150px] overflow-hidden pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 500" className="h-full" preserveAspectRatio="none">
          <path
            d="M0,100 C30,120 70,90 100,100 C130,110 170,80 200,100 L200,0 L0,0 Z"
            fill="currentColor"
            className="text-design-blue/20 dark:text-design-light-blue/20"
          />
        </svg>
      </div>

      {/* Right side wave decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-[150px] overflow-hidden pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 500" className="h-full" preserveAspectRatio="none">
          <path
            d="M0,100 C30,80 70,110 100,100 C130,90 170,120 200,100 L200,0 L0,0 Z"
            fill="currentColor"
            className="text-design-blue/20 dark:text-design-light-blue/20"
          />
        </svg>
      </div>

      <div className="container-custom flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b6b9fd0e-845e-4ec0-bd61-25fcbd7274e8.png" 
              alt="RUA Tech Logo" 
              className="h-10 w-10"
            />
            <span className="text-foreground font-heading text-xl font-bold">RUA Tech</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground/80 hover:text-design-blue dark:hover:text-design-light-blue transition-colors">Services</a>
          <a href="#portfolio" className="text-foreground/80 hover:text-design-blue dark:hover:text-design-light-blue transition-colors">Projects</a>
          <a href="#about" className="text-foreground/80 hover:text-design-blue dark:hover:text-design-light-blue transition-colors">About Us</a>
          <a href="#contact" className="text-foreground/80 hover:text-design-blue dark:hover:text-design-light-blue transition-colors">Contact</a>
          <Button className="bg-design-blue hover:bg-design-deep-purple dark:bg-design-light-blue dark:hover:bg-design-blue dark:text-gray-900">Get a Quote</Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background absolute left-0 right-0 z-50 shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#services" className="text-foreground/80 py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>Services</a>
            <a href="#portfolio" className="text-foreground/80 py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>Projects</a>
            <a href="#about" className="text-foreground/80 py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>About Us</a>
            <a href="#contact" className="text-foreground/80 py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>Contact</a>
            <Button className="bg-design-blue hover:bg-design-deep-purple dark:bg-design-light-blue dark:hover:bg-design-blue dark:text-gray-900 w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
