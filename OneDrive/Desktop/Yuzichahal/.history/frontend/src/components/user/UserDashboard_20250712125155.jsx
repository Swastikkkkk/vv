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
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductFeed from './ProductFeed';
import HelpTooltip from './HelpTooltip';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fffe] via-[#f3f6f5] to-[#e8f4f1] overflow-x-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Glass Header */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6 text-[#1a3d35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {/* Title with Animation */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#447d68] to-[#5a9b85] rounded-full blur opacity-30 animate-pulse"></div>
                    <div className="relative text-4xl animate-bounce">👗</div>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1a3d35] to-[#447d68] bg-clip-text text-transparent">
                      Browse All Listings
                    </h1>
                    <p className="text-[#447d68]/70 text-sm font-medium mt-1">
                      Discover amazing pre-loved fashion
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {/* Quick Stats */}
                <div className="hidden sm:flex items-center space-x-4 mr-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#1a3d35]">24</div>
                    <div className="text-xs text-[#447d68]/70">New Today</div>
                  </div>
                  <div className="w-px h-8 bg-[#447d68]/20"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#1a3d35]">156</div>
                    <div className="text-xs text-[#447d68]/70">Total Items</div>
                  </div>
                </div>

                {/* Search Button */}
                <button className="p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg className="w-5 h-5 text-[#447d68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Filter Button */}
                <button className="p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg className="w-5 h-5 text-[#447d68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                  </svg>
                </button>

                {/* Help Tooltip */}
                <HelpTooltip />
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {/* Quick Actions Bar */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {['All', 'Ethnic', 'Western', 'Kidswear', 'Accessories', 'Modern'].map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      category === 'All'
                        ? 'bg-[#447d68] text-white shadow-lg'
                        : 'bg-white/80 text-[#447d68] hover:bg-[#447d68]/10 hover:shadow-md'
                    } backdrop-blur-sm transform hover:scale-105`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
                <button className="p-2 rounded-full bg-[#447d68] text-white shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-[#447d68]/10 text-[#447d68] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="fixed bottom-6 right-6 z-30">
            <button className="group relative w-14 h-14 bg-gradient-to-r from-[#447d68] to-[#5a9b85] rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#447d68] to-[#5a9b85] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </button>
          </div>

          {/* Product Feed with Glass Container */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-6">
              <ProductFeed />
            </div>
          </div>

          {/* Bottom Spacing */}
          <div className="h-20"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#447d68]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-[#5a9b85]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-[#447d68]/5 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        {/* Sparkles */}
        <div className="absolute top-32 right-64 w-2 h-2 bg-[#447d68] rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-80 left-80 w-1 h-1 bg-[#5a9b85] rounded-full opacity-40 animate-ping delay-500"></div>
        <div className="absolute bottom-60 right-48 w-1.5 h-1.5 bg-[#447d68] rounded-full opacity-20 animate-ping delay-1000"></div>
      </div>
    </div>
  );
};

export default UserDashboard;