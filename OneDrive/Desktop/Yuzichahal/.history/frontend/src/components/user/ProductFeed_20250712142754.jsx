// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { db } from '../FirebaseConfig';
// // // // // import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// // // // // const ProductFeed = () => {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       try {
// // // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // // //         const snapshot = await getDocs(q);
// // // // //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // //         setProducts(items);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching products:', error);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchProducts();
// // // // //   }, []);

// // // // //   if (loading) {
// // // // //     return <div className="text-center text-gray-600 mt-6">Loading listings...</div>;
// // // // //   }

// // // // //   return (
// // // // //     <div className="mt-6 px-4 sm:px-8">
// // // // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>

// // // // //       {products.length === 0 ? (
// // // // //         <p className="text-gray-500 text-center">No listings yet. Be the first to add one!</p>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //           {products.map(product => (
// // // // //             <div
// // // // //               key={product.id}
// // // // //               className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-gray-200"
// // // // //             >
// // // // //               <img
// // // // //                 src={product.imageUrl}
// // // // //                 alt={product.title}
// // // // //                 className="w-full h-56 object-cover rounded-t-3xl"
// // // // //               />

// // // // //               <div className="p-5 flex-1 flex flex-col justify-between">
// // // // //                 <div>
// // // // //                   <h3 className="text-xl font-semibold text-[#1a3d35] mb-2 truncate">{product.title}</h3>
// // // // //                   <p className="text-sm text-gray-500 mb-2 line-clamp-3">
// // // // //                     {product.description || 'No description'}
// // // // //                   </p>
// // // // //                   <div className="flex items-center justify-between text-xs mt-2">
// // // // //                     <span className="bg-[#e1f4ec] text-[#26775f] px-3 py-1 rounded-full">
// // // // //                       {product.category || 'Category'}
// // // // //                     </span>
// // // // //                     <span className="text-gray-400">📍 {product.location || 'Unknown'}</span>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Action Buttons */}
// // // // //                 <div className="mt-5 flex flex-wrap gap-2 justify-center">
// // // // //                   {product.contact && (
// // // // //                     <a
// // // // //                       href={`mailto:${product.contact}`}
// // // // //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// // // // //                     >
// // // // //                       ✉️ Contact
// // // // //                     </a>
// // // // //                   )}

// // // // //                   <button
// // // // //                     onClick={() => alert('Request to exchange sent.')}
// // // // //                     className="px-3 py-2 bg-[#ff5f6d] text-white text-xs rounded-full hover:bg-[#e14b58] transition"
// // // // //                   >
// // // // //                     🔁 Exchange
// // // // //                   </button>

// // // // //                   <button
// // // // //                     onClick={() => alert('Points redeemed for item.')}
// // // // //                     className="px-3 py-2 bg-[#43cea2] text-white text-xs rounded-full hover:bg-[#36b692] transition"
// // // // //                   >
// // // // //                     🎯 Redeem
// // // // //                   </button>

// // // // //                   <button
// // // // //                     onClick={() => alert('Redirecting to Stripe...')}
// // // // //                     className="px-3 py-2 bg-[#7f00ff] text-white text-xs rounded-full hover:bg-[#6b00d6] transition"
// // // // //                   >
// // // // //                     💳 Pay
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductFeed;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { db } from '../FirebaseConfig';
// // // // import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// // // // const ProductFeed = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // //         const snapshot = await getDocs(q);
// // // //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // //         setProducts(items);
// // // //       } catch (error) {
// // // //         console.error('Error fetching products:', error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, []);

// // // //   if (loading) {
// // // //     return <div className="text-center text-gray-600 mt-6">Loading listings...</div>;
// // // //   }

// // // //   return (
// // // //     <div className="mt-6 px-4 sm:px-8">
// // // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>

// // // //       {products.length === 0 ? (
// // // //         <p className="text-gray-500 text-center">No listings yet. Be the first to add one!</p>
// // // //       ) : (
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //           {products.map(product => (
// // // //             <div
// // // //               key={product.id}
// // // //               className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-gray-200"
// // // //             >
// // // //               <img
// // // //                 src={product.imageUrl}
// // // //                 alt={product.title}
// // // //                 className="w-full h-56 object-cover rounded-t-3xl"
// // // //               />

