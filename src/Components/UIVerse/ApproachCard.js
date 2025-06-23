import React from 'react';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const Card = ({ title, features, number, icon }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Ribbon with subtle shine */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs px-4 py-1 rounded-full shadow-lg flex items-center justify-center">
          {number}
          <span className="absolute w-3 h-3 bg-white/30 rounded-full -right-1 -top-1"></span>
          <span className="absolute w-1 h-1 bg-white rounded-full left-2 top-1"></span>
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 pt-10 pb-7">
        {/* Icon with gradient border */}
        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-white shadow-md border-4 border-transparent bg-clip-padding relative before:absolute before:inset-0 before:rounded-xl before:p-0.5 before:bg-gradient-to-br before:from-indigo-500 before:to-purple-600 before:-z-10">
          <div className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Bullet Points with animated checkmarks */}
        <ul className="space-y-3 text-left">
          {features.map((item, idx) => (
            <li 
              key={idx} 
              className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1"
            >
              <FiCheckCircle className="flex-shrink-0 text-purple-500 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-gray-600 text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* Subtle CTA at bottom with FiArrowRight */}
        <div className="mt-6 pt-4 border-t border-gray-100/50">
          <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center justify-center gap-1 mx-auto group/button">
            Learn more
            <FiArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/button:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;