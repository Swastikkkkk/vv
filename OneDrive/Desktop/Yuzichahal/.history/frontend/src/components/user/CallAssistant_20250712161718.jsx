// import React, { useState } from 'react';
// import axios from 'axios';
// import { FiPhoneCall } from 'react-icons/fi';

// const CallAssistant = () => {
//   const yourPhoneNumber = '+919582626655';
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleCall = async () => {
//     setLoading(true);
//     setStatus('Calling assistant...');

//     try {
//       const res = await axios.post('http://localhost:5800/api/call', {
//         to: yourPhoneNumber,
//       });

//       if (res.data.success) {
//         setStatus(`✅ Assistant is calling you!`);
//       } else {
//         setStatus('❌ Call failed. Try again.');
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus(`❌ ${err.response?.data?.error || 'Server error'}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Circular Floating Button */}
//       <button
//         onClick={handleCall}
//         disabled={loading}
//         className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#447d68] hover:bg-[#366755] text-white flex items-center justify-center shadow-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//         title="Call Assistant"
//       >
//         {loading ? (
//           <svg
//             className="animate-spin h-5 w-5 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8v8H4z"
//             />
//           </svg>
//         ) : (
//           <FiPhoneCall className="w-6 h-6" />
//         )}
//       </button>

//       {/* Status Message */}
//       {status && (
//         <div className="fixed bottom-24 right-6 bg-white text-sm text-gray-700 shadow-md px-4 py-2 rounded-lg max-w-xs">
//           {status}
//         </div>
//       )}
//     </>
//   );
// };

// export default CallAssistant;
