// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Public
// import LandingPage from './components/LandingPage';
// import Signup from './components/Signup';
// import Login from './components/Login';

// // Protected (to build separately)
// import UserDashboard from './components/user/UserDashboard';
// import AdminDashboard from './components/admin/AdminDashboard';
// import AddListing from './components/user/AddListing';
// import ProductDetail from './components/ProductDetail';
// import PointsHistory from './components/user/PointsHistory';
// import NotFound from './components/NotFound';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* User Routes */}
//         <Route path="/user" element={<UserDashboard />} />
//         <Route path="/user/add" element={<AddListing />} />
//         <Route path="/user/points" element={<PointsHistory />} />

//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminDashboard />} />

//         {/* Product Details (accessible by both roles) */}
//         <Route path="/product/:productId" element={<ProductDetail />} />

//         {/* Catch-All */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

