import { FiClipboard, FiSettings, FiPenTool, FiLayers, FiMonitor, FiServer, FiCheckCircle, FiUploadCloud, FiRefreshCw, FiTrendingUp } from "react-icons/fi";

const steps = [
    {
      number: 1,
      title: 'Requirement Gathering',
      icon: <FiClipboard className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Understand client goals",
        "Define product features",
        "Identify target audience",
      ],
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: 'Planning & Feasibility',
      icon: <FiSettings className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Scope & timeline definition",
        "Tech stack selection",
        "Budget and MVP planning",
      ],
      color: "bg-purple-500"
    },
    {
      number: 3,
      title: 'UI/UX Design',
      icon: <FiPenTool className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Wireframes and user flows",
        "Interactive prototypes",
        "Brand-aligned visuals",
      ],
      color: "bg-pink-500"
    },
    {
      number: 4,
      title: 'Architecture & Tech Stack Setup',
      icon: <FiLayers className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Codebase structuring",
        "Environment configuration",
        "Version control setup",
      ],
      color: "bg-indigo-500"
    },
    {
      number: 5,
      title: 'Frontend Development',
      icon: <FiMonitor className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Responsive UI development",
        "API integration",
        "Cross-platform compatibility",
      ],
      color: "bg-green-500"
    },
    {
      number: 6,
      title: 'Backend Development',
      icon: <FiServer className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Database schema design",
        "Secure API development",
        "Business logic implementation",
      ],
      color: "bg-red-500"
    },
    {
      number: 7,
      title: 'Testing & QA',
      icon: <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Unit and integration tests",
        "UI/UX testing",
        "Bug fixing and QA cycles",
      ],
      color: "bg-yellow-500"
    },
    {
      number: 8,
      title: 'Deployment',
      icon: <FiUploadCloud className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Live server configuration",
        "CI/CD pipeline integration",
        "SSL and DNS setup",
      ],
      color: "bg-cyan-500"
    },
    {
      number: 9,
      title: 'Maintenance & Updates',
      icon: <FiRefreshCw className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Performance monitoring",
        "Bug fixes and patches",
        "Feature enhancements",
      ],
      color: "bg-gray-500"
    },
    {
      number: 10,
      title: 'Marketing & Launch',
      icon: <FiTrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "SEO and analytics setup",
        "Marketing campaign support",
        "Launch strategy execution",
      ],
      color: "bg-emerald-500"
    },
  ];

  export default steps;