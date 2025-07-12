import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './FirebaseConfig'; // adjust path as needed

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Fetch user role from Firestore
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        const role = data.role;

        if (role === 'user') {
          navigate('/user');
        } else if (role === 'admin') {
          navigate('/admin');
        } else {
          setError('Invalid role assigned.');
        }
      } else {
        setError('No user data found in database.');
      }
    } catch (err) {
      setError(err.message || 'Login failed.');
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500"
            required
          />

          {error && (
            <p className="text-sm text-red-200 bg-red-500/30 px-3 py-2 rounded text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#447d68] text-white rounded-xl font-medium hover:bg-[#366755] transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-white text-sm">
          Don’t have an account?{' '}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
