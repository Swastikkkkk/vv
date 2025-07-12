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
import { NavLink, useNavigate, Link } from 'react-router-dom';
import {
  FiMenu,
  FiLogOut,
  FiPlus,
  FiUser,
  FiHome,
  FiList,
  FiGift
} from 'react-icons/fi';

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { label: 'Dashboard', path: '/user', icon: <FiHome /> },
    { label: 'Add Item', path: '/user/add', icon: <FiPlus /> },
    { label: 'My Products', path: '/user/my-products', icon: <FiList /> },
    { label: 'Points History', path: '/user/points', icon: <FiGift /> },
    { label: 'Profile', path: '/user/profile', icon: <FiUser /> }
  ];

  const handleLogout = () => {
    // TODO: Add Firebase logout
    navigate('/');
  };

  return (
    <div
      className={`h-cover bg-gradient-to-b from-[#1a3d35] to-[#244e44] text-white shadow-lg flex flex-col justify-between transition-all duration-500 ease-in-out ${
        collapsed ? 'w-20' : 'w-64'
      } font-[Inter]`}
    >
      {/* Top Section */}
      <div>
        {/* Logo & Collapse Toggle */}
        <div className="flex items-center justify-between px-4 py-5">
          {!collapsed && (
            <Link
              to="/"
              className="text-2xl font-bold tracking-wide text-white hover:text-[#c5f2e4] transition duration-200"
            >
              ReWear
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            <FiMenu size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-2 space-y-2 mt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2e5c4f] text-[#d1f5e8]'
                    : 'hover:bg-[#2e5c4f]/80 text-white hover:text-[#d9ffef]'
                }`
              }
            >
              <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout Section */}
      <div className="px-3 py-4 border-t border-white/20">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 py-2 px-3 text-sm font-medium rounded-lg bg-[#366755] hover:bg-[#2f5c4d] transition-all duration-300 cursor-pointer"
        >
          <FiLogOut className="text-lg" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
