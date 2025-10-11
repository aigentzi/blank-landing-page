import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, features }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-start mb-6">
      <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-xl font-heading font-semibold text-tixae-black">
        {title}
      </h3>
    </div>
    <p className="text-sm font-heading font-semibold text-tixae-bright-purple mb-4">
      Key features
    </p>
    <ul className="text-gray-700 space-y-3">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

export default FeatureCard;
