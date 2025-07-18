
import React from 'react';
import { Code, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Stack text on top, cards at bottom */}
        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-6 max-w-2xl w-full">
            <div className="prose prose-lg">
              <p className="text-3xl mb-4">👋 Hi, and welcome to my digital space!</p>
              <p className="text-gray-600 leading-relaxed">
                I’m Priyanka S — an Electrical and Electronics Engineer with a curious mind, a calm heart, and a passion for solving real-world problems through technology.<br/>
                My journey began with a love for circuits, but it truly came alive when I discovered how tools like MATLAB and Simulink could simulate, visualize, and bring ideas to life. Whether it’s circuit analysis, modeling systems, or building secure and smart technology, I enjoy diving deep and creating a meaningful impact.<br/>
                These projects reflect not just what I’ve built — but how I’ve grown, how I learn, and how each experience has shaped the engineer I am becoming.
              </p>
              <p className="text-gray-800 mt-4 font-semibold">📌 Here, you’ll find:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Real projects that show my skills</li>
                <li>Stories of what I’ve learned</li>
                <li>A little bit of who I am beyond the code</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                I’m here to connect with fellow creators, engineers, and anyone passionate about technology with purpose. If that’s you, I hope we cross paths!
              </p>
            </div>
          </div>

          {/* Vertical stack of MATLAB and Simulink cards */}
          <div className="flex flex-col gap-6 w-full max-w-2xl mt-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">MATLAB</h3>
                <p className="text-gray-600">Advanced programming and computational analysis for complex engineering problems</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Simulink</h3>
                <p className="text-gray-600">Model-based design and simulation for dynamic systems and control applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
