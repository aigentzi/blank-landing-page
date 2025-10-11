"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropdownItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const agentItems: DropdownItem[] = [
    { name: "Call Minder", href: "#" },
    { name: "Customer Service", href: "#" },
    { name: "Bookings", href: "#" },
    { name: "Multi-Language", href: "#" },
    { name: "Outreach AI", href: "#" },
    { name: "Receptionist", href: "#" },
    { name: "Scheduler", href: "#" },
    { name: "Webstore", href: "#" },
    { name: "Website", href: "#" },
  ];

  const toolItems: DropdownItem[] = [
    { name: "Accounting", href: "#" },
    { name: "Agriculture", href: "#" },
    { name: "Automotive", href: "#" },
    { name: "Aqua Center", href: "#" },
    { name: "Airports", href: "#" },
    { name: "Auditing", href: "#" },
    { name: "Casino", href: "#" },
    { name: "Cinemas & Theaters", href: "#" },
    { name: "Construction", href: "#" },
    { name: "Dental Care", href: "#" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md py-6 shadow-lg sticky top-0 z-50 border-b border-tixae-light-purple/30">
      <div className="container-brand">
        <div className="flex justify-between items-center w-full">
          {/* Left side */}
          <div className="flex items-center gap-12">
            <div className="flex-shrink-0 px-4">
              {" "}
              {/* Brand clearance space */}
              <Link
                href="/"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="https://tixae.ai/hubfs/header-logo-1.svg"
                  alt="TIXAE Logo"
                  width={140}
                  height={45}
                  className="h-auto w-auto min-w-[40px]" /* Minimum logo size per brand guidelines */
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link
                href="#"
                className="text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tixae-bright-purple after:transition-all after:duration-300 hover:after:w-full py-2 text-base leading-normal"
              >
                About
              </Link>

              {/* AI Agents Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAgentsOpen(true)}
                onMouseLeave={() => setIsAgentsOpen(false)}
              >
                <button className="flex items-center gap-2 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tixae-bright-purple after:transition-all after:duration-300 hover:after:w-full py-2 text-base leading-normal">
                  AI Agents
                  <Image
                    src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/hedaer-arrow.svg"
                    alt=""
                    width={12}
                    height={8}
                  />
                </button>
                {isAgentsOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-5 min-w-[200px] z-50">
                    {agentItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="dropdown-item"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* AI Tools Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsToolsOpen(true)}
                onMouseLeave={() => setIsToolsOpen(false)}
              >
                <button className="flex items-center gap-2 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tixae-bright-purple after:transition-all after:duration-300 hover:after:w-full py-2 text-base leading-normal">
                  AI Tools
                  <Image
                    src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/hedaer-arrow.svg"
                    alt=""
                    width={12}
                    height={8}
                  />
                </button>
                {isToolsOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-5 min-w-[200px] z-50">
                    {toolItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="dropdown-item"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Desktop Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="#"
              className="flex items-center gap-2 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-all duration-300 py-2 text-base leading-normal"
            >
              <Image
                src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon2.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Contact Sales</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-all duration-300 py-2 text-base leading-normal"
            >
              <Image
                src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/icons8-dev-48.png"
                alt=""
                width={20}
                height={20}
              />
              <span>For Developers</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-all duration-300 py-2 text-base leading-normal"
            >
              <Image
                src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon3.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Funding</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-all duration-300 py-2 text-base leading-normal"
            >
              <Image
                src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>English</span>
              <Image
                src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/hedaer-arrow.svg"
                alt=""
                width={12}
                height={8}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-tixae-black hover:text-tixae-bright-purple transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu (Phone) - Expandable within header */}
            <div className="sm:hidden mt-6 border-t border-tixae-light-purple/30 pt-6 max-h-[70vh] overflow-y-auto">
              <nav className="flex flex-col space-y-6 pb-6">
                <Link
                  href="#"
                  className="block text-tixae-black font-title font-semibold text-lg hover:text-tixae-bright-purple transition-colors duration-300 py-3 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                {/* Mobile AI Agents */}
                <div className="space-y-3">
                  <h3 className="text-tixae-black font-title font-semibold text-lg mb-3 text-tixae-bright-purple">
                    AI Agents
                  </h3>
                  <div className="grid grid-cols-1 gap-1 pl-4 border-l-2 border-tixae-light-purple/30">
                    {agentItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-3 text-base active:bg-gray-50 rounded-lg px-3 -mx-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile AI Tools */}
                <div className="space-y-3">
                  <h3 className="text-tixae-black font-title font-semibold text-lg mb-3 text-tixae-bright-purple">
                    AI Tools
                  </h3>
                  <div className="grid grid-cols-1 gap-1 pl-4 border-l-2 border-tixae-light-purple/30">
                    {toolItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-3 text-base active:bg-gray-50 rounded-lg px-3 -mx-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Right Side Links */}
                <div className="border-t border-gray-200 pt-6 space-y-1">
                  <h3 className="text-tixae-black font-title font-semibold text-lg mb-4 text-tixae-bright-purple">
                    Quick Links
                  </h3>

                  <Link
                    href="#"
                    className="flex items-center gap-4 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-colors duration-300 py-4 active:bg-gray-50 rounded-lg px-3 -mx-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon2.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span className="text-base">Contact Sales</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-colors duration-300 py-4 active:bg-gray-50 rounded-lg px-3 -mx-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/icons8-dev-48.png"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span className="text-base">For Developers</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-colors duration-300 py-4 active:bg-gray-50 rounded-lg px-3 -mx-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon3.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span className="text-base">Funding</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-colors duration-300 py-4 active:bg-gray-50 rounded-lg px-3 -mx-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span className="text-base">English</span>
                  </Link>
                </div>
              </nav>
            </div>

            {/* Tablet Menu (Tablet) - Compact dropdown */}
            <div className="hidden sm:block lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-tixae-light-purple/30 z-50">
              <div className="container-brand py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* About & Main Links */}
                  <div className="space-y-4">
                    <Link
                      href="#"
                      className="block text-tixae-black font-title font-medium hover:text-tixae-bright-purple transition-colors duration-300 py-2 text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>

                    <div className="space-y-2">
                      <Link
                        href="#"
                        className="flex items-center gap-2 text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Image
                          src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon2.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <span>Contact Sales</span>
                      </Link>

                      <Link
                        href="#"
                        className="flex items-center gap-2 text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Image
                          src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/icons8-dev-48.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <span>For Developers</span>
                      </Link>

                      <Link
                        href="#"
                        className="flex items-center gap-2 text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Image
                          src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon3.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <span>Funding</span>
                      </Link>

                      <Link
                        href="#"
                        className="flex items-center gap-2 text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Image
                          src="https://tixae.ai/hubfs/raw_assets/public/tixae-2-theme/images/default/header-dropdown-icon.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <span>English</span>
                      </Link>
                    </div>
                  </div>

                  {/* AI Agents */}
                  <div>
                    <h4 className="text-tixae-black font-title font-semibold text-lg mb-3">
                      AI Agents
                    </h4>
                    <div className="space-y-1">
                      {agentItems.slice(0, 6).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                      {agentItems.length > 6 && (
                        <span className="text-tixae-black/60 text-xs">
                          +{agentItems.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* AI Tools */}
                  <div>
                    <h4 className="text-tixae-black font-title font-semibold text-lg mb-3">
                      AI Tools
                    </h4>
                    <div className="space-y-1">
                      {toolItems.slice(0, 6).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-tixae-black/80 hover:text-tixae-bright-purple transition-colors duration-300 py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                      {toolItems.length > 6 && (
                        <span className="text-tixae-black/60 text-xs">
                          +{toolItems.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
