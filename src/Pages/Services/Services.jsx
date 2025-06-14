import React from 'react'
import { FaCode, FaMobileAlt, FaGlobe, FaBoxOpen, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to streamline your business operations and drive efficiency.",
      features: [
        "Enterprise applications",
        "CRM/ERP systems",
        "Cloud-based solutions",
        "Legacy system modernization"
      ],
      link: "#"
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and deliver results.",
      features: [
        "iOS & Android development",
        "Hybrid apps (React Native/Flutter)",
        "UI/UX focused design",
        "App maintenance & updates"
      ],
      link: "#"
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Website Development",
      description: "Responsive, high-performance websites that convert visitors into customers.",
      features: [
        "Custom web applications",
        "CMS solutions (WordPress, Drupal)",
        "E-commerce platforms",
        "Progressive Web Apps"
      ],
      link: "#"
    },
    {
      icon: <FaBoxOpen className="text-3xl" />,
      title: "Product Development",
      description: "End-to-end digital product development from concept to deployment.",
      features: [
        "MVP development",
        "Scalable architecture",
        "User-centered design",
        "Continuous integration"
      ],
      link: "#"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "E-commerce Solutions",
      description: "Complete online store solutions to grow your digital sales.",
      features: [
        "Shopify/WordPress WooCommerce",
        "Custom e-commerce platforms",
        "Payment gateway integration",
        "Inventory management"
      ],
      link: "#"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to increase your online presence.",
      features: [
        "SEO & Content Marketing",
        "Social Media Marketing",
        "PPC & Conversion Optimization",
        "Analytics & Reporting"
      ],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className=" text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Comprehensive Digital Solutions</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Bridging innovation with excellence across software development, digital products, and marketing
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border border-lime-400 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl text-white font-semibold  mb-3 text-center">{service.title}</h3>
                <p className=" mb-4 text-white text-center text-[16px]">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center text-sm ">
                  <a 
                    href={service.link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className=" py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your digital presence?</h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how we can help you achieve your business goals with our tailored solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;