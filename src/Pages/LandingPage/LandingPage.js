import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck} from 'react-icons/fi';
import { GiSpaceship} from 'react-icons/gi';
import TechStack from '../../Components/TechStack/TechStack';
import IndustryStack from '../../Pages/Industry/Industry'
import FeedbackCard from '../../Components/UIVerse/FeedbackCard';
import Faqs from '../../Components/Faqs/Faqs';
import ExploreButton from '../../Components/UIVerse/ExploreButton';
import Team from '../../Assets/Team1.jpg'
import LogoCarousel from '../../Components/UIVerse/logoSlider';
import { CgMenuRight } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import './ThankYou'
import services from "../../Data/Services.js";
import features from "../../Data/Feature.js";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate('/thank-you', { state: { formData } });
  };
 


  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="flex flex-wrap w-auto h-auto shadow-md z-30 fixed top-0 left-0 right-0 bg-gray-600 bg-opacity-30 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rayndi</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 ">
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#industries" className="hover:text-blue-600 transition">Industries</a>
              <a href="#about" className="hover:text-blue-600 transition">About</a>
              <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
              <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
            </div>
            
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </div>
            
            {/* Mobile Menu Button */}
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
          </div>
          
          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-4 pb-4"
              onClick={handleToggle}
              
            >
              <a href="#services" className="block hover:text-blue-600 transition">Services</a>
              <a href="#industries" className="block hover:text-blue-600 transition">Industries</a>
              <a href="#about" className="block hover:text-blue-600 transition">About</a>
              <a href="#testimonials" className="block hover:text-blue-600 transition">Testimonials</a>
              <a href="#faq" className="block hover:text-blue-600 transition">FAQ</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full mt-2">
                Contact Us
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section with Lead Form */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              >
                Transform Your Business With <span className="text-blue-600">Digital Innovation</span>
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8">
                We deliver cutting-edge technology solutions that drive growth, efficiency, and competitive advantage for your business.
              </p>
              <div className="flex flex-row sm:flex-row gap-6 ">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex items-center justify-center">
                  Get Started <FiArrowRight className="ml-2" />
                </button>
                <button className="border border-white text-blue-500 px-8 py-3 rounded-full hover:bg-blue-50 transition flex items-center justify-center">
                  Bal <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
            {/* Lead Form */}
            <div className="lg:w-1/2 lg:pl-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border-white p-2 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Schedule a Free Consultation</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block mb-2">Company</label>
              <input 
                type="text" 
                id="company" 
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">How Can We Help?</label>
              <textarea 
                id="message" 
                rows="3"
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Request Consultation
            </button>
          </form>
        </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logo Slider - Infinite Loop */}
      <section className="py-12  overflow-hidden">
        <LogoCarousel/>
      </section>

      {/* Features Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">Why Choose Our Solutions</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </motion.div>
          
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="relative bg-slate-900 p-8 rounded-xl shadow-lg border border-blue-100 overflow-hidden group "
    >
      
      
      {/* Icon container with gradient border */}
      <div className="relative inline-flex justify-center items-center mb-6 ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-100 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-black text-blue-500 rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-sm group-hover:text-purple-600 transition-colors">
          {feature.icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
        {feature.title}
      </h3>
      
      <p className="text-gray-300 group-hover:text-gray-700 transition-colors">
        {feature.description}
      </p>
      
      {/* Animated underline */}
      <div className="mt-4">
        <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <motion.img 
                src={Team} 
                alt="Our Team" 
                className="rounded-xl shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Rayndi</h2>
              <p className="text-lg text-white mb-6">
                Founded in 2015, TechNova has been at the forefront of digital transformation, helping businesses of all sizes leverage technology to achieve their goals.
              </p>
              <p className="text-lg text-white mb-6">
                Our team of 150+ experts across 10 countries brings diverse perspectives and deep expertise to every project. We believe in building long-term partnerships with our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="">150+ successful projects delivered</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="">95% client retention rate</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="">ISO 27001 certified for information security</p>
                </div>
              </div>
              <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className="py-28 relative overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-bold mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400  animate-gradient-x">
          Our Services
        </span>
      </h2>
      <p className="text-xl text-white max-w-3xl mx-auto">
        Crafted solutions that transform your digital presence
      </p>
    </motion.div>

    {/* Services grid - Creative Card Design */}
    <div className="flex flex-wrap justify-center gap-10 ">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        hover: { duration: 0.3 }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group w-full sm:w-[calc(50%-40px)] lg:w-[calc(33.333%-40px)] min-w-[300px] max-w-[450px]"
    >
      {/* Card with creative border */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg -z-10"></div>
      
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg group-hover:shadow-xl transition-all duration-300">
        {/* Large floating icon with gradient background */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center mx-auto mt-8 mb-6">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {service.icon}
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-8 pt-0">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-center">{service.description}</p>
          
          {/* Animated underline link - centered */}
          <motion.div whileHover="hover" className="flex justify-center">
            <a href="/" className="relative text-blue-600 dark:text-blue-400 font-medium group">
              <ExploreButton/>
            </a>
          </motion.div>
          
          {/* Floating tags - appear on hover */}
          <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-wrap gap-2 justify-center">
              {service.tags?.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tagIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-blue-500 rounded-bl-3xl opacity-30"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-purple-500 rounded-tr-3xl opacity-30"></div>
      </div>
    </motion.div>
  ))}
</div>

    {/* CTA with animated gradient border */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center mt-20"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative inline-block"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse opacity-75 -z-10"></div>
        <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
          Start Your Project Today
          <span className="absolute -right-2 -top-2 w-5 h-5 bg-yellow-400 rounded-full animate-ping opacity-75"></span>
        </button>
      </motion.div>
    </motion.div>
  </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="">
        <IndustryStack/>
      </section>

      {/* Projects Section */}
      <section className="py-20 ">
        <h1 className='text-xl text-center'>Project Section</h1>
        <h2 className='text-red-500 text-center'>This Part is Under Progress</h2>
        <p className='text-center text-gray-500'>This section will showcase various projects and case studies.</p>
      </section>

      {/* Technology Stack */}
      <section className=" ">
        <TechStack/>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <FeedbackCard/>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20">
        <Faqs/>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get started with our solutions today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GiSpaceship className="text-2xl text-blue-400 mr-2" />
                <span className="text-xl font-bold text-white">Rayndi</span>
              </div>
              <p className="mb-4">Empowering businesses through innovative technology solutions.</p>
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="/" className="hover:text-white transition">{social}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service) => (
                  <li key={service.title}><a href="/" className="hover:text-white transition">{service.title}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                  <li key={item}><a href="/" className="hover:text-white transition">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>123 Tech Street, San Francisco</li>
                <li>hello@rayndi.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Rayndi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/" className="hover:text-white transition">Privacy Policy</a>
              <a href="/" className="hover:text-white transition">Terms of Service</a>
              <a href="/" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;