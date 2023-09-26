import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/CartProductsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main/>,
    children:[
      {
        path: '/',
        element:<Shop/>,
      },
      {
        path: '/order',
        element: <Orders/>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory/>,

      },
      {
        path:'/login',
        element:<Login/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
