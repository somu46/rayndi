import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Card = ({ project = {} }) => {
  const { image, title, tags, link, github, description } = project;

  return (
    <div className="w-[450px] h-[420px] perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-[20px] bg-[#1b233d] p-4 shadow-[rgba(100,100,111,0.2)_0px_7px_20px_0px] flex flex-col">
          {/* Image Area (Fixed Height) */}
          <div className="h-[200px] rounded-[15px] relative overflow-hidden mb-4">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-[15px]"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-cyan-700 to-cyan-300 rounded-[15px] flex items-center justify-center">
                <p className="text-white text-sm font-semibold">No Image</p>
              </div>
            )}

            {/* Rayndi label */}
            <div className="absolute top-0 left-6 z-10 ">
              <p className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-[18px] font-semibold">
                Rayndi
              </p>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 h-[30px] w-[130px] bg-[#1b233d] skew-x-[-40deg] rounded-br-[10px] shadow-[-10px_-10px_0_0_#1b233d]" />
            <div className="absolute top-[30px] left-0 w-[15px] h-[15px] bg-transparent rounded-tl-[15px] shadow-[-5px_-5px_0_2px_#1b233d]" />
          </div>

          {/* Title Area (Fixed Height) */}
          <div className="h-[30px] flex items-center justify-center mb-2">
            <span className="text-lg font-bold text-white tracking-[2px] truncate max-w-full">
              {title || "Untitled"}
            </span>
          </div>

          {/* Tags Area (Fixed Height) */}
          <div className="h-[30px] flex flex-wrap justify-center items-center gap-1 mb-3 overflow-hidden">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-[15px] px-2 py-0.5 bg-gray-700 text-white rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description Area (Flexible Height) */}
          <div className="flex-grow min-h-[40px] max-h-[100px] overflow-y-auto mb-2 text-center">
            <p className="text-[13px] text-white line-clamp-4">
              {description || "No description available"}
            </p>
          </div>

          {/* Links Area (Fixed Height) */}
          <div className="h-[50px] flex border-t border-[rgba(255,255,255,0.126)] pt-3">
            <div className="flex-1 flex flex-col items-center justify-center">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <FaLink className="text-white text-[20px] mb-1" />
                  <span className="text-white text-[15px]">Preview</span>
                </a>
              )}
            </div>
            <div className="border-x border-[rgba(255,255,255,0.126)]" />
            <div className="flex-1 flex flex-col items-center justify-center">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <FaGithub className="text-white text-[20px] mb-1" />
                  <span className="text-white text-[15px]">Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;