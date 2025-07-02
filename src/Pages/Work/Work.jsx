import { motion } from "framer-motion";
import {  FiFilter } from "react-icons/fi";
import { useState, useEffect } from "react";
import demo from "../../Assets/coding.webp";
import ProjectsCard from "../../Components/UIVerse/ProjectsCard"
import FeedbackCard from "../../Components/UIVerse/FeedbackCard"
const WorkPage = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with custom CMS and payment integration",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      // image: demo,
      link: "#",
      github: "#",
      category: "web"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      description: "Data visualization platform for patient analytics",
      tags: ["TypeScript", "D3.js", "Firebase", "Tailwind"],
      image: demo,
      link: "#",
      github: "#",
      category: "web"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure financial management application",
      tags: ["React Native", "GraphQL", "Biometrics", "AWS"],
      image:demo ,
      link: "#",
      github: "#",
      category: "mobile"
    },
    {
      id: 4,
      title: "AR Interior Design",
      // description: "Augmented reality app for home decoration",
      tags: ["Unity", "ARKit", "3D Modeling", "Swift"],
      image: demo,
      link: "#",
      github: "#",
      category: "mobile"
    },
    {
      id: 5,
      title: "SaaS Analytics Platform",
      description: "Business intelligence dashboard for SMBs",
      tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      image: demo,
      link: "#",
      github: "#",
      category: "web"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "AI-powered workout and nutrition coach",
      tags: ["Flutter", "TensorFlow", "Firebase", "HealthKit"],
      image: demo,
      link: "#",
      github: "#",
      category: "mobile"
    }
  ];

  // Categories for filtering
  const categories = ["all", "web", "mobile", "design"];

  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects by category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900">
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Our Work
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-10">
              Explore our portfolio of innovative projects and client success stories
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg"
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-12   top-10 z-10 shadow-sm ">
        <div className="container mx-auto px-6 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 "
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium flex items-center  ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {activeCategory === category && (
                  <FiFilter className="mr-2" />
                )}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-8"
    >
      {filteredProjects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </motion.div>

    {filteredProjects.length === 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="text-5xl mb-4">🧐</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
        <p className="text-gray-600">We don't have any projects in this category yet</p>
      </motion.div>
    )}
  </div>
</section>


      {/* Testimonials */}
      <FeedbackCard/>

      {/* CTA */}
      <section className="py-28 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default WorkPage;