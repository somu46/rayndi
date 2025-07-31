import React from "react";
import { LuPhoneCall } from "react-icons/lu";

const Button = () => {

  const number= () => {
  // Get current UTC time
  const now = new Date();

  // IST is UTC +5:30
  const istOffset = 5.5 * 60; // in minutes
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + istOffset * 60000);

  const hours = istTime.getHours();

  // Check if time is between 7AM and 4PM IST
  if (hours >= 7 && hours < 16) {
    return 7890019347; // Example number for working hours
  } else {
    return 9123813528;
  }
};
 return (
    <div className="flex items-center justify-center">
        <a href={`tel:+91${number()}`} className="hidden md:block">
      <button
        className="relative flex items-center gap-2 px-6 py-4 w-[190px] text-[15    px] font-semibold text-[#7EB9EC] rounded-full border-[3px] border-double border-[rgba(74,61,255,0.75)] bg-gradient-to-r from-[#0E0F3A] to-[#310376] transition-all duration-300  hover:border-[#642BD7] hover:shadow-md hover:text-[18px]"
      >
        <LuPhoneCall className="h-5 w-5 text-[#74C0FC]" />
        {number()}
      </button>
        </a>
    </div>
  );
};

export default Button;
