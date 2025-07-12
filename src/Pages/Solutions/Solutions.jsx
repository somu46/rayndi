import { motion } from "framer-motion";
import { 
  FiCode, FiCloud, FiDatabase, FiLock, 
  FiSmartphone, FiBarChart2, FiClipboard,
  FiSettings, FiPenTool, FiLayers, FiMonitor,
  FiServer, FiCheckCircle, FiUploadCloud,
  FiRefreshCw, FiTrendingUp, FiArrowRight
} from "react-icons/fi";
import {
  FaClinicMedical,
  FaUniversity,
  FaShoppingCart,
  FaPlane,
  FaMoneyBillWave,
  FaFilm,

} from 'react-icons/fa';

import { MdRealEstateAgent } from 'react-icons/md';

import { Link } from "react-router-dom";

const SolutionsPage = () => {
  // Solutions data with enhanced color schemes
  const solutions = [
    {
      icon: <FiCode className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed specifically for your business needs and workflows.",
      features: ["Web Applications", "Desktop Software", "Cross-Platform", "Legacy Modernization"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <FiCloud className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your digital transformation.",
      features: ["Cloud Migration", "Hybrid Cloud", "Serverless Architecture", "Cloud Security"],
      color: "from-purple-500 to-fuchsia-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10"
    },
    {
      icon: <FiDatabase className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions.",
      features: ["BI Dashboards", "Predictive Analytics", "Data Warehousing", "ETL Pipelines"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: <FiLock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Risk Assessment", "Penetration Testing", "Security Monitoring", "Compliance"],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
    },
    {
      icon: <FiSmartphone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Mobile Solutions",
      description: "Engaging mobile experiences for iOS, Android and cross-platform.",
      features: ["Native Apps", "React Native", "Progressive Web Apps", "Mobile Backend"],
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-500/10 to-yellow-500/10"
    },
    {
      icon: <FiBarChart2 className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services for enterprises.",
      features: ["Process Automation", "AI Integration", "IoT Solutions", "Blockchain"],
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
    }
  ];

  // Industries served with animated emojis
  const industries = [
    {
      name: "Healthcare",
      slug: "healthcare",
      icon: FaClinicMedical ,
      color: "text-blue-400",
      tagline: "Transforming patient care",
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      name: "Education",
      slug: "education",
      icon: FaUniversity ,
      color: "text-purple-400",
      tagline: "Next-gen learning platforms",
      bgGradient: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      name: "Retail & E-commerce",
      slug: "retail-ecommerce",
      icon: FaShoppingCart ,
      color: "text-amber-400",
      tagline: "Seamless shopping experiences",
      bgGradient: "bg-gradient-to-br from-amber-500 to-amber-700"
    },
    
    {
      name: "Travel",
      slug: "travel",
      icon: FaPlane ,
      color: "text-sky-400",
      tagline: "Smart aviation technologies",
      bgGradient: "bg-gradient-to-br from-sky-500 to-sky-700"
    },
    {
      name: "Finance",
      slug: "finance",
      icon: FaMoneyBillWave ,
      color: "text-green-400",
      tagline: "Fintech innovation",
      bgGradient: "bg-gradient-to-br from-green-500 to-green-700"
    }, 
    {
      name: "Real Estate",
      slug: "real-estate",
      icon: MdRealEstateAgent ,
      color: "text-yellow-400",
      tagline: "Property tech innovations",
      bgGradient: "bg-gradient-to-br from-yellow-500 to-yellow-700"
    },
    
    {
      name: "Entertainment",
      slug: "entertainment",
      icon: FaFilm ,
      color: "text-fuchsia-400",
      tagline: "Immersive experiences",
      bgGradient: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-700"
    },
    
  ];

  // Process steps with 3D effect
  const steps = [
    {
      number: 1,
      title: 'Requirement Gathering',
      icon: <FiClipboard className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Understand client goals",
        "Define product features",
        "Identify target audience",
      ],
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: 'Planning & Feasibility',
      icon: <FiSettings className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Scope & timeline definition",
        "Tech stack selection",
        "Budget and MVP planning",
      ],
      color: "bg-purple-500"
    },
    {
      number: 3,
      title: 'UI/UX Design',
      icon: <FiPenTool className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Wireframes and user flows",
        "Interactive prototypes",
        "Brand-aligned visuals",
      ],
      color: "bg-pink-500"
    },
    {
      number: 4,
      title: 'Architecture & Tech Stack Setup',
      icon: <FiLayers className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Codebase structuring",
        "Environment configuration",
        "Version control setup",
      ],
      color: "bg-indigo-500"
    },
    {
      number: 5,
      title: 'Frontend Development',
      icon: <FiMonitor className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Responsive UI development",
        "API integration",
        "Cross-platform compatibility",
      ],
      color: "bg-green-500"
    },
    {
      number: 6,
      title: 'Backend Development',
      icon: <FiServer className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Database schema design",
        "Secure API development",
        "Business logic implementation",
      ],
      color: "bg-red-500"
    },
    {
      number: 7,
      title: 'Testing & QA',
      icon: <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Unit and integration tests",
        "UI/UX testing",
        "Bug fixing and QA cycles",
      ],
      color: "bg-yellow-500"
    },
    {
      number: 8,
      title: 'Deployment',
      icon: <FiUploadCloud className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Live server configuration",
        "CI/CD pipeline integration",
        "SSL and DNS setup",
      ],
      color: "bg-cyan-500"
    },
    {
      number: 9,
      title: 'Maintenance & Updates',
      icon: <FiRefreshCw className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Performance monitoring",
        "Bug fixes and patches",
        "Feature enhancements",
      ],
      color: "bg-gray-500"
    },
    {
      number: 10,
      title: 'Marketing & Launch',
      icon: <FiTrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "SEO and analytics setup",
        "Marketing campaign support",
        "Launch strategy execution",
      ],
      color: "bg-emerald-500"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 min-h-screen">
      {/* Floating Particles Background - Reduced on mobile */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-blue-500' : i % 2 === 0 ? 'bg-purple-500' : 'bg-cyan-500'}`}
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-screen flex items-center justify-center overflow-hidden text-white px-4">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 z-0"
        />
        
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0"
        />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-x">
                Next-Gen Technology Solutions
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We architect digital experiences that transform businesses and delight users
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto sm:mx-0"
              >
                Explore Solutions
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold backdrop-blur-sm mx-auto sm:mx-0"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 md:py-20 relative px-4">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Our Digital Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Cutting-edge technologies tailored to your business objectives
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl ${solution.bgColor} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10`} />
                
                {/* Main card */}
                <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/30 shadow-lg transition-all duration-300">
                  {/* Animated gradient bar */}
                  <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${solution.color} relative overflow-hidden`}>
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "100%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-white/30"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6 md:p-8">
                    {/* Floating icon with gradient */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        rotateZ: 5
                      }}
                      className={`mb-4 sm:mb-6 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl ${solution.bgColor} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg`}
                    >
                      <div className="text-white text-xl sm:text-2xl md:text-3xl">
                        {solution.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{solution.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{solution.description}</p>
                    
                    {/* Features with staggered animation */}
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
                      {solution.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center text-xs sm:text-sm text-gray-300"
                        >
                          <motion.span 
                            whileHover={{ scale: 1.2 }}
                            className="inline-flex items-center justify-center mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-700/50"
                          >
                            <svg className={`w-3 h-3 sm:w-4 sm:h-4 ${solution.color.replace('from-', 'text-').replace('to-', '')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Animated button */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: `0 10px 25px -5px ${solution.color.replace('from-', '').replace('to-', '').split(' ')[0]}/40`
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative overflow-hidden w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-white bg-gradient-to-r ${solution.color} shadow-lg text-sm sm:text-base`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                        Learn More
                        <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <motion.span
                        initial={{ opacity: 0, x: "-100%" }}
                        whileHover={{ opacity: 0.2, x: "100%" }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-white/20"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 sm:py-16 md:py-20 relative px-4">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Development Process</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 -translate-x-1/2">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
              />
            </div>
            
            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot - Hidden on mobile */}
                  <div className={`hidden md:block absolute left-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-white ${step.color} shadow-lg -translate-x-1/2 -translate-y-1/2 z-10`} />
                  
                  {/* Card */}
                  <div className={`w-full md:w-11/12 lg:w-5/12 p-1 rounded-xl md:rounded-2xl ${step.color}/20 backdrop-blur-sm shadow-sm shadow-white`}>
                    <div className="bg-gray-800/80 backdrop-blur-md rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 h-full border border-gray-700/30 shadow-lg">
                      <div className="flex items-start mb-4 sm:mb-6">
                        <div className={`text-2xl sm:text-3xl font-bold mr-4 sm:mr-6 ${step.color} text-transparent bg-clip-text`}>
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${step.color} flex items-center justify-center shadow-md mb-2 sm:mb-4`}>
                            <div className="text-white text-lg sm:text-xl">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2 sm:space-y-3 pl-2">
                        {step.features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className="flex items-start text-xs sm:text-sm text-gray-300"
                          >
                            <span className="inline-flex items-center justify-center mr-2 sm:mr-3 mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-700/50">
                              <svg className={`w-2 h-2 sm:w-3 sm:h-3 ${step.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-2 sm:px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Industries We Empower
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto">
              Customized digital solutions transforming businesses across sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <Link to={`/industries/${industry.slug}`} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 rounded-2xl ${industry.color.replace('text', 'bg')}/10 group-hover:opacity-100 opacity-0 blur-md transition-all duration-500 -z-10`} />
                  
                  {/* Main card */}
                  <div className="bg-gray-800/30 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center hover:border-blue-400/30 hover:bg-gray-800/50">
                    {/* Animated icon container */}
                    <div className="relative mb-4 sm:mb-5">
                      <div className={`absolute inset-0 rounded-full ${industry.color.replace('text', 'bg')}/20 group-hover:opacity-100 opacity-0 blur-md transition-opacity duration-500 -z-10`} />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-3 sm:p-4 rounded-full ${industry.color.replace('text', 'bg')}/10 border ${industry.color.replace('text', 'border')}/20 inline-flex`}
                      >
                        <industry.icon className={`text-3xl sm:text-4xl ${industry.color}`} />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-semibold text-white text-center mb-2">{industry.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300/80 text-center mb-3">{industry.tagline}</p>
                    
                    {/* Learn more link */}
                    <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      <span className="text-xs sm:text-sm text-blue-400 font-medium">Explore</span>
                      <FiArrowRight className="ml-1 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* View all button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/industries">
              <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:from-blue-500 hover:to-purple-500 hover:scale-[1.02] relative overflow-hidden group">
                <span className="relative z-10">View All Industries</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/70 to-gray-900/70"
        />
        
        <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl md:max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
            >
              Ready to transform your business with technology?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl md:max-w-3xl mx-auto"
            >
              Let's discuss how we can help you achieve your digital goals
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto sm:mx-0 text-sm sm:text-base"
              >
                <span>Get Started Today</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold backdrop-blur-sm flex items-center gap-2 mx-auto sm:mx-0 text-sm sm:text-base"
              >
                <span>Schedule Consultation</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;