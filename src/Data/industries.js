import { FaClinicMedical, FaUniversity, FaShoppingCart, FaPlane, FaMoneyBillWave, FaFilm } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";

  const industries = [
    {
      name: "Healthcare",
      slug: "healthcare",
      icon: FaClinicMedical ,
      color: "text-blue-400",
      tagline: "Transforming patient care",
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      name: "Education",
      slug: "education",
      icon: FaUniversity ,
      color: "text-purple-400",
      tagline: "Next-gen learning platforms",
      bgGradient: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      name: "Retail & E-commerce",
      slug: "retail-ecommerce",
      icon: FaShoppingCart ,
      color: "text-amber-400",
      tagline: "Seamless shopping experiences",
      bgGradient: "bg-gradient-to-br from-amber-500 to-amber-700"
    },
    
    {
      name: "Travel",
      slug: "travel",
      icon: FaPlane ,
      color: "text-sky-400",
      tagline: "Smart aviation technologies",
      bgGradient: "bg-gradient-to-br from-sky-500 to-sky-700"
    },
    {
      name: "Finance",
      slug: "finance",
      icon: FaMoneyBillWave ,
      color: "text-green-400",
      tagline: "Fintech innovation",
      bgGradient: "bg-gradient-to-br from-green-500 to-green-700"
    }, 
    {
      name: "Real Estate",
      slug: "real-estate",
      icon: MdRealEstateAgent ,
      color: "text-yellow-400",
      tagline: "Property tech innovations",
      bgGradient: "bg-gradient-to-br from-yellow-500 to-yellow-700"
    },
    
    {
      name: "Entertainment",
      slug: "entertainment",
      icon: FaFilm ,
      color: "text-fuchsia-400",
      tagline: "Immersive experiences",
      bgGradient: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-700"
    },
    
  ];


  export default industries;