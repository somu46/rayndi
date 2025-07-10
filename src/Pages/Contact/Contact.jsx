import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle,FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { FaXTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa6";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl -z-10"
      />
      
      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-20 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white">
            Have a project in mind or want to discuss potential collaboration? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-white">
                Fill out the form or reach out through these channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Card - Email */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start p-6  rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="p-3  rounded-lg text-blue-600 mr-4">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                  <p className="text-gray-300 mb-2">contact@example.com</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Send message <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </motion.div>

              {/* Contact Card - Phone */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start p-6  rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="p-3  rounded-lg text-purple-600 mr-4">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                  <p className="text-gray-300 mb-2">+91 9123813528</p>
                  <a
                    href="tel:+919123813528"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Call now <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </motion.div>

              {/* Contact Card - Location */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start p-6  rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-lg text-green-600 mr-4">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
                  <p className="text-gray-300 mb-2">123 , Rajarhat New Town , West Bengal, India</p>
                  <a
                    href="https://maps.app.goo.gl/QTFZXTJW1mGRCMCJA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Get directions <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
  <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    {/* Twitter */}
    <motion.a
      whileHover={{ y: -3 }}
      href="#"
      className="w-10 h-10 flex items-center justify-center  rounded-full shadow-sm border border-gray-100 hover:bg-blue-50 hover:text-blue-500 transition-colors"
      aria-label="Twitter"
    >
      <FaXTwitter className="text-xl text-blue-400" />
    </motion.a>

    {/* LinkedIn */}
    <motion.a
      whileHover={{ y: -3 }}
      href="#"
      className="w-10 h-10 flex items-center justify-center  rounded-full shadow-sm border border-gray-100 hover:bg-blue-50 hover:text-blue-700 transition-colors"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn className="text-xl text-blue-600" />
    </motion.a>

    {/* GitHub */}
    <motion.a
      whileHover={{ y: -3 }}
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 hover:text-gray-800 transition-colors"
      aria-label="GitHub"
    >
      <FaGithub className="text-xl text-gray-100" />
    </motion.a>

    {/* Dribbble */}
    {/* <motion.a
      whileHover={{ y: -3 }}
      href="#"
      className="w-10 h-10 flex items-center justify-center bg-transparent rounded-full shadow-sm border border-gray-100 hover:bg-pink-50 hover:text-pink-500 transition-colors"
      aria-label="Dribbble"
    >
      <FaDribbble className="text-xl text-pink-500" />
    </motion.a> */}
  </div>
</div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className=" p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <FiCheckCircle className="text-3xl text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSuccess(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 ">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium  text-gray-100 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-transparent text-white w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-transparent text-white w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-transparent text-white w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-medium text-white ${
                        isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                      } transition-colors`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <FiSend className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;