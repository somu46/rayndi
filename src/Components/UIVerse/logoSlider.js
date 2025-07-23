import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LogoCarousel = () => {
  const logos = [
    { src: "https://cdn.prod.website-files.com/679630f35dce1b20dcba7777/679cae404c62ecd8e7e15fb6_exotel.png", alt: "Exotel", title: "Exotel", description: "Calling" },
    { src: "https://cdn.prod.website-files.com/679630f35dce1b20dcba7777/679cae405b3e9cfb70d87a01_app%20maker.png", alt: "App Maker", title: "App Maker", description: "Mobile Apps" },
    { src: "https://cdn.prod.website-files.com/679630f35dce1b20dcba7777/679cae3f4c62ecd8e7e15f83_shiprocket.png", alt: "Shiprocket", title: "Shiprocket", description: "Shipment Partner" },
    { src: "https://cdn.prod.website-files.com/679630f35dce1b20dcba7777/67a0f323218930f60a655c54_nector.png", alt: "Nector", title: "Nector", description: "Loyalty Platform" },
    { src: "https://cdn.prod.website-files.com/679630f35dce1b20dcba7777/679cae454b872af021a52354_freshsales.png", alt: "Freshsales", title: "Freshsales", description: "CRM Platform" },
    { src: "https://cdn.prod.website-files.com/679630f35dce1b20dcba7777/679cae4321c6cb8a7f955a4a_appointly.png", alt: "Appointly", title: "Appointly", description: "Bookings Application" },
    { src: "https://cdn.prod.website-files.com/679630f35dce1b20dcba7777/679cae4232e7bee2b65af66a_shopflo-1.png", alt: "Shopflo", title: "Shopflo", description: "Checkout" }
  ];

  // Duplicate the logos array to create seamless looping
  const duplicatedLogos = [...logos, ...logos, ...logos];
  const controls = useAnimation();
  const carouselRef = useRef();

  useEffect(() => {
    const carouselWidth = carouselRef.current?.scrollWidth;
    const itemWidth = carouselRef.current?.firstChild?.offsetWidth;
    const duration = (carouselWidth / itemWidth) * 2; // Adjust speed based on content

    const sequence = async () => {
      await controls.start({
        x: [-carouselWidth / 3, -carouselWidth / 3 * 2],
        transition: { duration, ease: "linear", repeat: Infinity }
      });
    };

    sequence();
  }, [controls]);

  return (
    <div className=" py-10 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  trusted by industry leaders
                </span>
              </span>
            </h2>
        
        <div className="relative">
          {/* Gradient fade effects */}
          {/* <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-900 to-transparent z-10" /> */}
        {/* <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900 to-transparent z-10" /> */}
          
          {/* Main Carousel */}
          <motion.div
            ref={carouselRef}
            className="flex"
            animate={controls}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 px-2 lg:px-12 "
                whileHover={{ scale: 1.05 }}
              >
                <div className="rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-16 w-auto object-contain mb-4"
                    loading="lazy"
                  />
                  <h4 className="text-lg font-semibold text-white">{logo.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{logo.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;