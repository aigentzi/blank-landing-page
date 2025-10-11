"use client";

import React from "react";
import Image from "next/image";

interface TestimonialData {
  title: string;
  author: string;
  role: string;
  description: string;
  icon: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      title: "DentalPro",
      author: "Dr. Sarah M.",
      role: "Dental Practice Owner",
      description:
        "DentalPro has revolutionized our practice operations. The intelligent scheduling system seamlessly integrates with our workflow, automatically optimizing appointment bookings and reducing administrative overhead by 40%. Our patients appreciate the streamlined experience, and our team can focus on delivering exceptional care.",
      icon: "https://tixae.ai/hubfs/92-1.png",
      image: "https://tixae.ai/hubfs/dental.webp",
    },
    {
      title: "LawyerPro",
      author: "Attorney T.R.",
      role: "Criminal Defense Attorney",
      description:
        "Implementing LawyerPro has been transformative for our law firm, as its enhanced legal knowledge and compliance capabilities provide us with up-to-date insights on laws, regulations, and legal precedents. This has significantly reduced human error in delivering legal information.",
      icon: "https://tixae.ai/hubfs/110-1.png",
      image: "https://tixae.ai/hubfs/lawyer.webp",
    },
    {
      title: "E-ComControl",
      author: "Manager M.D.",
      role: "Warehouse Operations Manager",
      description:
        "Implementing E-ComControl has greatly enhanced our warehouse operations by streamlining efficiency and ensuring stock availability for high-demand products, which has boosted our sales potential. The AI tool identifies opportunities for premium pricing and discounts to maximize profits.",
      icon: "https://tixae.ai/hubfs/95-1.png",
      image: "https://tixae.ai/hubfs/ecomcontrol.webp",
    },
  ];

  const handleCardClick = () => {
    window.open("#", "_blank");
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    window.open("#", "_blank");
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-6 text-tixae-black tracking-brand max-w-4xl mx-auto">
            Industry-Specific AI Solutions Designed for Professional Excellence
          </h1>
          <p className="text-lg font-body text-tixae-black tracking-brand leading-relaxed max-w-3xl mx-auto">
            Discover how forward-thinking professionals leverage our specialized
            AI tools to transform their operations, enhance client
            relationships, and drive measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-50 hover:border-tixae-light-purple/50 group flex flex-col h-full"
              onClick={handleCardClick}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tixae-light-purple/30 rounded-xl flex items-center justify-center">
                  <Image
                    src={testimonial.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="flex-shrink-0"
                  />
                </div>
                <h1 className="text-xl font-heading font-bold text-tixae-black">
                  {testimonial.title}
                </h1>
              </div>

              <div className="relative mb-6 mx-auto w-64 h-64 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-64 lg:h-64 xl:w-80 xl:h-80">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.title}
                    width={520}
                    height={520}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex-grow flex flex-col">
                <p className="mb-6 leading-relaxed text-tixae-black/80 font-body flex-grow">
                  {testimonial.description}
                </p>

                <div className="mt-auto">
                  <div className="border-t border-tixae-light-purple/30 pt-4 mb-6">
                    <p className="font-heading font-bold text-tixae-black mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-tixae-black/60 text-sm font-body">
                      {testimonial.role}
                    </p>
                  </div>

                  <button
                    onClick={handleButtonClick}
                    className="btn-secondary w-full group-hover:transform group-hover:scale-105"
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
