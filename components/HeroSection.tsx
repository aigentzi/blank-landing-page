"use client";

import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-tixae-dark-purple via-tixae-dark-purple to-tixae-black section-spacing text-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-tixae-bright-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-tixae-peach rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tixae-bright-purple rounded-full blur-3xl"></div>
      </div>

      {/* Very subtle transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white opacity-15"></div>

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="animate-fade-in">
          <h1 className="text-6xl lg:text-7xl font-title font-bold mb-8 text-white tracking-brand leading-tight">
            Intelligent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tixae-bright-purple to-tixae-peach">
              AI Solutions
            </span>
            <br />
            for Modern Business
          </h1>
          <p className="text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed font-body max-w-4xl mx-auto">
            Partner with Tixae.ai to transform your operations through proven AI
            technology. Our comprehensive suite of intelligent tools streamlines
            processes, enhances customer experiences, and drives measurable
            growth across every aspect of your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/tools"
              className="bg-gradient-to-r from-tixae-bright-purple to-tixae-peach text-white py-5 px-10 rounded-xl font-title font-bold text-lg hover:shadow-2xl hover:shadow-tixae-bright-purple/30 transition-all duration-300 transform hover:scale-105"
            >
              Discover Our Solutions
            </Link>
            <Link
              href="#demo-section"
              className="border-2 border-white/30 text-white font-title font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-3 py-5 px-10 rounded-xl backdrop-blur-sm"
            >
              Watch Demo
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 2.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 9H3a1 1 0 110-2h9.586L7.293 2.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
