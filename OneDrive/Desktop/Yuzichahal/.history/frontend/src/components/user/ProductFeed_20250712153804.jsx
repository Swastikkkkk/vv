// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import { db } from '../FirebaseConfig';
// // // // // // // // // import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// // // // // // // // // const ProductFeed = () => {
// // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // // // // // // //         const snapshot = await getDocs(q);
// // // // // // // // //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // // // // // //         setProducts(items);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error('Error fetching products:', error);
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchProducts();
// // // // // // // // //   }, []);

// // // // // // // // //   if (loading) {
// // // // // // // // //     return <div className="text-center text-gray-600 mt-6">Loading listings...</div>;
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div className="mt-6 px-4 sm:px-8">
// // // // // // // // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>

// // // // // // // // //       {products.length === 0 ? (
// // // // // // // // //         <p className="text-gray-500 text-center">No listings yet. Be the first to add one!</p>
// // // // // // // // //       ) : (
// // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // // // // //           {products.map(product => (
// // // // // // // // //             <div
// // // // // // // // //               key={product.id}
// // // // // // // // //               className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-gray-200"
// // // // // // // // //             >
// // // // // // // // //               <img
// // // // // // // // //                 src={product.imageUrl}
// // // // // // // // //                 alt={product.title}
// // // // // // // // //                 className="w-full h-56 object-cover rounded-t-3xl"
// // // // // // // // //               />

// // // // // // // // //               <div className="p-5 flex-1 flex flex-col justify-between">
// // // // // // // // //                 <div>
// // // // // // // // //                   <h3 className="text-xl font-semibold text-[#1a3d35] mb-2 truncate">{product.title}</h3>
// // // // // // // // //                   <p className="text-sm text-gray-500 mb-2 line-clamp-3">
// // // // // // // // //                     {product.description || 'No description'}
// // // // // // // // //                   </p>
// // // // // // // // //                   <div className="flex items-center justify-between text-xs mt-2">
// // // // // // // // //                     <span className="bg-[#e1f4ec] text-[#26775f] px-3 py-1 rounded-full">
// // // // // // // // //                       {product.category || 'Category'}
// // // // // // // // //                     </span>
// // // // // // // // //                     <span className="text-gray-400">📍 {product.location || 'Unknown'}</span>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // //                 <div className="mt-5 flex flex-wrap gap-2 justify-center">
// // // // // // // // //                   {product.contact && (
// // // // // // // // //                     <a
// // // // // // // // //                       href={`mailto:${product.contact}`}
// // // // // // // // //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// // // // // // // // //                     >
// // // // // // // // //                       ✉️ Contact
// // // // // // // // //                     </a>
// // // // // // // // //                   )}

// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => alert('Request to exchange sent.')}
// // // // // // // // //                     className="px-3 py-2 bg-[#ff5f6d] text-white text-xs rounded-full hover:bg-[#e14b58] transition"
// // // // // // // // //                   >
// // // // // // // // //                     🔁 Exchange
// // // // // // // // //                   </button>

// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => alert('Points redeemed for item.')}
// // // // // // // // //                     className="px-3 py-2 bg-[#43cea2] text-white text-xs rounded-full hover:bg-[#36b692] transition"
// // // // // // // // //                   >
// // // // // // // // //                     🎯 Redeem
// // // // // // // // //                   </button>

// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => alert('Redirecting to Stripe...')}
// // // // // // // // //                     className="px-3 py-2 bg-[#7f00ff] text-white text-xs rounded-full hover:bg-[#6b00d6] transition"
// // // // // // // // //                   >
// // // // // // // // //                     💳 Pay
// // // // // // // // //                   </button>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ProductFeed;
// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import { db } from '../FirebaseConfig';
// // // // // // // // import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// // // // // // // // const ProductFeed = () => {
// // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchProducts = async () => {
// // // // // // // //       try {
// // // // // // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // // // // // //         const snapshot = await getDocs(q);
// // // // // // // //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // // // // //         setProducts(items);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error fetching products:', error);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchProducts();
// // // // // // // //   }, []);

// // // // // // // //   if (loading) {
// // // // // // // //     return <div className="text-center text-gray-600 mt-6">Loading listings...</div>;
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="mt-6 px-4 sm:px-8">
// // // // // // // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>

// // // // // // // //       {products.length === 0 ? (
// // // // // // // //         <p className="text-gray-500 text-center">No listings yet. Be the first to add one!</p>
// // // // // // // //       ) : (
// // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // // // //           {products.map(product => (
// // // // // // // //             <div
// // // // // // // //               key={product.id}
// // // // // // // //               className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-gray-200"
// // // // // // // //             >
// // // // // // // //               <img
// // // // // // // //                 src={product.imageUrl}
// // // // // // // //                 alt={product.title}
// // // // // // // //                 className="w-full h-56 object-cover rounded-t-3xl"
// // // // // // // //               />

// // // // // // // //               <div className="p-5 flex-1 flex flex-col justify-between">
// // // // // // // //                 <div>
// // // // // // // //                   <h3 className="text-xl font-semibold text-[#1a3d35] mb-2 truncate">{product.title}</h3>
// // // // // // // //                   <p className="text-sm text-gray-500 mb-2 line-clamp-3">
// // // // // // // //                     {product.description || 'No description'}
// // // // // // // //                   </p>
// // // // // // // //                   <div className="flex items-center justify-between text-xs mt-2">
// // // // // // // //                     <span className="bg-[#e1f4ec] text-[#26775f] px-3 py-1 rounded-full">
// // // // // // // //                       {product.category || 'Category'}
// // // // // // // //                     </span>
// // // // // // // //                     <span className="text-gray-400">📍 {product.location || 'Unknown'}</span>
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 {/* Action Buttons */}
// // // // // // // //                 <div className="mt-5 flex flex-wrap gap-2 justify-center">
// // // // // // // //                   {product.contact && (
// // // // // // // //                     <a
// // // // // // // //                       href={`tel:${product.contact}`}
// // // // // // // //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// // // // // // // //                     >
// // // // // // // //                       📞 Call
// // // // // // // //                     </a>
// // // // // // // //                   )}

// // // // // // // //                   <button
// // // // // // // //                     onClick={() => alert('Request to exchange sent.')}
// // // // // // // //                     className="px-3 py-2 bg-[#ff5f6d] text-white text-xs rounded-full hover:bg-[#e14b58] transition"
// // // // // // // //                   >
// // // // // // // //                     🔁 Exchange
// // // // // // // //                   </button>

// // // // // // // //                   <button
// // // // // // // //                     onClick={() => alert('Points redeemed for item.')}
// // // // // // // //                     className="px-3 py-2 bg-[#43cea2] text-white text-xs rounded-full hover:bg-[#36b692] transition"
// // // // // // // //                   >
// // // // // // // //                     🎯 Redeem
// // // // // // // //                   </button>

// // // // // // // //                   <button
// // // // // // // //                     onClick={() => alert('Redirecting to Stripe...')}
// // // // // // // //                     className="px-3 py-2 bg-[#7f00ff] text-white text-xs rounded-full hover:bg-[#6b00d6] transition"
// // // // // // // //                   >
// // // // // // // //                     💳 Pay
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProductFeed;
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import { db } from '../FirebaseConfig';
// // // // // // // import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
// // // // // // // import { getAuth } from 'firebase/auth';

// // // // // // // const ProductFeed = () => {
// // // // // // //   const [products, setProducts] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   const [showModal, setShowModal] = useState(false);
// // // // // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // // // // //   const [message, setMessage] = useState('');

