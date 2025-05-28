import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  darkMode: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, darkMode }) => {
  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-navy-800' : 'bg-gray-50'}`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-105 ${
              darkMode 
                ? 'bg-navy-700 text-gray-200 border border-navy-600' 
                : 'bg-white text-navy-800 border border-gray-200 shadow-sm'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "SQL"]
    },
    {
      title: "Testing Tools",
      skills: ["JIRA", "Postman", "Selenium"]
    },
    {
      title: "API Tools",
      skills: ["Postman", "FileZilla", "Putty", "AWS CloudWatch"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      title: "Testing Expertise",
      skills: [
        "Functional Testing", 
        "Compound Testing",
        "End-to-End (E2E) Testing", 
        "Regression Testing",
        "Sanity Testing", 
        "Automation"
      ]
    },
    {
      title: "Technologies",
      skills: ["Jenkins", "CATS"]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${
        darkMode ? 'bg-navy-950 text-white' : 'bg-gray-50 text-navy-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Skills</span>
          </h2>
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500/10 to-indigo-500/10 rounded-2xl -z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {skillCategories.map((category, index) => (
                <SkillCategory 
                  key={index}
                  title={category.title}
                  skills={category.skills}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
          
          <div className={`mt-16 p-8 rounded-xl text-center ${
            darkMode ? 'bg-navy-800' : 'bg-white shadow-md'
          }`}>
            <h3 className="text-xl font-semibold mb-4">Skills Overview</h3>
            <p className={`max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              With expertise across multiple testing tools and methodologies, I bring a comprehensive approach to 
              software quality assurance. My background combines strong technical skills with practical experience 
              in both manual and automated testing frameworks, allowing me to effectively identify and resolve 
              issues throughout the development lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;