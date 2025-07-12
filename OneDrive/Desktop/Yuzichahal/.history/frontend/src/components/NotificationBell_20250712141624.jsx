import React, { useEffect, useState } from 'react';
import { FiBell } from 'react-icons/fi';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';

const NotificationBell = () => {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, 'messages'),
      where('to', '==', currentUser.email),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const unreadCount = messages.filter((msg) => !msg.read).length;

  return (
    <div className="relative inline-block">
      <button onClick={() => setOpen(!open)} className="relative text-[#1a3d35] hover:text-[#0f2e25]">
        <FiBell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-xl border z-50">
          <div className="p-3 text-sm font-semibold border-b bg-[#f8faf9]">Notifications</div>
          <div className="max-h-60 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-center text-gray-400 py-3">No messages yet.</p>
            ) : (
              messages.slice(0, 5).map((msg) => (
                <div key={msg.id} className="p-3 border-b hover:bg-gray-50">
                  <p className="text-sm">
                    📩 <strong>{msg.from}</strong> messaged about <em>{msg.productTitle}</em>
                  </p>
                  <p className="text-xs text-gray-500 mt-1 truncate">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
