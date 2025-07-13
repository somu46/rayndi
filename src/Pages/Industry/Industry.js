import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import industries from "../../Data/industries";

const IndustriesPage = () => {

 const navigate = useNavigate();


const handleNvigate=(path)=>{
 navigate(`/industries/${path}`,{
  
  state: {
    path,
  }

 }); // Redirect to the industries page
}




  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Industries We Serve
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10"
          >
            Tailored solutions for diverse industry verticals
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
              >
                <div onClick={() => handleNvigate(industry.slug)} >
                  <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-400/30">
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-4 rounded-full ${industry.color.replace('text', 'bg')}/10 mb-4`}>
                        <industry.icon className={`text-4xl ${industry.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                      <p className="text-gray-300 mb-4">{industry.tagline}</p>
                      <div className="flex items-center text-blue-400 group">
                        <span className="text-sm font-medium">Learn more</span>
                        <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-700/30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Don't see your industry?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Our solutions are adaptable across sectors. Contact us to discuss your specific needs.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            Contact Our Team
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;