import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer  from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Chatbot from './components/Chatbot'


const Layout = () => {
  const location = useLocation()
  const [isChatOpen, setIsChatOpen] = useState(false)

  const hiddenRoutes = ['/user-login', '/staff-login', '/admin-login', '/user-register']
  const showChatUI = !hiddenRoutes.includes(location.pathname)

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

        {showChatUI && (
          <>
            {/* Chatbot panel */}
            {isChatOpen && (
              <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-2xl rounded-xl border z-50 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-blue-600 text-white">
                  <span className="font-semibold text-sm">RailAid Assistant</span>
                  <button onClick={() => setIsChatOpen(false)} className="text-white/90 hover:text-white text-lg leading-none">×</button>
                </div>
                <div className="flex-1 p-2 bg-gray-50">
                  <Chatbot />
                </div>
              </div>
            )}

            {/* Floating action button */}
            <button
              onClick={() => setIsChatOpen(v => !v)}
              aria-label="Open chatbot"
              className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 text-white z-50 flex items-center justify-center"
            >
              {/* Simple chat bubble icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M12 3C6.477 3 2 6.94 2 11.8c0 2.058.86 3.937 2.287 5.383.134.137.203.323.189.513l-.12 1.63a.75.75 0 0 0 1.063.75l1.75-.783c.155-.07.33-.083.493-.038A11.2 11.2 0 0 0 12 19.6c5.523 0 10-3.94 10-8.8S17.523 3 12 3zm-4 9.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm3.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm3.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>
              </svg>
            </button>
          </>
        )}
    </div>
  )
}

export default Layout