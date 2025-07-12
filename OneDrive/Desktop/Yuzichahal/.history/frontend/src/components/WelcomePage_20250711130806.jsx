import React from 'react';
import { FaSmile, FaPlay, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 text-center">
        <div className="flex justify-center mb-4">
          <FaSmile className="text-yellow-400 text-5xl animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to HappySpace 🎉</h1>
        <p className="text-gray-600 text-lg mb-6">
          Your cozy corner of the internet. Let's build something amazing today!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 transition duration-300">
            <FaPlay /> Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 font-medium py-2 px-6 rounded-full flex items-center gap-2 transition duration-300">
            <FaInfoCircle /> Learn More
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 transition duration-300">
            <FaPhoneAlt /> Contact Us
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          Made with ❤️ by <span className="text-indigo-600 font-semibold">You</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
