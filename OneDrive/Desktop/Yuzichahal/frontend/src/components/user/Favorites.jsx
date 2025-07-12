// src/components/user/Favorites.jsx
import React, { useState, useEffect } from 'react';
import { FiHeart, FiTrash2 } from 'react-icons/fi';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  
  // Load favorites from localStorage or your backend
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter(item => item.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#1a3d35] mb-6 flex items-center gap-2">
        <FiHeart className="text-red-500" />
        My Favorites
      </h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <FiHeart className="mx-auto text-6xl text-gray-300 mb-4" />
          <p className="text-gray-500">No favorites yet. Start browsing and save items you love!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
                <button 
                  onClick={() => removeFavorite(item.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;