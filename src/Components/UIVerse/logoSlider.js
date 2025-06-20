import React from 'react';

const LogoSlider = () => {
  const logos = [
    { src: '', alt: 'logo-0' },
    { src: '', alt: 'logo-1' },
    { src: '', alt: 'logo-2' },
    { src: '', alt: 'logo-3' },
    { src: '', alt: 'logo-4' },
    { src: '', alt: 'logo-5' },
    { src: '', alt: 'logo-6' },
    { src: '', alt: 'logo-7' },
    { src: '', alt: 'logo-8' },
    { src: '', alt: 'logo-9' },

  ];

  // Duplicate the logos to create seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="logo-slider overflow-x-hidden sm:overflow-x-auto py-8">
      <div className="border-b border-gray-300">
        <div className="relative">
          <div className="slide-track flex animate-[scroll_20s_linear_infinite] hover:animation-pause">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="slide flex-shrink-0">
                <img 
                  className="h-[91px] mr-[52px]" 
                  loading="lazy" 
                  src={logo.src} 
                  width="120" 
                  alt={logo.alt} 
                />
              </div>
            ))}
          </div>
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