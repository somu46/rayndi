import React, { useState, useEffect, useRef } from 'react';

const ProductDevelopmentProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftColRef = useRef(null);
  const photosRef = useRef([]);
  const progressBarRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      title: "Ideate",
      description: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      image: "https://www.cubix.co/dist/images/Ideate-bc1d4e566aed2c962b29a5eb74cb4254.webp"
    },
    {
      id: 2,
      title: "Design",
      description: "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
      image: "https://www.cubix.co/dist/images/Design-39bcd11bff10a7a8ea23556caf975533.webp"
    },
    {
      id: 3,
      title: "Develop",
      description: "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.",
      image: "https://www.cubix.co/dist/images/Development-416373ce2f0f56120822d93ff881ddaa.webp"
    },
    {
      id: 4,
      title: "Test",
      description: "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.",
      image: "https://www.cubix.co/dist/images/Test-60ec19b4da318d0eaed81b505394b34c.webp"
    },
    {
      id: 5,
      title: "Launch",
      description: "Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.",
      image: "https://www.cubix.co/dist/images/Launch-4770dcb20907819e53c2ad2a9c9b3506.webp"
    },
    {
      id: 6,
      title: "Support",
      description: "Providing ongoing support and enhancements to ensure continued product success.",
      image: "https://www.cubix.co/dist/images/NewSupport-e6ca49799c45bd3b18e9095cc5a2370c.webp"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!leftColRef.current) return;

      const detailsElements = leftColRef.current.querySelectorAll('.details');
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      detailsElements.forEach((detail, index) => {
        const rect = detail.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = rect.bottom + scrollPosition;

        // Check if element is in view
        if (scrollPosition + windowHeight * 0.3 >= elementTop && 
            scrollPosition + windowHeight * 0.3 <= elementBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update photo positions based on active index
    if (photosRef.current.length > 0) {
      photosRef.current.forEach((photo, index) => {
        if (photo) {
          photo.style.transform = index === activeIndex 
            ? 'translate(0px, 0px)' 
            : 'translate(0px, 900px)';
        }
      });
    }

    // Update progress bar
    if (progressBarRef.current) {
      const progress = (activeIndex / (processSteps.length - 1)) * 100;
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [activeIndex, processSteps.length]);

  return (
    <section className="product bg-dark-theme" id="product">
      <div className="pt-16 md:pt-24 lg:pt-[10.5rem] pb-16 md:pb-24 lg:pb-36">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-20 flex justify-between xs:items-end xs:flex-row flex-col xs:gap-0 gap-6">
            <div className="lg:overflow-hidden">
              <h2 className="text-white font-extrabold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>our product </span><br />
                <span className="text-theme"><span>development process</span></span>
              </h2>
            </div>
            <a className="text-white hover:text-[#2ED06E] text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out" href="/about/process/">
              View More
              <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyNSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjk3NTQgNy45NDQ4SDIwLjQyNDRDMTQuMTI2NyA3Ljk0NDggNy44MjkwOCA3Ljk0NDggMS41MzE0NCA3Ljk0NDhDMS4zNTYxNyA3Ljk1MDA5IDEuMTgwNzYgNy45NDIwNyAxLjAwNjY0IDcuOTIwNzhDMC43ODk4NTggNy44ODQzNSAwLjU5MjY5MiA3Ljc2OTQyIDAuNDUwNDAzIDcuNTk2NTNDMC4zMDgxMTMgNy40MjM2NSAwLjIyOTk4IDcuMjA0MSAwLjIyOTk4IDYuOTc3MTRDMC4yMjk5OCA2Ljc1MDE5IDAuMzA4MTEzIDYuNTMwNjMgMC40NTA0MDMgNi4zNTc3NUMwLjU5MjY5MiA2LjE4NDg3IDAuNzg5ODU4IDYuMDY5OTMgMS4wMDY2NCA2LjAzMzUxQzEuMTgwNzMgNi4wMTE4MyAxLjM1NjE3IDYuMDAzODEgMS41MzE0NCA2LjAwOTQ5SDIwLjg5MTRDMjAuOTE1NCA1Ljk2NzY1IDIwLjkzOTQgNS45MjU4MSAyMC45NjY0IDUuODg0NzVDMjAuODE2NSA1Ljc1NjE1IDIwLjY1NjggNS42MzkxNiAyMC41MTY2IDUuNDk3MzhDMTkuNTkyOSA0LjU1Mzc0IDE4LjY3MjggMy42MDY0OSAxNy43NTYxIDIuNjU1NjJDMTcuNjAzOSAyLjUwODIgMTcuNTAyNyAyLjMxMzM1IDE3LjQ2NzcgMi4xMDA4NUMxNy40MzI4IDEuODg4MzQgMTcuNDY2MSAxLjY2OTg2IDE3LjU2MjcgMS40Nzg3OUMxNy42NTQ2IDEuMjkyOTQgMTcuODA0OSAxLjE0NDg0IDE3Ljk4ODkgMS4wNTg3MUMxOC4xNzI5IDAuOTcyNTgxIDE4LjM3OTcgMC45NTM1MiAxOC41NzU1IDEuMDA0NjVDMTguNzY1NyAxLjA1NzUxIDE4LjkzOTggMS4xNTkzMyAxOS4wODE2IDEuMzAwNkMyMC42OTM1IDIuOTM5OTYgMjIuMjk4OSA0LjU4NTUxIDIzLjg5NzggNi4yMzcyNkMyNC4zNDMxIDYuNjk2NjkgMjQuMzQ3NiA3LjI0NDQzIDIzLjg5NzggNy43MDkyN0MyMi4yOTA0IDkuMzcxMzYgMjAuNjc3IDExLjAyNyAxOS4wNTc2IDEyLjY3NjJDMTguNjYxIDEzLjA4MDYgMTguMDc3NyAxMy4wNzI4IDE3LjcxNzkgMTIuNjg5M0MxNy4zNTggMTIuMzA1OCAxNy4zNjQgMTEuNzA3NyAxNy43NTM5IDExLjI5NDhDMTguNzk3NSAxMC4yMDQ3IDE5Ljg0NzggOS4xMTg1MyAyMC45NzU0IDcuOTQ0OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" className="block group-hover:hidden w-5 lg:w-full" alt="link arrow" />
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyNSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjg2MjYgNy44MjM3SDIwLjMxMTZDMTQuMDEzOSA3LjgyMzcgNy43MTYyOCA3LjgyMzcgMS40MTg2NSA3LjgyMzdDMS4yNDMzOCA3LjgyOSAxLjA2Nzk3IDcuODIwOTcgMC44OTM4NDMgNy43OTk2OUMwLjY3NzA2NSA3Ljc2MzI2IDAuNDc5OSA3LjY0ODMyIDAuMzM3NjEgNy40NzU0NEMwLjE5NTMyIDcuMzAyNTYgMC4xMTcxODggNy4wODMgMC4xMTcxODggNi44NTYwNUMwLjExNzE4OCA2LjYyOTA5IDAuMTk1MzIgNi40MDk1NCAwLjMzNzYxIDYuMjM2NjZDMC40Nzk5IDYuMDYzNzcgMC42NzcwNjUgNS45NDg4NCAwLjg5Mzg0MyA1LjkxMjQxQzEuMDY3OTQgNS44OTA3NCAxLjI0MzM4IDUuODgyNzEgMS40MTg2NSA1Ljg4ODM5SDIwLjc3ODZDMjAuODAyNiA1Ljg0NjU2IDIwLjgyNjYgNS44MDQ3MiAyMC44NTM2IDUuNzYzNjZDMjAuNzAzNyA1LjYzNTA1IDIwLjU0NCA1LjUxODA3IDIwLjQwMzggNS4zNzYyOUMxOS40ODAxIDQuNDMyNjUgMTguNTYgMy40ODU0IDE3LjY0MzMgMi41MzQ1M0MxNy40OTExIDIuMzg3MSAxNy4zODk5IDIuMTkyMjYgMTcuMzU0OSAxLjk3OTc1QzE3LjMyIDEuNzY3MjUgMTcuMzUzNCAxLjU0ODc3IDE3LjQ0OTkgMS4zNTc2OUMxNy41NDE4IDEuMTcxODUgMTcuNjkyMSAxLjAyMzc1IDE3Ljg3NjEgMC45Mzc2MTdDMTguMDYwMSAwLjg1MTQ4NyAxOC4yNjY5IDAuODMyNDI3IDE4LjQ2MjggMC44ODM1NTJDMTguNjUyOSAwLjkzNjQxNyAxOC44MjcgMS4wMzgyNCAxOC45Njg4IDEuMTc5NUMyMC41ODA3IDIuODE4ODYgMjIuMTg2MSA0LjQ2NDQyIDIzLjc4NSA2LjExNjE3QzI0LjIzMDMgNi41NzU1OSAyNC4yMzQ4IDcuMTIzMzMgMjMuNzg1IDcuNTg4MThDMjIuMTc3NiA5LjI1MDI2IDIwLjU2NDIgMTAuOTA1OSAxOC45NDQ4IDEyLjU1NTFDMTguNTQ4MiAxMi45NTk1IDE3Ljk2NDkgMTIuOTUxNyAxNy42MDUxIDEyLjU2ODJDMTcuMjQ1MiAxMi4xODQ3IDE3LjI1MTIgMTEuNTg2NiAxNy42NDExIDExLjE3MzdDMTguNjg0NyAxMC4wODM2IDE5LjczNSA4Ljk5NzQ0IDIwLjg2MjYgNy44MjM3WiIgZmlsbD0iIzJFRDA2RSIvPgo8L3N2Zz4K" className="hidden group-hover:block w-5 lg:w-full" alt="link arrow" />
              </div>
            </a>
          </div>

          {/* Mobile View */}
          <div className="w-auto whitespace-nowrap overflow-auto block lg:hidden">
            {processSteps.map((step, index) => (
              <div key={step.id} className="mr-20 pb-4 sm:pb-24 xl:pb-0 inline-block w-full sm:w-[70%] md:w-[50%]">
                <div className="flex flex-col gap-x-8 gap-y-10 sm:gap-y-10 md:gap-y-8 xl:flex-row xl:items-stretch">
                  <img className="object-cover rounded-full" width="300" src={step.image} alt={step.title} />
                  <div className="whitespace-break-spaces">
                    <b className="font-bold text-theme text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px]">{step.title}</b>
                    <p className="my-10 text-white text-sm lg:text-md xl:text-lg 2xl:text-xl">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="gallery relative hidden lg:flex">
            <div className="left-col w-2/4" ref={leftColRef}>
              <div className="detailsWrapper pl-12">
                {processSteps.map((step, index) => (
                  <div key={step.id} className="details pb-36">
                    <div className="lg:pr-8 lg:pt-4">
                      <div className="lg:max-w-lg">
                        <p className="text-white font-normal mb-3 text-sm lg:text-md xl:text-lg 2xl:text-xl">{`0${index + 1}/06`}</p>
                        <div className="overflow-hidden">
                          <b className="font-bold text-white text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[60px] 2xl:!leading-[75px]">
                            {step.title}
                          </b>
                        </div>
                        <p className="mt-7 mb-10 leading-9 text-white font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="right h-[34rem] w-96 ml-20 rounded-full overflow-hidden md:sticky top-[10%]">
              <div className="rounded-full">
                <div className="photos relative">
                  {processSteps.map((step, index) => (
                    <div 
                      key={step.id} 
                      className="photo w-full h-full absolute inset-0 transition-transform ease-out duration-300"
                      ref={el => photosRef.current[index] = el}
                      style={{ transform: index === activeIndex ? 'translate(0px, 0px)' : 'translate(0px, 900px)' }}
                    >
                      <div className="rounded-2xl">
                        <img 
                          src={step.image} 
                          width="400" 
                          className="h-[34rem] w-full object-cover" 
                          alt={step.title} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="slider-progress-bar-container">
                <div 
                  id="sliderProgressBar" 
                  className="slider-progress-bar" 
                  ref={progressBarRef}
                  style={{ width: `${(activeIndex / (processSteps.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentProcess;