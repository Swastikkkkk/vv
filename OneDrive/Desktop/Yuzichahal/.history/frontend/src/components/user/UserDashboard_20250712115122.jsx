import React from 'react';
import Sidebar from './Sidebar';
import ProductFeed from './ProductFeed';
import HelpTooltip from './HelpTooltip'; // ⬅️ Make sure this component exists

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#f3f6f5] overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative flex-1 p-6 sm:p-8 overflow-y-auto">
        {/* Help Icon */}
        <div className="absolute top-6 right-6 z-10">
          <HelpTooltip />
        </div>

        {/* Header */}
        <h1 className="text-2xl font-semibold text-[#1a3d35] mb-6">
          Browse All Listings 👗
        </h1>

        {/* Product Listings */}
        <ProductFeed />
      </div>
    </div>
  );
};

export default UserDashboard;