// // // // // // //   const currentUser = getAuth().currentUser;

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProducts = async () => {
// // // // // // //       try {
// // // // // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // // // // //         const snapshot = await getDocs(q);
// // // // // // //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // // // //         setProducts(items);
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error fetching products:', error);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchProducts();
// // // // // // //   }, []);

// // // // // // //   const handleSendMessage = async () => {
// // // // // // //     if (!currentUser || !selectedProduct || !message.trim()) return;

// // // // // // //     try {
// // // // // // //       await addDoc(collection(db, 'messages'), {
// // // // // // //         from: currentUser.email,
// // // // // // //         to: selectedProduct.contact,
// // // // // // //         message: message.trim(),
// // // // // // //         productId: selectedProduct.id,
// // // // // // //         timestamp: serverTimestamp(),
// // // // // // //         read: false
// // // // // // //       });
// // // // // // //       alert('Message sent!');
// // // // // // //       setShowModal(false);
// // // // // // //       setMessage('');
// // // // // // //     } catch (err) {
// // // // // // //       console.error('Error sending message:', err);
// // // // // // //       alert('Failed to send message');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="mt-6 px-4 sm:px-8">
// // // // // // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>

// // // // // // //       {products.length === 0 ? (
// // // // // // //         <p className="text-gray-500 text-center">No listings yet.</p>
// // // // // // //       ) : (
// // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // // //           {products.map(product => (
// // // // // // //             <div key={product.id} className="bg-white rounded-3xl shadow-lg p-5 border">
// // // // // // //               <img
// // // // // // //                 src={product.imageUrl}
// // // // // // //                 alt={product.title}
// // // // // // //                 className="w-full h-56 object-cover rounded-xl mb-3"
// // // // // // //               />
// // // // // // //               <h3 className="text-xl font-semibold text-[#1a3d35] mb-1">{product.title}</h3>
// // // // // // //               <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
// // // // // // //               <div className="text-xs text-gray-400 mb-2">
// // // // // // //                 {product.location} • {product.points} pts
// // // // // // //               </div>

// // // // // // //               <div className="flex flex-wrap gap-2 mt-3">
// // // // // // //                 {product.contact && (
// // // // // // //                   <>
// // // // // // //                     <a
// // // // // // //                       href={`tel:${product.contact}`}
// // // // // // //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// // // // // // //                     >
// // // // // // //                       📞 Call
// // // // // // //                     </a>

// // // // // // //                     <button
// // // // // // //                       onClick={() => {
// // // // // // //                         setSelectedProduct(product);
// // // // // // //                         setShowModal(true);
// // // // // // //                       }}
// // // // // // //                       className="px-3 py-2 bg-[#ffaa00] text-white text-xs rounded-full hover:bg-[#e29c00] transition"
// // // // // // //                     >
// // // // // // //                       📩 Message
// // // // // // //                     </button>
// // // // // // //                   </>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Message Modal */}
// // // // // // //       {showModal && selectedProduct && (
// // // // // // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // // // // // //           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
// // // // // // //             <h2 className="text-lg font-semibold text-[#1a3d35] mb-2">
// // // // // // //               Message Seller ({selectedProduct.title})
// // // // // // //             </h2>
// // // // // // //             <textarea
// // // // // // //               rows={4}
// // // // // // //               value={message}
// // // // // // //               onChange={(e) => setMessage(e.target.value)}
// // // // // // //               className="w-full border p-3 rounded-lg mb-4"
// // // // // // //               placeholder="Type your message..."
// // // // // // //             ></textarea>
// // // // // // //             <div className="flex justify-end gap-2">
// // // // // // //               <button
// // // // // // //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// // // // // // //                 onClick={() => {
// // // // // // //                   setShowModal(false);
// // // // // // //                   setMessage('');
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Cancel
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 className="px-4 py-2 bg-[#1a3d35] text-white rounded hover:bg-[#16342e]"
// // // // // // //                 onClick={handleSendMessage}
// // // // // // //               >
// // // // // // //                 Send
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductFeed;
// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { db } from '../FirebaseConfig';
// // // // // // import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
// // // // // // import { getAuth } from 'firebase/auth';
// // // // // // import { FiHeart, FiBookmark, FiCheckCircle } from 'react-icons/fi';

// // // // // // const ProductFeed = () => {
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [showModal, setShowModal] = useState(false);
// // // // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // // // //   const [message, setMessage] = useState('');
// // // // // //   const [savedItems, setSavedItems] = useState([]);
// // // // // //   const [likes, setLikes] = useState({});

// // // // // //   const currentUser = getAuth().currentUser;

// // // // // //   useEffect(() => {
// // // // // //     const fetchProducts = async () => {
// // // // // //       try {
// // // // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // // // //         const snapshot = await getDocs(q);
// // // // // //         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // // //         setProducts(items);
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching products:', error);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchProducts();
// // // // // //   }, []);

// // // // // //   const handleSendMessage = async () => {
// // // // // //     if (!currentUser || !selectedProduct || !message.trim()) return;

// // // // // //     try {
// // // // // //       await addDoc(collection(db, 'messages'), {
// // // // // //         from: currentUser.email,
// // // // // //         to: selectedProduct.contact,
// // // // // //         message: message.trim(),
// // // // // //         productId: selectedProduct.id,
// // // // // //         timestamp: serverTimestamp(),
// // // // // //         read: false
// // // // // //       });
// // // // // //       alert('Message sent!');
// // // // // //       setShowModal(false);
// // // // // //       setMessage('');
// // // // // //     } catch (err) {
// // // // // //       console.error('Error sending message:', err);
// // // // // //       alert('Failed to send message');
// // // // // //     }
// // // // // //   };

// // // // // //   const toggleSave = (id) => {
// // // // // //     setSavedItems((prev) =>
// // // // // //       prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
// // // // // //     );
// // // // // //   };

// // // // // //   const toggleLike = (id) => {
// // // // // //     setLikes(prev => ({ ...prev, [id]: !prev[id] }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="mt-6 px-4 sm:px-8">
// // // // // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>
// // // // // //       {products.length === 0 ? (
// // // // // //         <p className="text-gray-500 text-center">No listings yet.</p>
// // // // // //       ) : (
// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // //           {products.map(product => (
// // // // // //             <div key={product.id} className="bg-white rounded-3xl shadow-lg p-5 border relative">
// // // // // //               <img
// // // // // //                 src={product.imageUrl}
// // // // // //                 alt={product.title}
// // // // // //                 className="w-full h-56 object-cover rounded-xl mb-3"
// // // // // //               />
// // // // // //               <h3 className="text-xl font-semibold text-[#1a3d35] mb-1">{product.title}</h3>
// // // // // //               <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
// // // // // //               <div className="text-xs text-gray-400 mb-2">
// // // // // //                 {product.location} • {product.points} pts
// // // // // //               </div>
// // // // // //               <div className="flex justify-between items-center mt-2 mb-1">
// // // // // //                 <button onClick={() => toggleLike(product.id)} className="text-[#ff5f6d]">
// // // // // //                   <FiHeart className={`w-5 h-5 ${likes[product.id] ? 'fill-current' : ''}`} />
// // // // // //                 </button>
// // // // // //                 <button onClick={() => toggleSave(product.id)} className="text-[#1a3d35]">
// // // // // //                   <FiBookmark className={`w-5 h-5 ${savedItems.includes(product.id) ? 'fill-current' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //               <div className="flex flex-wrap gap-2 mt-3">
// // // // // //                 {product.contact && (
// // // // // //                   <>
// // // // // //                     <a
// // // // // //                       href={`tel:${product.contact}`}
// // // // // //                       className="px-3 py-2 bg-[#1a3d35] text-white text-xs rounded-full hover:bg-[#16342e] transition"
// // // // // //                     >
// // // // // //                       📞 Call
// // // // // //                     </a>
// // // // // //                     <button
// // // // // //                       onClick={() => {
// // // // // //                         setSelectedProduct(product);
// // // // // //                         setShowModal(true);
// // // // // //                       }}
// // // // // //                       className="px-3 py-2 bg-[#ffaa00] text-white text-xs rounded-full hover:bg-[#e29c00] transition"
// // // // // //                     >
// // // // // //                       📩 Message
// // // // // //                     </button>
// // // // // //                   </>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {showModal && selectedProduct && (
// // // // // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // // // // //           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
// // // // // //             <h2 className="text-lg font-semibold text-[#1a3d35] mb-2">
// // // // // //               Message Seller ({selectedProduct.title})
// // // // // //             </h2>
// // // // // //             <textarea
// // // // // //               rows={4}
// // // // // //               value={message}
// // // // // //               onChange={(e) => setMessage(e.target.value)}
// // // // // //               className="w-full border p-3 rounded-lg mb-4"
// // // // // //               placeholder="Type your message..."
// // // // // //             ></textarea>
// // // // // //             <div className="flex justify-end gap-2">
// // // // // //               <button
// // // // // //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// // // // // //                 onClick={() => {
// // // // // //                   setShowModal(false);
// // // // // //                   setMessage('');
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Cancel
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 className="px-4 py-2 bg-[#1a3d35] text-white rounded hover:bg-[#16342e]"
// // // // // //                 onClick={handleSendMessage}
// // // // // //               >
// // // // // //                 Send
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductFeed;
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { db } from '../FirebaseConfig';
// // // // // import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
// // // // // import { getAuth } from 'firebase/auth';
// // // // // import { FiHeart, FiBookmark } from 'react-icons/fi';

// // // // // const ProductFeed = () => {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [showModal, setShowModal] = useState(false);
// // // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // // //   const [message, setMessage] = useState('');
// // // // //   const [savedItems, setSavedItems] = useState([]);
// // // // //   const [likes, setLikes] = useState({});
// // // // //   const [showDetail, setShowDetail] = useState(null);

// // // // //   const currentUser = getAuth().currentUser;

// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       try {
// // // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // // //         const snapshot = await getDocs(q);

// // // // //         if (snapshot.empty) {
// // // // //           setProducts([
// // // // //             {
// // // // //               id: 'mock1',
// // // // //               title: 'Mock Book',
// // // // //               description: 'A very interesting novel about adventure and life.',
// // // // //               imageUrl: 'https://via.placeholder.com/300x200',
// // // // //               contact: '9876543210',
// // // // //               location: 'Lucknow',
// // // // //               points: 80
// // // // //             },
// // // // //             {
// // // // //               id: 'mock2',
// // // // //               title: 'Mock Headphones',
// // // // //               description: 'Noise-canceling over-ear headphones. Lightly used.',
// // // // //               imageUrl: 'https://via.placeholder.com/300x200',
// // // // //               contact: '9123456789',
// // // // //               location: 'Kanpur',
// // // // //               points: 120
// // // // //             }
// // // // //           ]);
// // // // //         } else {
// // // // //           const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // //           setProducts(items);
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching products:', error);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchProducts();
// // // // //   }, []);

// // // // //   const handleSendMessage = async () => {
// // // // //     if (!currentUser || !selectedProduct || !message.trim()) return;

// // // // //     try {
// // // // //       await addDoc(collection(db, 'messages'), {
// // // // //         from: currentUser.email,
// // // // //         to: selectedProduct.contact,
// // // // //         message: message.trim(),
// // // // //         productId: selectedProduct.id,
// // // // //         timestamp: serverTimestamp(),
// // // // //         read: false
// // // // //       });
// // // // //       alert('Message sent!');
// // // // //       setShowModal(false);
// // // // //       setMessage('');
// // // // //     } catch (err) {
// // // // //       console.error('Error sending message:', err);
// // // // //       alert('Failed to send message');
// // // // //     }
// // // // //   };

// // // // //   const toggleSave = (id) => {
// // // // //     setSavedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
// // // // //   };

// // // // //   const toggleLike = (id) => {
// // // // //     setLikes(prev => ({ ...prev, [id]: !prev[id] }));
// // // // //     if (!savedItems.includes(id)) toggleSave(id);
// // // // //   };

// // // // //   if (loading) return <div className="text-center mt-10">Loading...</div>;

// // // // //   return (
// // // // //     <div className="mt-6 px-4 sm:px-8">
// // // // //       <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>
// // // // //       {showDetail ? (
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg">
// // // // //           <img src={showDetail.imageUrl} alt={showDetail.title} className="rounded-xl w-full h-80 object-cover" />
// // // // //           <div className="flex flex-col justify-between">
// // // // //             <div>
// // // // //               <h3 className="text-2xl font-semibold text-[#1a3d35] mb-2">{showDetail.title}</h3>
// // // // //               <p className="text-sm text-gray-700 mb-4">{showDetail.description}</p>
// // // // //               <p className="text-xs text-gray-500 mb-2">📍 {showDetail.location} • 💠 {showDetail.points} pts</p>
// // // // //               <div className="flex gap-3 mb-4">
// // // // //                 <button onClick={() => toggleLike(showDetail.id)} className="text-[#ff5f6d]">
// // // // //                   <FiHeart className={`w-5 h-5 ${likes[showDetail.id] ? 'fill-current' : ''}`} />
// // // // //                 </button>
// // // // //                 <button onClick={() => toggleSave(showDetail.id)} className="text-[#1a3d35]">
// // // // //                   <FiBookmark className={`w-5 h-5 ${savedItems.includes(showDetail.id) ? 'fill-current' : ''}`} />
// // // // //                 </button>
// // // // //               </div>
// // // // //               <div className="flex gap-3">
// // // // //                 <a href={`tel:${showDetail.contact}`} className="px-4 py-2 bg-[#1a3d35] text-white rounded-full text-xs hover:bg-[#16342e]">📞 Call</a>
// // // // //                 <button
// // // // //                   onClick={() => {
// // // // //                     setSelectedProduct(showDetail);
// // // // //                     setShowModal(true);
// // // // //                   }}
// // // // //                   className="px-4 py-2 bg-[#ffaa00] text-white rounded-full text-xs hover:bg-[#e29c00]"
// // // // //                 >📩 Message</button>
// // // // //               </div>
// // // // //             </div>
// // // // //             <button onClick={() => setShowDetail(null)} className="mt-4 text-sm text-blue-600 hover:underline">← Back to all listings</button>
// // // // //           </div>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //           {products.map(product => (
// // // // //             <div key={product.id} onClick={() => setShowDetail(product)} className="bg-white rounded-3xl shadow-lg p-5 border cursor-pointer hover:shadow-xl transition">
// // // // //               <img src={product.imageUrl} alt={product.title} className="w-full h-56 object-cover rounded-xl mb-3" />
// // // // //               <h3 className="text-xl font-semibold text-[#1a3d35] mb-1">{product.title}</h3>
// // // // //               <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
// // // // //               <div className="text-xs text-gray-400 mb-2">{product.location} • {product.points} pts</div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {showModal && selectedProduct && (
// // // // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // // // //           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
// // // // //             <h2 className="text-lg font-semibold text-[#1a3d35] mb-2">
// // // // //               Message Seller ({selectedProduct.title})
// // // // //             </h2>
// // // // //             <textarea
// // // // //               rows={4}
// // // // //               value={message}
// // // // //               onChange={(e) => setMessage(e.target.value)}
// // // // //               className="w-full border p-3 rounded-lg mb-4"
// // // // //               placeholder="Type your message..."
// // // // //             ></textarea>
// // // // //             <div className="flex justify-end gap-2">
// // // // //               <button
// // // // //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// // // // //                 onClick={() => {
// // // // //                   setShowModal(false);
// // // // //                   setMessage('');
// // // // //                 }}
// // // // //               >Cancel</button>
// // // // //               <button
// // // // //                 className="px-4 py-2 bg-[#1a3d35] text-white rounded hover:bg-[#16342e]"
// // // // //                 onClick={handleSendMessage}
// // // // //               >Send</button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductFeed;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { db } from '../FirebaseConfig';
// // // // import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
// // // // import { getAuth } from 'firebase/auth';
// // // // import { FiHeart, FiBookmark, FiPhone, FiMessageCircle, FiMapPin, FiStar, FiArrowLeft, FiUser } from 'react-icons/fi';

// // // // const ProductFeed = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // //   const [message, setMessage] = useState('');
// // // //   const [savedItems, setSavedItems] = useState([]);
// // // //   const [likes, setLikes] = useState({});
// // // //   const [showDetail, setShowDetail] = useState(null);
// // // //   const [upvotes, setUpvotes] = useState({});

// // // //   const currentUser = getAuth().currentUser;

// // // //   const mockProducts = [
// // // //     {
// // // //       id: 'mock1',
// // // //       title: 'Harry Potter Book Collection',
// // // //       description: 'Complete set of Harry Potter books in excellent condition. Perfect for any fantasy lover. All 7 books included with original covers.',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
// // // //       contact: '9876543210',
// // // //       location: 'Lucknow, UP',
// // // //       points: 80,
// // // //       seller: 'Rahul Sharma',
// // // //       condition: 'Like New',
// // // //       category: 'Books',
// // // //       postedDate: '2 days ago',
// // // //       views: 24
// // // //     },
// // // //     {
// // // //       id: 'mock2',
// // // //       title: 'Sony WH-1000XM4 Headphones',
// // // //       description: 'Premium noise-canceling wireless headphones. Lightly used for 6 months. Comes with original box, cable, and carry case.',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
// // // //       contact: '9123456789',
// // // //       location: 'Kanpur, UP',
// // // //       points: 120,
// // // //       seller: 'Priya Gupta',
// // // //       condition: 'Good',
// // // //       category: 'Electronics',
// // // //       postedDate: '1 day ago',
// // // //       views: 45
// // // //     },
// // // //     {
// // // //       id: 'mock3',
// // // //       title: 'Vintage Guitar - Yamaha F310',
// // // //       description: 'Beautiful acoustic guitar in great condition. Perfect for beginners or experienced players. Comes with guitar bag and picks.',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
// // // //       contact: '9234567890',
// // // //       location: 'Allahabad, UP',
// // // //       points: 150,
// // // //       seller: 'Arjun Singh',
// // // //       condition: 'Good',
// // // //       category: 'Music',
// // // //       postedDate: '3 days ago',
// // // //       views: 18
// // // //     },
// // // //     {
// // // //       id: 'mock4',
// // // //       title: 'MacBook Pro 2019 13-inch',
// // // //       description: 'MacBook Pro 13-inch with Touch Bar. 8GB RAM, 256GB SSD. Excellent performance for work and creative tasks. Minor scratches on lid.',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
// // // //       contact: '9345678901',
// // // //       location: 'Varanasi, UP',
// // // //       points: 300,
// // // //       seller: 'Sneha Patel',
// // // //       condition: 'Good',
// // // //       category: 'Electronics',
// // // //       postedDate: '5 days ago',
// // // //       views: 67
// // // //     },
// // // //     {
// // // //       id: 'mock5',
// // // //       title: 'Canon EOS 1500D DSLR Camera',
// // // //       description: 'Perfect starter DSLR camera with 18-55mm lens. Barely used, excellent condition. Comes with battery, charger, and camera bag.',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
// // // //       contact: '9456789012',
// // // //       location: 'Ghaziabad, UP',
// // // //       points: 200,
// // // //       seller: 'Vikram Joshi',
// // // //       condition: 'Like New',
// // // //       category: 'Electronics',
// // // //       postedDate: '1 week ago',
// // // //       views: 32
// // // //     },
// // // //     {
// // // //       id: 'mock6',
// // // //       title: 'Study Table with Chair',
// // // //       description: 'Wooden study table with matching chair. Perfect for students. Good condition with minor wear. Dimensions: 4ft x 2ft.',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
// // // //       contact: '9567890123',
// // // //       location: 'Noida, UP',
// // // //       points: 90,
// // // //       seller: 'Anjali Verma',
// // // //       condition: 'Good',
// // // //       category: 'Furniture',
// // // //       postedDate: '4 days ago',
// // // //       views: 15
// // // //     }
// // // //   ];

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // // //         const snapshot = await getDocs(q);

// // // //         if (snapshot.empty) {
// // // //           setProducts(mockProducts);
// // // //           // Initialize upvotes for mock data
// // // //           const initialUpvotes = {};
// // // //           mockProducts.forEach(product => {
// // // //             initialUpvotes[product.id] = Math.floor(Math.random() * 20) + 1;
// // // //           });
// // // //           setUpvotes(initialUpvotes);
// // // //         } else {
// // // //           const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // //           setProducts(items);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error('Error fetching products:', error);
// // // //         setProducts(mockProducts);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, []);

// // // //   const handleSendMessage = async () => {
// // // //     if (!currentUser || !selectedProduct || !message.trim()) return;

// // // //     try {
// // // //       await addDoc(collection(db, 'messages'), {
// // // //         from: currentUser.email,
// // // //         to: selectedProduct.contact,
// // // //         message: message.trim(),
// // // //         productId: selectedProduct.id,
// // // //         timestamp: serverTimestamp(),
// // // //         read: false
// // // //       });
// // // //       alert('Message sent successfully!');
// // // //       setShowModal(false);
// // // //       setMessage('');
// // // //     } catch (err) {
// // // //       console.error('Error sending message:', err);
// // // //       alert('Failed to send message');
// // // //     }
// // // //   };

// // // //   const toggleSave = (id) => {
// // // //     setSavedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
// // // //   };

// // // //   const toggleLike = (id) => {
// // // //     setLikes(prev => ({ ...prev, [id]: !prev[id] }));
// // // //     if (!savedItems.includes(id)) toggleSave(id);
// // // //   };

// // // //   const handleUpvote = (id) => {
// // // //     setUpvotes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
// // // //     if (!savedItems.includes(id)) toggleSave(id);
// // // //   };

// // // //   const getConditionColor = (condition) => {
// // // //     switch (condition) {
// // // //       case 'Like New': return 'bg-green-100 text-green-800';
// // // //       case 'Good': return 'bg-blue-100 text-blue-800';
// // // //       case 'Fair': return 'bg-yellow-100 text-yellow-800';
// // // //       default: return 'bg-gray-100 text-gray-800';
// // // //     }
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center min-h-screen">
// // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3d35]"></div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 pt-6 pb-12">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {showDetail ? (
// // // //           <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// // // //             <div className="p-6 border-b border-gray-200">
// // // //               <button
// // // //                 onClick={() => setShowDetail(null)}
// // // //                 className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
// // // //               >
// // // //                 <FiArrowLeft className="w-5 h-5 mr-2" />
// // // //                 Back to all listings
// // // //               </button>
// // // //             </div>
            
// // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
// // // //               {/* Image Section */}
// // // //               <div className="space-y-4">
// // // //                 <img
// // // //                   src={showDetail.imageUrl}
// // // //                   alt={showDetail.title}
// // // //                   className="w-full h-96 object-cover rounded-xl shadow-lg"
// // // //                 />
// // // //                 <div className="flex items-center justify-between text-sm text-gray-500">
// // // //                   <span>{showDetail.views} views</span>
// // // //                   <span>Posted {showDetail.postedDate}</span>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Details Section */}
// // // //               <div className="space-y-6">
// // // //                 <div>
// // // //                   <div className="flex items-center justify-between mb-2">
// // // //                     <h1 className="text-3xl font-bold text-[#1a3d35]">{showDetail.title}</h1>
// // // //                     <div className="flex items-center space-x-2">
// // // //                       <button
// // // //                         onClick={() => toggleLike(showDetail.id)}
// // // //                         className="p-2 rounded-full hover:bg-gray-100 transition-colors"
// // // //                       >
// // // //                         <FiHeart className={`w-6 h-6 ${likes[showDetail.id] ? 'fill-current text-red-500' : 'text-gray-400'}`} />
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={() => toggleSave(showDetail.id)}
// // // //                         className="p-2 rounded-full hover:bg-gray-100 transition-colors"
// // // //                       >
// // // //                         <FiBookmark className={`w-6 h-6 ${savedItems.includes(showDetail.id) ? 'fill-current text-[#1a3d35]' : 'text-gray-400'}`} />
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="flex items-center space-x-4 mb-4">
// // // //                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(showDetail.condition)}`}>
// // // //                       {showDetail.condition}
// // // //                     </span>
// // // //                     <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
// // // //                       {showDetail.category}
// // // //                     </span>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="bg-gradient-to-r from-[#1a3d35] to-[#2a5b4e] text-white p-4 rounded-xl">
// // // //                   <div className="flex items-center justify-between">
// // // //                     <div>
// // // //                       <p className="text-sm opacity-90">Exchange Points</p>
// // // //                       <p className="text-2xl font-bold">{showDetail.points} pts</p>
// // // //                     </div>
// // // //                     <div className="flex items-center space-x-2">
// // // //                       <button
// // // //                         onClick={() => handleUpvote(showDetail.id)}
// // // //                         className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
// // // //                       >
// // // //                         <FiStar className="w-4 h-4" />
// // // //                         <span className="text-sm">{upvotes[showDetail.id] || 0}</span>
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="prose max-w-none">
// // // //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
// // // //                   <p className="text-gray-600 leading-relaxed">{showDetail.description}</p>
// // // //                 </div>

// // // //                 <div className="space-y-3">
// // // //                   <div className="flex items-center text-gray-600">
// // // //                     <FiMapPin className="w-5 h-5 mr-3" />
// // // //                     <span>{showDetail.location}</span>
// // // //                   </div>
// // // //                   <div className="flex items-center text-gray-600">
// // // //                     <FiUser className="w-5 h-5 mr-3" />
// // // //                     <span>Seller: {showDetail.seller}</span>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flex space-x-4 pt-4">
// // // //                   <a
// // // //                     href={`tel:${showDetail.contact}`}
// // // //                     className="flex items-center justify-center flex-1 bg-[#1a3d35] text-white py-3 px-4 rounded-xl hover:bg-[#16342e] transition-colors"
// // // //                   >
// // // //                     <FiPhone className="w-5 h-5 mr-2" />
// // // //                     Call Now
// // // //                   </a>
// // // //                   <button
// // // //                     onClick={() => {
// // // //                       setSelectedProduct(showDetail);
// // // //                       setShowModal(true);
// // // //                     }}
// // // //                     className="flex items-center justify-center flex-1 bg-[#ffaa00] text-white py-3 px-4 rounded-xl hover:bg-[#e29c00] transition-colors"
// // // //                   >
// // // //                     <FiMessageCircle className="w-5 h-5 mr-2" />
// // // //                     Message
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ) : (
// // // //           <div>
// // // //             <div className="text-center mb-8">
// // // //               <h1 className="text-4xl font-bold text-[#1a3d35] mb-2">✨ Discover Amazing Items</h1>
// // // //               <p className="text-gray-600 text-lg">Find unique products from our community</p>
// // // //             </div>

// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //               {products.map(product => (
// // // //                 <div
// // // //                   key={product.id}
// // // //                   onClick={() => setShowDetail(product)}
// // // //                   className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
// // // //                 >
// // // //                   <div className="relative">
// // // //                     <img
// // // //                       src={product.imageUrl}
// // // //                       alt={product.title}
// // // //                       className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
// // // //                     />
// // // //                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
// // // //                       <div className="flex items-center space-x-1">
// // // //                         <FiStar className="w-4 h-4 text-yellow-500" />
// // // //                         <span className="text-sm font-medium">{upvotes[product.id] || 0}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="absolute bottom-4 left-4">
// // // //                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(product.condition)}`}>
// // // //                         {product.condition}
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="p-5">
// // // //                     <h3 className="text-xl font-bold text-[#1a3d35] mb-2 line-clamp-1">{product.title}</h3>
// // // //                     <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
// // // //                     <div className="flex items-center justify-between mb-3">
// // // //                       <div className="flex items-center text-gray-500 text-sm">
// // // //                         <FiMapPin className="w-4 h-4 mr-1" />
// // // //                         <span>{product.location}</span>
// // // //                       </div>
// // // //                       <div className="flex items-center text-[#1a3d35] font-bold">
// // // //                         <span className="text-lg">{product.points}</span>
// // // //                         <span className="text-sm ml-1">pts</span>
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="text-gray-500 text-sm">by {product.seller}</span>
// // // //                       <div className="flex items-center space-x-2">
// // // //                         <button
// // // //                           onClick={(e) => {
// // // //                             e.stopPropagation();
// // // //                             toggleLike(product.id);
// // // //                           }}
// // // //                           className="p-2 rounded-full hover:bg-gray-100 transition-colors"
// // // //                         >
// // // //                           <FiHeart className={`w-4 h-4 ${likes[product.id] ? 'fill-current text-red-500' : 'text-gray-400'}`} />
// // // //                         </button>
// // // //                         <button
// // // //                           onClick={(e) => {
// // // //                             e.stopPropagation();
// // // //                             toggleSave(product.id);
// // // //                           }}
// // // //                           className="p-2 rounded-full hover:bg-gray-100 transition-colors"
// // // //                         >
// // // //                           <FiBookmark className={`w-4 h-4 ${savedItems.includes(product.id) ? 'fill-current text-[#1a3d35]' : 'text-gray-400'}`} />
// // // //                         </button>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Message Modal */}
// // // //       {showModal && selectedProduct && (
// // // //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
// // // //           <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
// // // //             <div className="p-6 border-b border-gray-200">
// // // //               <h2 className="text-xl font-bold text-[#1a3d35]">
// // // //                 Send Message
// // // //               </h2>
// // // //               <p className="text-gray-600 text-sm mt-1">
// // // //                 To: {selectedProduct.seller} • {selectedProduct.title}
// // // //               </p>
// // // //             </div>
            
// // // //             <div className="p-6">
// // // //               <textarea
// // // //                 rows={4}
// // // //                 value={message}
// // // //                 onChange={(e) => setMessage(e.target.value)}
// // // //                 className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1a3d35] focus:border-transparent resize-none"
// // // //                 placeholder="Hi! I'm interested in your item..."
// // // //               />
// // // //             </div>
            
// // // //             <div className="flex justify-end space-x-3 p-6 pt-0">
// // // //               <button
// // // //                 className="px-6 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
// // // //                 onClick={() => {
// // // //                   setShowModal(false);
// // // //                   setMessage('');
// // // //                 }}
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //               <button
// // // //                 className="px-6 py-2 bg-[#1a3d35] text-white rounded-xl hover:bg-[#16342e] transition-colors disabled:opacity-50"
// // // //                 onClick={handleSendMessage}
// // // //                 disabled={!message.trim()}
// // // //               >
// // // //                 Send Message
// // // //               </button>
// // // //             </div>
// // // //           </div>
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
// // // import { FiHeart, FiBookmark, FiPhone, FiMessageCircle, FiMapPin, FiStar, FiArrowLeft, FiUser, FiFilter, FiGrid, FiTag } from 'react-icons/fi';

// // // const ProductFeed = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // //   const [message, setMessage] = useState('');
// // //   const [savedItems, setSavedItems] = useState([]);
// // //   const [likes, setLikes] = useState({});
// // //   const [showDetail, setShowDetail] = useState(null);
// // //   const [upvotes, setUpvotes] = useState({});
// // //   const [selectedCategory, setSelectedCategory] = useState('All');

// // //   const currentUser = getAuth().currentUser;

// // //   const categories = [
// // //     { title: 'All', icon: FiGrid },
// // //     { title: 'Traditional', icon: FiTag },
// // //     { title: 'Modern', icon: FiTag },
// // //     { title: 'Western', icon: FiTag },
// // //     { title: 'SportsWear', icon: FiTag },
// // //     { title: 'Kidswear', icon: FiTag },
// // //     { title: 'Accessories', icon: FiTag }
// // //   ];

// // //   const mockProducts = [
// // //     {
// // //       id: 'fashion1',
// // //       title: 'Elegant Silk Saree',
// // //       description: 'Beautiful handwoven silk saree with intricate golden border. Perfect for weddings and festivals. Comes with matching blouse piece.',
// // //       imageUrl: 'www.bing.com/images/search?view=detailV2&ccid=Vhw4sI7%2F&id=3369FA25DEAB2BB18FD59DD7204BEDD251F79C29&thid=OIP.Vhw4sI7_0d2FjigP6W2KjQHaKH&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.561c38b08effd1dd858e280fe96d8a8d%3Frik%3DKZz3UdLtSyDXnQ%26riu%3Dhttp%253a%252f%252ftamarindweddings.com%252fblog%252fwp-content%252fuploads%252f2016%252f02%252f5-112.jpg%26ehk%3DVZRryA1DEqH3%252fX8DJdubv2VXcs739gxrMaWsWjoJ6Nw%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=1640&expw=1200&q=saree&simid=608033066669923345&FORM=IRPRST&ck=A4AD8AEFFE403549C01FDA5FC1738AC9&selectedIndex=1&itb=0&cw=1375&ch=637&ajaxhist=0&ajaxserp=0',
// // //       contact: '9876543210',
// // //       location: 'Lucknow, UP',
// // //       points: 150,
// // //       seller: 'Meera Devi',
// // //       condition: 'Like New',
// // //       category: 'Traditional',
// // //       postedDate: '2 days ago',
// // //       views: 45,
// // //       size: 'One Size',
// // //       brand: 'Handloom'
// // //     },
// // //     {
// // //       id: 'fashion2',
// // //       title: 'Designer Kurta Set',
// // //       description: 'Cotton kurta with palazzo pants and dupatta. Comfortable and stylish for daily wear. Machine washable.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0408ba6c2d8?w=400&h=600&fit=crop',
// // //       contact: '9123456789',
// // //       location: 'Delhi, DL',
// // //       points: 80,
// // //       seller: 'Priya Sharma',
// // //       condition: 'Good',
// // //       category: 'Traditional',
// // //       postedDate: '1 day ago',
// // //       views: 32,
// // //       size: 'M',
// // //       brand: 'Fabindia'
// // //     },
// // //     {
// // //       id: 'fashion3',
// // //       title: 'Casual Denim Jacket',
// // //       description: 'Vintage-style denim jacket in excellent condition. Perfect for layering. Goes well with both casual and semi-formal outfits.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
// // //       contact: '9234567890',
// // //       location: 'Mumbai, MH',
// // //       points: 100,
// // //       seller: 'Arjun Patel',
// // //       condition: 'Good',
// // //       category: 'Western',
// // //       postedDate: '3 days ago',
// // //       views: 28,
// // //       size: 'L',
// // //       brand: 'Levis'
// // //     },
// // //     {
// // //       id: 'fashion4',
// // //       title: 'Floral Summer Dress',
// // //       description: 'Light and breezy floral dress perfect for summer. Comfortable cotton fabric with beautiful print. Ideal for casual outings.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
// // //       contact: '9345678901',
// // //       location: 'Bangalore, KA',
// // //       points: 90,
// // //       seller: 'Sneha Reddy',
// // //       condition: 'Like New',
// // //       category: 'Modern',
// // //       postedDate: '4 days ago',
// // //       views: 52,
// // //       size: 'S',
// // //       brand: 'Zara'
// // //     },
// // //     {
// // //       id: 'fashion5',
// // //       title: 'Nike Running Shoes',
// // //       description: 'Comfortable running shoes with excellent cushioning. Lightly used for morning jogs. Great grip and support for all terrains.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop',
// // //       contact: '9456789012',
// // //       location: 'Pune, MH',
// // //       points: 120,
// // //       seller: 'Vikram Singh',
// // //       condition: 'Good',
// // //       category: 'SportsWear',
// // //       postedDate: '5 days ago',
// // //       views: 38,
// // //       size: '9',
// // //       brand: 'Nike'
// // //     },
// // //     {
// // //       id: 'fashion6',
// // //       title: 'Adidas Track Suit',
// // //       description: 'Complete track suit with jacket and pants. Moisture-wicking fabric perfect for workouts. Rarely used, almost new condition.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
// // //       contact: '9567890123',
// // //       location: 'Chennai, TN',
// // //       points: 110,
// // //       seller: 'Rohit Kumar',
// // //       condition: 'Like New',
// // //       category: 'SportsWear',
// // //       postedDate: '6 days ago',
// // //       views: 25,
// // //       size: 'XL',
// // //       brand: 'Adidas'
// // //     },
// // //     {
// // //       id: 'fashion7',
// // //       title: 'Kids Cotton Frock',
// // //       description: 'Adorable cotton frock for 3-5 year olds. Soft fabric with cute cartoon prints. Perfect for playtime and parties.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=600&fit=crop',
// // //       contact: '9678901234',
// // //       location: 'Kolkata, WB',
// // //       points: 50,
// // //       seller: 'Anjali Das',
// // //       condition: 'Good',
// // //       category: 'Kidswear',
// // //       postedDate: '1 week ago',
// // //       views: 18,
// // //       size: '3-4 Years',
// // //       brand: 'Mothercare'
// // //     },
// // //     {
// // //       id: 'fashion8',
// // //       title: 'Designer Handbag',
// // //       description: 'Elegant leather handbag with multiple compartments. Perfect for office or casual outings. Barely used, excellent condition.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop',
// // //       contact: '9789012345',
// // //       location: 'Hyderabad, TS',
// // //       points: 140,
// // //       seller: 'Kavya Menon',
// // //       condition: 'Like New',
// // //       category: 'Accessories',
// // //       postedDate: '2 days ago',
// // //       views: 67,
// // //       size: 'Medium',
// // //       brand: 'Coach'
// // //     },
// // //     {
// // //       id: 'fashion9',
// // //       title: 'Silver Jewelry Set',
// // //       description: 'Beautiful silver necklace and earrings set. Intricate design with semi-precious stones. Perfect for special occasions.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
// // //       contact: '9890123456',
// // //       location: 'Jaipur, RJ',
// // //       points: 200,
// // //       seller: 'Radha Agarwal',
// // //       condition: 'Like New',
// // //       category: 'Accessories',
// // //       postedDate: '3 days ago',
// // //       views: 42,
// // //       size: 'One Size',
// // //       brand: 'Tanishq'
// // //     },
// // //     {
// // //       id: 'fashion10',
// // //       title: 'Stylish Blazer',
// // //       description: 'Professional blazer perfect for office wear. Tailored fit with premium fabric. Dry clean only. Excellent for formal occasions.',
// // //       imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
// // //       contact: '9901234567',
// // //       location: 'Gurgaon, HR',
// // //       points: 160,
// // //       seller: 'Rahul Kapoor',
// // //       condition: 'Good',
// // //       category: 'Modern',
// // //       postedDate: '4 days ago',
// // //       views: 35,
// // //       size: 'L',
// // //       brand: 'Raymond'
// // //     }
// // //   ];

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
// // //         const snapshot = await getDocs(q);

// // //         if (snapshot.empty) {
// // //           setProducts(mockProducts);
// // //           const initialUpvotes = {};
// // //           mockProducts.forEach(product => {
// // //             initialUpvotes[product.id] = Math.floor(Math.random() * 25) + 5;
// // //           });
// // //           setUpvotes(initialUpvotes);
// // //         } else {
// // //           const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //           setProducts(items);
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching products:', error);
// // //         setProducts(mockProducts);
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
// // //       alert('Message sent successfully!');
// // //       setShowModal(false);
// // //       setMessage('');
// // //     } catch (err) {
// // //       console.error('Error sending message:', err);
// // //       alert('Failed to send message');
// // //     }
// // //   };

// // //   const toggleSave = (id) => {
// // //     setSavedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
// // //   };

// // //   const toggleLike = (id) => {
// // //     setLikes(prev => ({ ...prev, [id]: !prev[id] }));
// // //     if (!savedItems.includes(id)) toggleSave(id);
// // //   };

// // //   const handleUpvote = (id) => {
// // //     setUpvotes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
// // //     if (!savedItems.includes(id)) toggleSave(id);
// // //   };

// // //   const getConditionColor = (condition) => {
// // //     switch (condition) {
// // //       case 'Like New': return 'bg-emerald-100 text-emerald-800';
// // //       case 'Good': return 'bg-blue-100 text-blue-800';
// // //       case 'Fair': return 'bg-amber-100 text-amber-800';
// // //       default: return 'bg-gray-100 text-gray-800';
// // //     }
// // //   };

// // //   const getCategoryColor = (category) => {
// // //     const colors = {
// // //       'Traditional': 'bg-orange-100 text-orange-800',
// // //       'Modern': 'bg-purple-100 text-purple-800',
// // //       'Western': 'bg-blue-100 text-blue-800',
// // //       'SportsWear': 'bg-green-100 text-green-800',
// // //       'Kidswear': 'bg-pink-100 text-pink-800',
// // //       'Accessories': 'bg-indigo-100 text-indigo-800'
// // //     };
// // //     return colors[category] || 'bg-gray-100 text-gray-800';
// // //   };

// // //   const filteredProducts = selectedCategory === 'All' 
// // //     ? products 
// // //     : products.filter(product => product.category === selectedCategory);

// // //   if (loading) {
// // //     return (
// // //       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 to-teal-50">
// // //         <div className="text-center">
// // //           <div className="animate-spin rounded-full h-16 w-16 border-4 border-rose-300 border-t-rose-600 mx-auto mb-4"></div>
// // //           <p className="text-gray-600 text-lg">Loading fashion items...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-teal-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // //         {showDetail ? (
// // //           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm">
// // //             <div className="bg-gradient-to-r from-rose-500 to-teal-500 p-6">
// // //               <button
// // //                 onClick={() => setShowDetail(null)}
// // //                 className="flex items-center text-white hover:text-rose-100 transition-colors"
// // //               >
// // //                 <FiArrowLeft className="w-5 h-5 mr-2" />
// // //                 Back to Fashion Gallery
// // //               </button>
// // //             </div>
            
// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
// // //               {/* Image Section */}
// // //               <div className="space-y-6">
// // //                 <div className="relative">
// // //                   <img
// // //                     src={showDetail.imageUrl}
// // //                     alt={showDetail.title}
// // //                     className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
// // //                   />
// // //                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
// // //                     <div className="flex items-center space-x-1">
// // //                       <FiStar className="w-4 h-4 text-amber-500" />
// // //                       <span className="text-sm font-semibold">{upvotes[showDetail.id] || 0}</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
// // //                   <span>{showDetail.views} views</span>
// // //                   <span>Posted {showDetail.postedDate}</span>
// // //                 </div>
// // //               </div>

// // //               {/* Details Section */}
// // //               <div className="space-y-6">
// // //                 <div>
// // //                   <div className="flex items-start justify-between mb-4">
// // //                     <div>
// // //                       <h1 className="text-3xl font-bold text-gray-800 mb-2">{showDetail.title}</h1>
// // //                       <p className="text-gray-600 font-medium">by {showDetail.seller}</p>
// // //                     </div>
// // //                     <div className="flex items-center space-x-2">
// // //                       <button
// // //                         onClick={() => toggleLike(showDetail.id)}
// // //                         className="p-3 rounded-full bg-rose-50 hover:bg-rose-100 transition-colors"
// // //                       >
// // //                         <FiHeart className={`w-6 h-6 ${likes[showDetail.id] ? 'fill-current text-rose-500' : 'text-rose-400'}`} />
// // //                       </button>
// // //                       <button
// // //                         onClick={() => toggleSave(showDetail.id)}
// // //                         className="p-3 rounded-full bg-teal-50 hover:bg-teal-100 transition-colors"
// // //                       >
// // //                         <FiBookmark className={`w-6 h-6 ${savedItems.includes(showDetail.id) ? 'fill-current text-teal-600' : 'text-teal-400'}`} />
// // //                       </button>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="flex flex-wrap gap-2 mb-6">
// // //                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(showDetail.condition)}`}>
// // //                       {showDetail.condition}
// // //                     </span>
// // //                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(showDetail.category)}`}>
// // //                       {showDetail.category}
// // //                     </span>
// // //                     <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
// // //                       Size: {showDetail.size}
// // //                     </span>
// // //                     <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
// // //                       {showDetail.brand}
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="bg-gradient-to-r from-rose-500 to-teal-500 text-white p-6 rounded-2xl">
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <p className="text-sm opacity-90">Exchange Points</p>
// // //                       <p className="text-3xl font-bold">{showDetail.points} pts</p>
// // //                     </div>
// // //                     <div className="flex items-center space-x-2">
// // //                       <button
// // //                         onClick={() => handleUpvote(showDetail.id)}
// // //                         className="flex items-center space-x-1 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
// // //                       >
// // //                         <FiStar className="w-4 h-4" />
// // //                         <span className="text-sm font-medium">Upvote</span>
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="bg-gray-50 p-6 rounded-2xl">
// // //                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
// // //                   <p className="text-gray-600 leading-relaxed">{showDetail.description}</p>
// // //                 </div>

// // //                 <div className="space-y-4">
// // //                   <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-xl">
// // //                     <FiMapPin className="w-5 h-5 mr-3 text-rose-500" />
// // //                     <span>{showDetail.location}</span>
// // //                   </div>
// // //                   <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-xl">
// // //                     <FiUser className="w-5 h-5 mr-3 text-teal-500" />
// // //                     <span>Seller: {showDetail.seller}</span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="grid grid-cols-2 gap-4 pt-4">
// // //                   <a
// // //                     href={`tel:${showDetail.contact}`}
// // //                     className="flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 px-6 rounded-2xl hover:from-teal-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
// // //                   >
// // //                     <FiPhone className="w-5 h-5 mr-2" />
// // //                     Call Now
// // //                   </a>
// // //                   <button
// // //                     onClick={() => {
// // //                       setSelectedProduct(showDetail);
// // //                       setShowModal(true);
// // //                     }}
// // //                     className="flex items-center justify-center bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 px-6 rounded-2xl hover:from-rose-600 hover:to-rose-700 transition-all transform hover:scale-105 shadow-lg"
// // //                   >
// // //                     <FiMessageCircle className="w-5 h-5 mr-2" />
// // //                     Message
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div>
// // //             {/* Header */}
// // //             <div className="text-center mb-8">
// // //               <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-teal-600 bg-clip-text text-transparent mb-4">
// // //                 👗 Fashion Exchange
// // //               </h1>
// // //               <p className="text-gray-600 text-xl">Discover amazing fashion finds from our community</p>
// // //             </div>

// // //             {/* Category Filter */}
// // //             <div className="mb-8">
// // //               <div className="flex items-center justify-center mb-4">
// // //                 <FiFilter className="w-5 h-5 mr-2 text-gray-500" />
// // //                 <span className="text-gray-700 font-medium">Filter by Category</span>
// // //               </div>
// // //               <div className="flex flex-wrap justify-center gap-3">
// // //                 {categories.map(category => (
// // //                   <button
// // //                     key={category.title}
// // //                     onClick={() => setSelectedCategory(category.title)}
// // //                     className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
// // //                       selectedCategory === category.title
// // //                         ? 'bg-gradient-to-r from-rose-500 to-teal-500 text-white shadow-lg'
// // //                         : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
// // //                     }`}
// // //                   >
// // //                     <category.icon className="w-4 h-4 mr-1" />
// // //                     {category.title}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Products Grid */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //               {filteredProducts.map(product => (
// // //                 <div
// // //                   key={product.id}
// // //                   onClick={() => setShowDetail(product)}
// // //                   className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
// // //                 >
// // //                   <div className="relative">
// // //                     <img
// // //                       src={product.imageUrl}
// // //                       alt={product.title}
// // //                       className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
// // //                     />
// // //                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
// // //                       <div className="flex items-center space-x-1">
// // //                         <FiStar className="w-3 h-3 text-amber-500" />
// // //                         <span className="text-xs font-semibold">{upvotes[product.id] || 0}</span>
// // //                       </div>
// // //                     </div>
// // //                     <div className="absolute bottom-4 left-4 right-4 flex justify-between">
// // //                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(product.condition)}`}>
// // //                         {product.condition}
// // //                       </span>
// // //                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
// // //                         {product.category}
// // //                       </span>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="p-5">
// // //                     <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.title}</h3>
// // //                     <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
// // //                     <div className="flex items-center justify-between mb-3">
// // //                       <div className="flex items-center text-gray-500 text-sm">
// // //                         <FiMapPin className="w-4 h-4 mr-1" />
// // //                         <span className="truncate">{product.location}</span>
// // //                       </div>
// // //                       <div className="flex items-center text-rose-600 font-bold">
// // //                         <span className="text-lg">{product.points}</span>
// // //                         <span className="text-sm ml-1">pts</span>
// // //                       </div>
// // //                     </div>
                    
// // //                     <div className="flex items-center justify-between">
// // //                       <div className="text-gray-500 text-sm">
// // //                         <p className="font-medium">{product.brand}</p>
// // //                         <p>Size: {product.size}</p>
// // //                       </div>
// // //                       <div className="flex items-center space-x-2">
// // //                         <button
// // //                           onClick={(e) => {
// // //                             e.stopPropagation();
// // //                             toggleLike(product.id);
// // //                           }}
// // //                           className="p-2 rounded-full hover:bg-rose-50 transition-colors"
// // //                         >
// // //                           <FiHeart className={`w-4 h-4 ${likes[product.id] ? 'fill-current text-rose-500' : 'text-gray-400'}`} />
// // //                         </button>
// // //                         <button
// // //                           onClick={(e) => {
// // //                             e.stopPropagation();
// // //                             toggleSave(product.id);
// // //                           }}
// // //                           className="p-2 rounded-full hover:bg-teal-50 transition-colors"
// // //                         >
// // //                           <FiBookmark className={`w-4 h-4 ${savedItems.includes(product.id) ? 'fill-current text-teal-600' : 'text-gray-400'}`} />
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Message Modal */}
// // //       {showModal && selectedProduct && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl">
// // //             <div className="bg-gradient-to-r from-rose-500 to-teal-500 p-6 rounded-t-3xl">
// // //               <h2 className="text-xl font-bold text-white">
// // //                 Send Message
// // //               </h2>
// // //               <p className="text-white/90 text-sm mt-1">
// // //                 To: {selectedProduct.seller} • {selectedProduct.title}
// // //               </p>
// // //             </div>
            
