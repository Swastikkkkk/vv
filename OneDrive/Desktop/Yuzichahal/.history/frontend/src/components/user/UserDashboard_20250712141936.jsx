// // src/components/user/UserDashboard.jsx
// import React from 'react';
// import Sidebar from './Sidebar';
// import ProductFeed from './ProductFeed';
// import HelpTooltip from './HelpTooltip';

// const UserDashboard = () => {
//   return (
//     <div className="min-h-screen flex bg-[#f3f6f5] overflow-x-hidden">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main */}
//       <div className="relative flex-1 p-6 sm:p-8 overflow-y-auto">
//         {/* Help Icon */}
//         <div className="absolute top-6 right-6 z-10">
//           <HelpTooltip />
//         </div>

//         {/* Heading */}
//         <h1 className="text-2xl font-semibold text-[#1a3d35] mb-6">
//           Browse All Listings 👗
//         </h1>

//         {/* Listings */}
//         <ProductFeed />
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// src/components/user/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ProductFeed from './ProductFeed';
import HelpTooltip from './HelpTooltip';
import { ShoppingBag } from 'lucide-react'; // Icon
import NotificationBell from './NotificationBell';
const UserDashboard = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex bg-[#f3f6f5] overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />
      <div className="fixed top-4 right-6 z-50">
  <NotificationBell />
</div>


      {/* Main */}
      <div
        className={`relative flex-1 p-6 sm:p-8 overflow-y-auto transform transition-opacity duration-700 ease-in-out ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Help Icon */}
        <div className="absolute top-6 right-6 z-10">
          <HelpTooltip />
        </div>

        {/* Heading with icon */}
        <div className="flex items-center gap-2 mb-6">
          <ShoppingBag className="text-[#1a3d35] w-6 h-6" />
          <h1 className="text-2xl font-semibold text-[#1a3d35]">
            Browse All Listings
          </h1>
        </div>

        {/* Listings */}
        <ProductFeed />
      </div>
    </div>
  );
};

export default UserDashboard;
