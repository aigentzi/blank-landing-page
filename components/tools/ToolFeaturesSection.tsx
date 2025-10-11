import React from "react";
import FeatureCard from "./FeatureCard";

interface Feature {
  icon: string;
  title: string;
  features: string[];
}

interface ToolFeaturesSectionProps {
  features: Feature[];
  buttonText?: string;
}

const ToolFeaturesSection: React.FC<ToolFeaturesSectionProps> = ({
  features,
  buttonText = "Let's get started",
}) => (
  <section className="section-spacing bg-tixae-light-purple">
    <div className="container-brand">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            features={feature.features}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="btn-primary cursor-pointer border-none text-base transform hover:scale-105 shadow-lg hover:shadow-xl">
          {buttonText}
        </button>
      </div>
    </div>
  </section>
);

export default ToolFeaturesSection;
