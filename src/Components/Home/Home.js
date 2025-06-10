import { useState} from 'react';
import { FiArrowRight} from 'react-icons/fi';
import logo from '../../Assets/Ray-Verse-logo.png';

const SoftwareCompanyHomepage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  const features = [
    {
      title: "Enterprise Solutions",
      description: "Scalable software tailored for large organizations with complex workflows.",
      icon: "💼"
    },
    {
      title: "AI Integration",
      description: "Cutting-edge artificial intelligence built into all our products.",
      icon: "🤖"
    },
    {
      title: "Cloud Native",
      description: "Built for the cloud with maximum reliability and scalability.",
      icon: "☁️"
    }
  ];

  const clients = [
    { name: "Forbes", logo: logo },
    { name: "Microsoft", logo: logo },
    { name: "Siemens", logo: logo },
    { name: "HSBC", logo: logo }
  ];

  return (
    <div className="font-sans bg-[#0A0A0A] ">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="pt-32 pb-20 ">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 leading-tight mb-6">
              Enterprise Software <span className="text-amber-600">Reimagined</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We build sophisticated solutions that transform businesses and drive innovation in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition font-medium">
                Request Demo
              </button>
              <button className="px-8 py-3 border border-indigo-900 text-indigo-900 rounded-md hover:bg-indigo-50 transition font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className=" p-2 rounded-lg shadow-xl">
              <img 
                src={logo}
                alt="Software Dashboard" 
                className="rounded-lg w-full h-auto "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted by industry leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <img 
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform delivers everything you need to modernize your operations and stay ahead of the competition.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="flex flex-col space-y-4 pr-8">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`text-left p-6 rounded-lg transition ${activeFeature === index ? 'bg-indigo-100 border-l-4 border-amber-600' : 'hover:bg-gray-100'}`}
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">{feature.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg text-indigo-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <img 
                    src={`/feature-${activeFeature + 1}.png`} 
                    alt={features[activeFeature].title}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">{features[activeFeature].title}</h3>
                <p className="text-gray-700 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <button className="flex items-center text-amber-600 font-medium">
                  Learn more <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20  text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
            Schedule a consultation with our experts to discover how our solutions can work for you.
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition font-medium">
            Contact Sales
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default SoftwareCompanyHomepage;