import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f6f5]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-[#1a3d35] mb-4">Welcome Back</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button className="w-full bg-[#447d68] text-white py-2 rounded-lg hover:bg-[#366755] transition">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
