import { Zap } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 animate-bounce">
          <Zap size={28} fill="black" />
         
        </div>
        <h1 className="font-syne  text-white font-bold text-4xl sm:text-5xl mb-5">
          About <span className="text-primary">SkyMart</span>
        </h1>
        <p className="text-white/40 font-body text-lg max-w-2xl mx-auto leading-relaxed">
          SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for
          everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
