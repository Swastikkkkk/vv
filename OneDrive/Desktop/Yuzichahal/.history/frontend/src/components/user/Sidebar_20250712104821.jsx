import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: '/user', icon: '🏠' },
    { label: 'Add Item', path: '/user/add', icon: '➕' },
    { label: 'Points History', path: '/user/points', icon: '💰' },
    { label: 'Profile', path: '/user/profile', icon: '👤' },
  ];

  const handleLogout = () => {
    // Add Firebase logout if needed
    navigate('/login');
  };

  return (
    <div className="w-64 min-h-screen bg-[#1a3d35] text-white p-6 shadow-lg hidden md:block">
      <h2 className="text-2xl font-bold mb-8">ReWear</h2>

      <nav className="space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? 'bg-[#2e5c4f]' : 'hover:bg-[#2e5c4f]/60'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-10 w-full text-left px-4 py-2 rounded-lg bg-[#366755] hover:bg-[#2f5c4d] transition"
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default Sidebar;
