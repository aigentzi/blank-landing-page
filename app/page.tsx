"use client";

import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TabsSection from "../components/TabsSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TabsSection />

      {/* Demo Section */}
      <section
        id="demo-section"
        className="section-spacing bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-tixae-bright-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tixae-peach rounded-full blur-3xl"></div>
        </div>

        <div className="container-brand relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-tixae-black tracking-brand">
              See Tixae.ai in Action
            </h2>
            <p className="text-xl text-tixae-black mb-8 font-body tracking-brand leading-relaxed max-w-3xl mx-auto">
              Watch how our AI tools transform businesses across industries.
              From scheduling automation to intelligent analytics, see the power
              of Tixae.ai in real-world applications.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-tixae-dark-purple to-tixae-bright-purple">
                {/* Video Element */}
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="https://tixae.ai/hubfs/SPLIT-IMAGE.png"
                  preload="metadata"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  <source src="/demo-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                {/* Fallback Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M8 5V19L19 12L8 5Z"
                        fill="#6B46C1"
                        stroke="#6B46C1"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <TestimonialsSection />

      {/* Future Ready Section */}
      <section className="section-spacing bg-gradient-to-br from-tixae-light-purple to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-tixae-bright-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-tixae-peach rounded-full blur-3xl"></div>
        </div>

        <div className="container-brand relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <Image
                  src="https://tixae.ai/hubfs/SPLIT-IMAGE.png"
                  alt="Future-Ready AI Solutions"
                  width={500}
                  height={400}
                  className="w-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-tixae-bright-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tixae-bright-purple rounded-full animate-float opacity-60"></div>
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-tixae-peach rounded-full animate-float opacity-40"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-tixae-black tracking-brand leading-tight">
                Embrace Innovation.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tixae-bright-purple to-tixae-deep-purple">
                  Lead Your Industry.
                </span>
              </h2>
              <p className="text-xl text-tixae-black mb-10 font-body tracking-brand leading-relaxed">
                Tixae.ai delivers modular AI solutions paired with expert
                guidance, ensuring seamless integration and measurable results
                tailored to your unique business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="btn-primary cursor-pointer border-none text-base transform hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={() => window.open("#", "_blank")}
                >
                  Contact Us →
                </button>
                <Link
                  href="#demo-section"
                  className="btn-secondary cursor-pointer border-none text-base inline-block text-center"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