// // // //               <div className="p-5 flex-1 flex flex-col justify-between">
// // // //                 <div>
// // // //                   <h3 className="text-xl font-semibold text-[#1a3d35] mb-2 truncate">{product.title}</h3>
// // // //                   <p className="text-sm text-gray-500 mb-2 line-clamp-3">
// // // //                     {product.description || 'No description'}
// // // //                   </p>
// // // //                   <div className="flex items-center justify-between text-xs mt-2">
// // // //                     <span className="bg-[#e1f4ec] text-[#26775f] px-3 py-1 rounded-full">
// // // //                       {product.category || 'Category'}
// // // //                     </span>
// // // //                     <span className="text-gray-400">📍 {product.location || 'Unknown'}</span>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Action Buttons */}
// // // //                 <div className="mt-5 flex flex-wrap gap-2 justify-center">
// // // //                   {product.contact && (
// // // //                     <a
// // // //                       href={`tel:${product.contact}`}
// // // //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// // // //                     >
// // // //                       📞 Call
// // // //                     </a>
// // // //                   )}

// // // //                   <button
// // // //                     onClick={() => alert('Request to exchange sent.')}
// // // //                     className="px-3 py-2 bg-[#ff5f6d] text-white text-xs rounded-full hover:bg-[#e14b58] transition"
// // // //                   >
// // // //                     🔁 Exchange
// // // //                   </button>

// // // //                   <button
// // // //                     onClick={() => alert('Points redeemed for item.')}
// // // //                     className="px-3 py-2 bg-[#43cea2] text-white text-xs rounded-full hover:bg-[#36b692] transition"
// // // //                   >
// // // //                     🎯 Redeem
// // // //                   </button>

// // // //                   <button
// // // //                     onClick={() => alert('Redirecting to Stripe...')}
// // // //                     className="px-3 py-2 bg-[#7f00ff] text-white text-xs rounded-full hover:bg-[#6b00d6] transition"
// // // //                   >
// // // //                     💳 Pay
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductFeed;
// // // import React, { useEffect, useState } from 'react';
// // // import { db } from '../FirebaseConfig';
// // // import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
// // // import { getAuth } from 'firebase/auth';

// // // const ProductFeed = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   const [showModal, setShowModal] = useState(false);
// // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // //   const [message, setMessage] = useState('');

// // //   const currentUser = getAuth().currentUser;

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // //         const snapshot = await getDocs(q);
// // //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //         setProducts(items);
// // //       } catch (error) {
// // //         console.error('Error fetching products:', error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, []);

// // //   const handleSendMessage = async () => {
// // //     if (!currentUser || !selectedProduct || !message.trim()) return;

// // //     try {
// // //       await addDoc(collection(db, 'messages'), {
// // //         from: currentUser.email,
// // //         to: selectedProduct.contact,
// // //         message: message.trim(),
// // //         productId: selectedProduct.id,
// // //         timestamp: serverTimestamp(),
// // //         read: false
// // //       });
// // //       alert('Message sent!');
// // //       setShowModal(false);
// // //       setMessage('');
// // //     } catch (err) {
// // //       console.error('Error sending message:', err);
// // //       alert('Failed to send message');
// // //     }
// // //   };

// // //   return (
// // //     <div className="mt-6 px-4 sm:px-8">
// // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>

// // //       {products.length === 0 ? (
// // //         <p className="text-gray-500 text-center">No listings yet.</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {products.map(product => (
// // //             <div key={product.id} className="bg-white rounded-3xl shadow-lg p-5 border">
// // //               <img
// // //                 src={product.imageUrl}
// // //                 alt={product.title}
// // //                 className="w-full h-56 object-cover rounded-xl mb-3"
// // //               />
// // //               <h3 className="text-xl font-semibold text-[#1a3d35] mb-1">{product.title}</h3>
// // //               <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
// // //               <div className="text-xs text-gray-400 mb-2">
// // //                 {product.location} • {product.points} pts
// // //               </div>

// // //               <div className="flex flex-wrap gap-2 mt-3">
// // //                 {product.contact && (
// // //                   <>
// // //                     <a
// // //                       href={`tel:${product.contact}`}
// // //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// // //                     >
// // //                       📞 Call
// // //                     </a>

