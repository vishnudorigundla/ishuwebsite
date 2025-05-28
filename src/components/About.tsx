import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${
        darkMode ? 'bg-navy-900 text-white' : 'bg-white text-navy-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Me</span>
          </h2>
          
          <div className={`p-8 rounded-xl mb-10 ${
            darkMode ? 'bg-navy-800' : 'bg-gray-50'
          }`}>
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className={`leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Detail-oriented and highly motivated Test Engineer with 2.6 years of experience in both
              manual and automated testing, specializing in API testing, integration testing, and regression testing.
            </p>
            <p className={`leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Seeking to leverage hands-on expertise with tools like Postman, JIRA, and AWS CloudWatch to ensure
              software quality and efficiency. Eager to contribute to a dynamic team, where I can apply my skills
              in test automation, defect tracking, and Agile methodologies to drive continuous improvements in testing
              processes and ensure the successful delivery of high-quality products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-navy-800' : 'bg-gray-50'
            }`}>
              <h3 className="text-lg font-semibold mb-4">Education</h3>
              <div className="mb-2">
                <h4 className="font-medium">B. Tech in Electronics and Communication Engineering</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  S.V. Engineering college for women, Tirupati
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Aug 2016 – June 2020
                </p>
                <p className={`text-sm mt-1 ${
                  darkMode ? 'text-teal-400' : 'text-teal-600'
                }`}>
                  Percentage: 77.06%
                </p>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-navy-800' : 'bg-gray-50'
            }`}>
              <h3 className="text-lg font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className={`w-2 h-2 mt-2 mr-2 rounded-full ${
                    darkMode ? 'bg-teal-400' : 'bg-teal-600'
                  }`}></div>
                  <div>
                    <p className="font-medium">Azure Fundamentals</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Exam code: AZ-900 (CP01918)
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`w-2 h-2 mt-2 mr-2 rounded-full ${
                    darkMode ? 'bg-teal-400' : 'bg-teal-600'
                  }`}></div>
                  <div>
                    <p className="font-medium">RPA Developer - UiPath Orchestrator Training</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      (CP01497)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={`p-6 rounded-xl mt-8 ${
            darkMode ? 'bg-navy-800' : 'bg-gray-50'
          }`}>
            <h3 className="text-lg font-semibold mb-4">Leadership & Extracurricular</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className={`w-2 h-2 mt-2 mr-2 rounded-full ${
                  darkMode ? 'bg-teal-400' : 'bg-teal-600'
                }`}></div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Managed and organized several college-level events, showcasing leadership and organizational skills.
                </p>
              </li>
              <li className="flex items-start">
                <div className={`w-2 h-2 mt-2 mr-2 rounded-full ${
                  darkMode ? 'bg-teal-400' : 'bg-teal-600'
                }`}></div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Achieved a personal best by solving complex puzzles within an average of four minutes each, developing effective
                  strategies that improved overall performance during competitive events while honing quick decision-making abilities.
                </p>
              </li>
              <li className="flex items-start">
                <div className={`w-2 h-2 mt-2 mr-2 rounded-full ${
                  darkMode ? 'bg-teal-400' : 'bg-teal-600'
                }`}></div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Represented the school Kabaddi team in school-level tournaments, developing teamwork, leadership, and discipline
                  through active participation in competitive matches.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;