// // //             <div className="p-6">
// // //               <textarea
// // //                 rows={4}
// // //                 value={message}
// // //                 onChange={(e) => setMessage(e.target.value)}
// // //                 className="w-full border-2 border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
// // //                 placeholder="Hi! I'm interested in this item. Is it still available?"
// // //               />
// // //             </div>
            
// // //             <div className="flex justify-end space-x-3 p-6 pt-0">
// // //               <button
// // //                 className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors"
// // //                 onClick={() => {
// // //                   setShowModal(false);
// // //                   setMessage('');
// // //                 }}
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 className="px-6 py-3 bg-gradient-to-r from-rose-500 to-teal-500 text-white rounded-2xl hover:from-rose-600 hover:to-teal-600 transition-all disabled:opacity-50 shadow-lg"
// // //                 onClick={handleSendMessage}
// // //                 disabled={!message.trim()}
// // //               >
// // //                 Send Message
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
// // import { FiHeart, FiBookmark, FiPhone, FiMessageCircle, FiMapPin, FiStar, FiArrowLeft, FiUser, FiFilter, FiGrid, FiTag, FiEye } from 'react-icons/fi';

// // // Product Card Component
// // const ProductCard = ({ product, onProductClick, onLike, onSave, likes, savedItems, upvotes, onUpvote }) => {
// //   const getConditionColor = (condition) => {
// //     switch (condition) {
// //       case 'Like New': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
// //       case 'Good': return 'bg-green-50 text-green-700 border-green-200';
// //       case 'Fair': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
// //       default: return 'bg-gray-50 text-gray-700 border-gray-200';
// //     }
// //   };

