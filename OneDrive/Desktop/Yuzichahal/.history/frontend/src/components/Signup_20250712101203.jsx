import React, { useState } from 'react';
import { auth, googleProvider, db } from '.';
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); // default role
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        uid: user.uid,
        role,
        createdAt: new Date()
      });

      alert('Signed up and saved to DB!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Prompt for role selection after Google sign-in (optional)
      const confirmedRole = prompt('Enter your role: admin or user', 'user') || 'user';

      // Save to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        role: confirmedRole,
        photoURL: user.photoURL || '',
        createdAt: new Date()
      }, { merge: true });

      alert(`Welcome ${user.displayName}!`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f3] px-4">
      <div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-semibold text-[#1a3d35] mb-6 text-center">Join Rewear</h2>
        <form onSubmit={handleEmailSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#447d68] text-white rounded-xl hover:bg-[#366755] transition disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#1a3d35]">
          — or sign up with —
        </div>

        <button
          onClick={handleGoogleSignup}
          className="mt-4 w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-xl hover:shadow-md transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-[#1a3d35] font-medium">Sign up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
