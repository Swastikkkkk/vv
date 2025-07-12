// src/components/user/UserDashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import ProductFeed from './ProductFeed';

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#f3f6f5] overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-[#1a3d35] mb-6">Browse All Listings 👗</h1>
        <ProductFeed />
      </div>
    </div>
  );
};

export default UserDashboard;
