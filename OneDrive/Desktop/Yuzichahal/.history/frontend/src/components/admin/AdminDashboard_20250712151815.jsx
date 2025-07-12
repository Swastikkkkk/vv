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
    <div className="min-h-screen bg-[#e6f4f1] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1a3d35]">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-[#447d68] text-white rounded-lg hover:bg-[#355e50] transition"
          >
            <FiLogOut />
            Logout
          </button>
        </div>

        {/* Cards could go here if needed */}

        <UserManagement />
        <ProductApprovals />
        <Reports />
      </div>
    </div>
  );
};

export default AdminDashboard;
