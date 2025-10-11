"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterSection {
  title: string;
  links: { name: string; href: string }[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Site",
      links: [
        { name: "Main pages", href: "#" },
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Sitemap", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Management Team", href: "#" },
        { name: "Board of Directors", href: "#" },
        { name: "Investor Relations", href: "#" },
        { name: "Contact us", href: "#" },
      ],
    },
    {
      title: "Most popular tools",
      links: [
        { name: "Schedulr", href: "#" },
        { name: "VoicePro", href: "#" },
        { name: "VirtualReception", href: "#" },
        { name: "EasyBook", href: "#" },
        { name: "GlobalLingo", href: "#" },
        { name: "AI KnowledgeHub", href: "#" },
        { name: "OutReach", href: "#" },
        { name: "Lingu", href: "#" },
        { name: "CallMinder", href: "#" },
      ],
    },
    {
      title: "Most popular professional tools",
      links: [
        { name: "RetailChains", href: "#" },
        { name: "AccountingPro", href: "#" },
        { name: "DentistPro", href: "#" },
        { name: "E-ComControl", href: "#" },
        { name: "FranchisorControl", href: "#" },
        { name: "ImmigrationServices", href: "#" },
        { name: "GovernPro", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { name: "facebook", src: "https://tixae.ai/hubfs/facebook.svg" },
    { name: "x", src: "https://tixae.ai/hubfs/x.svg" },
    { name: "instagram", src: "https://tixae.ai/hubfs/insta.svg" },
    { name: "ball", src: "https://tixae.ai/hubfs/ball.svg" },
    { name: "pinterest", src: "https://tixae.ai/hubfs/pinterest.svg" },
    { name: "linkedin", src: "https://tixae.ai/hubfs/linkedin.svg" },
    { name: "twitch", src: "https://tixae.ai/hubfs/twitch.svg" },
    { name: "tiktok", src: "https://tixae.ai/hubfs/tiktok.svg" },
    { name: "viber", src: "https://tixae.ai/hubfs/viber.svg" },
    { name: "youtube", src: "https://tixae.ai/hubfs/yt-1.svg" },
    { name: "snapchat", src: "https://tixae.ai/hubfs/snap-1.svg" },
    { name: "reddit", src: "https://tixae.ai/hubfs/reddit.svg" },
  ];

  return (
    <footer className="bg-gradient-to-br from-tixae-black via-tixae-black to-tixae-dark-purple text-white py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 left-6 w-48 h-48 bg-tixae-bright-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-6 right-6 w-32 h-32 bg-tixae-peach rounded-full blur-3xl"></div>
      </div>

      <div className="container-brand relative">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="px-4 inline-block transform hover:scale-105 transition-transform duration-300">
            {" "}
            {/* Brand clearance space */}
            <Image
              src="https://tixae.ai/hubfs/header-logo-1.svg"
              alt="TIXAE.AI Logo"
              width={120}
              height={40}
              className="h-auto w-auto min-w-[40px] mx-auto mb-4 animate-pulse-soft brightness-0 invert" /* Minimum logo size per brand guidelines */
            />
          </div>
          <p className="text-base font-body tracking-brand text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Transforming business operations through intelligent AI solutions.
            Partner with us to drive innovation, efficiency, and growth across
            every industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-base font-heading font-semibold mb-4 text-white tracking-brand">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-tixae-bright-purple transition-colors duration-300 text-sm font-body tracking-brand"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-6">
          {socialIcons.map((icon, index) => (
            <Link
              key={index}
              href="#"
              className="hover:scale-110 transition-all duration-300"
            >
              <Image
                src={icon.src}
                alt={`${icon.name} social media`}
                width={24}
                height={24}
                className="filter brightness-75 hover:brightness-100 hover:contrast-150 transition-all duration-300"
              />
            </Link>
          ))}
        </div>

        <div className="text-center text-gray-400 text-xs border-t border-tixae-dark-purple pt-6 font-body tracking-brand">
          © 2025 Tixae.ai | Transforming Business Through Intelligent AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
