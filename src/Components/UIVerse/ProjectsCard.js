import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Card = ({ project = {} }) => {
  const { image, title, tags, link, github, description } = project;

  return (
    <div className="w-[280px] h-[360px] perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-[20px] bg-[#1b233d] p-[5px] shadow-[rgba(100,100,111,0.2)_0px_7px_20px_0px]">
          <div className="h-[150px] rounded-[15px] relative overflow-hidden">
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
            <div className="absolute top-2 left-3 z-10">
              <p className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold">
                Rayndi
              </p>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 h-[30px] w-[130px] bg-[#1b233d] skew-x-[-40deg] rounded-br-[10px] shadow-[-10px_-10px_0_0_#1b233d]" />
            <div className="absolute top-[30px] left-0 w-[15px] h-[15px] bg-transparent rounded-tl-[15px] shadow-[-5px_-5px_0_2px_#1b233d]" />
          </div>

          <div className="mt-[15px] px-[5px] py-[10px]">
            <span className="block text-[17px] font-bold text-white text-center tracking-[2px]">
              {title || "Untitled"}
            </span>

            <div className="flex flex-wrap justify-center mt-2 gap-1">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-[12px] px-2 py-0.5 bg-gray-700 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-[20px]">
              <div className="flex-1 text-center px-[5px] text-[rgba(170,222,243,0.721)]">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <FaLink className="text-white font-bold text-[12px]" />
                    <span className="text-[9px]">Preview</span>
                  </a>
                )}
              </div>
              <div className="border-x border-[rgba(255,255,255,0.126)]" />
              <div className="flex-1 text-center px-[5px] text-[rgba(170,222,243,0.721)]">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <FaGithub className="text-white" />
                    <span className="text-[9px]">Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-[20px] bg-[#1b233d] p-6 backface-hidden rotate-y-180 flex items-center justify-center text-center text-white text-sm">
          {description || "No description provided."}
        </div>
      </div>
    </div>
  );
};

export default Card;
