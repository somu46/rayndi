import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF,  FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import { MdSend } from 'react-icons/md';
import { IoIosArrowUp } from "react-icons/io";


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
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-16 pb-8 px-4 border-t border-amber-400/20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start">
              {/* <img src={logo} alt="Rayndi Logo" className="w-48 h-auto mb-4" /> */}
              <p className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rayndi</p>
              <p className="text-slate-300 text-center md:text-left text-sm leading-relaxed">
                Transforming digital visions into reality with cutting-edge web development, 
                mobile applications, and strategic digital solutions.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="/" className="bg-slate-800 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="/" className="bg-slate-800 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaXTwitter className="text-lg" />
              </a>
              <a href="/" className="bg-slate-800 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram className="text-lg" />
              </a>
              <a href="/" className="bg-slate-800 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-amber-400 border-b border-amber-400/30 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about-us", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    onClick={handleScrollToTop}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-amber-400 border-b border-amber-400/30 pb-2">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Applications",
                "Admin Portals",
                "SEO & Marketing",
                "Tech Consultation"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="/" 
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-amber-400 border-b border-amber-400/30 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-amber-400 mt-1 flex-shrink-0" />
                <a href="mailto:contact@rayndi.com" className="text-slate-300 hover:text-amber-400 transition-colors">
                  contact@rayndi.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-amber-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-amber-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">123 Tech Street, San Francisco, CA</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-amber-400 border-b border-amber-400/30 pb-2 mb-4">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    className={`w-full bg-slate-800 border ${isValid ? 'border-slate-700 focus:border-amber-400' : 'border-red-500'} rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all`}
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button 
                    type="submit" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <MdSend className="text-lg" />
                  </button>
                </div>
                {!isValid && <p className="text-red-400 text-sm">Please enter a valid email</p>}
                {isSubscribed && (
                  <p className="text-green-400 text-sm animate-pulse">Thank you for subscribing!</p>
                )}
                <p className="text-slate-400 text-xs">
                  Subscribe to get updates on our latest projects and offers.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 3} Rayndi. All rights reserved.
            </p>
            <div className="flex space-x-6 ">
              <a href="/" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={handleScrollToTop}
          className="fixed bottom-20 right-6 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <IoIosArrowUp className='text-2xl'/>
        </button>
      </div>
    </footer>
  );
};

export default Footer;