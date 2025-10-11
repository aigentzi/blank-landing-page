"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface TabData {
  id: string;
  label: string;
}

interface ToolData {
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const tabs: TabData[] = [
    { id: "overview", label: "Latest products" },
    { id: "office", label: "Tools" },
    { id: "admin", label: "Most used" },
  ];

  const latestProducts: ToolData[] = [
    {
      title: "Schedulr.ai",
      description:
        "Streamline your schedule with intelligent automation. Our AI-powered scheduling assistant optimizes your time by seamlessly managing appointments and meetings, ensuring you focus on what matters most.",
      bgColor: "bg-gradient-to-br from-tixae-peach to-rose-400",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "VoicePro.ai",
      description:
        "Transform your workflow with hands-free efficiency. Our advanced voice assistant delivers instant information retrieval and intuitive task management, empowering you to work smarter.",
      bgColor: "bg-gradient-to-br from-tixae-dark-purple to-indigo-900",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "VirtualReception.ai",
      description:
        "Elevate client relationships with professional AI communication. Our intelligent call management solution ensures every interaction reflects your commitment to exceptional service.",
      bgColor: "bg-gradient-to-br from-tixae-bright-purple to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "SmartAnalytics.ai",
      description:
        "Unlock powerful insights with intelligent data analysis. Our AI-driven analytics platform transforms raw data into actionable business intelligence for informed decision-making.",
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "AutoWriter.ai",
      description:
        "Accelerate content creation with intelligent writing assistance. Our advanced AI generates compelling copy, emails, and documents while maintaining your unique voice and style.",
      bgColor: "bg-gradient-to-br from-violet-500 to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "TaskFlow.ai",
      description:
        "Optimize workflow management with intelligent task automation. Our AI coordinates team activities, tracks progress, and ensures seamless project delivery across all departments.",
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
  ];

  const allProducts: ToolData[] = [
    {
      title: "Accounting Pro",
      description: "Advanced financial management and bookkeeping automation.",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Agriculture AI",
      description:
        "Smart farming solutions with crop monitoring and yield prediction.",
      bgColor: "bg-gradient-to-br from-lime-500 to-green-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Automotive Suite",
      description:
        "Complete vehicle management and maintenance tracking system.",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Aqua Center Manager",
      description:
        "Comprehensive aquatic facility management and safety monitoring.",
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Airport Operations",
      description:
        "Intelligent airport management with passenger flow optimization.",
      bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Audit Assistant",
      description: "Automated compliance checking and risk assessment tools.",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Casino Analytics",
      description: "Gaming floor optimization and player behavior analysis.",
      bgColor: "bg-gradient-to-br from-red-500 to-rose-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Cinema Manager",
      description:
        "Theater operations with seating optimization and scheduling.",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Construction Planner",
      description:
        "Project management with resource allocation and timeline tracking.",
      bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Dental Care Pro",
      description:
        "Patient management with appointment scheduling and records.",
      bgColor: "bg-gradient-to-br from-teal-500 to-cyan-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Email Assistant",
      description:
        "Smart email management with automated responses and filtering.",
      bgColor: "bg-gradient-to-br from-slate-500 to-gray-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Finance Tracker",
      description:
        "Personal and business financial planning and analysis tools.",
      bgColor: "bg-gradient-to-br from-emerald-500 to-green-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Gym Management",
      description:
        "Fitness center operations with member tracking and equipment monitoring.",
      bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Healthcare Hub",
      description:
        "Medical practice management with patient care coordination.",
      bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Inventory Pro",
      description: "Advanced inventory management with predictive restocking.",
      bgColor: "bg-gradient-to-br from-violet-500 to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Legal Assistant",
      description: "Document management and legal research automation tools.",
      bgColor: "bg-gradient-to-br from-gray-500 to-slate-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Marketing Analytics",
      description:
        "Campaign performance tracking and audience insights analysis.",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Newsletter Pro",
      description: "Automated newsletter creation and distribution management.",
      bgColor: "bg-gradient-to-br from-amber-500 to-yellow-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Office Suite AI",
      description: "Complete office productivity with document automation.",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Project Manager",
      description:
        "Team collaboration and project tracking with milestone management.",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Quality Control",
      description: "Automated quality assurance and testing management system.",
      bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Restaurant Manager",
      description:
        "Complete restaurant operations with menu optimization and ordering.",
      bgColor: "bg-gradient-to-br from-red-500 to-orange-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Sales CRM",
      description:
        "Customer relationship management with sales pipeline tracking.",
      bgColor: "bg-gradient-to-br from-purple-500 to-violet-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Travel Planner",
      description:
        "Intelligent trip planning with booking management and itineraries.",
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Utilities Manager",
      description:
        "Smart utility monitoring and energy consumption optimization.",
      bgColor: "bg-gradient-to-br from-yellow-500 to-amber-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Video Analytics",
      description: "Video content analysis and automated editing tools.",
      bgColor: "bg-gradient-to-br from-rose-500 to-red-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Website Builder",
      description:
        "AI-powered website creation with automated design optimization.",
      bgColor: "bg-gradient-to-br from-teal-500 to-green-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Workflow Optimizer",
      description:
        "Business process automation and efficiency improvement tools.",
      bgColor: "bg-gradient-to-br from-slate-500 to-gray-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization and business intelligence platform.",
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Security Monitor",
      description: "Advanced security monitoring and threat detection system.",
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
  ];

  const mostUsedProducts: ToolData[] = [
    {
      title: "Schedulr.ai",
      description:
        "Streamline your schedule with intelligent automation. Our AI-powered scheduling assistant optimizes your time by seamlessly managing appointments and meetings, ensuring you focus on what matters most.",
      bgColor: "bg-gradient-to-br from-tixae-peach to-rose-400",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2070-3.png",
    },
    {
      title: "VoicePro.ai",
      description:
        "Transform your workflow with hands-free efficiency. Our advanced voice assistant delivers instant information retrieval and intuitive task management, empowering you to work smarter.",
      bgColor: "bg-gradient-to-br from-tixae-dark-purple to-indigo-900",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "VirtualReception.ai",
      description:
        "Elevate client relationships with professional AI communication. Our intelligent call management solution ensures every interaction reflects your commitment to exceptional service.",
      bgColor: "bg-gradient-to-br from-tixae-bright-purple to-purple-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2037-1.png",
    },
    {
      title: "Email Assistant",
      description:
        "Smart email management with automated responses and filtering.",
      bgColor: "bg-gradient-to-br from-slate-500 to-gray-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Project Manager",
      description:
        "Team collaboration and project tracking with milestone management.",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization and business intelligence platform.",
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: "https://tixae.ai/hubfs/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2075-2.png",
    },
  ];

  const handleCardClick = () => {
    window.open("#", "_blank");
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    window.open("#", "_blank");
  };

  const getCurrentProducts = (): ToolData[] => {
    switch (activeTab) {
      case "overview":
        return latestProducts;
      case "office":
        return allProducts;
      case "admin":
        return mostUsedProducts;
      default:
        return latestProducts;
    }
  };

  const getGridCols = (): string => {
    return activeTab === "office"
      ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
  };

  // Pagination logic
  const getItemsPerPage = (): number => {
    switch (activeTab) {
      case "office":
        return 10; // Show 10 tools per page for "All products"
      case "overview":
        return 6; // Show all 6 latest products
      case "admin":
        return 6; // Show all 6 most used products
      default:
        return 6;
    }
  };

  const currentProducts = getCurrentProducts();
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(currentProducts.length / itemsPerPage);
  const needsPagination = totalPages > 1;

  // Calculate current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = currentProducts.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="relative section-spacing bg-white overflow-hidden">
      {/* Very subtle transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-tixae-dark-purple/10 to-transparent"></div>

      {/* Very subtle transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-tixae-light-purple/25"></div>

      <div className="container-brand relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-6 text-tixae-black tracking-brand">
            25+ AI Solutions. Infinite Possibilities.
          </h2>
          <p className="text-lg text-tixae-black mb-8 font-body tracking-brand leading-relaxed max-w-3xl mx-auto">
            Reclaim your day with Tixae.ai's intelligent automation.
            <br />
            Streamline administrative tasks, optimize your workflow, and focus
            on strategic growth that drives real impact.
          </p>

          <div className="flex justify-center gap-5 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-6 rounded-xl font-heading font-medium transition-all duration-300 border-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  activeTab === tab.id
                    ? "bg-tixae-bright-purple text-white border-tixae-bright-purple shadow-tixae-bright-purple/25 hover:bg-white hover:text-tixae-bright-purple hover:shadow-xl"
                    : "bg-white text-tixae-black border-gray-200 hover:border-tixae-bright-purple hover:text-tixae-bright-purple hover:shadow-tixae-bright-purple/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fixed height content area */}
        <div className="relative">
          {/* Navigation arrows */}
          {needsPagination && (
            <>
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentPage === 1
                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                    : "text-tixae-bright-purple border-tixae-bright-purple hover:bg-tixae-bright-purple hover:text-white transform hover:scale-110"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentPage === totalPages
                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                    : "text-tixae-bright-purple border-tixae-bright-purple hover:bg-tixae-bright-purple hover:text-white transform hover:scale-110"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </>
          )}

          {/* Fixed height grid container */}
          <div className={`${getGridCols()} min-h-[600px]`}>
            {currentPageItems.map((tool, index) => (
              <div
                key={index}
                className={`${tool.bgColor} ${
                  activeTab === "office" ? "rounded-2xl p-6" : "rounded-3xl p-8"
                } text-white cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out shadow-2xl hover:shadow-3xl relative overflow-hidden group`}
                onClick={handleCardClick}
                style={{
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Enhanced background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl transform -translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div
                    className={`flex items-center gap-4 ${
                      activeTab === "office" ? "mb-4" : "mb-6"
                    }`}
                  >
                    <div
                      className={`${
                        activeTab === "office" ? "w-14 h-14" : "w-18 h-18"
                      } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Image
                        src={tool.icon}
                        alt=""
                        width={activeTab === "office" ? 72 : 72}
                        height={activeTab === "office" ? 72 : 72}
                      />
                    </div>
                    <h3
                      className={`${
                        activeTab === "office" ? "text-lg" : "text-xl"
                      } font-heading font-bold tracking-brand`}
                    >
                      {tool.title}
                    </h3>
                  </div>

                  <p
                    className={`${
                      activeTab === "office" ? "mb-4 text-sm" : "mb-8 text-base"
                    } leading-relaxed font-body text-white/95`}
                  >
                    {tool.description}
                  </p>

                  <button
                    onClick={handleButtonClick}
                    className={`bg-white hover:bg-white text-tixae-black hover:text-tixae-black ${
                      activeTab === "office" ? "py-2 px-4 text-sm" : "py-3 px-8"
                    } rounded-2xl font-heading font-semibold transition-all duration-300 border border-white/30 hover:border-white backdrop-blur-lg shadow-lg hover:shadow-xl transform hover:scale-105 group-hover:translate-y-0`}
                    style={{
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination indicators */}
        {needsPagination && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-full font-heading font-medium transition-all duration-300 ${
                      currentPage === page
                        ? "bg-tixae-bright-purple text-white shadow-lg"
                        : "bg-white text-tixae-black border-2 border-gray-200 hover:border-tixae-bright-purple hover:text-tixae-bright-purple"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <div className="text-sm text-gray-500 font-body">
              Page {currentPage} of {totalPages} ({currentProducts.length} total
              items)
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsSection;
