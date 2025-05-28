import React from 'react';
import { BriefcaseIcon } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section 
      id="experience" 
      className={`py-20 ${
        darkMode ? 'bg-navy-900 text-white' : 'bg-white text-navy-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-teal-500 to-indigo-500 transform md:-translate-x-px"></div>
            
            <div className="space-y-12 relative">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                  <div className={`p-6 rounded-xl ${
                    darkMode ? 'bg-navy-800' : 'bg-gray-50'
                  }`}>
                    <h3 className="text-xl font-semibold">Tech Mahindra</h3>
                    <p className={`text-sm ${darkMode ? 'text-teal-400' : 'text-teal-600'} font-medium`}>
                      Test Engineer
                    </p>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Sep 2021 – Mar 2024 | Bangalore, Karnataka
                    </p>
                    <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Overall, 2.6 years of industry experience in Test Automation and Manual Testing with solid understanding of Test Design, Execution, and Defect Tracking.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Involved in writing test cases for requirements and maintaining them on JIRA.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Conducted integration testing, regression testing, and Webservice API testing.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Performed End-to-End testing and worked in Agile methodology with Scrum.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Created dashboards for tracking test case status and maintained tasks on JIRA.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Checked logs on AWS CloudWatch, FileZilla, and Putty.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Automated scripts via CATS tool and maintained the scripts.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                          darkMode ? 'bg-teal-400' : 'bg-teal-600'
                        }`}></div>
                        <p>
                          Used Git for version control to commit and push collections for automation.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <BriefcaseIcon size={16} className="text-white" />
                </div>
                
                <div className="flex-1 md:pl-8 order-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;