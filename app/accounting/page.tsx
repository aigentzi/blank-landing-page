"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ToolHeroSection,
  ToolDescriptionSection,
  ToolFeaturesSection,
  CapabilitiesSection,
  ToolSplitSection,
} from "../../components/tools";

// Features Data
const accountingFeatures = [
  {
    icon: "https://tixae.ai/hubfs/olko%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%201@1.5x-Nov-29-2024-03-22-36-9494-PM.png",
    title: "Increased Efficiency in Client Communication",
    features: [
      "AI tool answers calls instantly, providing clients with immediate responses to basic inquiries.",
      "24/7 availability ensures clients can get assistance with tax or accounting questions anytime.",
      "Automatically routes more complex queries to the appropriate accountants, saving time.",
    ],
  },
  {
    icon: "https://tixae.ai/hubfs/olko%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%203@1.5x-Nov-29-2024-02-46-21-8236-PM.png",
    title: "Knowledge of Accounts, Auditing, and Taxation",
    features: [
      "AI stays updated with the latest tax laws, regulations, and accounting standards.",
      "Provides accurate answers to tax-related and auditing questions, minimizing human error.",
      "Offers instant guidance on complex accounting scenarios, giving clients peace of mind.",
    ],
  },
  {
    icon: "https://tixae.ai/hubfs/olko%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%206@1.5x-1.png",
    title: "Cost Reduction and Profitability",
    features: [
      "Reduces the need for administrative staff by handling routine client communication.",
      "Frees up accountants to focus on more profitable, high-value tasks like financial advising.",
      "Automates tax filing reminders and invoice generation, streamlining back-office processes.",
    ],
  },
  {
    icon: "https://tixae.ai/hubfs/olko%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%204@1.5x-4.png",
    title: "Auditing and Financial Analysis",
    features: [
      "AI can analyze financial data quickly to identify discrepancies or potential audit risks.",
      "Automatically flags unusual patterns in transactions for closer review, enhancing accuracy.",
      "Provides data-driven insights to help clients optimize their financial strategies and performance.",
    ],
  },
  {
    icon: "https://tixae.ai/hubfs/olko%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%204@1.5x-1.png",
    title: "Better Client Experience",
    features: [
      "Clients receive timely, accurate responses, improving satisfaction and trust in the firm's services.",
      "AI can personalize interactions based on a client's financial history and needs.",
      "Offers transparency and real-time updates on tax filings, audits, or financial reports.",
    ],
  },
  {
    icon: "https://tixae.ai/hubfs/olko%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%206@1.5x-4.png",
    title: "Streamlined Document & Report Management",
    features: [
      "AI automates the generation, review, and filing of tax forms, financial statements, and audit reports.",
      "Reduces the risk of errors in manual data entry, ensuring compliance and accuracy.",
      "Speeds up document retrieval, making it easier to access past financial records or reports instantly.",
    ],
  },
];

// Capabilities Data
const capabilities = [
  {
    icon: "https://tixae.ai/hubfs/capabilities-icon-2.png",
    title: "Analyse your data",
    description:
      "Analyzing your data to identify tools that empower live and virtual agents, boosting problem-solving, productivity, and enhancing the overall customer experience with Tixae",
  },
  {
    icon: "https://tixae.ai/hubfs/capabilities-icon.png",
    title: "Train your Tixae.ai tool",
    description:
      "Employing your data to refine Tixae.ai models, enriching both agent and AI assistant efficiency for advanced problem resolution and customer service.",
  },
  {
    icon: "https://tixae.ai/hubfs/capabilities-3.png",
    title: "Continuous AI Optimization",
    description:
      "Tixae focuses on testing and optimizing machine learning for ever-improving accuracy and results in AI applications.",
  },
];

const AccountingPage: React.FC = () => {
  return (
    <div className="body-wrapper">
      <Header />

      <ToolHeroSection
        toolName="Accounting Pro"
        title="transforms your practice with streamlined AI automation"
        description="Streamline scheduling, taxes, audits, and staff management. Optimize operations with tax advice, ledger management, and audit readiness."
        heroImage="https://tixae.ai/hubfs/Accounting_Pro_Web_Page.png"
        heroImageAlt="Accounting Pro Web Page"
      />

      <ToolDescriptionSection
        toolName="Accounting Pro"
        description="Accounting Pro is an AI tool that transforms accounting and financial services. It provides 24/7 responses to client inquiries, routes complex questions, and automates tasks like tax reminders and invoices. With up-to-date knowledge of tax laws, it ensures accurate answers and compliance while reducing errors. Accounting Pro streamlines audits, flags risks, and delivers insights to optimize finances. By automating document management and improving client communication, it reduces costs, increases profitability, and enhances client satisfaction with personalized, transparent support."
      />

      <ToolFeaturesSection features={accountingFeatures} />

      <CapabilitiesSection capabilities={capabilities} />

      <ToolSplitSection
        title="Empowering organizations worldwide with tailored tools and platforms"
        description="TIXAE CORE combines modular AI technology with expert support for every unique situation."
        image="https://tixae.ai/hubfs/SPLIT-IMAGE.png"
        imageAlt="Split Image"
      />

      <Footer />
    </div>
  );
};

export default AccountingPage;
