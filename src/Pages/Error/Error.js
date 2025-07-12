import { motion } from "framer-motion";
import { FiArrowLeft, FiHome, FiMail, FiFrown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
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
        className="fixed top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -z-10"
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
        className="fixed bottom-1/3 right-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl -z-10"
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md"
      >
        <div className="p-8 text-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6"
          >
            <FiFrown className="text-3xl text-red-500" />
          </motion.div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(-1)}
              className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium"
            >
              <FiArrowLeft className="mr-2" />
              Go Back
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/")}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg"
            >
              <FiHome className="mr-2" />
              Return Home
            </motion.button>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-4">
            Still need help?
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            href="mailto:support@example.com"
            className="flex items-center justify-center px-6 py-3 border border-gray-200 rounded-lg font-medium"
          >
            <FiMail className="mr-2" />
            Contact Support
          </motion.a>
        </div>
      </motion.div>

      {/* Floating astronaut animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="fixed bottom-8 right-8 w-16 h-16"
      >
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192z" fill="#64748b"/>
          <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" fill="#94a3b8"/>
          <circle cx="256" cy="256" r="48" fill="#f8fafc"/>
          <path d="M256 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="#e2e8f0"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default ErrorPage;