// //   const getCategoryColor = (category) => {
// //     const colors = {
// //       'Traditional': 'bg-emerald-50 text-emerald-700 border-emerald-200',
// //       'Modern': 'bg-green-50 text-green-700 border-green-200',
// //       'Western': 'bg-teal-50 text-teal-700 border-teal-200',
// //       'SportsWear': 'bg-lime-50 text-lime-700 border-lime-200',
// //       'Kidswear': 'bg-mint-50 text-mint-700 border-mint-200',
// //       'Accessories': 'bg-sage-50 text-sage-700 border-sage-200'
// //     };
// //     return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
// //   };

// //   return (
// //     <div
// //       onClick={() => onProductClick(product)}
// //       className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:border-green-200 transition-all duration-300 group"
// //     >
// //       <div className="relative">
// //         <img
// //           src={product.imageUrl}
// //           alt={product.title}
// //           className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
// //         />
// //         <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 border border-gray-100">
// //           <div className="flex items-center space-x-1">
// //             <FiStar className="w-3 h-3 text-green-500" />
// //             <span className="text-xs font-medium text-gray-700">{upvotes[product.id] || 0}</span>
// //           </div>
// //         </div>
// //         <div className="absolute bottom-3 left-3 right-3 flex justify-between">
// //           <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getConditionColor(product.condition)}`}>
// //             {product.condition}
// //           </span>
// //           <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getCategoryColor(product.category)}`}>
// //             {product.category}
// //           </span>
// //         </div>
// //       </div>
      
