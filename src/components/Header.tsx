import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? `${darkMode ? 'bg-navy-900/95 shadow-lg' : 'bg-white/95 shadow-md'}`
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Iswarya</span>
          <span className={darkMode ? 'text-white' : 'text-navy-900'}>Dorigundla</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-navy-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? 'bg-navy-800 text-yellow-300 hover:bg-navy-700' 
                : 'bg-gray-100 text-navy-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`p-2 mr-2 rounded-full transition-colors ${
              darkMode 
                ? 'bg-navy-800 text-yellow-300' 
                : 'bg-gray-100 text-navy-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md ${darkMode ? 'text-white' : 'text-navy-900'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-navy-900' : 'bg-white'} shadow-lg`}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;