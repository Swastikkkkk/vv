import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { auth } from '../FirebaseConfig';

import UserManagement from './UserManagement';
import ProductApprovals from './ProductApprovals';
import Reports from './Reports';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dbece9] to-[#e6f4f1] p-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Navbar Header */}
        <div className="flex justify-between items-center mb-10 border-b pb-4 border-[#c9ded9]">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a3d35]">
             Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a3d35] text-white hover:bg-[#2b564c] transition shadow-md"
          >
            <FiLogOut className="text-lg" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>

        {/* Grid-based layout for admin sections */}
        <div className="grid grid-cols-1 gap-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
            <UserManagement />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
            <ProductApprovals />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
            <Reports />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-sm text-gray-400">
          © {new Date().getFullYear()} ReWear Admin Panel. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
