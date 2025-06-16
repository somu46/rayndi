import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="relative h-64 overflow-hidden">
        {/* Replace with actual image */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">{member.name} Photo</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-blue-200">{member.role}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex space-x-4">
          <motion.a
            href={member.social.twitter}
            whileHover={{ y: -2 }}
            className="text-gray-500 hover:text-blue-400"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={member.social.linkedin}
            whileHover={{ y: -2 }}
            className="text-gray-500 hover:text-blue-700"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;