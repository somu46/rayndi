import { motion } from "framer-motion";
import { FiGlobe, FiUsers, FiAward, FiLayers, FiClock, FiBarChart2 ,FiArrowRight } from "react-icons/fi";
import ExploreButton from "../../Components/UIVerse/ExploreButton";
const CompanyPage = () => {
  // Milestones data
  const milestones = [
    { year: "2015", event: "Company Founded", description: "Started in a small office with 3 team members" },
    { year: "2017", event: "First Major Client", description: "Landed our first Fortune 500 client" },
    { year: "2019", event: "International Expansion", description: "Opened offices in Europe and Asia" },
    { year: "2021", event: "Product Launch", description: "Released our flagship SaaS product" },
    { year: "2023", event: "100 Employees", description: "Grew to a team of 100+ professionals" },
    { year: "2024", event: "200 employees", description: "Grew to a team of 200+ professionals" },
    
  ];

  // Services data
  const services = [
    { icon: <FiGlobe />, title: "Global Reach", description: "Operating in 15+ countries worldwide" },
    { icon: <FiUsers />, title: "Dedicated Team", description: "100+ skilled professionals" },
    { icon: <FiAward />, title: "Industry Recognition", description: "Multiple award-winning projects" },
    { icon: <FiLayers />, title: "Full Stack", description: "End-to-end solution provider" },
    { icon: <FiClock />, title: "Fast Delivery", description: "Agile development process" },
    { icon: <FiBarChart2 />, title: "Data-Driven", description: "Metrics-focused approach" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden  text-white">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the <span className="text-blue-300">Digital Future</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10">
              We're a global technology company creating innovative solutions that transform businesses and empower people.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold"
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-16 ">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">TRUSTED BY INDUSTRY LEADERS</h3>
            <p className="text-gray-600">We partner with organizations of all sizes</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 w-full h-96 rounded-3xl overflow-hidden shadow-xl">
                {/* Replace with your image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                  <span className="text-gray-500">Company Overview</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-4 w-42 h-42 bg-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center p-4 text-white">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Who <span className="text-blue-600">We Are</span>
              </h2>
              <p className="text-lg text-white mb-6">
                We are a global technology company specializing in digital transformation, enterprise software, and cutting-edge solutions that drive business growth.
              </p>
              <p className="text-lg text-white mb-8">
                Founded in 2015, we've grown from a small startup to an international organization with offices in 5 countries, serving clients across multiple industries.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FiGlobe className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Global Presence</div>
                    <div className="text-sm text-white">5 countries</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FiUsers className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Expert Team</div>
                    <div className="text-sm text-white">100+ professionals</div>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg"
              >
                Download Company Profile
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
     <section className="py-12 md:py-20">
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white">
        Our <span className="text-blue-600">Journey</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
        Key milestones in our company history
      </p>
    </motion.div>

    <div className="relative">
      {/* Timeline vertical line - shown on md+ screens */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-white transform -translate-x-1/2"></div>

      {/* Mobile timeline dot connector - shown on small screens */}
      <div className="md:hidden absolute left-6 top-0 h-full w-1 bg-blue-600 transform -translate-x-1/2"></div>

      <div className="space-y-12 md:space-y-0">
        {[...milestones]
          .sort((a, b) => parseInt(b.year) - parseInt(a.year))
          .map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative md:flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start md:items-center justify-between`}
            >
              {/* Year - mobile shows on left, desktop alternates */}
              <div
                className={`w-full md:w-1/2 px-0 md:px-12 mb-4 md:mb-0 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className="flex items-center md:block">
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-2 border-white transform -translate-x-1/2"></div>
                  <div className="ml-10 md:ml-0 inline-block p-3 md:p-4 rounded-lg">
                    <div className="text-2xl md:text-3xl font-bold text-white">{milestone.year}</div>
                  </div>
                </div>
              </div>

              {/* Event */}
              <div className="w-full md:w-1/2 px-0 md:px-12">
                <div className="p-6 md:p-8 rounded-xl shadow-lg relative border border-white bg-gray-900 ml-10 md:ml-0">
                  {/* Desktop dots */}
                  {index % 2 === 0 ? (
                    <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
                  ) : (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{milestone.event}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  </div>
</section>

      {/* Capabilities */}
      <section className="py-28 relative overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
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
        Our <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Capabilities</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive solutions tailored to your business needs
      </p>
    </motion.div>

    {/* Capabilities grid - Creative Card Design */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
          className="relative group"
        >
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg -z-10"></div>
          
          <div className="relative h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg group-hover:shadow-xl transition-all duration-300">
            {/* Large floating icon with alternating colors */}
            <div className={`w-20 h-20 rounded-2xl ${
              index % 2 === 0 
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' 
                : 'bg-purple-100 text-purple-600 dark:bg-purple-900/30'
            } opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center mx-auto mt-8 mb-6`}>
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-4xl"
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
                <a href="#" className={`relative ${
                  index % 2 === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'
                } font-medium group`}>
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
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        index % 2 === 0 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' 
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200'
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative corner elements */}
            <div className={`absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 ${
              index % 2 === 0 ? 'border-blue-500' : 'border-purple-500'
            } rounded-bl-3xl opacity-30`}></div>
            <div className={`absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 ${
              index % 2 === 0 ? 'border-blue-500' : 'border-purple-500'
            } rounded-tr-3xl opacity-30`}></div>
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
          Discover More Capabilities
          <span className="absolute -right-2 -top-2 w-5 h-5 bg-yellow-400 rounded-full animate-ping opacity-75"></span>
        </button>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* CTA */}
      <section className="py-28  text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your strategic goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;