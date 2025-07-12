// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   FiMenu,
//   FiLogOut,
//   FiPlus,
//   FiUser,
//   FiHome,
//   FiList,
//   FiGift
// } from 'react-icons/fi';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [collapsed, setCollapsed] = useState(false);

//   const navItems = [
//     { label: 'Dashboard', path: '/user', icon: <FiHome /> },
//     { label: 'Add Item', path: '/user/add', icon: <FiPlus /> },
//     { label: 'My Products', path: '/user/my-products', icon: <FiList /> },
//     { label: 'Points History', path: '/user/points', icon: <FiGift /> },
//     { label: 'Profile', path: '/user/profile', icon: <FiUser /> }
//   ];

//   const handleLogout = () => {
//     // TODO: Add Firebase logout
//     navigate('/');
//   };


//   return (
//     <div
//       className={`h-screen bg-[#1a3d35] text-white shadow-xl flex flex-col justify-between transition-all duration-300 ease-in-out ${
//         collapsed ? 'w-20' : 'w-64'
//       }`}
//     >
//       {/* Top Section */}
//       <div>
//         {/* Logo & Collapse Toggle */}
//         <div className="flex items-center justify-between px-4 py-5">
//           {!collapsed && <h2 className="text-xl font-bold">ReWear</h2>}
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="text-white focus:outline-none transition-transform duration-200"
//           >
//             <FiMenu size={22} className="hover:scale-110" />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <nav className="px-3 space-y-2">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive ? 'bg-[#2e5c4f]' : 'hover:bg-[#2e5c4f]/70'
//                 }`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span>{item.label}</span>}
//             </NavLink>
//           ))}
//         </nav>
//       </div>

//       {/* Logout Section */}
//       <div className="px-3 py-4 border-t border-white/20">
//         <button
//           onClick={handleLogout}
//           className="w-full flex items-center gap-3 py-2 px-3 text-sm font-medium rounded-lg bg-[#366755] hover:bg-[#2f5c4d] transition"
//         >
//           <FiLogOut className="text-lg" />
//           {!collapsed && <span>Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FiMenu,
  FiLogOut,
  FiPlus,
  FiUser,
  FiHome,
  FiList,
  FiGift,
} from 'react-icons/fi';

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
    // TODO: Add Firebase logout
    navigate('/');
  };

  return (
    <div
      className={`h-screen bg-gradient-to-br from-[#1a3d35] to-[#254d45] text-white shadow-2xl flex flex-col justify-between transition-all duration-500 ease-in-out
        ${collapsed ? 'w-[72px]' : 'w-64'}
      `}
    >
      {/* Top Section */}
      <div className="space-y-4">
        {/* Logo & Collapse Button */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/20">
          {!collapsed && <h2 className="text-xl font-bold tracking-wide">ReWear</h2>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white transition-transform duration-300 hover:scale-110"
          >
            <FiMenu size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-2 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white shadow-inner'
                    : 'hover:bg-white/10 text-white/80'
                }`
              }
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              {!collapsed && <span className="transition-opacity duration-300">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-white/20">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 text-white/90 hover:bg-white/20 transition-all duration-200"
        >
          <FiLogOut className="text-lg" />
          {!collapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
