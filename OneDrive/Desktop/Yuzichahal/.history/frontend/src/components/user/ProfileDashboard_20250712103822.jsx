import React from 'react';

const ProfileDashboard = () => {
  return (
    <div className="col-span-2 md:col-span-2 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-[#1a3d35] mb-4">Your Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#3a506b]">8</p>
          <p className="text-sm text-gray-500">Listings Posted</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#3a506b]">3</p>
          <p className="text-sm text-gray-500">Exchanges Done</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
