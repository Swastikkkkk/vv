// src/components/user/ProfileDashboard.jsx
import React, { useEffect, useState } from 'react';
import { auth, db } from '../FirebaseConfig';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

// Placeholder avatar if userData.photoURL is missing
const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=3a506b&color=fff&rounded=true&size=128";

const ProfileDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [listingsCount, setListingsCount] = useState(0);
  const [exchangesCount, setExchangesCount] = useState(0);
  const [points, setPoints] = useState(0);

  const getExperienceLevel = (exchanges) => {
    if (exchanges >= 20) return 'Level 5: Swap Master';
    if (exchanges >= 10) return 'Level 4: Eco Champ';
    if (exchanges >= 5) return 'Level 3: Conscious Contributor';
    if (exchanges >= 2) return 'Level 2: Beginner Swapper';
    return 'Level 1: Newbie';
  };

  useEffect(() => {
  const fetchUserStats = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      // Get user data
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        setUserData(data);
        setPoints(data.points || 0);
        setExchangesCount(data.exchanges || 0);
      }

      // 🔧 Corrected: Get listings count from "products"
      const listingQuery = query(
        collection(db, 'products'),
        where('ownerId', '==', user.uid)
      );
      const listingsSnap = await getDocs(listingQuery);
      setListingsCount(listingsSnap.size);

    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  fetchUserStats();
}, []);


  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eafc] to-[#cfdef3]">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center border border-[#e6e6e6] relative">
        {/* Profile Picture */}
        <div className="absolute -top-16">
          <img
            src={userData.photoURL || defaultAvatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-gray-100"
          />
        </div>
        <div className="mt-20 text-center w-full">
          <h2 className="text-3xl font-extrabold text-[#1a3d35] mb-1 tracking-tight">
            {userData.name || 'User'}
          </h2>
          <span className="inline-block bg-gradient-to-r from-[#3a506b] to-[#5bc0be] text-white text-xs font-semibold px-4 py-1 rounded-full mb-2 shadow">
            {getExperienceLevel(exchangesCount)}
          </span>
          <div className="flex justify-center gap-2 mb-6">
            {points > 50 && (
              <span className="bg-yellow-200 text-yellow-800 px-3 py-0.5 rounded-full text-xs font-bold shadow">
                &#11088; High Scorer
              </span>
            )}
            {exchangesCount > 10 && (
              <span className="bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-xs font-bold shadow">
                &#127942; Pro Swapper
              </span>
            )}
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 text-center w-full mb-8">
          <div className="bg-[#f3f6f5] rounded-xl py-4 shadow-inner">
            <p className="text-3xl font-extrabold text-[#3a506b]">{listingsCount}</p>
            <p className="text-xs text-gray-600">Listings</p>
          </div>
          <div className="bg-[#f3f6f5] rounded-xl py-4 shadow-inner">
            <p className="text-3xl font-extrabold text-[#3a506b]">{exchangesCount}</p>
            <p className="text-xs text-gray-600">Exchanges</p>
          </div>
          <div className="bg-[#f3f6f5] rounded-xl py-4 shadow-inner">
            <p className="text-3xl font-extrabold text-[#3a506b]">{points}</p>
            <p className="text-xs text-gray-600">Points</p>
          </div>
        </div>
        {/* User Info */}
        <div className="w-full text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold text-[#1a3d35]">Email:</span>{" "}
            {userData.email || <span className="italic text-gray-400">Not available</span>}
          </p>
          <p>
            <span className="font-semibold text-[#1a3d35]">Joined:</span>{" "}
            {userData.createdAt
              ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString()
              : <span className="italic text-gray-400">N/A</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
