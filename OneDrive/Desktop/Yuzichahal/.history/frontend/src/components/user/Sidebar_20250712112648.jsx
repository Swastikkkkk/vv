import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiLogOut, FiPlus, FiUser, FiHome, FiList, FiGift } from 'react-icons/fi';

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { label: 'Dashboard', path: '/user', icon: <FiHome /> },
    { label: 'Add Item', path: '/user/add', icon: <FiPlus /> },
    { label: 'My Products', path: '/user/my-products', icon: <FiList /> },
    { label: 'Points History', path: '/user/points', icon: <FiGift /> },
    { label: 'Profile', path: '/user/profile', icon: <FiUser /> },
  ];

  const handleLogout = () => {
    // Add Firebase logout logic here
    navigate('/login');
  };

  return (
    <div
      className={`h-screen bg-[#1a3d35] text-white p-4 transition-all duration-300 ease-in-out shadow-xl ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Collapse Button */}
      <div className="flex justify-between items-center mb-10">
        {!collapsed && <h2 className="text-xl font-bold tracking-wide">ReWear</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white focus:outline-none"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive ? 'bg-[#2e5c4f]' : 'hover:bg-[#2e5c4f]/60'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 w-full left-0 px-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 py-2 px-3 text-sm font-medium rounded-lg bg-[#366755] hover:bg-[#2f5c4d] transition"
        >
          <FiLogOut className="text-lg" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
