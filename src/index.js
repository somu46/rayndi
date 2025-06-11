import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Root from './Root/Root.jsx';
import { About, Company, Contact, Services, Solutions, Work } from "./Pages/index.js";





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
        path: '/services',
        element:<Services/>,
      },
      {
        path: '/work',
        element:<Work/>,
      }
    ]
    
    
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
]);








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={Routes}>

    </RouterProvider>

);



