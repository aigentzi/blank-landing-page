"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

interface ToolData {
  title: string;
  description: string;
  category: string;
  bgColor: string;
  icon: string;
  features: string[];
}

const ToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = [
    "All",
    "Business",
    "Healthcare",
    "Legal",
    "Creative",
    "Analytics",
    "Communication",
  ];

  const allTools: ToolData[] = [
    {
      title: "Schedulr.ai",
      description:
        "Intelligent scheduling automation that handles appointments, meetings, and resource allocation across any industry with smart conflict resolution.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-tixae-peach to-rose-400",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Smart Scheduling",
        "Conflict Resolution",
        "Multi-Platform Integration",
        "Automated Reminders",
      ],
    },
    {
      title: "Call Minder AI",
      description:
        "Advanced call management system with AI receptionist capabilities, call routing, and automated customer service for seamless communication.",
      category: "Communication",
      bgColor: "bg-gradient-to-br from-tixae-bright-purple to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "AI Receptionist",
        "Call Routing",
        "Voice Recognition",
        "24/7 Availability",
      ],
    },
    {
      title: "Legal Assistant AI",
      description:
        "Specialized AI for law firms with document analysis, case research, and legal writing assistance. Perfect for automating routine legal tasks.",
      category: "Legal",
      bgColor: "bg-gradient-to-br from-slate-600 to-gray-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Document Analysis",
        "Case Research",
        "Legal Writing",
        "Compliance Checking",
      ],
    },
    {
      title: "Dental Care Pro",
      description:
        "AI-powered patient management for dental clinics with appointment scheduling, treatment planning, and automated follow-ups.",
      category: "Healthcare",
      bgColor: "bg-gradient-to-br from-teal-500 to-cyan-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Patient Management",
        "Treatment Planning",
        "Appointment Scheduling",
        "Follow-up Automation",
      ],
    },
    {
      title: "Content Writer AI",
      description:
        "Intelligent content creation for blogs, marketing copy, and documentation with industry-specific knowledge and brand voice adaptation.",
      category: "Creative",
      bgColor: "bg-gradient-to-br from-violet-500 to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Blog Writing",
        "Marketing Copy",
        "Brand Voice",
        "SEO Optimization",
      ],
    },
    {
      title: "Analytics Engine",
      description:
        "Real-time data analysis and business intelligence platform that transforms raw data into actionable insights for informed decision-making.",
      category: "Analytics",
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Real-time Analytics",
        "Data Visualization",
        "Predictive Insights",
        "Custom Dashboards",
      ],
    },
    {
      title: "Accounting Pro",
      description:
        "Advanced financial management and bookkeeping automation with intelligent expense tracking and financial reporting.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Expense Tracking",
        "Financial Reporting",
        "Tax Automation",
        "Invoice Management",
      ],
    },
    {
      title: "Healthcare Hub",
      description:
        "Medical practice management with patient care coordination, electronic health records, and treatment optimization.",
      category: "Healthcare",
      bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Patient Records",
        "Care Coordination",
        "Treatment Plans",
        "Medical Analytics",
      ],
    },
    {
      title: "Marketing Analytics",
      description:
        "Campaign performance tracking and audience insights analysis with automated optimization and ROI measurement.",
      category: "Analytics",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Campaign Tracking",
        "Audience Insights",
        "ROI Analysis",
        "A/B Testing",
      ],
    },
    {
      title: "Project Manager",
      description:
        "Team collaboration and project tracking with milestone management, resource allocation, and progress monitoring.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Team Collaboration",
        "Milestone Tracking",
        "Resource Management",
        "Progress Reports",
      ],
    },
    {
      title: "Email Assistant",
      description:
        "Smart email management with automated responses, priority filtering, and intelligent categorization for improved productivity.",
      category: "Communication",
      bgColor: "bg-gradient-to-br from-slate-500 to-gray-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Auto Responses",
        "Priority Filtering",
        "Smart Categorization",
        "Follow-up Reminders",
      ],
    },
    {
      title: "Website Builder AI",
      description:
        "AI-powered website creation with automated design optimization, content generation, and responsive layouts.",
      category: "Creative",
      bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Auto Design",
        "Content Generation",
        "Responsive Layouts",
        "SEO Optimization",
      ],
    },
    {
      title: "Agriculture AI",
      description:
        "Smart farming solutions with crop monitoring, irrigation optimization, and predictive analytics for maximum yield.",
      category: "Analytics",
      bgColor: "bg-gradient-to-br from-green-600 to-lime-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Crop Monitoring",
        "Weather Analytics",
        "Yield Prediction",
        "Irrigation Control",
      ],
    },
    {
      title: "Manufacturing Pro",
      description:
        "Industrial automation and quality control with predictive maintenance and production optimization.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-gray-600 to-slate-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Quality Control",
        "Predictive Maintenance",
        "Production Tracking",
        "Safety Monitoring",
      ],
    },
    {
      title: "Retail Assistant",
      description:
        "Customer service automation and inventory management with personalized recommendations and sales analytics.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Customer Service",
        "Inventory Management",
        "Sales Analytics",
        "Personalization",
      ],
    },
    {
      title: "Transport Manager",
      description:
        "Fleet management and route optimization with real-time tracking and fuel efficiency monitoring.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Fleet Tracking",
        "Route Optimization",
        "Fuel Management",
        "Driver Analytics",
      ],
    },
    {
      title: "Education Hub",
      description:
        "Learning management system with personalized curricula, progress tracking, and intelligent tutoring.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-purple-600 to-violet-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Learning Management",
        "Progress Tracking",
        "AI Tutoring",
        "Content Creation",
      ],
    },
    {
      title: "Real Estate Pro",
      description:
        "Property management and market analysis with automated valuations and client relationship management.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-teal-600 to-cyan-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Property Valuation",
        "Market Analysis",
        "Client Management",
        "Lead Generation",
      ],
    },
    {
      title: "Security Monitor",
      description:
        "Advanced threat detection and cybersecurity monitoring with automated incident response.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-red-600 to-pink-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Threat Detection",
        "Incident Response",
        "Security Analytics",
        "Compliance Monitoring",
      ],
    },
    {
      title: "Restaurant Manager",
      description:
        "Food service optimization with menu planning, inventory control, and customer feedback analysis.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-amber-600 to-orange-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Menu Optimization",
        "Inventory Control",
        "Customer Analytics",
        "Staff Scheduling",
      ],
    },
    {
      title: "HR Assistant",
      description:
        "Human resources automation with talent acquisition, performance tracking, and employee engagement tools.",
      category: "Business",
      bgColor: "bg-gradient-to-br from-emerald-600 to-green-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Talent Acquisition",
        "Performance Tracking",
        "Employee Engagement",
        "Payroll Management",
      ],
    },
    {
      title: "Voice Analytics",
      description:
        "Speech recognition and sentiment analysis for call centers and customer service optimization.",
      category: "Communication",
      bgColor: "bg-gradient-to-br from-violet-600 to-purple-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Speech Recognition",
        "Sentiment Analysis",
        "Call Analytics",
        "Quality Scoring",
      ],
    },
    {
      title: "Social Media AI",
      description:
        "Social media management with automated posting, engagement tracking, and content optimization.",
      category: "Communication",
      bgColor: "bg-gradient-to-br from-pink-600 to-rose-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Auto Posting",
        "Engagement Analytics",
        "Content Optimization",
        "Trend Analysis",
      ],
    },
    {
      title: "Video Creator",
      description:
        "AI-powered video production with automated editing, caption generation, and multi-platform optimization.",
      category: "Creative",
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Auto Editing",
        "Caption Generation",
        "Multi-platform Export",
        "Stock Integration",
      ],
    },
    {
      title: "Image Generator",
      description:
        "AI art and image creation with style transfer, brand consistency, and commercial licensing.",
      category: "Creative",
      bgColor: "bg-gradient-to-br from-cyan-600 to-blue-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "AI Art Generation",
        "Style Transfer",
        "Brand Consistency",
        "Commercial License",
      ],
    },
    {
      title: "Music Composer",
      description:
        "AI music creation and audio editing with mood-based composition and royalty-free licensing.",
      category: "Creative",
      bgColor: "bg-gradient-to-br from-indigo-600 to-purple-700",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "AI Composition",
        "Mood-based Music",
        "Audio Editing",
        "Royalty-free License",
      ],
    },
    {
      title: "Medical Imaging",
      description:
        "Advanced medical image analysis with diagnostic assistance and treatment recommendation systems.",
      category: "Healthcare",
      bgColor: "bg-gradient-to-br from-blue-700 to-indigo-800",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
      features: [
        "Image Analysis",
        "Diagnostic Assistance",
        "Treatment Recommendations",
        "Report Generation",
      ],
    },
    {
      title: "Mental Health AI",
      description:
        "Mental wellness support with mood tracking, therapy assistance, and crisis intervention protocols.",
      category: "Healthcare",
      bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
      features: [
        "Mood Tracking",
        "Therapy Support",
        "Crisis Intervention",
        "Wellness Analytics",
      ],
    },
    {
      title: "Contract Analyzer",
      description:
        "Legal document review with risk assessment, clause extraction, and compliance verification.",
      category: "Legal",
      bgColor: "bg-gradient-to-br from-slate-700 to-gray-800",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
      features: [
        "Risk Assessment",
        "Clause Extraction",
        "Compliance Check",
        "Document Compare",
      ],
    },
  ];

  const filteredTools = allTools.filter((tool) => {
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tixae-dark-purple to-tixae-black section-spacing text-center">
        <div className="container-brand">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-brand text-white">
            AI Tools & Solutions
          </h1>
          <p className="text-xl mb-8 text-white font-body tracking-brand leading-relaxed max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered tools designed to
            transform your business operations, enhance productivity, and drive
            measurable results across every industry.
          </p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-brand">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full lg:w-1/3">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-tixae-bright-purple focus:outline-none transition-colors duration-300"
              />
              <svg
                className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-heading font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-tixae-bright-purple text-white shadow-lg"
                      : "bg-white text-tixae-black border-2 border-gray-200 hover:border-tixae-bright-purple hover:text-tixae-bright-purple"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 font-body">
              Showing {filteredTools.length} of {allTools.length} tools
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <div
                key={index}
                className={`${tool.bgColor} rounded-3xl p-8 text-white cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out shadow-2xl hover:shadow-3xl relative overflow-hidden group`}
                onClick={() => window.open("#", "_blank")}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl transform -translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-700"></div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-white border-opacity-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image src={tool.icon} alt="" width={36} height={36} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold tracking-brand">
                        {tool.title}
                      </h3>
                      <span className="text-white/80 text-sm font-body">
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed font-body text-white/95 text-base">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold mb-3 text-white/90">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-white/80 text-sm"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-white/60"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("#", "_blank");
                    }}
                    className="w-full bg-white/20 hover:bg-white text-current hover:text-tixae-black py-3 px-6 rounded-2xl font-heading font-semibold transition-all duration-300 border border-white/30 hover:border-white backdrop-blur-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-600 mb-2">
                No tools found
              </h3>
              <p className="text-gray-500 font-body">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tixae-light-purple to-white section-spacing text-center">
        <div className="container-brand">
          <h2 className="text-4xl font-heading font-bold mb-6 text-tixae-black tracking-brand">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-tixae-black mb-8 font-body tracking-brand leading-relaxed max-w-3xl mx-auto">
            Start with any of our AI tools or let us build a custom solution
            tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#demo-section"
              className="btn-primary cursor-pointer border-none text-base transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Watch Demo
            </Link>
            <button
              className="btn-secondary cursor-pointer border-none text-base"
              onClick={() => window.open("#", "_blank")}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsPage;
