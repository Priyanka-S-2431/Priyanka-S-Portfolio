
import React, { useState } from 'react';
import { ExternalLink, Download, FileText } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('matlab');

  const matlabProjects = [
    {
      title: 'Ohm\'s Law',
      description: 'PDF export of MATLAB Live Script demonstrating Ohm\'s Law.',
      fileType: '.pdf',
      downloadLink: '/projects/Ohms-Law-m.pdf',
      viewLink: '/projects/Ohms-Law-m.pdf'
    },
    {
      title: 'Series and Parallel Connections',
      description: 'PDF export of MATLAB Live Script demonstrating Series and Parallel connections.',
      fileType: '.pdf',
      downloadLink: '/projects/Series-and-Parallel-m.pdf',
      viewLink: '/projects/Series-and-Parallel-m.pdf'
    },
    {
      title: 'Mesh Analysis',
      description: 'PDF export of MATLAB Live Script demonstrating Mesh Analysis.',
      fileType: '.pdf',
      downloadLink: '/projects/Mesh-Analysis-m.pdf',
      viewLink: '/projects/Mesh-Analysis-m.pdf'
    },
    {
      title: 'Nodal Analysis',
      description: 'PDF export of MATLAB Live Script demonstrating Nodal Analysis.',
      fileType: '.pdf',
      downloadLink: '/projects/Nodal-Analysis-m.pdf',
      viewLink: '/projects/Nodal-Analysis-m.pdf'
    },
    // Add more as needed
  ];

  const simulinkProjects = [
    {
      title: 'Ohm\'s Law',
      description: 'PDF export ofSimulink model demonstrating Ohm\'s Law.',
      fileType: '.pdf',
      downloadLink: '/projects/Ohms-Law-s.pdf',
      viewLink: '/projects/Ohms-Law-s.pdf'
    },
    {
      title: 'Series and Parallel Connections',
      description: 'PDF export ofSimulink model demonstrating Series and Parallelconnections.',
      fileType: '.pdf',
      downloadLink: '/projects/Series-and-Parallel-s.pdf',
      viewLink: '/projects/Series-and-Parallel-s.pdf'
    },
    {
      title: 'Mesh Analysis',
      description: 'PDF export ofSimulink model demonstrating Mesh Analysis.',
      fileType: '.pdf',
      downloadLink: '/projects/Mesh-Analysis-s.pdf',
      viewLink: '/projects/Mesh-Analysis-s.pdf'
    },
    {
      title: 'Nodal Analysis',
      description: 'PDF export ofSimulink model demonstrating Nodal Analysis.',
      fileType: '.pdf',
      downloadLink: '/projects/Nodal-Analysis-s.pdf',
      viewLink: '/projects/Nodal-Analysis-s.pdf'
    },
    // Add more as needed
  ];

  const currentProjects = activeTab === 'matlab' ? matlabProjects : simulinkProjects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Explore the stages of my MATLAB and Simulink journey — where each project helps me apply theory to real-world simulations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-full flex">
            <button
              onClick={() => setActiveTab('matlab')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'matlab'
                  ? 'bg-gradient-to-r from-coral-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              MATLAB Projects
            </button>
            <button
              onClick={() => setActiveTab('simulink')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'simulink'
                  ? 'bg-gradient-to-r from-coral-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Simulink Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-coral-200 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-coral-500" />
                  <span className="text-sm font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.fileType}
                  </span>
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-coral-500 to-pink-500 rounded-full"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-coral-500 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                  <button className="flex-1 bg-gradient-to-r from-coral-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View
                  </button>
                </a>
                <a href={project.downloadLink} download>
                  <button className="flex-1 border-2 border-coral-500 text-coral-500 px-4 py-2 rounded-lg font-semibold hover:bg-coral-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Priyanka-S-2431/MATLAB_Simulink_Circuits"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
