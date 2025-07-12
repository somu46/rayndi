import { motion} from "framer-motion";
import { FiArrowRight, FiGlobe, FiBarChart2, FiLock, FiCode, FiServer , FiUsers } from "react-icons/fi";

const LandingPage = () => {

  return (
    <div className=" min-h-screen overflow-x-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="fixed top-1/4 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl -z-10"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6 text-sm font-medium"
              >
                <span className="mr-2">✨</span> New feature released
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Build better products
                </span>
                <br />
                faster than ever before
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                The complete platform for modern SaaS companies to develop, launch, and scale their products.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg font-medium"
                >
                  Get Started for Free
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg shadow-sm font-medium flex items-center justify-center"
                >
                  Watch Demo <FiArrowRight className="ml-2" />
                </motion.button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <img
                      key={item}
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Trusted by 10,000+ customers worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-500">dashboard.example.com</div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Dashboard preview"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {['Google', 'Microsoft', 'Airbnb', 'Spotify', 'Uber', 'Amazon'].map((company) => (
              <motion.div
                key={company}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <div className="text-2xl font-bold text-gray-400 hover:text-gray-700">{company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful features for <span className="text-blue-600">modern teams</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, launch, and grow your SaaS product
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiGlobe className="text-3xl text-blue-600" />,
                title: "Global Infrastructure",
                description: "Deploy your product in multiple regions with our worldwide network of servers."
              },
              {
                icon: <FiBarChart2 className="text-3xl text-purple-600" />,
                title: "Advanced Analytics",
                description: "Get real-time insights into your product performance and user behavior."
              },
              {
                icon: <FiLock className="text-3xl text-green-600" />,
                title: "Enterprise Security",
                description: "Military-grade encryption and compliance with industry standards."
              },
              {
                icon: <FiCode className="text-3xl text-orange-600" />,
                title: "Developer Friendly",
                description: "Comprehensive API and documentation for seamless integration."
              },
              {
                icon: <FiServer className="text-3xl text-red-600" />,
                title: "99.9% Uptime",
                description: "Guaranteed reliability with our robust infrastructure."
              },
              {
                icon: <FiUsers className="text-3xl text-indigo-600" />,
                title: "Team Collaboration",
                description: "Built-in tools for your team to work together efficiently."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to build amazing products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg font-medium"
              >
                Get Started for Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      
      
    </div>
  );
};

export default LandingPage;