// //       <div className="p-4">
// //         <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{product.title}</h3>
// //         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
// //         <div className="flex items-center justify-between mb-3">
// //           <div className="flex items-center text-gray-500 text-sm">
// //             <FiMapPin className="w-4 h-4 mr-1 text-green-500" />
// //             <span className="truncate">{product.location}</span>
// //           </div>
// //           <div className="flex items-center text-green-600 font-bold">
// //             <span className="text-lg">{product.points}</span>
// //             <span className="text-sm ml-1">pts</span>
// //           </div>
// //         </div>
        
// //         <div className="flex items-center justify-between">
// //           <div className="text-gray-500 text-sm">
// //             <p className="font-medium text-gray-700">{product.brand}</p>
// //             <p>Size: {product.size}</p>
// //           </div>
// //           <div className="flex items-center space-x-2">
// //             <button
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onLike(product.id);
// //               }}
// //               className="p-2 rounded-lg hover:bg-green-50 transition-colors"
// //             >
// //               <FiHeart className={`w-4 h-4 ${likes[product.id] ? 'fill-current text-green-500' : 'text-gray-400'}`} />
// //             </button>
// //             <button
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onSave(product.id);
// //               }}
// //               className="p-2 rounded-lg hover:bg-green-50 transition-colors"
// //             >
// //               <FiBookmark className={`w-4 h-4 ${savedItems.includes(product.id) ? 'fill-current text-green-600' : 'text-gray-400'}`} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Category Filter Component
// // const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
// //   return (
// //     <div className="mb-8">
// //       <div className="flex items-center justify-center mb-4">
// //         <FiFilter className="w-5 h-5 mr-2 text-gray-500" />
// //         <span className="text-gray-700 font-medium">Filter by Category</span>
// //       </div>
// //       <div className="flex flex-wrap justify-center gap-2">
// //         {categories.map(category => (
// //           <button
// //             key={category.title}
// //             onClick={() => onCategoryChange(category.title)}
// //             className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
// //               selectedCategory === category.title
// //                 ? 'bg-green-600 text-white shadow-sm'
// //                 : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
// //             }`}
// //           >
// //             <category.icon className="w-4 h-4 mr-1" />
// //             {category.title}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Product Detail Component
// // const ProductDetail = ({ product, onBack, onLike, onSave, onUpvote, onMessage, likes, savedItems, upvotes }) => {
// //   const getConditionColor = (condition) => {
// //     switch (condition) {
// //       case 'Like New': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
// //       case 'Good': return 'bg-green-50 text-green-700 border-green-200';
// //       case 'Fair': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
// //       default: return 'bg-gray-50 text-gray-700 border-gray-200';
// //     }
// //   };

