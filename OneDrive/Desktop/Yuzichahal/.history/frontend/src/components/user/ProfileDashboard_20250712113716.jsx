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
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchUserStats();
  }, []);

  if (!userData) {
    return (
      <div className="col-span-2 md:col-span-2 bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="col-span-2 md:col-span-2 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-[#1a3d35] mb-2">Welcome, {userData.name || 'User'}</h2>
      <p className="text-sm text-gray-600 mb-4">{getExperienceLevel(exchangesCount)}</p>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-[#3a506b]">{listingsCount}</p>
          <p className="text-sm text-gray-500">Listings Posted</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#3a506b]">{exchangesCount}</p>
          <p className="text-sm text-gray-500">Exchanges Done</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#3a506b]">{points}</p>
          <p className="text-sm text-gray-500">Points Earned</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
