import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Button = () => {
  return (
    <div className="relative inline-block">
      <button className="
        relative
        inline-flex
        items-center
        justify-center
        gap-3
        px-7
        py-3.5
        bg-gradient-to-br
        from-gray-900
        to-gray-800
        border-2
        border-opacity-20
        border-white
        rounded-full
        text-white
        text-base
        font-semibold
        tracking-wide
        cursor-pointer
        overflow-hidden
        transition-all
        duration-400
        ease-in-out
        shadow-lg
        shadow-cyan-500/10
        backdrop-blur-md
        z-10
        hover:scale-105
        hover:shadow-xl
        hover:shadow-cyan-500/20
        group
      ">
        <a href='tel:+919123813528' className="flex items-center gap-2">
            <span>Contact Now</span>
        </a>
        
        <FiArrowRight className="
          w-5
          h-5
          text-cyan-400
          transition-transform
          duration-300
          ease-in-out
          group-hover:translate-x-1.5
        " />
        
        {/* Animated gradient border */}
        <span className="
          absolute
          -z-10
          inset-0
          rounded-full
          p-[2px]
          bg-gradient-to-r
          from-cyan-500
          via-purple-500
          to-cyan-500
          bg-[length:200%_200%]
          animate-[gradientBorder_4s_linear_infinite]
        ">
          <span className="
            absolute
            inset-0
            rounded-full
            bg-gray-900
            m-[2px]
          "></span>
        </span>
      </button>

      {/* Define the animation */}
      <style jsx>{`
        @keyframes gradientBorder {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Button;