// //   const getCategoryColor = (category) => {
// //     const colors = {
// //       'Traditional': 'bg-emerald-50 text-emerald-700 border-emerald-200',
// //       'Modern': 'bg-green-50 text-green-700 border-green-200',
// //       'Western': 'bg-teal-50 text-teal-700 border-teal-200',
// //       'SportsWear': 'bg-lime-50 text-lime-700 border-lime-200',
// //       'Kidswear': 'bg-mint-50 text-mint-700 border-mint-200',
// //       'Accessories': 'bg-sage-50 text-sage-700 border-sage-200'
// //     };
// //     return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
// //   };

// //   return (
// //     <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
// //       <div className="bg-green-600 p-6">
// //         <button
// //           onClick={onBack}
// //           className="flex items-center text-white hover:text-green-100 transition-colors"
// //         >
// //           <FiArrowLeft className="w-5 h-5 mr-2" />
// //           Back to Fashion Gallery
// //         </button>
// //       </div>
      
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
// //         {/* Image Section */}
// //         <div className="space-y-6">
// //           <div className="relative">
// //             <img
// //               src={product.imageUrl}
// //               alt={product.title}
// //               className="w-full h-[500px] object-cover rounded-xl shadow-sm"
// //             />
// //             <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-100">
// //               <div className="flex items-center space-x-1">
// //                 <FiStar className="w-4 h-4 text-green-500" />
// //                 <span className="text-sm font-semibold">{upvotes[product.id] || 0}</span>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
// //             <div className="flex items-center">
// //               <FiEye className="w-4 h-4 mr-1" />
// //               <span>{product.views} views</span>
// //             </div>
// //             <span>Posted {product.postedDate}</span>
// //           </div>
// //         </div>

// //         {/* Details Section */}
// //         <div className="space-y-6">
// //           <div>
// //             <div className="flex items-start justify-between mb-4">
// //               <div>
// //                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
// //                 <p className="text-gray-600 font-medium">by {product.seller}</p>
// //               </div>
// //               <div className="flex items-center space-x-2">
// //                 <button
// //                   onClick={() => onLike(product.id)}
// //                   className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
// //                 >
// //                   <FiHeart className={`w-6 h-6 ${likes[product.id] ? 'fill-current text-green-500' : 'text-green-400'}`} />
// //                 </button>
// //                 <button
// //                   onClick={() => onSave(product.id)}
// //                   className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
// //                 >
// //                   <FiBookmark className={`w-6 h-6 ${savedItems.includes(product.id) ? 'fill-current text-green-600' : 'text-green-400'}`} />
// //                 </button>
// //               </div>
// //             </div>
            
// //             <div className="flex flex-wrap gap-2 mb-6">
// //               <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getConditionColor(product.condition)}`}>
// //                 {product.condition}
// //               </span>
// //               <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getCategoryColor(product.category)}`}>
// //                 {product.category}
// //               </span>
// //               <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
// //                 Size: {product.size}
// //               </span>
// //               <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
// //                 {product.brand}
// //               </span>
// //             </div>
// //           </div>

// //           <div className="bg-green-600 text-white p-6 rounded-xl">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-sm opacity-90">Exchange Points</p>
// //                 <p className="text-3xl font-bold">{product.points} pts</p>
// //               </div>
// //               <div className="flex items-center space-x-2">
// //                 <button
// //                   onClick={() => onUpvote(product.id)}
// //                   className="flex items-center space-x-1 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
// //                 >
// //                   <FiStar className="w-4 h-4" />
// //                   <span className="text-sm font-medium">Upvote</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
// //             <p className="text-gray-600 leading-relaxed">{product.description}</p>
// //           </div>

// //           <div className="space-y-3">
// //             <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
// //               <FiMapPin className="w-5 h-5 mr-3 text-green-500" />
// //               <span>{product.location}</span>
// //             </div>
// //             <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
// //               <FiUser className="w-5 h-5 mr-3 text-green-500" />
// //               <span>Seller: {product.seller}</span>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-2 gap-4 pt-4">
// //             <a
// //               href={`tel:${product.contact}`}
// //               className="flex items-center justify-center bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors shadow-sm"
// //             >
// //               <FiPhone className="w-5 h-5 mr-2" />
// //               Call Now
// //             </a>
// //             <button
// //               onClick={() => onMessage(product)}
// //               className="flex items-center justify-center bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors shadow-sm"
// //             >
// //               <FiMessageCircle className="w-5 h-5 mr-2" />
// //               Message
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Message Modal Component
// // const MessageModal = ({ show, product, message, onMessageChange, onSend, onClose }) => {
// //   if (!show || !product) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// //       <div className="bg-white rounded-xl w-full max-w-md shadow-xl border border-gray-100">
// //         <div className="bg-green-600 p-6 rounded-t-xl">
// //           <h2 className="text-xl font-bold text-white">
// //             Send Message
// //           </h2>
// //           <p className="text-white/90 text-sm mt-1">
// //             To: {product.seller} • {product.title}
// //           </p>
// //         </div>
        
