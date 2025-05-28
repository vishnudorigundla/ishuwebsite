import React from 'react';
import { ArrowDown, LinkedinIcon, Mail, Phone } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center relative ${
        darkMode ? 'bg-navy-950 text-white' : 'bg-gray-50 text-navy-900'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className={`text-lg md:text-xl mb-4 font-medium ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Iswarya Dorigundla
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto my-6"></div>
          <h2 className="text-xl md:text-2xl font-medium mb-8">
            Test Engineer with 2.6 years of experience in manual and automated testing
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Detail-oriented and highly motivated professional specializing in API testing, 
            integration testing, and regression testing. Experienced with tools like Postman, 
            JIRA, and AWS CloudWatch.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                darkMode 
                  ? 'bg-teal-500 text-navy-900 hover:bg-teal-400' 
                  : 'bg-navy-800 text-white hover:bg-navy-700'
              }`}
            >
              Contact Me
            </a>
            <a 
              href="#about" 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                darkMode 
                  ? 'bg-navy-800 text-white border border-navy-700 hover:bg-navy-700' 
                  : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Learn More
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/iswarya-dorigundla-6713a92a9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all ${
                darkMode 
                  ? 'bg-navy-800 text-blue-400 hover:bg-navy-700' 
                  : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
              }`}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="mailto:ishudorugundla111@gmail.com" 
              className={`p-3 rounded-full transition-all ${
                darkMode 
                  ? 'bg-navy-800 text-teal-400 hover:bg-navy-700' 
                  : 'bg-gray-100 text-teal-600 hover:bg-gray-200'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:9392577121" 
              className={`p-3 rounded-full transition-all ${
                darkMode 
                  ? 'bg-navy-800 text-indigo-400 hover:bg-navy-700' 
                  : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'
              }`}
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className={darkMode ? 'text-gray-300' : 'text-gray-600'}
          aria-label="Scroll Down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;