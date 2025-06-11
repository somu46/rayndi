import { NavLink } from "react-router-dom";
// import "./Navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { GiCrossMark ,GiTripleScratches } from "react-icons/gi";




const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e) => {
    
    setIsOpen(!isOpen);
    
  };

  return (
    <>
      <div className="flex flex-wrap w-auto h-auto shadow-md z-30 fixed top-0 left-0 right-0 bg-transparent bg-opacity-70  backdrop-blur-md">
        <nav className=" flex flex-wrap justify-between flex-row w-full  mx-5 my-1  text-lg ">
          
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -50, right: 110 }}
            className=" p-4 rounded-md cursor-pointer "
          >
            <NavLink
              to="/"
              className="text-3xl font-semibold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent"
            >
              Rayndi
            </NavLink>
          </motion.div>
          {/* Desktop Menu Bar */}
          <ul className="hidden lg:flex flex-wrap justify-center items-center mx-10 gap-x-4  font-bold p-1 bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
            <li className="cursor-pointer  hover:text-green-600">
              <NavLink
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-blue-600">
              <NavLink
                to="/about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                About
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-cyan-500">
              <NavLink
                to="/Company"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Company
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-cyan-500">
              <NavLink
                to="/Solutions"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Solutions
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-yellow-500">
              <NavLink
                to="/Services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Services
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-teal-600">
              <NavLink
                to="/work"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Work
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-teal-600">
              <NavLink
                to="/contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* mobile menu bar */}

          <div className="flex flex-wrap items-center justify-center p-1 lg:hidden ">
            <GiTripleScratches
              className={` ${
                !isOpen ? "block" : "hidden"
              } text-3xl  transition-transform duration-300 ease-in-out hover:translate-x-2.5 text-amber-400 `}
              onClick={handleToggle}
            />
            <GiCrossMark
              className={`${
                isOpen ? "block" : "hidden"
              } text-3xl  transition-transform duration-300 ease-in-out hover:translate-x-2.5 text-rose-500 `}
              onClick={handleToggle}
            />

            
          </div>
        </nav>

        {/* mobile menu bar */}
        <div
          className={`${isOpen ? "block" : "hidden"}
           lg:hidden w-[95%] min-h-svh flex justify-start py-4 shadow-lg bg-transparent border-r-2 rounded-md  z-50
           `}
        >
          <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
            
            <ul className=" flex flex-wrap flex-col justify-center gap-4 font-bold py-1 mx-3 bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
              <li className="cursor-pointer mx-1 hover:text-green-600  ">
                <NavLink
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={handleToggle}
                  className=""
                >
                  Home
                </NavLink>
                
              </li>
             
              <li className="cursor-pointer mx-1 hover:text-blue-600">
                <NavLink
                  to="/about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={handleToggle}
                >
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer mx-1 hover:text-cyan-500">
                <NavLink
                  to="/resume"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={handleToggle}
                >
                  Resume
                </NavLink>
              </li>
              <li className="cursor-pointer mx-1 hover:text-cyan-500">
              <NavLink
                to="/profile"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={handleToggle}
              >
                Profile
              </NavLink>
            </li>
              <li className="cursor-pointer mx-1 hover:text-yellow-500">
                <NavLink
                  to="/projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={handleToggle}
                >
                  Projects
                </NavLink>
              </li>
              <li className="cursor-pointer mx-1 hover:text-teal-600">
                <NavLink
                  to="/contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={handleToggle}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;