// //         <div className="p-6">
// //           <textarea
// //             rows={4}
// //             value={message}
// //             onChange={(e) => onMessageChange(e.target.value)}
// //             className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
// //             placeholder="Hi! I'm interested in this item. Is it still available?"
// //           />
// //         </div>
        
// //         <div className="flex justify-end space-x-3 p-6 pt-0">
// //           <button
// //             className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
// //             onClick={onClose}
// //           >
// //             Cancel
// //           </button>
// //           <button
// //             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 shadow-sm"
// //             onClick={onSend}
// //             disabled={!message.trim()}
// //           >
// //             Send Message
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Component
// // const ProductFeed = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [showModal, setShowModal] = useState(false);
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [message, setMessage] = useState('');
// //   const [savedItems, setSavedItems] = useState([]);
// //   const [likes, setLikes] = useState({});
// //   const [showDetail, setShowDetail] = useState(null);
// //   const [upvotes, setUpvotes] = useState({});
// //   const [selectedCategory, setSelectedCategory] = useState('All');

// //   const categories = [
// //     { title: 'All', icon: FiGrid },
// //     { title: 'Traditional', icon: FiTag },
// //     { title: 'Modern', icon: FiTag },
// //     { title: 'Western', icon: FiTag },
// //     { title: 'SportsWear', icon: FiTag },
// //     { title: 'Kidswear', icon: FiTag },
// //     { title: 'Accessories', icon: FiTag }
// //   ];

// //   const mockProducts = [
// //     {
// //       id: 'fashion1',
// //       title: 'Elegant Silk Saree',
// //       description: 'Beautiful handwoven silk saree with intricate golden border. Perfect for weddings and festivals. Comes with matching blouse piece.',
// //       imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop',
// //       contact: '9876543210',
// //       location: 'Lucknow, UP',
// //       points: 150,
// //       seller: 'Meera Devi',
// //       condition: 'Like New',
// //       category: 'Traditional',
// //       postedDate: '2 days ago',
// //       views: 45,
// //       size: 'One Size',
// //       brand: 'Handloom'
// //     },
    
// //     {
// //       id: 'fashion3',
// //       title: 'Casual Denim Jacket',
// //       description: 'Vintage-style denim jacket in excellent condition. Perfect for layering. Goes well with both casual and semi-formal outfits.',
// //       imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
// //       contact: '9234567890',
// //       location: 'Mumbai, MH',
// //       points: 100,
// //       seller: 'Arjun Patel',
// //       condition: 'Good',
// //       category: 'Western',
// //       postedDate: '3 days ago',
// //       views: 28,
// //       size: 'L',
// //       brand: 'Levis'
// //     },
// //     {
// //       id: 'fashion4',
// //       title: 'Floral Summer Dress',
// //       description: 'Light and breezy floral dress perfect for summer. Comfortable cotton fabric with beautiful print. Ideal for casual outings.',
// //       imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
// //       contact: '9345678901',
// //       location: 'Bangalore, KA',
// //       points: 90,
// //       seller: 'Sneha Reddy',
// //       condition: 'Like New',
// //       category: 'Modern',
// //       postedDate: '4 days ago',
// //       views: 52,
// //       size: 'S',
// //       brand: 'Zara'
// //     },
// //     {
// //       id: 'fashion5',
// //       title: 'Nike Running Shoes',
// //       description: 'Comfortable running shoes with excellent cushioning. Lightly used for morning jogs. Great grip and support for all terrains.',
// //       imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop',
// //       contact: '9456789012',
// //       location: 'Pune, MH',
// //       points: 120,
// //       seller: 'Vikram Singh',
// //       condition: 'Good',
// //       category: 'SportsWear',
// //       postedDate: '5 days ago',
// //       views: 38,
// //       size: '9',
// //       brand: 'Nike'
// //     },
// //     {
// //       id: 'fashion6',
// //       title: 'Adidas Track Suit',
// //       description: 'Complete track suit with jacket and pants. Moisture-wicking fabric perfect for workouts. Rarely used, almost new condition.',
// //       imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
// //       contact: '9567890123',
// //       location: 'Chennai, TN',
// //       points: 110,
// //       seller: 'Rohit Kumar',
// //       condition: 'Like New',
// //       category: 'SportsWear',
// //       postedDate: '6 days ago',
// //       views: 25,
// //       size: 'XL',
// //       brand: 'Adidas'
// //     },
// //     {
// //       id: 'fashion7',
// //       title: 'Kids Cotton Frock',
// //       description: 'Adorable cotton frock for 3-5 year olds. Soft fabric with cute cartoon prints. Perfect for playtime and parties.',
// //       imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=600&fit=crop',
// //       contact: '9678901234',
// //       location: 'Kolkata, WB',
// //       points: 50,
// //       seller: 'Anjali Das',
// //       condition: 'Good',
// //       category: 'Kidswear',
// //       postedDate: '1 week ago',
// //       views: 18,
// //       size: '3-4 Years',
// //       brand: 'Mothercare'
// //     },
// //     {
// //       id: 'fashion8',
// //       title: 'Designer Handbag',
// //       description: 'Elegant leather handbag with multiple compartments. Perfect for office or casual outings. Barely used, excellent condition.',
// //       imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop',
// //       contact: '9789012345',
// //       location: 'Hyderabad, TS',
// //       points: 140,
// //       seller: 'Kavya Menon',
// //       condition: 'Like New',
// //       category: 'Accessories',
// //       postedDate: '2 days ago',
// //       views: 67,
// //       size: 'Medium',
// //       brand: 'Coach'
// //     }
// //   ];

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         // Simulate API call
// //         await new Promise(resolve => setTimeout(resolve, 1000));
// //         setProducts(mockProducts);
// //         const initialUpvotes = {};
// //         mockProducts.forEach(product => {
// //           initialUpvotes[product.id] = Math.floor(Math.random() * 25) + 5;
// //         });
// //         setUpvotes(initialUpvotes);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //         setProducts(mockProducts);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   const handleSendMessage = async () => {
// //     if (!selectedProduct || !message.trim()) return;

// //     try {
// //       // Simulate sending message
// //       await new Promise(resolve => setTimeout(resolve, 500));
// //       alert('Message sent successfully!');
// //       setShowModal(false);
// //       setMessage('');
// //     } catch (err) {
// //       console.error('Error sending message:', err);
// //       alert('Failed to send message');
// //     }
// //   };

// //   const toggleSave = (id) => {
// //     setSavedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
// //   };

// //   const toggleLike = (id) => {
// //     setLikes(prev => ({ ...prev, [id]: !prev[id] }));
// //     if (!savedItems.includes(id)) toggleSave(id);
// //   };

// //   const handleUpvote = (id) => {
// //     setUpvotes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
// //     if (!savedItems.includes(id)) toggleSave(id);
// //   };

// //   const filteredProducts = selectedCategory === 'All' 
// //     ? products 
// //     : products.filter(product => product.category === selectedCategory);

// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-50">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600 mx-auto mb-4"></div>
// //           <p className="text-gray-600 text-lg">Loading fashion items...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {showDetail ? (
// //           <ProductDetail
// //             product={showDetail}
// //             onBack={() => setShowDetail(null)}
// //             onLike={toggleLike}
// //             onSave={toggleSave}
// //             onUpvote={handleUpvote}
// //             onMessage={(product) => {
// //               setSelectedProduct(product);
// //               setShowModal(true);
// //             }}
// //             likes={likes}
// //             savedItems={savedItems}
// //             upvotes={upvotes}
// //           />
// //         ) : (
// //           <div>
// //             {/* Header */}
// //             <div className="text-center mb-8">
// //               <h1 className="text-5xl font-bold text-gray-800 mb-4">
// //                 👗 Fashion Exchange
// //               </h1>
// //               <p className="text-gray-600 text-xl">Discover amazing fashion finds from our community</p>
// //             </div>

// //             {/* Category Filter */}
// //             <CategoryFilter
// //               categories={categories}
// //               selectedCategory={selectedCategory}
// //               onCategoryChange={setSelectedCategory}
// //             />

// //             {/* Products Grid */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //               {filteredProducts.map(product => (
// //                 <ProductCard
// //                   key={product.id}
// //                   product={product}
// //                   onProductClick={setShowDetail}
// //                   onLike={toggleLike}
// //                   onSave={toggleSave}
// //                   onUpvote={handleUpvote}
// //                   likes={likes}
// //                   savedItems={savedItems}
// //                   upvotes={upvotes}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Message Modal */}
// //       <MessageModal
// //         show={showModal}
// //         product={selectedProduct}
// //         message={message}
// //         onMessageChange={setMessage}
// //         onSend={handleSendMessage}
// //         onClose={() => {
// //           setShowModal(false);
// //           setMessage('');
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // export default ProductFeed;
// import React, { useEffect, useState } from 'react';
// import { FiHeart, FiBookmark, FiPhone, FiMessageCircle, FiMapPin, FiStar, FiArrowLeft, FiUser, FiFilter, FiGrid, FiTag, FiEye } from 'react-icons/fi';
// import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
// import { db } from '../FirebaseConfig'; // Make sure this path matches your Firebase config

// // Product Card Component
// const ProductCard = ({ product, onProductClick, onLike, onSave, likes, savedItems, upvotes, onUpvote }) => {
//   const getConditionColor = (condition) => {
//     switch (condition) {
//       case 'New': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
//       case 'Like New': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
//       case 'Gently Used': return 'bg-green-50 text-green-700 border-green-200';
//       case 'Used': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
//       case 'Worn': return 'bg-orange-50 text-orange-700 border-orange-200';
//       default: return 'bg-gray-50 text-gray-700 border-gray-200';
//     }
//   };

//   const getCategoryColor = (category) => {
//     const colors = {
//       'Ethnic': 'bg-emerald-50 text-emerald-700 border-emerald-200',
//       'Western': 'bg-teal-50 text-teal-700 border-teal-200',
//       'Modern': 'bg-green-50 text-green-700 border-green-200',
//       'Kidswear': 'bg-pink-50 text-pink-700 border-pink-200',
//       'Accessories': 'bg-purple-50 text-purple-700 border-purple-200'
//     };
//     return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
//   };

