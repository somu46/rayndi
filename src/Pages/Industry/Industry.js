import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import {
  FaClinicMedical,
  FaUniversity,
  FaShoppingCart,
  FaPlane,
  FaMoneyBillWave,
  FaFilm
} from 'react-icons/fa';
import { MdRealEstateAgent } from 'react-icons/md';

const IndustriesPage = () => {
  const industries = [
    {
      name: "Healthcare",
      slug: "healthcare",
      icon: FaClinicMedical,
      color: "text-blue-400",
      tagline: "Transforming patient care",
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      name: "Education",
      slug: "education",
      icon: FaUniversity,
      color: "text-purple-400",
      tagline: "Next-gen learning platforms",
      bgGradient: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      name: "Retail & E-commerce",
      slug: "retail-ecommerce",
      icon: FaShoppingCart,
      color: "text-amber-400",
      tagline: "Seamless shopping experiences",
      bgGradient: "bg-gradient-to-br from-amber-500 to-amber-700"
    },
    {
      name: "Travel",
      slug: "travel",
      icon: FaPlane,
      color: "text-sky-400",
      tagline: "Smart aviation technologies",
      bgGradient: "bg-gradient-to-br from-sky-500 to-sky-700"
    },
    {
      name: "Finance",
      slug: "finance",
      icon: FaMoneyBillWave,
      color: "text-green-400",
      tagline: "Fintech innovation",
      bgGradient: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      name: "Real Estate",
      slug: "real-estate",
      icon: MdRealEstateAgent,
      color: "text-yellow-400",
      tagline: "Property tech innovations",
      bgGradient: "bg-gradient-to-br from-yellow-500 to-yellow-700"
    },
    {
      name: "Entertainment",
      slug: "entertainment",
      icon: FaFilm,
      color: "text-fuchsia-400",
      tagline: "Immersive experiences",
      bgGradient: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-700"
    }
  ];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/industries/${industry.slug}`}>
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
                </Link>
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