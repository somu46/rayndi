import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Root from './Root/Root.jsx';
import { About, Company, Contact, Services, Solutions, Work,LandingPage,IndustriesPage } from "./Pages/index.js";
import ErrorPage from './Pages/Error/Error.js';
import Layout from './Pages/Industry/Layout/Layout.js';
import ThankYouPage from './Pages/LandingPage/ThankYou.js';


const Routes= createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element:<About/>,
      },
      {
        path: '/contact',
        element:<Contact/>,
      },
      {
        path:'/company',
        element:<Company/>,
      },
      {
        path: '/solutions',
        element:<Solutions/>,
      },
      {
        path:'/industries/:id',
        element:<Layout/>,
      },
      {
        path: '/services',
        element:<Services/>,
      },
      {
        path: '/work',
        element:<Work/>,
      },
      {
        path: '/industries',
        element:<IndustriesPage/>,
      }
      
      
    ]
    
    
  },
  {
    path: '*',
    element: <ErrorPage/>
  },
  { 
    path: '/lp',
    element: <LandingPage />,
  },
  {
    path: '/thank-you',
    element: <ThankYouPage />,
  }
]);








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={Routes}>

    </RouterProvider>

);



