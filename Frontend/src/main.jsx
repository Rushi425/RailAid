import { StrictMode } from 'react'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import BookingService from './pages/BookingService.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Support from './pages/Support.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import StaffLogin from './pages/StaffLogin.jsx'
import { TextSizeProvider } from './context/TextSizeContext.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserRegister from './pages/UserRegister.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/booking',
        element: <BookingService/>
      },
      {
        path: '/admin-login',
        element: <AdminLogin/>
      },
      {
        path: 'staff-login',
        element: <StaffLogin/>
      },
      {
        path: '/services',
        element: <Services/>
      },

      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/support',
        element: <Support/>
      },
      { path: '/user-login', element: <UserLogin /> },
      { path: '/user-register', element: <UserRegister /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextSizeProvider>
      <RouterProvider router={router}/>
    </TextSizeProvider>
  </StrictMode>,
)