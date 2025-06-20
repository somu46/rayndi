import { motion } from "framer-motion";
import { FiArrowRight, FiGlobe, FiUsers, FiAward, FiLayers } from "react-icons/fi";
import OurProcess from '../../Components/UIVerse/OurProcess'
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
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "iOS & Android development",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered interfaces",
      icon: "🎨"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable infrastructure",
      icon: "☁️"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden  text-white min-h-screen flex items-center">
        {/* Animated background elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-700/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-20 w-64 h-64 bg-purple-700/20 rounded-full blur-xl"
        />

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Digital Innovation
                </span> <br />That Drives Growth
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-lg">
                We design and develop cutting-edge digital solutions that transform businesses and create exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold"
                >
                  Explore Our Work
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl h-80 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm">Successful Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Logo Cloud */}
      <section className="py-16 ">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 mb-4">TRUSTED BY INNOVATIVE COMPANIES</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24"
              >
                <span className="text-gray-400 font-bold text-xl">Client {i+1}</span>
              </motion.div>
            ))}
          </div>
        </div>
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
          
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden group"
    >
      {/* Gradient background overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Icon container with gradient border */}
      <div className="relative inline-flex justify-center items-center mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-white text-blue-500 rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-sm group-hover:text-purple-600 transition-colors">
          {feature.icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
        {feature.title}
      </h3>
      
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
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
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 ">
              <span className="text-blue-600">Our Services</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="text-blue-600 font-medium flex items-center"
                >
                  Learn more <FiArrowRight className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      
      <OurProcess/>

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