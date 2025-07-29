import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF,  FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import { MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FaLink, FaCogs, FaNewspaper, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";


const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
      setIsValid(true);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    } else {
      setIsValid(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-20 pb-10 px-4 border-t border-amber-400/20 ">
  <div className="max-w-7xl mx-auto">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      
      {/* Brand Column */}
      <div className="space-y-7">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Rayndi
          </p>
          <p className="text-slate-300 text-center md:text-left text-sm leading-relaxed">
            Transforming digital visions into reality with cutting-edge web development, 
            mobile applications, and strategic digital solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center md:justify-start space-x-3"
        >
          {[
            { icon: <FaFacebookF className="text-lg" />, color: "hover:bg-blue-600" },
            { icon: <FaXTwitter className="text-lg" />, color: "hover:bg-black" },
            { icon: <FaInstagram className="text-lg" />, color: "hover:bg-pink-600" },
            { icon: <FaLinkedinIn className="text-lg" />, color: "hover:bg-blue-500" }
          ].map((social, index) => (
            <motion.a 
              key={index}
              whileHover={{ y: -3 }}
              href="/" 
              className={`bg-slate-800 ${social.color} text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent border-b border-amber-400/30 pb-2 flex items-center">
          <FaLink className="mr-2 text-white text-sm"  /> Quick Links
        </h3>
        <ul className="space-y-3">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/solutions", label: "Solutions" },
            { path: "/industries", label: "Industries" },
            { path:"/company", label: "Company" },
            { path: "/services", label: "Services" },
            { path: "/work", label: "Portfolio" },
            { path: "/contact", label: "Contact" }
          ].map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to={link.path} 
                onClick={handleScrollToTop}
                className="text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all flex items-center group"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {link.label}
                <FaChevronRight className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Services */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent border-b border-amber-400/30 pb-2 flex items-center">
          <FaCogs className="mr-2 text-sm text-white" /> Our Services
        </h3>
        <ul className="space-y-3">
          {[
            { path: "/", label: "Web Development" },
            { path: "/", label: "App development" },
            { path: "/", label: "Digital Marketing" },
            { path: "/", label: "Business Analytics" },
            
          ].map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to={link.path} 
                onClick={handleScrollToTop}
                className="text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all flex items-center group"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {link.label}
                <FaChevronRight className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Contact & Newsletter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent border-b border-amber-400/30 pb-2 flex items-center">
          <FaEnvelope className="mr-2 text-sm text-white" /> Contact Us
        </h3>
        <div className="space-y-4">
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-start space-x-3"
          >
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-1 rounded-full">
              <FaEnvelope className="text-white text-xs" />
            </div>
            <a href="mailto:contact@rayndi.com" className="text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all">
              contact@rayndi.com
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-center space-x-3"
          >
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-1 rounded-full">
              <FaPhoneAlt className="text-white text-xs" />
            </div>
            <a href="tel:+919123813528" className="text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all">
              +91 91238 13528
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-start space-x-3"
          >
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-1 rounded-full">
              <FaMapMarkerAlt className="text-white text-xs" />
            </div>
            <span className="text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all">
              123 Tech Street, San Francisco, CA
            </span>
          </motion.div>
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent border-b border-amber-400/30 pb-2 mb-4 flex items-center">
            <FaNewspaper className="mr-2 text-sm text-white" /> Newsletter
          </h3>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              <input
                type="email"
                className={`w-full bg-slate-800 border ${isValid ? 'border-slate-700 focus:border-purple-400' : 'border-red-500'} rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all`}
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white p-2 rounded-lg transition-all shadow-md"
              >
                <MdSend className="text-lg" />
              </motion.button>
            </motion.div>
            {!isValid && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm"
              >
                Please enter a valid email
              </motion.p>
            )}
            {isSubscribed && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm"
              >
                Thank you for subscribing!
              </motion.p>
            )}
            <p className="text-slate-400 text-xs">
              Subscribe to get updates on our latest projects and offers.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
    {/* CTA */}
    <div className='border-t border-slate-800 py-8'>
      <div className='text-center'>
      <h1 className='text-4xl font-bold'>
        Have Questions? <span className='text-blue-400'>We can Talk</span> 
      </h1>
      <button className='bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white px-6 py-3 rounded-lg mt-4 transition-all'>
        <Link to="/contact" onClick={handleScrollToTop}>
          Contact Us
        </Link>
      </button>
      </div>
    </div>
    {/* Footer Bottom */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-t border-slate-800 pt-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 3} Rayndi. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
  <motion.a
    whileHover={{ y: -2 }}
    href="/"
    className="text-sm text-slate-400 transition-all hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-transparent hover:bg-clip-text"
  >
    Privacy Policy
  </motion.a>

  <motion.a
    whileHover={{ y: -2 }}
    href="/terms-and-conditions"
    className="text-sm text-slate-400 transition-all hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-transparent hover:bg-clip-text"
  >
    Terms of Service
  </motion.a>

  <motion.a
    whileHover={{ y: -2 }}
    href="/"
    className="text-sm text-slate-400 transition-all hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-transparent hover:bg-clip-text"
  >
    Cookies
  </motion.a>
</div>

      </div>
    </motion.div>

    {/* Back to Top Button */}
    <motion.button 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white p-3 rounded-full shadow-xl transition-all transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Back to top"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IoIosArrowUp className='text-xl'/>
    </motion.button>
  </div>
</footer>
  );
};

export default Footer;