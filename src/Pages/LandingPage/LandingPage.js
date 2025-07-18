import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaStar, FaChevronDown, FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { GiSpaceship, GiArtificialIntelligence } from 'react-icons/gi';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: <FaRocket className="text-3xl text-blue-500" />,
      title: "Lightning Fast",
      description: "Optimized for maximum performance and speed"
    },
    {
      icon: <FaLightbulb className="text-3xl text-purple-500" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technology for modern problems"
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: "Data Driven",
      description: "Metrics that matter for your business growth"
    },
    {
      icon: <GiArtificialIntelligence className="text-3xl text-orange-500" />,
      title: "AI Powered",
      description: "Smart features that learn and adapt"
    }
  ];

  const testimonials = [
    {
      quote: "This product transformed our workflow completely. Our productivity increased by 200%!",
      author: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      quote: "The easiest implementation we've ever experienced. Worth every penny.",
      author: "Michael Chen",
      role: "CTO, InnovateX"
    },
    {
      quote: "Customer support is exceptional. They helped us customize exactly what we needed.",
      author: "Emma Rodriguez",
      role: "Director, DigitalFirst"
    }
  ];

  return (
    <div className="text-gray-800 bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <GiSpaceship className="text-3xl text-blue-600 mr-2" />
              <span className="text-xl font-bold">Nexus</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-blue-600 transition">Features</a>
              <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
              <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
              <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
            </div>
            
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 flex flex-col gap-1">
                <span className={`h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              <a href="#features" className="block hover:text-blue-600 transition">Features</a>
              <a href="#solutions" className="block hover:text-blue-600 transition">Solutions</a>
              <a href="#pricing" className="block hover:text-blue-600 transition">Pricing</a>
              <a href="#testimonials" className="block hover:text-blue-600 transition">Testimonials</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full mt-2">
                Get Started
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Transform Your Business With <span className="text-blue-600">Next-Gen</span> Technology
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              The all-in-one platform that helps you automate workflows, streamline operations, and boost productivity.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border border-gray-300 bg-white px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <span>See Demo</span>
                <FiArrowRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70">
            {['Google', 'Microsoft', 'Amazon', 'Spotify', 'Netflix'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-700">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-600">Everything you need to modernize your workflow and stay ahead of the competition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored Solutions for Your Business Needs</h2>
              <p className="text-gray-600 mb-8">
                Our platform adapts to your specific requirements, providing customized solutions that drive real results. 
                Whether you're a startup or enterprise, we've got you covered.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Customizable dashboards",
                  "Role-based access control",
                  "Real-time analytics",
                  "API integrations",
                  "Automated reporting"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FiCheck className="text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <div className="bg-gray-800 rounded-lg p-6 text-white">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm">dashboard.js</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-700 rounded">
                      <div>Monthly Revenue</div>
                      <div className="font-mono">$124,568</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-700 rounded">
                      <div>New Users</div>
                      <div className="font-mono">1,248</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-700 rounded">
                      <div>Conversion Rate</div>
                      <div className="font-mono">3.2%</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                    <span className="text-lg font-medium">Interactive Chart Visualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 mb-8 text-xl">
              Join thousands of businesses already using our platform to drive growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Start Free Trial
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GiSpaceship className="text-2xl text-blue-400 mr-2" />
                <span className="text-xl font-bold text-white">Nexus</span>
              </div>
              <p className="mb-4">The all-in-one platform for modern businesses.</p>
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="hover:text-white transition">{social}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Solutions', 'Pricing', 'Demo'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Documentation', 'Tutorials', 'Blog', 'Support'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Careers', 'Contact', 'Press'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Nexus. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;