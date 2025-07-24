import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const featuredFaqs = [
  {
    question: "Who should use our tech services?",
    answer: "Startups, SMEs, and large enterprises looking for high-quality web, app, cloud, and Data Analytics solutions tailored to their business goals."
  },
  {
    question: "What services do you offer?",
    answer: "We specialize in web development, mobile app development, cloud infrastructure setup, and DevOps automation to streamline your software lifecycle."
  }
];

const allFaqs = [
  ...featuredFaqs,
  {
    question: "Do you provide end-to-end web development?",
    answer: "Yes, we handle everything from UI/UX design and frontend/backend development to deployment and maintenance."
  },
  {
    question: "What cloud platforms do you work with?",
    answer: "We work with AWS, Microsoft Azure, and Google Cloud to deliver scalable and secure cloud solutions."
  },
  {
    question: "Can you help us implement DevOps?",
    answer: "Absolutely. We offer CI/CD pipeline setup, infrastructure as code, monitoring, and automation to streamline your development process."
  },
  {
    question: "Do you offer support after project delivery?",
    answer: "Yes, we provide ongoing maintenance, performance optimization, and support to ensure your product runs smoothly post-launch."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleGoToFAQPage = () => {
    console.log("Navigating to full FAQ page");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Flex container for desktop layout */}
      <div className="lg:flex lg:items-start lg:gap-12">
        {/* Left Section - Desktop left / Mobile top */}
        <div className="lg:w-1/3 lg:sticky lg:top-8 mb-8 lg:mb-0 ">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Frequently Asked Questions
                </span>
              </span>
            </h2>
            <p className="text-lg text-blue-100">
              Find answers to common questions about the Data + AI Summit
            </p>
          </div>
        </div>

        {/* Right Section - Desktop right / Mobile bottom */}
        <div className="lg:w-2/3">
          <div className="space-y-4">
            {(expanded ? allFaqs : featuredFaqs).map((faq, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden transition-all border border-white "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left group"
                >
                  <span className="text-lg md:text-xl font-medium text-white">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-full text-white bg-gray-700" >

                    {openIndex === index ? (
                      <FiChevronUp className="h-5 w-5" />
                    ) : (
                      <FiChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="px-6 pb-6 text-gray-300 text-start"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            {!expanded ? (
              <button 
                onClick={() => setExpanded(true)}
                className="flex items-center text-blue-400 hover:text-blue-300 font-medium px-4 py-2 rounded-lg transition-colors"
              >
                See all questions
                <FiChevronDown className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button 
                onClick={() => setExpanded(false)}
                className="flex items-center text-blue-400 hover:text-blue-300 font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Show fewer questions
                <FiChevronUp className="ml-2 h-5 w-5" />
              </button>
            )}
            
            <button 
              onClick={handleGoToFAQPage}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <span>Go to FAQ Page</span>
              <FiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;