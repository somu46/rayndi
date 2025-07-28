import { useState } from 'react';
import './TechStack.css'; // Assuming you have a CSS file for styles


const TechnologiesWeUse = () => {
  const [activeTab, setActiveTab] = useState('Mobile Apps');

  const techCategories = [
    {
      title: "Mobile Apps",
      subcategories: [
        {
          title: "iOS",
          technologies: [
            { name: "Swift", icon: "swift" },
            { name: "UI Kit", icon: "uikit" },
            { name: "RxSwift", icon: "rxswift" },
            { name: "Combine", icon: "combine" },
            { name: "MVVM", icon: "mvvm" },
            { name: "Alomofire", icon: "alamofire" },
            { name: "Core Data", icon: "coredata" }
          ]
        },
        {
          title: "Android",
          technologies: [
            { name: "Kotlin", icon: "kotlin" },
            { name: "MVVM", icon: "mvvm" },
            { name: "RxJava", icon: "rxjava" },
            { name: "Java", icon: "java" },
            { name: "Retrofit", icon: "retrofit" },
            { name: "Jetpack", icon: "jetpack" }
          ]
        }
      ]
    },
    {
      title: "Web Platforms",
      subcategories: [
        {
            title: "Frontend",
            technologies: [
              { name: "React", icon: "react" },
              { name: "Next.js", icon: "nextjs" },
              { name: "Vue.js", icon: "vue" },
              { name: "Angular", icon: "angular" },
              { name: "Svelte", icon: "svelte" },
              
              { name: "Laravel", icon: "laravel" },
            ]
        },
        {
            title: "Backend",
            technologies: [
              { name: "Node.js", icon: "nodejs" },
              { name: "Express", icon: "express" },
              { name: "Django", icon: "django" },
              { name: "Flask", icon: "flask" }
            ]
        },
        
        {
            title: "CMS",
            technologies: [
              { name: "WordPress", icon: "wordpress" },
              { name: "Shopify", icon: "shopify" }
            ]
        }
      ]
    },
    {
      title: "Cross Platforms",
      subcategories: [
        {
          title: "React Native",
          technologies: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Vue.js", icon: "vue" },
            { name: "Angular", icon: "angular" }
          ]
        },
        {
          title: "Flutter",
          technologies: [
            { name: "React Native", icon: "react" },
            { name: "Flutter", icon: "flutter" },
            { name: "Ionic", icon: "ionic" }
          ]
        }
      ]
      
    },
    {
      title: "Games",
      subcategories: [
        {
          title: "Engine",
            technologies: [
                { name: "Unity", icon: "unity" },
                { name: "Unreal Engine", icon: "unrealengine" },
                { name: "Godot", icon: "godot" }
            ]
        },
        
        {
          title: "Servers",
            technologies: [
                { name: "Photon", icon: "photon" },
                { name: "PlayFab", icon: "playfab" },
                { name: "Firebase", icon: "firebase" }
            ]
        }
      ]
    },
    {
      title: "Database",
      subcategories: [
        {
          title: "SQL",
          technologies: [
            { name: "MySQL", icon: "mysql" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "SQLite", icon: "sqlite" },
            
      ]
        },
        {
          title: "NoSQL",
          technologies: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "Cassandra", icon: "cassandra" },
            { name: "Redis", icon: "redis" },
            { name: "Firebase Realtime Database", icon: "firebase" }
          ]
        }
      ]
    },
    {
      title: "Cloud & DevOps",
      subcategories: [
        {
          title: "Cloud Providers",
          technologies: [
            { name: "AWS", icon: "aws" },
            { name: "Azure", icon: "azure" },
            { name: "Google Cloud", icon: "gcp" },
            { name: "Vercel", icon: "vercel" },
            { name: "Netlify", icon: "netlify" }
      ]
    },
        {
          title: "DevOps Tools",
          technologies: [
            { name: "Docker", icon: "docker" },
            { name: "Kubernetes", icon: "kubernetes" },
            { name: "Jenkins", icon: "jenkins" },
            { name: "GitLab CI/CD", icon: "gitlab" }
          ]
        }
      ]
    },
    {
      title: "Design & Prototyping",
      subcategories: [
        {
          title: "Design Tools",
          technologies: [
            { name: "Figma", icon: "figma" },
            { name: "Adobe XD", icon: "adobexd" },
            { name: "Sketch", icon: "sketch" }
          ]
        },
        {
          title: "Prototyping Tools",
          technologies: [
            { name: "InVision", icon: "invision" },
            { name: "Marvel", icon: "marvel" },
            { name: "Axure", icon: "axure" }
          ]
        }
      ]
    }

  ];

  const activeCategory = techCategories.find(cat => cat.title === activeTab);

  return (
    <section className="technology overflow-x-hidden sm:overflow-x-auto">
      <div className="px-2 lg:px-8 pt-4 md:pt-2 lg:pt-[1.5rem] max-w-7xl mx-auto">
        <div className="max-w-3xl xl:max-w-4xl text-center px-2">
          <div className="lg:overflow-hidden">
            <h2 className="font-bold -translate-y-[3px] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-white">
              <span>technologies we use</span>
            </h2>
          </div>
          <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white">
            Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, 
            specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.
          </p>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300 px-2">
          {/* Tab Navigation */}
          <div className="scrollbar-hide w-full md:w-[30%] lg:w-[21.5%] 2xl:w-[24%] overflow-auto md:overflow-hidden md:border-r border-gray-300 md:pt-12 md:border-b-0 border-b">
            <div className="flex md:block gap-x-5" role="tablist" aria-orientation="horizontal">
              {techCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(category.title)}
                  className={`focus-visible:outline-none block ${activeTab === category.title ? 'home-module--techActive--abf49' : ''}`}
                  role="tab"
                  type="button"
                  aria-selected={activeTab === category.title}
                >
                  <div className="z-10 whitespace-nowrap md:whitespace-normal outline-none md:w-full md:rounded-full py-3 md:px-7 font-medium text-left">
                    <strong className={` font-normal block text-lg xl:text-xl 2xl:text-2xl outline-none tracking-[0px] truncate ${activeTab === category.title ? '!font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' : 'text-white'}`}>
                      {category.title}
                    </strong>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="pt-8 w-full md:w-8/12 lg:w-9/12 md:ps-12 lg:pb-6  rounded-lg backdrop-blur-sm">
  {activeCategory?.subcategories?.map((subcategory) => (
    <div key={subcategory.title} className="mb-12 text-white">
      <h4 className="mb-6 font-bold text-xl xl:text-2xl 2xl:text-[1.75rem] tracking-wide text-center text-cyan-400">
        {subcategory.title}
      </h4>
      <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6 justify-center">
        {subcategory.technologies.map((tech) => (
          <a
            href={`https://www.google.com/search?q=${tech.name}`}
            key={tech.name}
            className="group md:w-48 lg:w-52 w-[140px] bg-gray-800/80 hover:bg-gray-700/90 px-4 py-4 border border-gray-700 rounded-2xl sm:rounded-3xl font-medium md:text-base text-sm hover:border-indigo-400/50 transition-all duration-300 flex flex-row items-center gap-3 hover:shadow-lg hover:shadow-indigo-500/10 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-6 w-6 md:h-7 md:w-7 group-hover:scale-110 transition-transform"
              src={`https://skillicons.dev/icons?i=${tech.icon}`}
              alt={tech.name}
              loading="lazy"
            />
            <div className="text-left overflow-hidden">
              <span className="block group-hover:translate-x-1 transition-transform">
                {tech.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesWeUse;