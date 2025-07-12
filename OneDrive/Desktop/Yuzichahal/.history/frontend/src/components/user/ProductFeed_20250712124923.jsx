import React, { useEffect, useState } from 'react';
import { db } from '../FirebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const ProductFeed = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600 mt-6">Loading listings...</div>;
  }

  return (
    <div className="mt-6 px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-6 text-[#1a3d35]">✨ Explore Listings</h2>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No listings yet. Be the first to add one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-gray-200"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3d35] mb-2 truncate">{product.title}</h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-3">
                    {product.description || 'No description'}
                  </p>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <span className="bg-[#e1f4ec] text-[#26775f] px-3 py-1 rounded-full">
                      {product.category || 'Category'}
                    </span>
                    <span className="text-gray-400">📍 {product.location || 'Unknown'}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  {product.contact && (
                    <a
                      href={`mailto:${product.contact}`}
                      className="block w-full text-center px-4 py-2 bg-[#1a3d35] text-white rounded-full text-sm hover:bg-[#16342e] transition"
                    >
                      ✉️ Contact Seller
                    </a>
                  )}

                  <button
                    onClick={() => alert('Request to exchange sent.')}
                    className="w-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#ffc371] to-[#ff5f6d] text-white rounded-full hover:opacity-90 transition"
                  >
                    🔁 Exchange Item
                  </button>

                  <button
                    onClick={() => alert('Points redeemed for item.')}
                    className="w-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-full hover:opacity-90 transition"
                  >
                    🎯 Redeem with Points
                  </button>

                  <button
                    onClick={() => alert('Redirecting to Stripe...')}
                    className="w-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white rounded-full hover:opacity-90 transition"
                  >
                    💳 Pay with Stripe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFeed;
