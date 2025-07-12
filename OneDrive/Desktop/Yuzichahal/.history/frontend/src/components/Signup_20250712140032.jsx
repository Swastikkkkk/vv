// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, googleProvider, db } from './FirebaseConfig';
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
// } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';

// const Signup = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleEmailSignup = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!role) {
//       setError('⚠️ Please select a role before signing up.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, 'users', user.uid), {
//         name,
//         email,
//         uid: user.uid,
//         role,
//         createdAt: new Date(),
//       });

//       // Redirect based on role
//       navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
//     } catch (err) {
//       setError(err.message || 'Signup failed. Try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     setError('');
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       let confirmedRole = prompt('Enter your role (admin or user):', 'user');
//       if (!confirmedRole) {
//         setError('⚠️ Role is required for Google signup.');
//         return;
//       }

//       confirmedRole = confirmedRole.toLowerCase();
//       if (confirmedRole !== 'admin' && confirmedRole !== 'user') {
//         setError('❌ Invalid role. Enter "admin" or "user".');
//         return;
//       }

//       await setDoc(doc(db, 'users', user.uid), {
//         name: user.displayName,
//         email: user.email,
//         uid: user.uid,
//         role: confirmedRole,
//         photoURL: user.photoURL || '',
//         createdAt: new Date(),
//       }, { merge: true });

//       navigate(confirmedRole === 'admin' ? '/admin-dashboard' : '/user-dashboard');
//     } catch (err) {
//       setError(err.message || 'Google signup failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f0f4f3] px-4">
//       <div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/30">
//         <h2 className="text-3xl font-semibold text-[#1a3d35] mb-6 text-center">Join Rewear</h2>

//         <form onSubmit={handleEmailSignup} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>

//           {error && (
//             <p className="text-sm text-red-600 text-center bg-red-100 py-2 rounded">{error}</p>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-[#447d68] text-white rounded-xl hover:bg-[#366755] transition disabled:opacity-50"
//           >
//             {loading ? 'Creating Account...' : 'Sign Up'}
//           </button>
//         </form>

//         <div className="mt-6 text-center text-sm text-[#1a3d35]">— or sign up with —</div>

//         <button
//           onClick={handleGoogleSignup}
//           className="mt-4 w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-xl hover:shadow-md transition"
//         >
//           <img
//             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//             alt="Google"
//             className="w-5 h-5"
//           />
//           <span className="text-[#1a3d35] font-medium">Sign up with Google</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Signup;