// // //                     <button
// // //                       onClick={() => {
// // //                         setSelectedProduct(product);
// // //                         setShowModal(true);
// // //                       }}
// // //                       className="px-3 py-2 bg-[#ffaa00] text-white text-xs rounded-full hover:bg-[#e29c00] transition"
// // //                     >
// // //                       📩 Message
// // //                     </button>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* Message Modal */}
// // //       {showModal && selectedProduct && (
// // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // //           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
// // //             <h2 className="text-lg font-semibold text-[#1a3d35] mb-2">
// // //               Message Seller ({selectedProduct.title})
// // //             </h2>
// // //             <textarea
// // //               rows={4}
// // //               value={message}
// // //               onChange={(e) => setMessage(e.target.value)}
// // //               className="w-full border p-3 rounded-lg mb-4"
// // //               placeholder="Type your message..."
// // //             ></textarea>
// // //             <div className="flex justify-end gap-2">
// // //               <button
// // //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// // //                 onClick={() => {
// // //                   setShowModal(false);
// // //                   setMessage('');
// // //                 }}
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 className="px-4 py-2 bg-[#1a3d35] text-white rounded hover:bg-[#16342e]"
// // //                 onClick={handleSendMessage}
// // //               >
// // //                 Send
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ProductFeed;
// // import React, { useEffect, useState } from 'react';
// // import { db } from '../FirebaseConfig';
// // import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
// // import { getAuth } from 'firebase/auth';
// // import { FiHeart, FiBookmark, FiCheckCircle } from 'react-icons/fi';

// // const ProductFeed = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [showModal, setShowModal] = useState(false);
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [message, setMessage] = useState('');
// //   const [savedItems, setSavedItems] = useState([]);
// //   const [likes, setLikes] = useState({});

// //   const currentUser = getAuth().currentUser;

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// //         const snapshot = await getDocs(q);
// //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //         setProducts(items);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   const handleSendMessage = async () => {
// //     if (!currentUser || !selectedProduct || !message.trim()) return;

// //     try {
// //       await addDoc(collection(db, 'messages'), {
// //         from: currentUser.email,
// //         to: selectedProduct.contact,
// //         message: message.trim(),
// //         productId: selectedProduct.id,
// //         timestamp: serverTimestamp(),
// //         read: false
// //       });
// //       alert('Message sent!');
// //       setShowModal(false);
// //       setMessage('');
// //     } catch (err) {
// //       console.error('Error sending message:', err);
// //       alert('Failed to send message');
// //     }
// //   };

// //   const toggleSave = (id) => {
// //     setSavedItems((prev) =>
// //       prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
// //     );
// //   };

// //   const toggleLike = (id) => {
// //     setLikes(prev => ({ ...prev, [id]: !prev[id] }));
// //   };

// //   return (
// //     <div className="mt-6 px-4 sm:px-8">
// //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>
// //       {products.length === 0 ? (
// //         <p className="text-gray-500 text-center">No listings yet.</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {products.map(product => (
// //             <div key={product.id} className="bg-white rounded-3xl shadow-lg p-5 border relative">
// //               <img
// //                 src={product.imageUrl}
// //                 alt={product.title}
// //                 className="w-full h-56 object-cover rounded-xl mb-3"
// //               />
// //               <h3 className="text-xl font-semibold text-[#1a3d35] mb-1">{product.title}</h3>
// //               <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
// //               <div className="text-xs text-gray-400 mb-2">
// //                 {product.location} • {product.points} pts
// //               </div>
// //               <div className="flex justify-between items-center mt-2 mb-1">
// //                 <button onClick={() => toggleLike(product.id)} className="text-[#ff5f6d]">
// //                   <FiHeart className={`w-5 h-5 ${likes[product.id] ? 'fill-current' : ''}`} />
// //                 </button>
// //                 <button onClick={() => toggleSave(product.id)} className="text-[#1a3d35]">
// //                   <FiBookmark className={`w-5 h-5 ${savedItems.includes(product.id) ? 'fill-current' : ''}`} />
// //                 </button>
// //               </div>
// //               <div className="flex flex-wrap gap-2 mt-3">
// //                 {product.contact && (
// //                   <>
// //                     <a
// //                       href={`tel:${product.contact}`}
// //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// //                     >
// //                       📞 Call
// //                     </a>
// //                     <button
// //                       onClick={() => {
// //                         setSelectedProduct(product);
// //                         setShowModal(true);
// //                       }}
// //                       className="px-3 py-2 bg-[#ffaa00] text-white text-xs rounded-full hover:bg-[#e29c00] transition"
// //                     >
// //                       📩 Message
// //                     </button>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {showModal && selectedProduct && (
// //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// //           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
// //             <h2 className="text-lg font-semibold text-[#1a3d35] mb-2">
// //               Message Seller ({selectedProduct.title})
// //             </h2>
// //             <textarea
// //               rows={4}
// //               value={message}
// //               onChange={(e) => setMessage(e.target.value)}
// //               className="w-full border p-3 rounded-lg mb-4"
// //               placeholder="Type your message..."
// //             ></textarea>
// //             <div className="flex justify-end gap-2">
// //               <button
// //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// //                 onClick={() => {
// //                   setShowModal(false);
// //                   setMessage('');
// //                 }}
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 className="px-4 py-2 bg-[#1a3d35] text-white rounded hover:bg-[#16342e]"
// //                 onClick={handleSendMessage}
// //               >
// //                 Send
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProductFeed;
// import React, { useEffect, useState } from 'react';
// import { db } from '../FirebaseConfig';
// import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { FiHeart, FiBookmark } from 'react-icons/fi';

