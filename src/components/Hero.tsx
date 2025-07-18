
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'

function AnimatedFigure() {
  const { scene, animations } = useGLTF('/animated-fig.glb')
  const { actions } = useAnimations(animations, scene)

  React.useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play()
    }
  }, [actions, animations])

  return <primitive object={scene} />
}

export function Figure3D() {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight />
      <directionalLight position={[0, 5, 5]} />
      <AnimatedFigure />
      <OrbitControls />
    </Canvas>
  )
}

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ff6b6b' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ff9f9f',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }
    };

    // Check if particles.js is already loaded
    if (window.particlesJS) {
      loadParticles();
    } else {
      // Load particles.js script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = loadParticles;
      script.onerror = () => console.warn('Failed to load particles.js');
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div ref={particlesRef} id="particles-js" className="absolute inset-0 z-0"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-coral-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      
      {/* Content: Flex Row */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Left Side: Text */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">PRIYANKA S</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed animate-fade-in-delayed">
            An Electrical & Electronics Engineer passionate about 
            <span className="text-coral-500 font-semibold"> MATLAB</span>, 
            <span className="text-pink-500 font-semibold">Simulink</span>, 
            and <span className="text-purple-500 font-semibold">Circuit designs</span>.
          </p>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed animate-fade-in-delayed">
            I turn real ideas into working models and simulate smarter solutions with purpose and precision.
          </p>
        </div>
        {/* Right Side: Animated Figure */}
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/animated-fig.png"
            alt="Animated Figure"
            className="h-64 md:h-80 w-auto object-contain"
          />
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
