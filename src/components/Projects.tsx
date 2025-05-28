import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface ProjectCardProps {
  title: string;
  client: string;
  role: string;
  technology: string;
  testingTools: string;
  description: string[];
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  client, 
  role, 
  technology, 
  testingTools, 
  description,
  darkMode 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-300 ${
      darkMode ? 'bg-navy-800' : 'bg-white shadow-md'
    }`}>
      <div className={`p-6 border-b ${
        darkMode ? 'border-navy-700' : 'border-gray-200'
      }`}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            darkMode 
              ? 'bg-teal-900/50 text-teal-400' 
              : 'bg-teal-100 text-teal-800'
          }`}>
            {client}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            darkMode 
              ? 'bg-indigo-900/50 text-indigo-400' 
              : 'bg-indigo-100 text-indigo-800'
          }`}>
            {role}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className={`text-sm font-medium ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Technology:
            </p>
            <p className="text-sm">{technology}</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Testing Tools:
            </p>
            <p className="text-sm">{testingTools}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center text-sm font-medium ${
            darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
          }`}
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              <span>Show More</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
      </div>
      
      {isExpanded && (
        <div className={`p-6 ${darkMode ? 'bg-navy-800' : 'bg-gray-50'}`}>
          <h4 className="text-sm font-semibold mb-3">Key Responsibilities & Achievements:</h4>
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${
                  darkMode ? 'bg-teal-400' : 'bg-teal-600'
                }`}></div>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "CS OSCH TM D (Fix API)",
      client: "British Telecommunication",
      role: "Test Engineer",
      technology: "API Testing (Postman)",
      testingTools: "Postman, CATS",
      description: [
        "Developed and executed API test cases using Postman to validate the functionality of troubleshooting services for BT products, including Broadband, Landline, and BT Television.",
        "Tested services such as Disc and Hub Reboot, STB Reboot, Session Kill, Port Reset, and Port Flex to enhance customer troubleshooting efficiency.",
        "Ensured high service reliability by conducting rigorous API testing, debugging issues, and providing detailed reports for continuous improvement."
      ]
    },
    {
      title: "GR RA TMD (BT)",
      client: "British Telecommunication",
      role: "Test Engineer",
      technology: "MUI Testing",
      testingTools: "JIRA, Manual Testing",
      description: [
        "Created and managed test accounts (dummy employee, non-employee, and CAD accounts) for MUI testing to validate system functionality and ensure seamless user experience.",
        "Conducted end-to-end testing to verify the usability and correctness of test accounts in different operational scenarios.",
        "Provided detailed documentation of test results and collaborated with development teams to resolve identified issues effectively."
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        darkMode ? 'bg-navy-950 text-white' : 'bg-gray-50 text-navy-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                client={project.client}
                role={project.role}
                technology={project.technology}
                testingTools={project.testingTools}
                description={project.description}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;