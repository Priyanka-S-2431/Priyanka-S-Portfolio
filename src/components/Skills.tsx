
import React from 'react';
import { Code, Cpu, Zap, Settings } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'C',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      description: 'System programming and algorithm implementation'
    },
    {
      name: 'C++',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Object-oriented programming and software development'
    },
    {
      name: 'MATLAB',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-coral-500 to-pink-500',
      description: 'Mathematical computing and algorithm development'
    },
    {
      name: 'Simulink',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      description: 'Visual modeling and simulation of circuits and control systems'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          These are the technologies I’m exploring as I grow my skills in simulation and circuit analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-coral-500 transition-colors duration-300">
                {skill.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 group-hover:w-full`}
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Proficient</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Power Electronics', 'Electric Vehicles', 'Digital Electronics', 'Circuit Analysis', 'Control Systems', 'PLC (Ladder Logic)', 'No-code Machine Learning'].map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-coral-100 to-pink-100 text-coral-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