// const ProductFeed = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [message, setMessage] = useState('');
//   const [savedItems, setSavedItems] = useState([]);
//   const [likes, setLikes] = useState({});
//   const [showDetail, setShowDetail] = useState(null);

//   const currentUser = getAuth().currentUser;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
//         const snapshot = await getDocs(q);

//         if (snapshot.empty) {
//           setProducts([
//             {
//               id: 'mock1',
//               title: 'Mock Book',
//               description: 'A very interesting novel about adventure and life.',
//               imageUrl: 'https://via.placeholder.com/300x200',
//               contact: '9876543210',
//               location: 'Lucknow',
//               points: 80
//             },
//             {
//               id: 'mock2',
//               title: 'Mock Headphones',
//               description: 'Noise-canceling over-ear headphones. Lightly used.',
//               imageUrl: 'https://via.placeholder.com/300x200',
//               contact: '9123456789',
//               location: 'Kanpur',
//               points: 120
//             }
//           ]);
//         } else {
//           const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//           setProducts(items);
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSendMessage = async () => {
//     if (!currentUser || !selectedProduct || !message.trim()) return;

//     try {
//       await addDoc(collection(db, 'messages'), {
//         from: currentUser.email,
//         to: selectedProduct.contact,
//         message: message.trim(),
//         productId: selectedProduct.id,
//         timestamp: serverTimestamp(),
//         read: false
//       });
//       alert('Message sent!');
//       setShowModal(false);
//       setMessage('');
//     } catch (err) {
//       console.error('Error sending message:', err);
//       alert('Failed to send message');
//     }
//   };

//   const toggleSave = (id) => {
//     setSavedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
//   };

//   const toggleLike = (id) => {
//     setLikes(prev => ({ ...prev, [id]: !prev[id] }));
//     if (!savedItems.includes(id)) toggleSave(id);
//   };

//   if (loading) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="mt-6 px-4 sm:px-8">
//       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>
//       {showDetail ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg">
//           <img src={showDetail.imageUrl} alt={showDetail.title} className="rounded-xl w-full h-80 object-cover" />
//           <div className="flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-semibold text-[#1a3d35] mb-2">{showDetail.title}</h3>
//               <p className="text-sm text-gray-700 mb-4">{showDetail.description}</p>
//               <p className="text-xs text-gray-500 mb-2">📍 {showDetail.location} • 💠 {showDetail.points} pts</p>
//               <div className="flex gap-3 mb-4">
//                 <button onClick={() => toggleLike(showDetail.id)} className="text-[#ff5f6d]">
//                   <FiHeart className={`w-5 h-5 ${likes[showDetail.id] ? 'fill-current' : ''}`} />
//                 </button>
//                 <button onClick={() => toggleSave(showDetail.id)} className="text-[#1a3d35]">
//                   <FiBookmark className={`w-5 h-5 ${savedItems.includes(showDetail.id) ? 'fill-current' : ''}`} />
//                 </button>
//               </div>
//               <div className="flex gap-3">
//                 <a href={`tel:${showDetail.contact}`} className="px-4 py-2 bg-[#1a3d35] text-white rounded-full text-xs hover:bg-[#16342e]">📞 Call</a>
//                 <button
//                   onClick={() => {
//                     setSelectedProduct(showDetail);
//                     setShowModal(true);
//                   }}
//                   className="px-4 py-2 bg-[#ffaa00] text-white rounded-full text-xs hover:bg-[#e29c00]"
//                 >📩 Message</button>
//               </div>
//             </div>
//             <button onClick={() => setShowDetail(null)} className="mt-4 text-sm text-blue-600 hover:underline">← Back to all listings</button>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map(product => (
//             <div key={product.id} onClick={() => setShowDetail(product)} className="bg-white rounded-3xl shadow-lg p-5 border cursor-pointer hover:shadow-xl transition">
//               <img src={product.imageUrl} alt={product.title} className="w-full h-56 object-cover rounded-xl mb-3" />
//               <h3 className="text-xl font-semibold text-[#1a3d35] mb-1">{product.title}</h3>
//               <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
//               <div className="text-xs text-gray-400 mb-2">{product.location} • {product.points} pts</div>
//             </div>
//           ))}
//         </div>
//       )}

//       {showModal && selectedProduct && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
//             <h2 className="text-lg font-semibold text-[#1a3d35] mb-2">
//               Message Seller ({selectedProduct.title})
//             </h2>
//             <textarea
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="w-full border p-3 rounded-lg mb-4"
//               placeholder="Type your message..."
//             ></textarea>
//             <div className="flex justify-end gap-2">
//               <button
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 onClick={() => {
//                   setShowModal(false);
//                   setMessage('');
//                 }}
//               >Cancel</button>
//               <button
//                 className="px-4 py-2 bg-[#1a3d35] text-white rounded hover:bg-[#16342e]"
//                 onClick={handleSendMessage}
//               >Send</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductFeed;
import React, { useEffect, useState } from 'react';
import { db } from '../FirebaseConfig';
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FiHeart, FiBookmark, FiPhone, FiMessageCircle, FiMapPin, FiStar, FiArrowLeft, FiUser } from 'react-icons/fi';

const ProductFeed = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState('');
  const [savedItems, setSavedItems] = useState([]);
  const [likes, setLikes] = useState({});
  const [showDetail, setShowDetail] = useState(null);
  const [upvotes, setUpvotes] = useState({});

  const currentUser = getAuth().currentUser;

  const mockProducts = [
    {
      id: 'mock1',
      title: 'Harry Potter Book Collection',
      description: 'Complete set of Harry Potter books in excellent condition. Perfect for any fantasy lover. All 7 books included with original covers.',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      contact: '9876543210',
      location: 'Lucknow, UP',
      points: 80,
      seller: 'Rahul Sharma',
      condition: 'Like New',
      category: 'Books',
      postedDate: '2 days ago',
      views: 24
    },
    {
      id: 'mock2',
      title: 'Sony WH-1000XM4 Headphones',
      description: 'Premium noise-canceling wireless headphones. Lightly used for 6 months. Comes with original box, cable, and carry case.',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      contact: '9123456789',
      location: 'Kanpur, UP',
      points: 120,
      seller: 'Priya Gupta',
      condition: 'Good',
      category: 'Electronics',
      postedDate: '1 day ago',
      views: 45
    },
    {
      id: 'mock3',
      title: 'Vintage Guitar - Yamaha F310',
      description: 'Beautiful acoustic guitar in great condition. Perfect for beginners or experienced players. Comes with guitar bag and picks.',
      imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
      contact: '9234567890',
      location: 'Allahabad, UP',
      points: 150,
      seller: 'Arjun Singh',
      condition: 'Good',
      category: 'Music',
      postedDate: '3 days ago',
      views: 18
    },
    {
      id: 'mock4',
      title: 'MacBook Pro 2019 13-inch',
      description: 'MacBook Pro 13-inch with Touch Bar. 8GB RAM, 256GB SSD. Excellent performance for work and creative tasks. Minor scratches on lid.',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      contact: '9345678901',
      location: 'Varanasi, UP',
      points: 300,
      seller: 'Sneha Patel',
      condition: 'Good',
      category: 'Electronics',
      postedDate: '5 days ago',
      views: 67
    },
    {
      id: 'mock5',
      title: 'Canon EOS 1500D DSLR Camera',
      description: 'Perfect starter DSLR camera with 18-55mm lens. Barely used, excellent condition. Comes with battery, charger, and camera bag.',
      imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      contact: '9456789012',
      location: 'Ghaziabad, UP',
      points: 200,
      seller: 'Vikram Joshi',
      condition: 'Like New',
      category: 'Electronics',
      postedDate: '1 week ago',
      views: 32
    },
    {
      id: 'mock6',
      title: 'Study Table with Chair',
      description: 'Wooden study table with matching chair. Perfect for students. Good condition with minor wear. Dimensions: 4ft x 2ft.',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      contact: '9567890123',
      location: 'Noida, UP',
      points: 90,
      seller: 'Anjali Verma',
      condition: 'Good',
      category: 'Furniture',
      postedDate: '4 days ago',
      views: 15
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          setProducts(mockProducts);
          // Initialize upvotes for mock data
          const initialUpvotes = {};
          mockProducts.forEach(product => {
            initialUpvotes[product.id] = Math.floor(Math.random() * 20) + 1;
          });
          setUpvotes(initialUpvotes);
        } else {
          const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProducts(items);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(mockProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSendMessage = async () => {
    if (!currentUser || !selectedProduct || !message.trim()) return;

    try {
      await addDoc(collection(db, 'messages'), {
        from: currentUser.email,
        to: selectedProduct.contact,
        message: message.trim(),
        productId: selectedProduct.id,
        timestamp: serverTimestamp(),
        read: false
      });
      alert('Message sent successfully!');
      setShowModal(false);
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Failed to send message');
    }
  };

  const toggleSave = (id) => {
    setSavedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
    if (!savedItems.includes(id)) toggleSave(id);
  };

  const handleUpvote = (id) => {
    setUpvotes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    if (!savedItems.includes(id)) toggleSave(id);
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'Like New': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3d35]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showDetail ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <button
                onClick={() => setShowDetail(null)}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <FiArrowLeft className="w-5 h-5 mr-2" />
                Back to all listings
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Image Section */}
              <div className="space-y-4">
                <img
                  src={showDetail.imageUrl}
                  alt={showDetail.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{showDetail.views} views</span>
                  <span>Posted {showDetail.postedDate}</span>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-[#1a3d35]">{showDetail.title}</h1>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleLike(showDetail.id)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FiHeart className={`w-6 h-6 ${likes[showDetail.id] ? 'fill-current text-red-500' : 'text-gray-400'}`} />
                      </button>
                      <button
                        onClick={() => toggleSave(showDetail.id)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FiBookmark className={`w-6 h-6 ${savedItems.includes(showDetail.id) ? 'fill-current text-[#1a3d35]' : 'text-gray-400'}`} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(showDetail.condition)}`}>
                      {showDetail.condition}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {showDetail.category}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1a3d35] to-[#2a5b4e] text-white p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Exchange Points</p>
                      <p className="text-2xl font-bold">{showDetail.points} pts</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleUpvote(showDetail.id)}
                        className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FiStar className="w-4 h-4" />
                        <span className="text-sm">{upvotes[showDetail.id] || 0}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{showDetail.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="w-5 h-5 mr-3" />
                    <span>{showDetail.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiUser className="w-5 h-5 mr-3" />
                    <span>Seller: {showDetail.seller}</span>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={`tel:${showDetail.contact}`}
                    className="flex items-center justify-center flex-1 bg-[#1a3d35] text-white py-3 px-4 rounded-xl hover:bg-[#16342e] transition-colors"
                  >
                    <FiPhone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProduct(showDetail);
                      setShowModal(true);
                    }}
                    className="flex items-center justify-center flex-1 bg-[#ffaa00] text-white py-3 px-4 rounded-xl hover:bg-[#e29c00] transition-colors"
                  >
                    <FiMessageCircle className="w-5 h-5 mr-2" />
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-[#1a3d35] mb-2">✨ Discover Amazing Items</h1>
              <p className="text-gray-600 text-lg">Find unique products from our community</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div
                  key={product.id}
                  onClick={() => setShowDetail(product)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">{upvotes[product.id] || 0}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(product.condition)}`}>
                        {product.condition}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#1a3d35] mb-2 line-clamp-1">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-gray-500 text-sm">
                        <FiMapPin className="w-4 h-4 mr-1" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center text-[#1a3d35] font-bold">
                        <span className="text-lg">{product.points}</span>
                        <span className="text-sm ml-1">pts</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">by {product.seller}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(product.id);
                          }}
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <FiHeart className={`w-4 h-4 ${likes[product.id] ? 'fill-current text-red-500' : 'text-gray-400'}`} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSave(product.id);
                          }}
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <FiBookmark className={`w-4 h-4 ${savedItems.includes(product.id) ? 'fill-current text-[#1a3d35]' : 'text-gray-400'}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Message Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#1a3d35]">
                Send Message
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                To: {selectedProduct.seller} • {selectedProduct.title}
              </p>
            </div>
            
            <div className="p-6">
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1a3d35] focus:border-transparent resize-none"
                placeholder="Hi! I'm interested in your item..."
              />
            </div>
            
            <div className="flex justify-end space-x-3 p-6 pt-0">
              <button
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                onClick={() => {
                  setShowModal(false);
                  setMessage('');
                }}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 bg-[#1a3d35] text-white rounded-xl hover:bg-[#16342e] transition-colors disabled:opacity-50"
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFeed;