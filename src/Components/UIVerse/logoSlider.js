import React from 'react';
import logo from '../../Assets/try-demo.png';

const LogoSlider = () => {
  const logos = [
    { src: logo, alt: 'logo-0' },
    { src: logo, alt: 'logo-1' },
    { src: logo, alt: 'logo-2' },
    { src: logo, alt: 'logo-3' },
    { src: logo, alt: 'logo-4' },
    { src: logo, alt: 'logo-5' },
    { src: logo, alt: 'logo-6' },
    { src: logo, alt: 'logo-7' },
    { src: logo, alt: 'logo-8' },
    { src: logo, alt: 'logo-9' },
  ];

  // Duplicate the logos to create seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="logo-slider overflow-hidden py-2">
      <div className="relative">
        <div className="slide-track flex animate-[scroll_5s_linear_infinite] sm:animate-[scroll_20s_linear_infinite] hover:animation-pause">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="slide flex-shrink-0 px-4 flex items-center justify-center"
              style={{ width: 'clamp(100px, 20vw, 200px)' }} // Responsive width
            >
              <img 
                className="h-auto max-h-[60px] md:max-h-[91px] w-auto object-contain" 
                loading="lazy" 
                src={logo.src} 
                alt={logo.alt} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Add the animation to your Tailwind config or CSS */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;