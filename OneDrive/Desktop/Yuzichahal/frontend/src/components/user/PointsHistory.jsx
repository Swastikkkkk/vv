import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { format } from 'date-fns';
import { getAuth } from 'firebase/auth';

const PointsHistory = ({ userId: propUserId }) => {
  const [pointsLog, setPointsLog] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const userId = propUserId || auth.currentUser?.uid;

  useEffect(() => {
    if (!userId) {
      console.warn('User ID not available');
      setLoading(false);
      return;
    }

    const userRef = doc(db, 'users', userId);
    const unsubscribe = onSnapshot(
      userRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();

          setPointsLog(Array.isArray(data.pointsLog) ? data.pointsLog : []);
          setTotalPoints(typeof data.points === 'number' ? data.points : 0);
        } else {
          console.warn('User not found');
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching points log:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  const sortedLog = [...pointsLog].sort((a, b) => {
    const timeA = new Date(a.timestamp).getTime();
    const timeB = new Date(b.timestamp).getTime();
    return timeB - timeA;
  });

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#e7f3ef] to-[#fdfdfd]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transition-all">
        <h2 className="text-2xl font-bold text-[#1a3d35] mb-4">Points History</h2>
        <p className="text-gray-600 mb-6">
          Total Points:{' '}
          <span className="font-semibold text-[#447d68]">{totalPoints}</span>
        </p>

        {loading ? (
          <p className="text-gray-500 animate-pulse">Loading history...</p>
        ) : sortedLog.length === 0 ? (
          <p className="text-gray-400">No points activity yet.</p>
        ) : (
          <div className="relative border-l-2 border-[#447d68] pl-6">
            {sortedLog.map((entry, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute -left-[14px] top-[2px] w-3 h-3 bg-[#447d68] rounded-full animate-ping" />
                <div className="bg-[#f8fdfc] p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">
                    {entry.timestamp
                      ? format(new Date(entry.timestamp), 'PPpp')
                      : 'Unknown Date'}
                  </p>
                  <p className="text-md">
                    <span
                      className={`font-semibold ${
                        entry.points > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {entry.points > 0 ? `+${entry.points}` : entry.points} points
                    </span>{' '}
                    – {entry.reason || 'No reason given'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PointsHistory;
