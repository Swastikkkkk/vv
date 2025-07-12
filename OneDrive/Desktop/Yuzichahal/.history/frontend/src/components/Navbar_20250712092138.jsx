import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full px-10 py-4 flex items-center justify-between bg-white">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <img src="logo.png" alt="Voluntree Logo" className="h-9" />
        {/* Optionally add brand text here */}
        {/* <span className="text-lg font-semibold text-green-800">Voluntree</span> */}
      </div>

      {/* Center - Links */}
      <nav className="hidden md:flex space-x-10 text-[#1a3d35] font-medium">
        <a href="#" className="hover:text-green-700 transition">Home</a>
        <a href="#" className="hover:text-green-700 transition">Pricing</a>
        <a href="#" className="hover:text-green-700 transition">Impact</a>
      </nav>

      {/* Right - Buttons */}
      <div className="flex space-x-4">
        <button className="bg-[#447d68] text-white px-5 py-2 rounded-xl hover:bg-[#366755] transition">
          Log In
        </button>
        <button className="border border-[#447d68] text-[#1a3d35] px-5 py-2 rounded-xl hover:bg-[#e7f1ed] transition">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
