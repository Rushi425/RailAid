import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import your pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Support from "./pages/Support";
import BookingService from "./pages/BookingService";
import StaffLogin from "./pages/StaffLogin";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

const App = () => {
  return (
    <Router>
      {/* ✅ Navbar is visible on all pages */}
      <Navbar />

      {/* ✅ Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/booking" element={<BookingService />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* User routes */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
