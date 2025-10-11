"use client";

import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-tixae-light-purple overflow-hidden">
      {/* Very subtle transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/40 to-transparent"></div>

      {/* Very subtle transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white/30"></div>

      <div className="max-w-6xl mx-auto px-8 xl:px-24 relative">
        <h2 className="text-center text-4xl font-heading font-bold mb-12 text-tixae-black tracking-brand max-w-4xl mx-auto">
          "Less Administration. More Innovation. Tixae.ai Empowers Your
          Success."
        </h2>

        <div className="relative text-center overflow-visible my-16">
          <div className="relative inline-block">
            <Image
              src="https://tixae.ai/hubfs/team-image.png"
              alt="Tixae.ai Professional Team"
              width={1000}
              height={600}
              className="rounded-2xl mx-auto shadow-2xl max-w-full h-auto border-4 border-white/50"
            />
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-tixae-bright-purple via-tixae-peach to-tixae-deep-purple rounded-2xl blur-lg opacity-20 -z-10"></div>
          </div>

          {/* Positioned testimonial blocks with optimal spacing around larger image */}

          {/* Top Left */}
          <div className="absolute top-16 -left-4 bg-white p-5 rounded-xl shadow-2xl max-w-64 text-sm hidden xl:block border border-tixae-light-purple transform -translate-x-3/4 drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-3 text-tixae-bright-purple text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-3">
              "Lingu.ai transformed our multilingual client communication.
              Professional translation with cultural sensitivity."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand font-medium">
              Mark Chen - Immigration Services
            </p>
            {/* Connecting dot */}
            <div className="absolute top-8 right-0 w-4 h-4 bg-tixae-bright-purple rounded-full transform translate-x-6 shadow-lg"></div>
          </div>

          {/* Top Right */}
          <div className="absolute top-16 -right-4 bg-white p-5 rounded-xl shadow-2xl max-w-64 text-sm hidden xl:block border border-tixae-light-purple transform translate-x-3/4 drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-3 text-tixae-peach text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-3">
              "OutReach.ai elevated our customer engagement strategy.
              Intelligent automation that feels genuinely personal."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand font-medium">
              Emma Watson - Customer Success
            </p>
            {/* Connecting dot */}
            <div className="absolute top-8 left-0 w-4 h-4 bg-tixae-peach rounded-full transform -translate-x-6 shadow-lg"></div>
          </div>

          {/* Mid Left */}
          <div className="absolute top-1/2 -left-4 bg-white p-5 rounded-xl shadow-2xl max-w-64 text-sm hidden xl:block border border-tixae-light-purple transform -translate-x-3/4 translate-y-16 drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-3 text-tixae-deep-purple text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-3">
              "EasyBook.ai streamlined our appointment system. Our clients love
              the seamless booking experience."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand font-medium">
              Steven Parker - Workshop Owner
            </p>
            {/* Connecting dot */}
            <div className="absolute top-8 right-0 w-4 h-4 bg-tixae-deep-purple rounded-full transform translate-x-6 shadow-lg"></div>
          </div>

          {/* Mid Right */}
          <div className="absolute top-1/2 -right-4 bg-white p-5 rounded-xl shadow-2xl max-w-64 text-sm hidden xl:block border border-tixae-light-purple transform translate-x-3/4 translate-y-12 drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-3 text-tixae-dark-purple text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-3">
              "VirtualReception.ai ensures every customer interaction reflects
              our commitment to excellence."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand font-medium">
              Tracy Johnson - Retail Manager
            </p>
            {/* Connecting dot */}
            <div className="absolute top-8 left-0 w-4 h-4 bg-tixae-dark-purple rounded-full transform -translate-x-6 shadow-lg"></div>
          </div>

          {/* Bottom Center */}
          <div className="absolute bottom-16 left-1/2 bg-white p-5 rounded-xl shadow-2xl max-w-64 text-sm hidden xl:block border border-tixae-light-purple transform -translate-x-1/2 translate-y-full drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-3 text-tixae-peach text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-3">
              "CallMinder.ai helps me stay connected with clients while focusing
              on quality craftsmanship."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand font-medium">
              Craig Wilson - Master Plumber
            </p>
            {/* Connecting dot */}
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-tixae-peach rounded-full transform -translate-x-1/2 -translate-y-6 shadow-lg"></div>
          </div>

          {/* Large screen version for better positioning */}
          <div className="hidden lg:block xl:hidden">
            {/* Simplified layout for large screens */}
            <div className="absolute -top-8 left-4 bg-white p-3 rounded-xl shadow-2xl max-w-48 text-sm border border-tixae-light-purple drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
              <div className="font-heading font-semibold mb-1 text-tixae-bright-purple text-xs">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-1 text-xs">
                "Lingu.ai transformed our communication."
              </p>
              <p className="text-xs text-tixae-dark-purple font-body tracking-brand">
                Mark Chen
              </p>
            </div>

            <div className="absolute -top-8 right-4 bg-white p-3 rounded-xl shadow-2xl max-w-48 text-sm border border-tixae-light-purple drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
              <div className="font-heading font-semibold mb-1 text-tixae-peach text-xs">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-1 text-xs">
                "OutReach.ai elevated our strategy."
              </p>
              <p className="text-xs text-tixae-dark-purple font-body tracking-brand">
                Emma Watson
              </p>
            </div>

            <div className="absolute -bottom-8 left-4 bg-white p-3 rounded-xl shadow-2xl max-w-48 text-sm border border-tixae-light-purple drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
              <div className="font-heading font-semibold mb-1 text-tixae-deep-purple text-xs">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-1 text-xs">
                "EasyBook.ai streamlined our system."
              </p>
              <p className="text-xs text-tixae-dark-purple font-body tracking-brand">
                Steven Parker
              </p>
            </div>
          </div>
        </div>

        {/* Mobile version - stacked testimonials */}
        <div className="lg:hidden grid grid-cols-1 gap-4 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-2xl text-sm border border-tixae-light-purple drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-1 text-tixae-bright-purple text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-2">
              "Lingu.ai transformed our multilingual client communication.
              Professional translation with cultural sensitivity."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand">
              Mark Chen - Immigration Services
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-2xl text-sm border border-tixae-light-purple drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-1 text-tixae-bright-purple text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-2">
              "OutReach.ai elevated our customer engagement strategy.
              Intelligent automation that feels genuinely personal."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand">
              Emma Watson - Customer Success
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-2xl text-sm border border-tixae-light-purple drop-shadow-lg hover:shadow-3xl transition-shadow duration-300">
            <div className="font-heading font-semibold mb-1 text-tixae-bright-purple text-xs">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body tracking-brand text-tixae-black leading-relaxed mb-2">
              "EasyBook.ai streamlined our appointment system. Our clients love
              the seamless booking experience."
            </p>
            <p className="text-xs text-tixae-dark-purple font-body tracking-brand">
              Steven Parker - Workshop Owner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
