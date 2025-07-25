import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsCheckCircle, BsFillPersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';


const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Senior Developer at TechCorp',
    review:
      'The attention to detail and premium quality exceeded my expectations. The customer service was exceptional, and the product arrived earlier than expected.',
    summary:'Outstanding Experience',
    rating: 5,
    verified: true,
  },
  {
    name: 'Ayesha Kapoor',
    role: 'Marketing Manager at BrandEdge',
    review:
      'Incredible service! The team was responsive and professional. I was amazed by how smooth the entire process was.',
    summary:'Outstanding Experience',
      rating: 4,
    verified: true,
  },
  {
    name: 'Rahul Mehta',
    role: 'Freelancer & Consultant',
    review:
      'Very reliable and prompt delivery. The interface is easy to use and the support team resolved my issue within hours.',
    summary:'Outstanding Experience',
      rating: 5,
    verified: false,
  },
    {
    name: 'Rahul Mehta',
    role: 'Freelancer & Consultant',
    review:
      'Very reliable and prompt delivery. The interface is easy to use and the support team resolved my issue within hours.',
    summary:'Outstanding Experience',
      rating: 5,
    verified: false,
  },
    {
    name: 'Rahul Mehta',
    role: 'Freelancer & Consultant',
    review:
      'Very reliable and prompt delivery. The interface is easy to use and the support team resolved my issue within hours.',
    summary:'Outstanding Experience',
      rating: 5,
    verified: false,
  },
    {
    name: 'Rahul Mehta',
    role: 'Freelancer & Consultant',
    review:
      'Very reliable and prompt delivery. The interface is easy to use and the support team resolved my issue within hours.',
    summary:'good',
    rating: 5,
    verified: false,
  },
];

const Card = () => {
  return (
    <div>
      <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-200">
              Client <span className="text-blue-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>
    <div className="flex flex-wrap justify-center gap-10 p-2">
  {testimonials.map((item, index) => (
    <div key={index} className="group relative w-full sm:w-[350px] flex-shrink-0">
      <div className="relative h-full overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/10">
        {/* Glowing background circles */}
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />

        {/* Card Content - using flex-col to ensure equal height */}
        <div className="relative p-6 h-full flex flex-col">
          {/* User Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="group/avatar relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur transition-all duration-300 group-hover/avatar:opacity-100" />
              <div className="relative h-12 w-12 rounded-full bg-slate-950 ring-2 ring-slate-950 flex items-center justify-center">
                <BsFillPersonFill className="h-6 w-6 text-indigo-500" />
              </div>
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-white truncate">{item.name}</h4>
              <p className="text-sm text-slate-400 truncate">{item.role}</p>
            </div>
            {item.verified && (
              <div className="ml-auto flex-shrink-0">
                <div className="flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1">
                  <BsCheckCircle className="h-4 w-4 text-indigo-500" />
                  <span className="text-xs font-medium text-indigo-500">Verified</span>
                </div>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(item.rating)].map((_, i) => (
              <FaStar key={i} className="h-5 w-5 text-amber-400" />
            ))}
          </div>

          {/* Review Content - flex-grow to take remaining space */}
          <div className="space-y-2 flex-grow">
            <h3 className="text-xl font-semibold text-white">{item.summary}</h3>
            <p className="text-slate-400 line-clamp-3">{item.review}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Card;
