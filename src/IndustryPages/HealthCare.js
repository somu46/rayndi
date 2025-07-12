// src/pages/industries/HealthcarePage.jsx
import { motion } from 'framer-motion';
import { FaClinicMedical, FaLaptopMedical, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import { MdHealthAndSafety, MdPrecisionManufacturing } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HealthcarePage = () => {
  const solutions = [
    {
      icon: <FaLaptopMedical className="text-4xl text-blue-400" />,
      title: "Electronic Health Records",
      description: "Secure, cloud-based EHR systems with seamless integration across healthcare networks"
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-400" />,
      title: "Telemedicine Platforms",
      description: "End-to-end virtual care solutions with HIPAA-compliant video conferencing"
    },
    {
      icon: <MdHealthAndSafety className="text-4xl text-blue-400" />,
      title: "Patient Management",
      description: "Comprehensive systems for appointment scheduling, billing, and patient engagement"
    },
    {
      icon: <MdPrecisionManufacturing className="text-4xl text-blue-400" />,
      title: "Medical Device Integration",
      description: "IoT solutions connecting medical devices to central monitoring systems"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-400" />,
      title: "Healthcare Analytics",
      description: "AI-powered insights for predictive care and operational efficiency"
    }
  ];

  const caseStudies = [
    {
      title: "Regional Hospital Network",
      challenge: "Disconnected systems causing 30% administrative waste",
      solution: "Implemented unified EHR and patient management platform",
      results: ["40% reduction in administrative costs", "25% faster patient processing"]
    },
    {
      title: "National Telehealth Provider",
      challenge: "Needed scalable solution for 500% pandemic-driven growth",
      solution: "Custom telemedicine platform with AI triage",
      results: ["Supported 2M+ virtual visits annually", "98% patient satisfaction rate"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center bg-blue-800/30 rounded-full p-3 mb-6">
              <FaClinicMedical className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Healthcare Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transforming patient care through innovative digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Revolutionizing Healthcare Delivery</h2>
            <div className="prose-lg text-gray-600">
              <p className="mb-4">
                We specialize in developing cutting-edge technology solutions for hospitals, clinics, 
                and healthcare providers. Our platforms are designed to streamline operations, 
                enhance patient care, and ensure compliance with healthcare regulations.
              </p>
              <p>
                From electronic health records to telemedicine and medical IoT, we build systems 
                that healthcare professionals trust and patients love.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Healthcare Solutions
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-2 bg-blue-100 flex justify-center">
                  {solution.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Healthcare Success Stories
          </h2>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-800 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">The Challenge</h4>
                        <p>{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Our Solution</h4>
                        <p>{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Results Achieved</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our experts will work with you to develop custom solutions for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors"
              >
                Request Consultation
              </Link>
              <Link
                to="/industries"
                className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Explore Other Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;