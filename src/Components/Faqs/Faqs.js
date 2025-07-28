import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Faqs from '../../Data/Faqs';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const navigate = useNavigate();

  const featuredFaqs = Faqs.slice(0, 2); // Adjust this if you want to show more featured FAQs
  const allFaqs = Faqs; // Use the full list of FAQs
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleGoToFAQPage = () => {
    navigate('/faqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <div className="lg:flex lg:items-start lg:gap-12 sm:px-40 px-4">
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
  );
};

export default FAQSection;