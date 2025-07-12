import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUsers, FiBox, FiClipboard, FiLogOut } from 'react-icons/fi';
import { auth } from '../FirebaseConfig';
    
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <FiUsers className="text-3xl text-[#447d68] mb-2" />
            <h2 className="text-lg font-semibold text-[#1a3d35] mb-1">User Management</h2>
            <p className="text-gray-600 text-sm">View, edit or remove user roles and info.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <FiBox className="text-3xl text-[#447d68] mb-2" />
            <h2 className="text-lg font-semibold text-[#1a3d35] mb-1">Product Approvals</h2>
            <p className="text-gray-600 text-sm">Approve or reject newly added products.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <FiClipboard className="text-3xl text-[#447d68] mb-2" />
            <h2 className="text-lg font-semibold text-[#1a3d35] mb-1">Reports</h2>
            <p className="text-gray-600 text-sm">Track app analytics and reports here.</p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          Admin tools & moderation features coming soon...
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
