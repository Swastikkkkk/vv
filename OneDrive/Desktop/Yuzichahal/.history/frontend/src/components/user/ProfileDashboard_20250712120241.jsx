// src/components/user/ProfileDashboard.jsx
import React, { useEffect, useState } from 'react';
import { auth, db } from '../FirebaseConfig';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

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

        // Get listings count
        const listingQuery = query(
          collection(db, 'listings'),
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
      <div className="min-h-screen flex items-center justify-center bg-[#f3f6f5]">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f6f5] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-[#1a3d35] mb-2">
          Welcome, {userData.name || 'User'}
        </h2>
        <p className="text-sm text-gray-500 mb-6 italic">
          {getExperienceLevel(exchangesCount)}
        </p>

        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-[#3a506b]">{listingsCount}</p>
            <p className="text-sm text-gray-600">Listings</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#3a506b]">{exchangesCount}</p>
            <p className="text-sm text-gray-600">Exchanges</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#3a506b]">{points}</p>
            <p className="text-sm text-gray-600">Points</p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p><strong>Email:</strong> {userData.email || 'Not available'}</p>
          <p><strong>Joined:</strong> {userData.createdAt ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
