// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiLogOut } from 'react-icons/fi';
// import { auth } from '../FirebaseConfig';

// // Import all components
// import UserManagement from './UserManagement';
// import ProductApprovals from './ProductApprovals';
// import Reports from './Reports';
// import QuickStats from './QuickStats';
// import RevenueChart from './RevenueChart';
// import RecentSignups from './RecentSignups';
// import SystemLogs from './SystemLogs';
// import TopProducts from './TopProducts';
// import FeedbackSummary from './FeedbackSummary';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await auth.signOut();
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#dbece9] to-[#f3f6f5] p-6">
//       <div className="max-w-7xl mx-auto space-y-8">

//         {/* Header */}
//         <div className="flex justify-between items-center border-b border-[#c9ded9] pb-4">
//           <h1 className="text-4xl font-extrabold text-[#1a3d35]">Admin Dashboard</h1>
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a3d35] text-white hover:bg-[#2b564c] transition shadow-md"
//           >
//             <FiLogOut className="text-lg" />
//             <span className="text-sm font-medium">Logout</span>
//           </button>
//         </div>

//         {/* Quick Stats Cards */}
//         <QuickStats />

//         {/* Grid: User + Product Approval */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <UserManagement />
//           </div>
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <ProductApprovals />
//           </div>
//         </div>

//         {/* Full-width Reports */}
//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <Reports />
//         </div>

//         {/* Grid: Revenue + Signups */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <RevenueChart />
//           </div>
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <RecentSignups />
//           </div>
//         </div>

//         {/* Grid: Logs + Feedback */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <SystemLogs />
//           </div>
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <FeedbackSummary />
//           </div>
//         </div>

//         {/* Grid: Top Products */}
//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <TopProducts />
//         </div>

//         {/* Footer */}
//         <div className="text-center pt-10 text-sm text-gray-400">
//           © {new Date().getFullYear()} ReWear Admin Panel. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
