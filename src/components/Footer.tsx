import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className={`py-8 ${
        darkMode ? 'bg-navy-950 text-gray-400' : 'bg-gray-100 text-gray-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-sm">
              &copy; {currentYear} Iswarya Dorigundla. All rights reserved.
            </p>
          </div>
          
          <div>
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#home" 
                  className={`text-sm hover:underline ${
                    darkMode ? 'hover:text-white' : 'hover:text-navy-900'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`text-sm hover:underline ${
                    darkMode ? 'hover:text-white' : 'hover:text-navy-900'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`text-sm hover:underline ${
                    darkMode ? 'hover:text-white' : 'hover:text-navy-900'
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`text-sm hover:underline ${
                    darkMode ? 'hover:text-white' : 'hover:text-navy-900'
                  }`}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;