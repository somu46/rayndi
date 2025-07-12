import { motion } from "framer-motion";
import { 
  FiArrowLeft, 
  FiHome, 
  FiMail, 
  FiFrown,
  FiAlertCircle,
  FiHelpCircle
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 ">
      <NavBar/>
      <div className="flex-grow  flex items-center justify-center p-6 relative overflow-hidden ">
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
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -z-10"
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
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl -z-10"
        />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md mx-auto mt-20"
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
              className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-6"
            >
              <FiFrown className="text-4xl text-red-500" />
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-col space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(-1)}
                className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Go Back
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/")}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition-colors"
              >
                <FiHome className="mr-2" />
                Return Home
              </motion.button>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <FiHelpCircle className="text-gray-500 mr-2" />
              <p className="text-center text-gray-600">
                Still need help?
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="mailto:support@example.com"
              className="flex items-center justify-center px-6 py-3 border border-gray-200 hover:border-gray-300 rounded-lg font-medium transition-colors"
            >
              <FiMail className="mr-2" />
              Contact Support
            </motion.a>
          </div>
        </motion.div>

        {/* Floating astronaut icon */}
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
          className="absolute bottom-8 right-8 text-gray-300"
        >
          <FiAlertCircle className="text-5xl opacity-70" />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;