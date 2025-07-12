import React from 'react';
import logo from '../assets/logo.png'; // adjust the path if your file structure differs

const Navbar = () => {
  return (
    <header className="w-full px-10 py-5 flex items-center justify-between bg-white shadow-sm">
      {/* Left - Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Rewear Logo" className="h-80 w-auto" />
      </div>

      {/* Center - Links */}
      <nav className="hidden md:flex items-center gap-12 text-[#1a3d35] text-base font-medium">
        <a href="#" className="hover:text-green-700 transition duration-200">Home</a>
        <a href="#" className="hover:text-green-700 transition duration-200">Pricing</a>
        <a href="#" className="hover:text-green-700 transition duration-200">Impact</a>
      </nav>

      {/* Right - Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-[#447d68] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#366755] transition duration-200">
          Log In
        </button>
        <button className="border border-[#447d68] text-[#1a3d35] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#e7f1ed] transition duration-200">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
