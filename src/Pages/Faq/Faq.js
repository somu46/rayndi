import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Faqs from '../../Data/Faqs';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to your most common questions
          </p>
        </motion.div>

        {/* FAQ Items with Enhanced UI */}
        <div className="space-y-3">
          {Faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-gray-400 group-hover:text-blue-500 transition-all transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-blue-500' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-6 overflow-hidden"
              >
                <div className="pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Still need help?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Contact our support team.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqPage;