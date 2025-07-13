import React from 'react'
import { useLocation } from 'react-router-dom';

const Layout = () => {

 const Location =useLocation();
 const { path} = Location.state || {};

  return (
    <div  className='my-[10rem]  text-center justify-center text-3xl text-white '>{path.toUpperCase()}</div>
  )
}

export default Layout;