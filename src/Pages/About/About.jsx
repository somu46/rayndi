import { motion } from "framer-motion";
import { FiUsers, FiAward, FiGlobe, FiCode, FiHeart } from "react-icons/fi";
import EmployeeCard from '../../Components/UIVerse/EmployeeCard'
import Suvo from '../../Assets/Suvo Halder.jpeg'
import Arka from '../../Assets/Arkajyoti Kundu.jpeg'
import Ananyo from '../../Assets/Ananya Dutta.jpeg'
import Soumyajit from '../../Assets/Soumyajit Ray.jpg'

const AboutPage = () => {
  // Team data
  const teamMembers = [
    {
      name: "Soumyajit Ray",
      role: "CEO & Founder",
      image: Soumyajit,
      social: { twitter: "https://x.com/", linkedin: "https://www.linkedin.com/",github: 'https://www.github.com/' },
    },
    {
      name: "Suvo Halder",
      role: "Co-Founder & Project Manager",
      image: Suvo,
      social: { twitter: "https://x.com/", linkedin: "https://www.linkedin.com/",github: 'https://www.github.com/' },
    },
    {
      name: "Arkajyoti Kundu",
      role: "CTO",
      image: Arka,
      social: { twitter: "https://x.com/", linkedin: "https://www.linkedin.com/",github: 'https://www.github.com/' },
    },
    
    {
      name: "Sourashis Chakraborty",
      role: "CMO",
      image: Soumyajit,
      social: { twitter: "https://x.com/", linkedin: "https://www.linkedin.com/",github: 'https://www.github.com/' },
    },
    {
      name: "Ananyo Dutta",
      role: "Excel Sheet Updater",
      image: Ananyo,
      social: { twitter: "https://x.com/", linkedin: "https://www.linkedin.com/",github: 'https://www.github.com/' },
    },
    {
      name: "Md Anisur Rahman",
      role: "Marketing Head",
      image: Soumyajit,
      social: { twitter: "https://x.com/", linkedin: "https://www.linkedin.com/" ,github: 'https://www.github.com/' },
    },

  ];

  const stats = [
    { value: "150+", label: "Projects Completed", icon: <FiCode /> },
    { value: "50+", label: "Happy Clients", icon: <FiHeart /> },
    { value: "12+", label: "Industry Awards", icon: <FiAward /> },
    { value: "5+", label: "Global Offices", icon: <FiGlobe /> },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-20 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"
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
          className="absolute top-1/2 right-20 w-64 h-64  rounded-full opacity-20 blur-3xl"
        />

        <div className="container mx-auto px-6 py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              We're a passionate team of creators, developers, and strategists dedicated to building digital experiences that matter.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                 <span className="text-blue-600">Our Journey</span>
              </h2>
              <p className="text-lg text-blue-500 mb-6">
                Founded in 2015, we started as a small team of three developers working out of a garage. Today, we've grown into a full-service digital agency with offices in three countries.
              </p>
              <p className="text-lg text-blue-500 mb-6">
                Our mission has remained the same: to combine cutting-edge technology with beautiful design to solve real business challenges.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Read Our Blog
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-300 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Careers
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-100 w-full h-80 rounded-3xl overflow-hidden shadow-xl">
                
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-blue-500">Company Timeline Video</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-2xl shadow-lg border-2 border-white flex items-center justify-center">
                <FiUsers className="w-12 h-12 text-purple-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20  ">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-slate-800 p-8 rounded-2xl relative overflow-hidden group"
          style={{
            boxShadow: `
              -10px -10px 20px rgba(30, 41, 59, 0.5),
              10px 10px 20px rgba(0, 0, 0, 0.3)
            `
          }}
        >
          {/* Icon with inner glow */}
          <div className="text-blue-400 text-4xl mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-slate-700 
              shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.05),inset_3px_3px_5px_rgba(0,0,0,0.5)]">
              {stat.icon}
            </div>
          </div>
          
          {/* Stat value with gradient */}
          <h3 className="text-5xl font-bold text-center mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {stat.value}
            </span>
          </h3>
          
          {/* Label with animated underline */}
          <div className="relative inline-block w-full text-center">
            <p className="text-slate-300 uppercase tracking-wider text-sm font-medium">
              {stat.label}
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-2"
            />
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Team */}
      <section className="py-20 ">
        <div className="container mx-auto px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 ">
              <span className="text-blue-600">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind every project we deliver
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 ">
            {teamMembers.map((member, index) => (
              <EmployeeCard
                key={index}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20  text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-blue-400">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <div className="text-blue-400 text-3xl mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
              <p className="text-gray-300">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <div className="text-blue-400 text-3xl mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Client-Centric</h3>
              <p className="text-gray-300">
                Your success is our success. We listen first, then craft solutions tailored to your needs.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <div className="text-blue-400 text-3xl mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Transparent Process</h3>
              <p className="text-gray-300">
                No hidden agendas. We maintain open communication at every project stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;