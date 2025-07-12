import React, { useEffect, useState } from 'react';
import { db } from '../FirebaseConfig';
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { FiList } from 'react-icons/fi';

const MyProducts = ({ userEmail }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userEmail) return;

    const productsRef = collection(db, 'products');
    const baseQuery = query(
      productsRef,
      where('contact', '==', userEmail),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      baseQuery,
      (snapshot) => {
        let fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        if (filter === 'listed') {
          fetchedProducts = fetchedProducts.filter(
            (p) => p.status === 'active' || !p.status
          );
        } else if (filter === 'exchanged') {
          fetchedProducts = fetchedProducts.filter(
            (p) => p.status === 'exchanged'
          );
        }

        setProducts(fetchedProducts);
        setLoading(false);
      },
      (error) => {
        console.error('🔥 Error fetching products:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userEmail, filter]);

  return (
    <div className="min-h-screen p-6 bg-[#f3f6f5]">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
        {/* Header & Filters */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-[#1a3d35] flex items-center gap-2">
            <FiList className="text-[#1a3d35]" /> My Products
          </h2>

          <div className="flex gap-3">
            {['all', 'listed', 'exchanged'].map((f) => (
              <button
                key={f}
                className={`px-4 py-2 rounded-full border transition font-medium ${
                  filter === f
                    ? 'bg-[#447d68] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => {
                  setLoading(true); // reset loading state
                  setFilter(f);
                }}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading your products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-400">
            No products found under this filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 border"
              >
                <img
                  src={
                    product.imageUrl ||
                    'https://via.placeholder.com/300x180?text=No+Image'
                  }
                  alt={product.title}
                  className="w-full h-44 object-cover rounded-xl mb-3"
                />
                <h3 className="text-lg font-semibold text-[#1a3d35]">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="text-xs text-gray-400 mb-1">
                  {product.location} • {product.points} pts
                </div>
                <div className="flex items-center justify-between text-xs mt-2">
                  <span
                    className={`px-3 py-1 rounded-full font-medium ${
                      product.status === 'exchanged'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {product.status === 'exchanged' ? 'Exchanged' : 'Listed'}
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                    {product.createdAt?.seconds
                      ? new Date(
                          product.createdAt.seconds * 1000
                        ).toLocaleString('en-IN', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })
                      : 'Unknown'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
