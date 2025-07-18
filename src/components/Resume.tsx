
import React from 'react';
import { Download, FileText, Github, Linkedin, Link, Power } from 'lucide-react';

const NaukriIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 32 32" {...props}>
    <circle cx="16" cy="16" r="16" fill="#0080C3"/>
    <text x="16" y="22" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial" fontWeight="bold">N</text>
  </svg>
);

const LinkedInLogo = (props) => (
  <svg width="16" height="16" viewBox="0 0 32 32" {...props}>
    <rect width="32" height="32" rx="6" fill="#0077B5"/>
    <path d="M9.429 12.857h3.143v10.286H9.429V12.857zm1.571-5.143a1.821 1.821 0 110 3.643 1.821 1.821 0 010-3.643zm4.286 5.143h3.014v1.404h.043c.42-.797 1.445-1.637 2.976-1.637 3.183 0 3.771 2.093 3.771 4.816v5.703h-3.143v-5.061c0-1.207-.021-2.762-1.683-2.762-1.684 0-1.941 1.316-1.941 2.676v5.147h-3.143V12.857z" fill="#fff"/>
  </svg>
);

const GitHubLogo = (props) => (
  <svg width="16" height="16" viewBox="0 0 32 32" {...props}>
    <path fill="#181717" d="M16 2.5C8.268 2.5 2 8.768 2 16.5c0 6.18 4.006 11.418 9.572 13.271.7.13.955-.304.955-.676 0-.334-.012-1.217-.018-2.39-3.893.846-4.713-1.877-4.713-1.877-.637-1.619-1.555-2.051-1.555-2.051-1.272-.87.097-.853.097-.853 1.406.099 2.147 1.444 2.147 1.444 1.25 2.144 3.281 1.525 4.081 1.167.127-.906.49-1.526.89-1.878-3.108-.354-6.377-1.554-6.377-6.917 0-1.528.545-2.777 1.442-3.757-.145-.355-.625-1.785.137-3.723 0 0 1.175-.377 3.85 1.438a13.37 13.37 0 013.504-.471c1.188.006 2.386.161 3.504.471 2.673-1.815 3.846-1.438 3.846-1.438.764 1.938.284 3.368.14 3.723.9.98 1.44 2.229 1.44 3.757 0 5.377-3.273 6.56-6.39 6.908.504.434.954 1.29.954 2.6 0 1.877-.017 3.393-.017 3.854 0 .375.25.812.96.674C25.997 27.914 30 22.678 30 16.5c0-7.732-6.268-14-14-14z"/>
  </svg>
);

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Download Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-coral-50 to-pink-50 p-8 rounded-xl shadow-lg sticky top-24">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Download Resume</h3>
                <p className="text-gray-600 mb-6">Get a copy of my complete resume with detailed information about my experience and skills.</p>
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-coral-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-coral-500 to-pink-500 p-4">
                <h3 className="text-white font-semibold text-lg">Resume Preview</h3>
              </div>
              <div className="p-8">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center border-b border-gray-200 pb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Priyanka S</h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-600">
                      <span>📧 priyaselvaraj2431@gmail.com</span>
                      <span>📱 +91 6374363157</span>
                      <span className="flex items-center gap-1">
                        <LinkedInLogo /> www.linkedin.com/in/priyanka-s-4b27a531b
                      </span>
                      <span className="flex items-center gap-1">
                        <NaukriIcon /> www.naukri.com/mnjuser/profile
                      </span>
                      <span className="flex items-center gap-1">
                        <GitHubLogo /> github.com/Priyanka-S-2431
                      </span>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-coral-500 pl-4">Education</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-700">BE in Electrical and Electronics</h3>
                        <p className="text-gray-600">Kongu Engineering College</p>
                        <p className="text-gray-500 text-sm">2018-2022 | CGPA: 8.56/10</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-coral-500 pl-4">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Programming Languages</h4>
                        <p className="text-gray-600">C, C++</p>
                        <h4 className="font-semibold text-gray-700 mb-2 mt-4">Software Tools</h4>
                        <p className="text-gray-600">MATLAB, Simulink, PLC (Ladder Logic)</p>
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-coral-500 pl-4">Coursework</h2>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Power Electronics</li>
                      <li>Electric Vehicles</li>
                      <li>Digital Electronics</li>
                      <li>Circuit Analysis</li>
                      <li>Control Systems</li>
                      <li>No-code Machine Learning</li>
                    </ul>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-coral-500 pl-4">Certifications</h2>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">MATLAB and Simulink Courses</h3>
                      <ul className="list-disc list-inside text-gray-600 mb-2">
                      <li>MATLAB Onramp</li>
                      <li>Simulink Onramp</li>
                      <li>Advanced MATLAB Programming Skills</li>
                      </ul>
                      <h3 className="font-semibold text-gray-700 mb-2">EV Courses</h3>
                      <ul className="list-disc list-inside text-gray-600 mb-2">
                      <li>EV Engineering Introductory Course</li>
                      <li>EV Engineering Intermediate Course</li>
                      <li>Electric Vehicle Operation and Diagnosis</li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-coral-500 pl-4">Experience</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-700">Final Year Project</h3>
                        <p className="text-gray-600 font-medium">Vehicle Theft Alert and Engine Lock System</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Pre-Final Year Project</h3>
                        <p className="text-gray-600 font-medium">Distribution Fault Identification and Protection using LabVIEW</p>
                        </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">In-Plant Training</h3>
                        <p className="text-gray-600">The Steel Authority of India Ltd (SAIL), Salem Steel Plant (SSP)</p>
                        </div>
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-coral-500 pl-4">Activities</h2>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-700">IET Member (2019-2022)</h3>
                        </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">English Proficiency Club Member (2018-2022)</h3>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
