import React from "react";
import { ChevronDown } from 'lucide-react';

<section className="min-h-screen flex items-center justify-center bg-white">
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto">
    {/* Left Side */}
    <div className="flex-1 flex items-center justify-center">
      <div className="border border-gray-300 p-8 rounded-lg bg-black text-white w-full max-w-md">
        <h1 className="text-5xl font-bold mb-4">Hi,</h1>
        <h2 className="text-3xl font-semibold mb-4">I'm <span className="text-pink-500">PRIYANKA S</span>.</h2>
        <p className="text-lg">
          An Electrical & Electronics Engineer passionate about
          <span className="text-coral-500 font-semibold"> MATLAB</span>,
          <span className="text-pink-500 font-semibold"> Simulink</span>, and
          <span className="text-purple-500 font-semibold"> circuit design</span>
        </p>
      </div>
    </div>
    {/* Divider */}
    <div className="hidden md:block w-px h-80 bg-gray-300 mx-8"></div>
    {/* Right Side */}
    <div className="flex-1 flex justify-center items-center">
      <img src="/animated-fig.png" alt="Animated Figure" className="w-72 h-72 object-contain" />
    </div>
  </div>
</section>