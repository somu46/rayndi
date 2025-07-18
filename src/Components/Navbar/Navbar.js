import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { FiArrowRight } from "react-icons/fi";
import CallButton from "../UIVerse/CallButton";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Active link style
  const activeLink = "text-white ";
  const inactiveLink = "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-1 group";

  return (
    <div className="flex flex-wrap w-auto h-auto shadow-md z-30 fixed top-0 left-0 right-0 bg-transparent bg-opacity-70 backdrop-blur-xl">
      <nav className="flex flex-wrap justify-between flex-row w-full mx-5 my-1 text-lg">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -50, right: 110 }}
          className="p-4 rounded-md cursor-pointer"
        >
          <NavLink
            to="/"
            className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Rayndi
          </NavLink>
        </motion.div>

        {/* Desktop Menu Bar */}
        <ul className="hidden lg:flex flex-wrap justify-center items-center mx-10 gap-x-4 font-bold p-1">
          {[
            { path: "/", name: "Home", color: "hover:text-green-600" },
            { path: "/about", name: "About", color: "hover:text-blue-600" },
            { path: "/company", name: "Company", color: "hover:text-cyan-500" },
            { path: "/solutions", name: "Solutions", color: "hover:text-cyan-500" },
            { path: "/services", name: "Services", color: "hover:text-yellow-500" },
            { path: "/work", name: "Work", color: "hover:text-teal-600" },
            { path: "/contact", name: "Contact", color: "hover:text-teal-600" },
          ].map((item) => (
            <li key={item.path} className={`cursor-pointer mx-1 ${item.color}`}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  isActive ? activeLink : inactiveLink
                }
                
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {!isActive && (
                      <FiArrowRight className="text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
              
            </li>
          ))}
          <CallButton />
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex flex-wrap items-center justify-center p-1 lg:hidden">
          <CgMenuRight
            className={`${
              !isOpen ? "block" : "hidden"
            } text-4xl transition-transform duration-300 ease-in-out hover:translate-x-2.5 text-blue-400`}
            onClick={handleToggle}
          />
          <RxCross2
            className={`${
              isOpen ? "block" : "hidden"
            } text-4xl transition-transform duration-300 ease-in-out hover:translate-x-2.5 text-purple-400`}
            onClick={handleToggle}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden w-[100%] min-h-svh flex justify-center py-4 shadow-lg bg-transparent rounded-md z-50`}
      >
        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          <ul className="text-3xl items-center flex flex-col  gap-6 font-bold py-1">
            {[
              { path: "/", name: "Home", color: "hover:text-purple-500" },
              { path: "/about", name: "About", color: "hover:text-blue-500" },
              { path: "/company", name: "Company", color: "hover:text-cyan-500" },
              { path: "/solutions", name: "Solutions", color: "hover:text-cyan-500" },
              { path: "/services", name: "Services", color: "hover:text-yellow-500" },
              { path: "/work", name: "Work", color: "hover:text-teal-600" },
              { path: "/contact", name: "Contact", color: "hover:text-teal-600" },
            ].map((item) => (
            <li key={item.path} className={`cursor-pointer mx-1 ${item.color}`}>
  <NavLink
    to={item.path}
    onClick={handleToggle}
    className={({ isActive }) => 
      isActive ? activeLink : inactiveLink
    }
  >
    {({ isActive }) => (
      <>
        {item.name}
        {isActive ? (
          <FiArrowRight className="text-purple-400 opacity-0 inline-block" />
        ) : (
          <FiArrowRight className="text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        )}
      </>
    )}
  </NavLink>
  
</li>
            ))}
            <CallButton />
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default NavBar;