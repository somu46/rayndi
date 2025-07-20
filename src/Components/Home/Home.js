import { motion } from "framer-motion";
import {  FiGlobe, FiUsers, FiAward, FiLayers,FiArrowRight } from "react-icons/fi";
import OurProcess from '../../Components/UIVerse/OurProcess'
import LogoSlider from "../UIVerse/logoSlider";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCloud } from 'react-icons/fa';
import ExploreButton from '../UIVerse/ExploreButton';
import { FaChevronDown, FaStar } from 'react-icons/fa';
import TechStack from '../../Components/TechStack/TechStack';
import FAQSection from '../../Components/Faqs/Faqs';

const HomePage = () => {
  // Features data
  const features = [
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Full-Service Solutions",
      description: "End-to-end development from concept to deployment"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Expert Team",
      description: "Seasoned professionals with diverse tech expertise"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Proven Results",
      description: "Award-winning projects with measurable impact"
    }
  ];

  // Services preview


const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications",
    icon: <FaLaptopCode className="w-10 h-10 text-purple-400" />
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android development",
    icon: <FaMobileAlt className="w-10 h-10 text-purple-400" />
  },
  {
    title: "UI/UX Design",
    description: "User-centered interfaces",
    icon: <FaPaintBrush className="w-10 h-10 text-purple-400" />
  },
  {
    title: "Cloud Solutions",
    description: "Scalable infrastructure",
    icon: <FaCloud className="w-10 h-10 text-purple-400" />
  }
];



  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
    <section className="relative overflow-hidden text-white min-h-screen flex items-center justify-center pb-20">
      {/* Particle Background with improved animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Floating gradient blobs with improved motion */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-blue-700/20 to-purple-700/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 60, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 -right-20 w-72 h-72 bg-gradient-to-br from-purple-700/20 to-pink-700/20 rounded-full blur-3xl"
      />

      {/* Content container */}
      <div className="container mx-auto px-2 py-2 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-blue-300 mb-4 font-medium"
            >
              Digital Transformation Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Next-Gen Solutions
              </span>{' '}
              <br />
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                That <span className="text-purple-300">Accelerate</span>
              </motion.span>{' '}
              Your Business
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-blue-100 mb-10 max-w-lg leading-relaxed"
            >
              We craft immersive digital experiences that drive engagement, conversion, and growth. Our full-service approach delivers measurable results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-row gap-2"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-4 py-4 rounded-full font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex items-center gap-4"
              >
                <span>Explore Our Work</span>
                <FiArrowRight className="text-blue-400 text-xl transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-blue-300">250+</div>
                <div className="text-blue-100">Successful Projects</div>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <div className="text-blue-100">4.9/5 (120+ Reviews)</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D device mockup with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -15 }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* 3D floating effect */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0],
                  rotateX: [0, 3, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative h-96 w-full"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Device frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden border border-slate-700/50 shadow-lg">
                  {/* Device chrome */}
                  <div className="p-3 flex items-center justify-between bg-slate-800 border-b border-slate-700/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-300">rayndi.com</div>
                    <div className="w-6"></div>
                  </div>
                  
                  {/* Screen content */}
                  <div className="h-full flex flex-col items-center justify-center p-6">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="text-6xl mb-6"
                    >
                      🚀
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-center">Interactive Demo</h3>
                    <p className="text-slate-300 text-center mb-6 max-w-xs">
                      Experience our cutting-edge platform
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg"
                    >
                      Launch Experience
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating stats with improved animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-1 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg z-10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">Happy Clients</div>
              </motion.div>
              
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-2 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-5 rounded-xl shadow-lg z-10 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaStar className="text-yellow-300 mr-2" />
                <div>
                  <div className="font-bold">4.9/5</div>
                  <div className="text-xs">Rating</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-12 -left-12 w-28 h-28 border-2 border-blue-400/20 rounded-full pointer-events-none"
            />
            
            <motion.div
              animate={{
                rotate: [360, 0],
                y: [0, 20, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-8 -right-8 w-20 h-20 border-2 border-purple-400/20 rounded-full pointer-events-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated scroll arrow with improved interaction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2  transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-300 mb-2 text-2xl group-hover:text-purple-300 transition-colors"
        >
          <FaChevronDown />
        </motion.div>
        <motion.span 
          className="text-sm text-blue-300 group-hover:text-purple-300 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Explore More
        </motion.span>
      </motion.div>
    </section>

      {/* Clients Logo Cloud */}

      <LogoSlider/>

{/* Technologies Section */}
      <section className="py-10">
        <TechStack/>
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
      

      {/* Services Preview */}
<section className="py-28 relative overflow-hidden">
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

      {/* Process Section */}
      <OurProcess/>

      {/* FAQs Section */}
      <section className="py-20">
          <FAQSection />
      </section>

      {/* CTA Section */}
      <section className="py-28  text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Digital Presence Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;