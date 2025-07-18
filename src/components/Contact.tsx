
import React from 'react';
import { Mail, Linkedin, Github, User } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-8 h-8" />,
      link: 'mailto:priyaselvaraj2431@gmail.com',
      color: 'from-red-500 to-red-600',
      description: 'priyaselvaraj2431@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8" />,
      link: 'https://www.linkedin.com/in/priyanka-s-4b27a531b',
      color: 'from-blue-500 to-blue-600',
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-8 h-8" />,
      link: 'https://github.com/Priyanka-S-2431',
      color: 'from-gray-700 to-gray-800',
      description: 'Check out my code repositories'
    },
    {
      name: 'Naukri',
      icon: <User className="w-8 h-8" />,
      link: 'https://www.naukri.com/mnjuser/profile',
      color: 'from-purple-500 to-purple-600',
      description: 'View my professional profile'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-coral-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-coral-500 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about technology and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactLinks.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                {contact.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-coral-500 transition-colors duration-300">
                {contact.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {contact.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-coral-500 text-sm font-semibold">Click to connect →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Conversation?</h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you have a project in mind, need technical consultation, or want to explore collaboration opportunities
            </p>
            <a
              href="mailto:priyaselvaraj2431@gmail.com"
              className="bg-white text-coral-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
