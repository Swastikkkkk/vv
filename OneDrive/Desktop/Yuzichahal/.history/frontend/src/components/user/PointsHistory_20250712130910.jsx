import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { format } from 'date-fns';

const PointsHistory = ({ userId }) => {
  const [pointsLog, setPointsLog] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const userRef = doc(db, 'users', userId);

    const unsubscribe = onSnapshot(
      userRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setPointsLog(data.pointsLog || []);
          setTotalPoints(data.points || 0);
          setLoading(false);
        } else {
          console.warn('User not found');
          setLoading(false);
        }
      },
      (error) => {
        console.error('Error listening to points:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  const sortedLog = [...pointsLog].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#e7f3ef] to-[#fdfdfd]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#1a3d35] mb-4">Points History</h2>
        <p className="text-gray-600 mb-6">
          Total Points:{' '}
          <span className="font-semibold text-[#447d68]">{totalPoints}</span>
        </p>

        {loading ? (
          <p className="text-gray-500">Loading history...</p>
        ) : sortedLog.length === 0 ? (
          <p className="text-gray-400">No points activity yet.</p>
        ) : (
          <div className="relative border-l-2 border-[#447d68] pl-6">
            {sortedLog.map((entry, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute -left-[14px] top-[2px] w-3 h-3 bg-[#447d68] rounded-full"></div>
                <div className="bg-[#f8fdfc] p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">
                    {format(new Date(entry.timestamp), 'PPpp')}
                  </p>
                  <p className="text-md">
                    <span
                      className={`font-semibold ${
                        entry.points > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {entry.points > 0 ? `+${entry.points}` : entry.points} points
                    </span>{' '}
                    – {entry.reason}
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
