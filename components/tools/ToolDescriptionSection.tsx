import React from "react";

interface ToolDescriptionSectionProps {
  toolName: string;
  description: string;
}

const ToolDescriptionSection: React.FC<ToolDescriptionSectionProps> = ({
  toolName,
  description,
}) => (
  <section className="section-spacing bg-white">
    <div className="container-brand text-center">
      <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-tixae-black tracking-brand">
        What is {toolName}?
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
        {description}
      </p>
    </div>
  </section>
);

export default ToolDescriptionSection;
