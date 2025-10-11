import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
  linkText = "Learn more",
  linkHref = "#",
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group flex flex-col h-full">
    <div className="w-20 h-20 mx-auto mb-6 transform group-hover:scale-105 transition-transform duration-300">
      <Image src={icon} alt={title} width={64} height={64} />
    </div>
    <h3 className="text-2xl font-heading font-semibold text-tixae-black mb-4">
      {title}
    </h3>
    <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
      {description}
    </p>
    <Link
      href={linkHref}
      className="text-tixae-bright-purple hover:text-tixae-deep-purple transition-colors font-medium mt-auto"
    >
      {linkText}
    </Link>
  </div>
);

export default CapabilityCard;
