
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-design-purple font-heading text-xl font-bold">Web</span>
            <span className="text-design-blue font-heading text-xl font-bold">Vista</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-design-blue transition-colors">Dịch vụ</a>
          <a href="#portfolio" className="text-gray-700 hover:text-design-blue transition-colors">Dự án</a>
          <a href="#about" className="text-gray-700 hover:text-design-blue transition-colors">Về chúng tôi</a>
          <a href="#contact" className="text-gray-700 hover:text-design-blue transition-colors">Liên hệ</a>
          <Button className="bg-design-blue hover:bg-design-deep-purple">Báo giá</Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 z-50 shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Dịch vụ</a>
            <a href="#portfolio" className="text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Dự án</a>
            <a href="#about" className="text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Về chúng tôi</a>
            <a href="#contact" className="text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Liên hệ</a>
            <Button className="bg-design-blue hover:bg-design-deep-purple w-full">Báo giá</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
