// // src/components/user/ProductFeed.jsx
// import React, { useEffect, useState } from 'react';
// import { db } from '../FirebaseConfig';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// const ProductFeed = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
//         const snapshot = await getDocs(q);
//         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setProducts(items);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-gray-600 mt-6">Loading listings...</div>;
//   }

//   return (
//     <div className="mt-4">
//       <h2 className="text-xl font-semibold mb-4 text-[#1a3d35]">Explore Listings</h2>
//       {products.length === 0 ? (
//         <p className="text-gray-500">No listings yet. Be the first to add one!</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map(product => (
//             <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
//               <img
//                 src={product.imageUrl}
//                 alt={product.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#1a3d35] mb-1">{product.title}</h3>
//                   <p className="text-sm text-gray-600 mb-2">{product.description?.slice(0, 80)}...</p>
//                   <p className="text-sm text-gray-500 mb-1">📍 {product.location || 'Unknown'}</p>
//                 </div>

//                 <div className="mt-4 space-y-2">
//                   {product.contact && (
//                     <a
//                       href={`mailto:${product.contact}`}
//                       className="block w-full text-center px-4 py-2 bg-[#447d68] text-white text-sm rounded hover:bg-[#366755] transition"
//                     >
//                       Contact Seller
//                     </a>
//                   )}

//                   <button
//                     onClick={() => alert('Request to exchange sent.')}
//                     className="w-full px-4 py-2 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 transition"
//                   >
//                     Exchange Item
//                   </button>

//                   <button
//                     onClick={() => alert('Points redeemed for item.')}
//                     className="w-full px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
//                   >
//                     Redeem with Points
//                   </button>

//                   <button
//                     onClick={() => alert('Redirecting to Stripe...')}
//                     className="w-full px-4 py-2 bg-[#635bff] text-white text-sm rounded hover:bg-[#5145cd] transition"
//                   >
//                     Pay with Stripe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductFeed;
