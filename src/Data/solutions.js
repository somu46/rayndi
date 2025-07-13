import { FiCode, FiCloud, FiDatabase, FiLock, FiSmartphone, FiBarChart2 } from "react-icons/fi";

  const solutions = [
    {
      icon: <FiCode className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed specifically for your business needs and workflows.",
      features: ["Web Applications", "Desktop Software", "Cross-Platform", "Legacy Modernization"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <FiCloud className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your digital transformation.",
      features: ["Cloud Migration", "Hybrid Cloud", "Serverless Architecture", "Cloud Security"],
      color: "from-purple-500 to-fuchsia-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10"
    },
    {
      icon: <FiDatabase className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions.",
      features: ["BI Dashboards", "Predictive Analytics", "Data Warehousing", "ETL Pipelines"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: <FiLock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Risk Assessment", "Penetration Testing", "Security Monitoring", "Compliance"],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
    },
    {
      icon: <FiSmartphone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Mobile Solutions",
      description: "Engaging mobile experiences for iOS, Android and cross-platform.",
      features: ["Native Apps", "React Native", "Progressive Web Apps", "Mobile Backend"],
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-500/10 to-yellow-500/10"
    },
    {
      icon: <FiBarChart2 className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services for enterprises.",
      features: ["Process Automation", "AI Integration", "IoT Solutions", "Blockchain"],
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
    }
  ];

  export default solutions;