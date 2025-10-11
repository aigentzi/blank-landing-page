import React from "react";
import CapabilityCard from "./CapabilityCard";

interface Capability {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface CapabilitiesSectionProps {
  title?: string;
  capabilities: Capability[];
}

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  title = "Constantly see how Tixae is benefiting your business",
  capabilities,
}) => (
  <section className="section-spacing bg-white">
    <div className="container-brand">
      <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-12 text-tixae-black tracking-brand text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {capabilities.map((capability, index) => (
          <CapabilityCard
            key={index}
            icon={capability.icon}
            title={capability.title}
            description={capability.description}
            linkText={capability.linkText}
            linkHref={capability.linkHref}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
