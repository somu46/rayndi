import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTrendingUp, FiServer, FiBriefcase, FiTarget } from 'react-icons/fi';

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

const ServiceCard = ({ category, items, icon, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 }
    },
    hover: { scale: 1.03 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={variants}
      className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg overflow-hidden relative"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {category}
          </h3>
        </div>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li 
              key={i}
              whileHover={{ x: 5 }}
              className="flex items-start text-white/80 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5 text-blue-400 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-20 px-6 text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Services
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We craft <span className="text-blue-300">digital experiences</span> that transform businesses and delight users.
          </motion.p>
        </motion.section>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              category={service.category}
              items={service.items}
              icon={service.icon}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="py-20 px-6 text-center"
        >
          <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/5 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-blue-300">elevate</span> your digital presence?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Let's build something extraordinary together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;