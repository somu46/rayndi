import React from 'react';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Card = ({ member }) => {
  return (
    <div className="w-[250px] h-[250px] bg-red-600 rounded-[32px] p-[3px] relative shadow-[0px_70px_30px_-50px_rgba(96,75,74,0.19)] transition-all duration-500 ease-in-out group hover:rounded-tl-[55px]">
      <div className="absolute w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] rounded-[29px] z-[1] overflow-hidden transition-all duration-500 ease-in-out delay-200 group-hover:w-[100px] group-hover:h-[100px] group-hover:top-[10px] group-hover:left-[10px] group-hover:rounded-full group-hover:z-[3] group-hover:border-[7px] border-blue-700 group-hover:shadow-[0px_5px_5px_0px_rgba(96,75,74,0.19)]">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full object-center transition-all duration-500 delay-500 group-hover:scale-100 group-hover:object-center"
        />
      </div>

      <div className=" absolute bottom-[3px] left-[3px] right-[3px] top-[80%] bg-blue-500 rounded-[29px] z-[2] shadow-inner transition-all duration-[500ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] group-hover:top-[20%] group-hover:rounded-[80px_29px_29px_29px] delay-200 overflow-hidden">
        <div className="absolute bottom-0 left-6 right-6 h-[140px] ">
          <span className="block text-white font-bold text-[1.2rem]">
            {member.name}
          </span>
          <span className="block text-white text-[0.9rem] mt-2">
            {member.role}
          </span>
        </div>

        <div className="absolute bottom-4 left-6 right-6 flex">
          <div className="flex gap-6 mx-auto">
            {member?.social?.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="h-5 text-white drop-shadow-[0_5px_5px_rgba(165,132,130,0.13)] hover:text-[#f55d56] hover:scale-[1.2] transition-transform duration-300" />
              </a>
            )}
            {member?.social?.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-5 text-white drop-shadow-[0_5px_5px_rgba(165,132,130,0.13)] hover:text-[#f55d56] hover:scale-[1.2] transition-transform duration-300" />
              </a>
            )}
            {member?.social?.github && (
              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-5 text-white drop-shadow-[0_5px_5px_rgba(165,132,130,0.13)] hover:text-[#f55d56] hover:scale-[1.2] transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
