import { useState, useRef } from 'react';
import React from 'react';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaGlobe, 
  FaShoppingCart, 
  FaChartLine,
  FaCheck,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
  FaPaperclip,
  FaTrash,
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { 
  MdSend,
  MdAttachMoney,
  MdOutlineSchedule,
  MdOutlineDescription,
  MdBusiness,
  MdPerson,
  MdEmail,
  MdPhone
} from 'react-icons/md';
import { 
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineClipboardList,
  HiOutlineBriefcase
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
    currency: 'USD',
    files: []
  });

  const navigate = useNavigate(); 

  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('packages');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [descriptionMethod, setDescriptionMethod] = useState('text');
  const [isDragging, setIsDragging] = useState(false);

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar', icon: <HiOutlineCurrencyDollar className="mr-2" /> },
    { code: 'EUR', symbol: '€', name: 'Euro', icon: <HiOutlineCurrencyDollar className="mr-2" /> },
    { code: 'GBP', symbol: '£', name: 'British Pound', icon: <HiOutlineCurrencyDollar className="mr-2" /> },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee', icon: <HiOutlineCurrencyDollar className="mr-2" /> },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', icon: <HiOutlineCurrencyDollar className="mr-2" /> },
  ];

  const services = [
    { id: 'web', name: 'Website Development', icon: <FaGlobe className="text-blue-400 text-2xl" /> },
    { id: 'mobile', name: 'Mobile App Development', icon: <FaMobileAlt className="text-purple-400 text-2xl" /> },
    { id: 'software', name: 'Custom Software', icon: <FaLaptopCode className="text-emerald-400 text-2xl" /> },
    { id: 'ecommerce', name: 'E-commerce Solution', icon: <FaShoppingCart className="text-amber-400 text-2xl" /> },
    { id: 'marketing', name: 'Digital Marketing', icon: <FaChartLine className="text-rose-400 text-2xl" /> },
    { id: 'other', name: 'Other Service', icon: <HiOutlineBriefcase className="text-gray-400 text-2xl" /> }
  ];

  const budgets = [
    '$1,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000+'
  ];

  const timelines = [
    'Urgent (1-2 weeks)',
    'Quick (2-4 weeks)',
    'Standard (1-3 months)',
    'Flexible (3-6 months)',
    'Long-term (6+ months)'
  ];

  const pricingPackages = [
    {
      id: 'basic',
      name: 'Starter Package',
      price: { USD: 999, EUR: 850, GBP: 750, INR: 75000, AUD: 1300 },
      features: [
        '5 Custom Pages',
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Form',
        '1 Month Maintainance',
        
      ],
      bestFor: 'Small businesses, startups',
      icon: <HiOutlineClipboardList className="text-blue-400 text-3xl" />
    },
    {
      id: 'standard',
      name: 'Professional Package',
      price: { USD: 4999, EUR: 4250, GBP: 3750, INR: 375000, AUD: 6500 },
      features: [
        'iOS or Android App',
        'UI/UX Design',
        'Backend API Integration',
        'Basic Features',
        '3 Months Support'
      ],
      bestFor: 'Growing businesses, MVPs',
      icon: <HiOutlineBriefcase className="text-purple-400 text-3xl" />
    },
    {
      id: 'premium',
      name: 'Enterprise Package',
      price: { USD: 8999, EUR: 7650, GBP: 6750, INR: 675000, AUD: 11700 },
      features: [
        'Full Online Store',
        'Payment Gateway Integration',
        'Product Management',
        'Advanced SEO',
        '6 Months Support'
      ],
      bestFor: 'Online retailers, established businesses',
      icon: <FaLaptopCode className="text-emerald-400 text-3xl" />
    }
  ];

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...newFiles]
    }));
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const getFileIcon = (file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    switch(extension) {
      case 'pdf':
        return <FaFilePdf className="text-red-400 mr-2 flex-shrink-0" />;
      case 'doc':
      case 'docx':
        return <FaFileWord className="text-blue-400 mr-2 flex-shrink-0" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <FaFileImage className="text-green-400 mr-2 flex-shrink-0" />;
      default:
        return <FaFileAlt className="text-gray-400 mr-2 flex-shrink-0" />;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setFormData(prev => ({
      ...prev,
      service: pkg.name,
      budget: `${prev.currency}${pkg.price[prev.currency]}`
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    
    if (descriptionMethod === 'text' && !formData.description.trim()) {
      newErrors.description = 'Project description is required';
    } else if (descriptionMethod === 'file' && formData.files.length === 0) {
      newErrors.files = 'Please attach at least one file';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { ...formData, package: selectedPackage });
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 text-center">
          <div className="w-20 h-20 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
            <FaCheck className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
          <p className="text-gray-300 mb-6">Your quote request has been received. Our team will review your requirements and get back to you within 24 hours.</p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setSelectedPackage(null);
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                budget: '',
                timeline: '',
                description: '',
                currency: 'USD',
                files: []
              });
              setDescriptionMethod('text');
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 sm:text-5xl mb-4">
            Get Your Custom Quote
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose between our fixed-price packages or request a tailored solution for your project.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab('packages')}
            className={`py-4 px-6 font-medium text-sm focus:outline-none flex items-center ${activeTab === 'packages' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
          >
            <HiOutlineClipboardList className="mr-2" />
            Fixed Price Packages
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`py-4 px-6 font-medium text-sm focus:outline-none flex items-center ${activeTab === 'custom' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
          >
            <MdOutlineDescription className="mr-2" />
            Custom Quote
          </button>
        </div>

        {activeTab === 'packages' ? (
          <div className="mb-12">
            <div className="flex justify-end mb-6">
              <div className="w-48">
                <label htmlFor="currency" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <HiOutlineCurrencyDollar className="mr-2" />
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code} className="bg-gray-800">
                      {currency.name} ({currency.symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPackages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`rounded-xl overflow-hidden border-2 transition-all transform hover:scale-105 ${selectedPackage?.id === pkg.id ? 'border-blue-400 shadow-lg shadow-blue-500/20' : 'border-gray-700 hover:border-gray-600'}`}
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 h-full flex flex-col rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group shadow-lg">
  {/* Glow effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
  
  {/* Popular badge */}
  {pkg.popular && (
    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md rotate-12">
      POPULAR
    </div>
  )}

  <div className="flex justify-between items-start mb-4 relative z-10">
    <div className='flex items-center space-x-3'>
      <div className="p-3 bg-gray-800/70 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
        {React.cloneElement(pkg.icon, { className: "text-blue-400 text-xl group-hover:text-blue-300 transition-colors duration-300" })}
      </div>
      <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
    </div>
    <div className="text-right">
      <span className="text-3xl font-bold text-white">
        {currencies.find(c => c.code === formData.currency)?.symbol}
        {pkg.price[formData.currency]}
      </span>
      {pkg.billingCycle && (
        <span className="block text-gray-400 text-xs">per {pkg.billingCycle}</span>
      )}
    </div>
  </div>

  <p className="text-gray-400 text-sm mb-4 relative z-10">{pkg.bestFor}</p>

  <div className="relative z-10 mb-6 flex-grow">
    <div className="h-px bg-gray-700/50 w-full mb-4"></div>
    <ul className="space-y-3">
      {pkg.features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <div className="p-1 bg-emerald-500/10 rounded-full mr-3">
            <FaCheck className="text-emerald-400 text-xs" />
          </div>
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  </div>

  <button
    onClick={() => handlePackageSelect(pkg)}
    className={`relative z-10 w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
      selectedPackage?.id === pkg.id 
        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/20 hover:shadow-blue-500/30 text-white' 
        : 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 hover:border-blue-500'
    } shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
  >
    {selectedPackage?.id === pkg.id ? (
      <>
        <FaCheckCircle className="mr-2 animate-pulse" />
        Selected
      </>
    ) : (
      <>
        Get Started
        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </>
    )}
  </button>

  {/* Subtle pattern overlay */}
  <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPgo8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDZMNiAwWk02IDZMMCAwWiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxMTExMTEiPjwvcGF0aD4KPC9zdmc+')]"></div>
</div>
                </div>
              ))}
            </div>

            {selectedPackage && (
              <div className="mt-8 bg-blue-900/30 p-6 rounded-lg border border-blue-700/50">
                <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                  <HiOutlineClipboardList className="mr-2 text-blue-400" />
                  You've selected: {selectedPackage.name}
                </h3>
                <button
                  onClick={() => setActiveTab('custom')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center"
                >
                  Continue to Contact Details
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gray-800 shadow-2xl rounded-xl overflow-hidden border border-gray-700">
            <div className="md:flex">
              {/* Left Side - Form */}
              <div className="md:w-2/3 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className=" text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MdPerson className="mr-2" />
                        Full Name <span className="text-red-400 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-400 flex items-center">
                        <MdPerson className="mr-1" /> {errors.name}
                      </p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MdEmail className="mr-2" />
                        Email <span className="text-red-400 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-400 flex items-center">
                        <MdEmail className="mr-1" /> {errors.email}
                      </p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MdBusiness className="mr-2" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MdPhone className="mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <HiOutlineBriefcase className="mr-2" />
                      Service Needed <span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {services.map((service) => (
                        <div key={service.id} className="relative">
                          <input
                            type="radio"
                            id={service.id}
                            name="service"
                            value={service.name}
                            checked={formData.service === service.name}
                            onChange={handleChange}
                            className="hidden peer"
                          />
                          <label
                            htmlFor={service.id}
                            className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.service === service.name ? 'border-blue-400 bg-blue-900/20' : 'border-gray-700 bg-gray-700 hover:border-gray-600'}`}
                          >
                            <div className="mb-2">{service.icon}</div>
                            <span className="text-sm font-medium text-center text-gray-200">{service.name}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.service && <p className="mt-2 text-sm text-red-400 flex items-center">
                      <HiOutlineBriefcase className="mr-1" /> {errors.service}
                    </p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="currency" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <HiOutlineCurrencyDollar className="mr-2" />
                        Currency
                      </label>
                      <select
                        id="currency"
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {currencies.map(currency => (
                          <option key={currency.code} value={currency.code} className="bg-gray-800">
                            {currency.name} ({currency.symbol})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MdAttachMoney className="mr-2" />
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                      <MdOutlineSchedule className="mr-2" />
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <MdOutlineDescription className="mr-2" />
                      Project Details <span className="text-red-400 ml-1">*</span>
                    </label>

                    <div className="flex border-b border-gray-700 mb-4">
                      <button
                        type="button"
                        onClick={() => setDescriptionMethod('text')}
                        className={`py-2 px-4 font-medium text-sm focus:outline-none ${descriptionMethod === 'text' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                      >
                        Text Description
                      </button>
                      <button
                        type="button"
                        onClick={() => setDescriptionMethod('file')}
                        className={`py-2 px-4 font-medium text-sm focus:outline-none ${descriptionMethod === 'file' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                      >
                        Attach Files
                      </button>
                    </div>

                    {descriptionMethod === 'text' ? (
                      <div>
                        <textarea
                          id="description"
                          name="description"
                          rows="5"
                          value={formData.description}
                          onChange={handleChange}
                          className={`w-full bg-gray-700 border ${errors.description ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                          placeholder="Describe your project requirements, goals, and any specific features needed..."
                        ></textarea>
                        {errors.description && (
                          <p className="mt-1 text-sm text-red-400 flex items-center">
                            <MdOutlineDescription className="mr-1" /> {errors.description}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div 
                          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${isDragging ? 'border-blue-400 bg-blue-900/10' : 'border-gray-600 bg-gray-700/50'}`}
                          onDragEnter={handleDragEnter}
                          onDragLeave={handleDragLeave}
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            multiple
                          />
                          <div className="flex flex-col items-center justify-center">
                            <FaPaperclip className="text-3xl text-gray-400 mb-3" />
                            <button
                              type="button"
                              onClick={() => fileInputRef.current.click()}
                              className="inline-flex items-center px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              Select Files
                            </button>
                            <p className="mt-3 text-sm text-gray-400">
                              {isDragging ? 'Drop files here' : 'or drag and drop files here'}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              (PDF, DOC, JPG, PNG up to 10MB each)
                            </p>
                          </div>
                        </div>

                        {formData.files.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {formData.files.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors">
                                <div className="flex items-center truncate">
                                  {getFileIcon(file)}
                                  <div className="truncate">
                                    <p className="text-gray-300 truncate">{file.name}</p>
                                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-gray-400 hover:text-red-400 p-1 transition-colors"
                                  aria-label="Remove file"
                                >
                                  <FaTrash className="text-sm" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {errors.files && (
                          <p className="mt-1 text-sm text-red-400 flex items-center">
                            <FaPaperclip className="mr-1" /> {errors.files}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700 mt-1"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                      I agree to the <span onClick={() => navigate('/terms-and-conditions')} className="text-blue-400 hover:text-blue-300">terms and conditions</span>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300 flex items-center justify-center"
                    >
                      <MdSend className="mr-2" />
                      Request Quote
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Side - Info */}
              <div className="md:w-1/3 bg-gradient-to-b from-gray-800 to-gray-900 p-8 border-l border-gray-700">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FaCheck className="text-blue-400 mr-2" />
                    Why Get a Quote?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-900/30 p-1 rounded-full mr-3 mt-0.5">
                        <FaCheck className="text-blue-400 text-xs" />
                      </div>
                      <span className="text-gray-300">Personalized solution tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-900/30 p-1 rounded-full mr-3 mt-0.5">
                        <FaCheck className="text-blue-400 text-xs" />
                      </div>
                      <span className="text-gray-300">Transparent pricing with no hidden costs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-900/30 p-1 rounded-full mr-3 mt-0.5">
                        <FaCheck className="text-blue-400 text-xs" />
                      </div>
                      <span className="text-gray-300">Expert consultation from our technical team</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-900/30 p-1 rounded-full mr-3 mt-0.5">
                        <FaCheck className="text-blue-400 text-xs" />
                      </div>
                      <span className="text-gray-300">Flexible engagement models</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <HiOutlineCalendar className="text-blue-400 mr-2" />
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-900/30 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-blue-400 text-xs font-bold">1</span>
                      </div>
                      <span className="text-gray-300">We review your requirements within 24 hours</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-900/30 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-blue-400 text-xs font-bold">2</span>
                      </div>
                      <span className="text-gray-300">Our expert contacts you for clarification</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-900/30 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-blue-400 text-xs font-bold">3</span>
                      </div>
                      <span className="text-gray-300">You receive a detailed proposal with timeline and cost</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                    <FaPhoneAlt className="text-blue-400 mr-2" />
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-400 mb-4">Call us directly to discuss your project:</p>
                  <a href="tel:+919123813528" className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300">
                    <FaPhoneAlt className="mr-2" />
                    +91 91238 13528
                  </a>
                  <div className="mt-4 flex items-center text-gray-400">
                    <FaEnvelope className="mr-2" />
                    <a href="mailto:contact@rayndi.com" className="hover:text-blue-400">contact@rayndi.com</a>
                  </div>
                  <div className="mt-2 flex items-center text-gray-400">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>123 Tech Street, San Francisco</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotePage;