import { motion } from "framer-motion";
import { FiCode, FiCloud, FiDatabase, FiLock, FiSmartphone, FiBarChart2 } from "react-icons/fi";
import ApproachCard from "../../Components/UIVerse/ApproachCard";
import {
  FiClipboard,
  FiSettings,
  FiPenTool,
  FiLayers,
  FiMonitor,
  FiServer,
  FiCheckCircle,
  FiUploadCloud,
  FiRefreshCw,
  FiTrendingUp,
} from "react-icons/fi";
const SolutionsPage = () => {
  // Solutions data
  const solutions = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed specifically for your business needs and workflows.",
      features: ["Web Applications", "Desktop Software", "Cross-Platform", "Legacy Modernization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your digital transformation.",
      features: ["Cloud Migration", "Hybrid Cloud", "Serverless Architecture", "Cloud Security"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions.",
      features: ["BI Dashboards", "Predictive Analytics", "Data Warehousing", "ETL Pipelines"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Risk Assessment", "Penetration Testing", "Security Monitoring", "Compliance"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Mobile Solutions",
      description: "Engaging mobile experiences for iOS, Android and cross-platform.",
      features: ["Native Apps", "React Native", "Progressive Web Apps", "Mobile Backend"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services for enterprises.",
      features: ["Process Automation", "AI Integration", "IoT Solutions", "Blockchain"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  // Industries served
  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "Retail", icon: "🛍️" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Logistics", icon: "🚚" },
    { name: "Government", icon: "🏛️" },
    { name: "Startups", icon: "🚀" }
  ];

const steps = [
  {
    number: 1,
    title: 'Requirement Gathering',
    icon: <FiClipboard className="w-6 h-6 text-blue-600" />,
    features: [
      "Understand client goals",
      "Define product features",
      "Identify target audience",
    ],
  },
  {
    number: 2,
    title: 'Planning & Feasibility',
    icon: <FiSettings className="w-6 h-6 text-purple-600" />,
    features: [
      "Scope & timeline definition",
      "Tech stack selection",
      "Budget and MVP planning",
    ],
  },
  {
    number: 3,
    title: 'UI/UX Design',
    icon: <FiPenTool className="w-6 h-6 text-pink-600" />,
    features: [
      "Wireframes and user flows",
      "Interactive prototypes",
      "Brand-aligned visuals",
    ],
  },
  {
    number: 4,
    title: 'Architecture & Tech Stack Setup',
    icon: <FiLayers className="w-6 h-6 text-indigo-600" />,
    features: [
      "Codebase structuring",
      "Environment configuration",
      "Version control setup",
    ],
  },
  {
    number: 5,
    title: 'Frontend Development',
    icon: <FiMonitor className="w-6 h-6 text-green-600" />,
    features: [
      "Responsive UI development",
      "API integration",
      "Cross-platform compatibility",
    ],
  },
  {
    number: 6,
    title: 'Backend Development',
    icon: <FiServer className="w-6 h-6 text-red-600" />,
    features: [
      "Database schema design",
      "Secure API development",
      "Business logic implementation",
    ],
  },
  {
    number: 7,
    title: 'Testing & QA',
    icon: <FiCheckCircle className="w-6 h-6 text-yellow-600" />,
    features: [
      "Unit and integration tests",
      "UI/UX testing",
      "Bug fixing and QA cycles",
    ],
  },
  {
    number: 8,
    title: 'Deployment',
    icon: <FiUploadCloud className="w-6 h-6 text-blue-500" />,
    features: [
      "Live server configuration",
      "CI/CD pipeline integration",
      "SSL and DNS setup",
    ],
  },
  {
    number: 9,
    title: 'Maintenance & Updates',
    icon: <FiRefreshCw className="w-6 h-6 text-gray-600" />,
    features: [
      "Performance monitoring",
      "Bug fixes and patches",
      "Feature enhancements",
    ],
  },
  {
    number: 10,
    title: 'Marketing & Launch',
    icon: <FiTrendingUp className="w-6 h-6 text-green-700" />,
    features: [
      "SEO and analytics setup",
      "Marketing campaign support",
      "Launch strategy execution",
    ],
  },
];



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
                Technology Solutions
              </span> That Drive Results
            </h1>
            <p className="text-xl text-blue-100 mb-10">
              We design, build, and implement cutting-edge technology solutions that solve complex business challenges and deliver measurable impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg"
            >
              Explore Our Solutions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">Our Solutions</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Comprehensive technology services tailored to your specific needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-8">
                  <div className={`mb-6 p-4 rounded-lg bg-gradient-to-br ${solution.color} inline-flex`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-white bg-gradient-to-r ${solution.color} px-6 py-3 rounded-lg font-medium w-full`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 ">
        <div className="flex flex-wrap justify-center gap-6">
      {steps.map((step, index) => (
        <ApproachCard
  key={index}
  title={step.title}
  number={step.number}
  icon={step.icon}
  features={step.features}
/>

          ))}
        </div>
      </section>

      {/* Industries */}
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
              <span className="text-blue-600">Industries We Serve</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Tailored solutions for diverse industry verticals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              See how we've helped businesses like yours
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Healthcare Case Study</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Hospital Management System</h3>
                <p className="text-gray-600 mb-6">Developed a comprehensive platform that improved patient care coordination by 40% and reduced administrative costs by 25%.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium"
                >
                  Read Case Study
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Financial Services Case Study</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Banking Platform Modernization</h3>
                <p className="text-gray-600 mb-6">Transformed legacy systems into a modern digital banking platform that increased customer satisfaction by 35%.</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium"
                >
                  Read Case Study
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Ready to solve your business challenges?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can drive your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg"
              >
                Contact Our Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold"
              >
                Browse All Solutions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;