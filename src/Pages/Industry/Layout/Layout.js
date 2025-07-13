import React from 'react';
import { useLocation } from 'react-router-dom';
import industries from '../../../Data/industries';

const Layout = () => {
  const location = useLocation();
  const { path } = location.state || {};

  // Find the industry object by slug
  const industry = industries.find((item) => item.slug === path?.toLowerCase());

  const { name, icon: Icon, color, tagline, bgGradient } = industry;

  return (
    <div className={`my-[10rem] text-center px-4`}>
      <div className={`inline-block p-6 rounded-2xl ${bgGradient}`}>
        <Icon className={`w-16 h-16 mb-4 ${color}`} />
        <h1 className="text-4xl font-bold text-white">{name}</h1>
        <p className="text-xl mt-2 text-white">{tagline}</p>
      </div>
    </div>
  );
};

export default Layout;
