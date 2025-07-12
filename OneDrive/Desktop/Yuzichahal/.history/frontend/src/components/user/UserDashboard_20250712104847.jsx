import React from 'react';
import Sidebar from './Sidebar';
import ProductFeed from '..//ProductFeed';
import ProfileDashboard from './ProfileDashboard';
import PointsPanel from './PointsPanel';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[#f3f6f5]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Greeting */}
        <h1 className="text-2xl font-semibold text-[#1a3d35] mb-4">Welcome to Your Dashboard 👕</h1>

        {/* Stats and Points Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ProfileDashboard />
          <PointsPanel />
        </div>

        {/* Product Feed */}
        <ProductFeed />

        {/* Floating Add Button */}
        <button
          onClick={() => navigate('/user/add')}
          className="fixed bottom-6 right-6 bg-[#447d68] text-white p-4 rounded-full shadow-lg hover:bg-[#366755] transition"
          title="Add new item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
