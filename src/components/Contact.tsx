import React from 'react';
import { Mail, Phone, LinkedinIcon, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section 
      id="contact" 
      className={`py-20 ${
        darkMode ? 'bg-navy-900 text-white' : 'bg-white text-navy-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-xl ${
              darkMode ? 'bg-navy-800' : 'bg-gray-50'
            }`}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-navy-700' : 'bg-gray-100'
                  }`}>
                    <Mail size={20} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Email</p>
                    <a 
                      href="mailto:ishudorugundla111@gmail.com"
                      className={`hover:underline ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-navy-900'
                      }`}
                    >
                      ishudorugundla111@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-navy-700' : 'bg-gray-100'
                  }`}>
                    <Phone size={20} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Phone</p>
                    <a 
                      href="tel:9392577121"
                      className={`hover:underline ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-navy-900'
                      }`}
                    >
                      +91 9392577121
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-navy-700' : 'bg-gray-100'
                  }`}>
                    <LinkedinIcon size={20} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/iswarya-dorigundla-6713a92a9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-navy-900'
                      }`}
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-navy-700' : 'bg-gray-100'
                  }`}>
                    <MapPin size={20} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Location</p>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-xl ${
              darkMode ? 'bg-navy-800' : 'bg-gray-50'
            }`}>
              <h3 className="text-xl font-semibold mb-6">Send A Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-navy-700 border-navy-600 text-white focus:border-teal-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                    } border focus:ring-1 focus:ring-teal-500 outline-none transition-colors`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-navy-700 border-navy-600 text-white focus:border-teal-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                    } border focus:ring-1 focus:ring-teal-500 outline-none transition-colors`}
                    placeholder="johndoe@example.com"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-navy-700 border-navy-600 text-white focus:border-teal-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                    } border focus:ring-1 focus:ring-teal-500 outline-none transition-colors`}
                    placeholder="Job Opportunity"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-navy-700 border-navy-600 text-white focus:border-teal-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                    } border focus:ring-1 focus:ring-teal-500 outline-none transition-colors`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    darkMode 
                      ? 'bg-teal-500 hover:bg-teal-400 text-navy-900' 
                      : 'bg-navy-800 hover:bg-navy-700 text-white'
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;