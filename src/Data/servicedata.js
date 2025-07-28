import React from "react";
import { FiCode, FiTrendingUp, FiServer, FiBriefcase, FiTarget } from "react-icons/fi";

const services = [
  {
    category: "Software & Web Development",
    icon: <FiCode className="w-8 h-8" />,
    items: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "E-commerce Development",
      "CMS Development",
      "API Development & Integration",
      "UI/UX Services",
      "Progressive Web Apps"
    ]
  },
  {
    category: "Digital Marketing & Branding",
    icon: <FiTrendingUp className="w-8 h-8" />,
    items: [
      "SEO Optimization",
      "Google Ads & PPC",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
      "Brand Identity Design",
      "Influencer Marketing",
      "Video Marketing"
    ]
  },
  {
    category: "Maintenance & Support",
    icon: <FiServer className="w-8 h-8" />,
    items: [
      "Website Maintenance",
      "App Maintenance",
      "24/7 Technical Support",
      "Bug Fixes & Patches",
      "Performance Optimization"
    ]
  },
  {
    category: "IT Consulting",
    icon: <FiBriefcase className="w-8 h-8" />,
    items: [
      "Technology Strategy",
      "Digital Transformation",
      "Business Automation",
      "ERP/CRM Solutions",
      "IT Audits",
      "Project Management"
    ]
  },
  {
    category: "Industry Solutions",
    icon: <FiTarget className="w-8 h-8" />,
    items: [
      "Healthcare IT",
      "EdTech Platforms",
      "Real Estate Systems",
      "Travel Platforms",
      "Food Delivery Software",
      "Supply Chain Software"
    ]
  }
];

export default services;