//   return (
//     <div
//       onClick={() => onProductClick(product)}
//       className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:border-green-200 transition-all duration-300 group"
//     >
//       <div className="relative">
//         <img
//           src={product.imageUrl}
//           alt={product.title}
//           className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 border border-gray-100">
//           <div className="flex items-center space-x-1">
//             <FiStar className="w-3 h-3 text-green-500" />
//             <span className="text-xs font-medium text-gray-700">{upvotes[product.id] || 0}</span>
//           </div>
//         </div>
//         <div className="absolute bottom-3 left-3 right-3 flex justify-between">
//           <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getConditionColor(product.condition)}`}>
//             {product.condition}
//           </span>
//           <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getCategoryColor(product.category)}`}>
//             {product.category}
//           </span>
//         </div>
//       </div>
      
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{product.title}</h3>
//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
//         <div className="flex items-center justify-between mb-3">
//           <div className="flex items-center text-gray-500 text-sm">
//             <FiMapPin className="w-4 h-4 mr-1 text-green-500" />
//             <span className="truncate">{product.location}</span>
//           </div>
//           <div className="flex items-center text-green-600 font-bold">
//             <span className="text-lg">{product.points}</span>
//             <span className="text-sm ml-1">pts</span>
//           </div>
//         </div>
        
//         <div className="flex items-center justify-between">
//           <div className="text-gray-500 text-sm">
//             <p className="font-medium text-gray-700">{product.type}</p>
//             <p>Size: {product.size}</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onLike(product.id);
//               }}
//               className="p-2 rounded-lg hover:bg-green-50 transition-colors"
//             >
//               <FiHeart className={`w-4 h-4 ${likes[product.id] ? 'fill-current text-green-500' : 'text-gray-400'}`} />
//             </button>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onSave(product.id);
//               }}
//               className="p-2 rounded-lg hover:bg-green-50 transition-colors"
//             >
//               <FiBookmark className={`w-4 h-4 ${savedItems.includes(product.id) ? 'fill-current text-green-600' : 'text-gray-400'}`} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Category Filter Component
// const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
//   return (
//     <div className="mb-8">
//       <div className="flex items-center justify-center mb-4">
//         <FiFilter className="w-5 h-5 mr-2 text-gray-500" />
//         <span className="text-gray-700 font-medium">Filter by Category</span>
//       </div>
//       <div className="flex flex-wrap justify-center gap-2">
//         {categories.map(category => (
//           <button
//             key={category.title}
//             onClick={() => onCategoryChange(category.title)}
//             className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               selectedCategory === category.title
//                 ? 'bg-green-600 text-white shadow-sm'
//                 : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
//             }`}
//           >
//             <category.icon className="w-4 h-4 mr-1" />
//             {category.title}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Product Detail Component
// const ProductDetail = ({ product, onBack, onLike, onSave, onUpvote, onMessage, likes, savedItems, upvotes }) => {
//   const getConditionColor = (condition) => {
//     switch (condition) {
//       case 'New': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
//       case 'Like New': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
//       case 'Gently Used': return 'bg-green-50 text-green-700 border-green-200';
//       case 'Used': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
//       case 'Worn': return 'bg-orange-50 text-orange-700 border-orange-200';
//       default: return 'bg-gray-50 text-gray-700 border-gray-200';
//     }
//   };

//   const getCategoryColor = (category) => {
//     const colors = {
//       'Ethnic': 'bg-emerald-50 text-emerald-700 border-emerald-200',
//       'Western': 'bg-teal-50 text-teal-700 border-teal-200',
//       'Modern': 'bg-green-50 text-green-700 border-green-200',
//       'Kidswear': 'bg-pink-50 text-pink-700 border-pink-200',
//       'Accessories': 'bg-purple-50 text-purple-700 border-purple-200'
//     };
//     return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
//   };

//   // Format date
//   const formatDate = (timestamp) => {
//     if (!timestamp) return 'Recently';
    
//     const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
//     const now = new Date();
//     const diffTime = Math.abs(now - date);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
//     if (diffDays === 1) return '1 day ago';
//     if (diffDays < 7) return `${diffDays} days ago`;
//     if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
//     return `${Math.ceil(diffDays / 30)} months ago`;
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//       <div className="bg-green-600 p-6">
//         <button
//           onClick={onBack}
//           className="flex items-center text-white hover:text-green-100 transition-colors"
//         >
//           <FiArrowLeft className="w-5 h-5 mr-2" />
//           Back to Fashion Gallery
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
//         {/* Image Section */}
//         <div className="space-y-6">
//           <div className="relative">
//             <img
//               src={product.imageUrl}
//               alt={product.title}
//               className="w-full h-[500px] object-cover rounded-xl shadow-sm"
//             />
//             <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-100">
//               <div className="flex items-center space-x-1">
//                 <FiStar className="w-4 h-4 text-green-500" />
//                 <span className="text-sm font-semibold">{upvotes[product.id] || 0}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Details Section */}
//         <div className="space-y-6">
//           <div>
//             <div className="flex items-start justify-between mb-4">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
//                 <p className="text-gray-600 font-medium">by {product.contact}</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => onLike(product.id)}
//                   className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
//                 >
//                   <FiHeart className={`w-6 h-6 ${likes[product.id] ? 'fill-current text-green-500' : 'text-green-400'}`} />
//                 </button>
//                 <button
//                   onClick={() => onSave(product.id)}
//                   className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
//                 >
//                   <FiBookmark className={`w-6 h-6 ${savedItems.includes(product.id) ? 'fill-current text-green-600' : 'text-green-400'}`} />
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex flex-wrap gap-2 mb-6">
//               <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getConditionColor(product.condition)}`}>
//                 {product.condition}
//               </span>
//               <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getCategoryColor(product.category)}`}>
//                 {product.category}
//               </span>
//               <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
//                 Size: {product.size}
//               </span>
//               <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
//                 {product.type}
//               </span>
//             </div>
//           </div>

//           <div className="bg-green-600 text-white p-6 rounded-xl">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm opacity-90">Exchange Points</p>
//                 <p className="text-3xl font-bold">{product.points} pts</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => onUpvote(product.id)}
//                   className="flex items-center space-x-1 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
//                 >
//                   <FiStar className="w-4 h-4" />
//                   <span className="text-sm font-medium">Upvote</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
//             <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
//             <p className="text-gray-600 leading-relaxed">{product.description}</p>
//           </div>

//           <div className="space-y-3">
//             <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FiMapPin className="w-5 h-5 mr-3 text-green-500" />
//               <span>{product.location}</span>
//             </div>
//             <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FiUser className="w-5 h-5 mr-3 text-green-500" />
//               <span>Contact: {product.contact}</span>
//             </div>
//             {product.tags && product.tags.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span key={index} className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="grid grid-cols-1 gap-4 pt-4">
//             <button
//               onClick={() => onMessage(product)}
//               className="flex items-center justify-center bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors shadow-sm"
//             >
//               <FiMessageCircle className="w-5 h-5 mr-2" />
//               Contact Seller
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Message Modal Component
// const MessageModal = ({ show, product, message, onMessageChange, onSend, onClose }) => {
//   if (!show || !product) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl w-full max-w-md shadow-xl border border-gray-100">
//         <div className="bg-green-600 p-6 rounded-t-xl">
//           <h2 className="text-xl font-bold text-white">
//             Send Message
//           </h2>
//           <p className="text-white/90 text-sm mt-1">
//             To: {product.contact} • {product.title}
//           </p>
//         </div>
        
//         <div className="p-6">
//           <textarea
//             rows={4}
//             value={message}
//             onChange={(e) => onMessageChange(e.target.value)}
//             className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
//             placeholder="Hi! I'm interested in this item. Is it still available?"
//           />
//         </div>
        
//         <div className="flex justify-end space-x-3 p-6 pt-0">
//           <button
//             className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 shadow-sm"
//             onClick={onSend}
//             disabled={!message.trim()}
//           >
//             Send Message
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Component
// const ProductFeed = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [message, setMessage] = useState('');
//   const [savedItems, setSavedItems] = useState([]);
//   const [likes, setLikes] = useState({});
//   const [showDetail, setShowDetail] = useState(null);
//   const [upvotes, setUpvotes] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = [
//     { title: 'All', icon: FiGrid },
//     { title: 'Ethnic', icon: FiTag },
//     { title: 'Western', icon: FiTag },
//     { title: 'Modern', icon: FiTag },
//     { title: 'Kidswear', icon: FiTag },
//     { title: 'Accessories', icon: FiTag }
//   ];

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Query to get active products, ordered by creation date (newest first)
//         const productsQuery = query(
//           collection(db, 'products'),
//           where('status', '==', 'active'),
//           orderBy('createdAt', 'desc')
//         );
        
//         const querySnapshot = await getDocs(productsQuery);
//         const fetchedProducts = [];
        
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           fetchedProducts.push({
//             id: doc.id,
//             ...data,
//             // Convert Firestore timestamp to JavaScript Date if needed
//             createdAt: data.createdAt?.toDate?.() || data.createdAt
//           });
//         });
        
//         setProducts(fetchedProducts);
        
//         // Initialize upvotes with random values for demo
//         const initialUpvotes = {};
//         fetchedProducts.forEach(product => {
//           initialUpvotes[product.id] = Math.floor(Math.random() * 15) + 1;
//         });
//         setUpvotes(initialUpvotes);
        
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setError('Failed to load products. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSendMessage = async () => {
//     if (!selectedProduct || !message.trim()) return;

//     try {
//       // Here you could implement actual message sending logic
//       // For now, we'll just show a success message
//       await new Promise(resolve => setTimeout(resolve, 500));
//       alert(`Message sent to ${selectedProduct.contact}: "${message}"`);
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

//   const handleUpvote = (id) => {
//     setUpvotes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
//     if (!savedItems.includes(id)) toggleSave(id);
//   };

//   const filteredProducts = selectedCategory === 'All' 
//     ? products 
//     : products.filter(product => product.category === selectedCategory);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600 mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading fashion items...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center">
//           <p className="text-red-600 text-lg mb-4">{error}</p>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {showDetail ? (
//           <ProductDetail
//             product={showDetail}
//             onBack={() => setShowDetail(null)}
//             onLike={toggleLike}
//             onSave={toggleSave}
//             onUpvote={handleUpvote}
//             onMessage={(product) => {
//               setSelectedProduct(product);
//               setShowModal(true);
//             }}
//             likes={likes}
//             savedItems={savedItems}
//             upvotes={upvotes}
//           />
//         ) : (
//           <div>
//             {/* Header */}
//             <div className="text-center mb-8">
//               <h1 className="text-5xl font-bold text-gray-800 mb-4">
//                 👗 Fashion Exchange
//               </h1>
//               <p className="text-gray-600 text-xl">Discover amazing fashion finds from our community</p>
//             </div>

//             {/* Category Filter */}
//             <CategoryFilter
//               categories={categories}
//               selectedCategory={selectedCategory}
//               onCategoryChange={setSelectedCategory}
//             />

//             {/* Products Grid */}
//             {filteredProducts.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-gray-600 text-lg">No products found in this category.</p>
//                 <p className="text-gray-500 mt-2">Try selecting a different category or check back later!</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredProducts.map(product => (
//                   <ProductCard
//                     key={product.id}
//                     product={product}
//                     onProductClick={setShowDetail}
//                     onLike={toggleLike}
//                     onSave={toggleSave}
//                     onUpvote={handleUpvote}
//                     likes={likes}
//                     savedItems={savedItems}
//                     upvotes={upvotes}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Message Modal */}
//       <MessageModal
//         show={showModal}
//         product={selectedProduct}
//         message={message}
//         onMessageChange={setMessage}
//         onSend={handleSendMessage}
//         onClose={() => {
//           setShowModal(false);
//           setMessage('');
//         }}
//       />
//     </div>
//   );
// };

// export default ProductFeed;