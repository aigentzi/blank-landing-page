import React from "react";
import Image from "next/image";

interface ToolHeroSectionProps {
  toolName: string;
  title: string;
  pricingText?: string;
  description: string;
  buttonText?: string;
  heroImage: string;
  heroImageAlt: string;
}

const ToolHeroSection: React.FC<ToolHeroSectionProps> = ({
  toolName,
  title,
  pricingText = "Competitive Pricing",
  description,
  buttonText = "Let's get started →",
  heroImage,
  heroImageAlt,
}) => (
  <section className="section-spacing bg-gradient-to-br from-tixae-light-purple to-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-96 h-96 bg-tixae-bright-purple rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-tixae-peach rounded-full blur-3xl"></div>
    </div>

    <div className="container-brand relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 text-tixae-black tracking-brand leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tixae-bright-purple to-tixae-deep-purple">
              {toolName}
            </span>{" "}
            {title}
          </h1>
          <p className="text-xl text-tixae-bright-purple font-heading font-semibold mb-4">
            {pricingText}
          </p>
          <p className="text-xl text-tixae-black mb-10 font-body tracking-brand leading-relaxed">
            {description}
          </p>
          <button className="btn-primary cursor-pointer border-none text-base transform hover:scale-105 shadow-lg hover:shadow-xl">
            {buttonText}
          </button>
        </div>
        <div className="relative group">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            width={600}
            height={400}
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ToolHeroSection;
