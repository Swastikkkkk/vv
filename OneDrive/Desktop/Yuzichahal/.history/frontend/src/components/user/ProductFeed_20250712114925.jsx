// src/components/user/ProductFeed.jsx
import React from 'react';

const mockProducts = [
  {
    id: 1,
    title: "Vintage Saree",
    description: "Beautiful pink silk saree perfect for weddings or festive occasions.",
    imageUrl: "https://images.unsplash.com/photo-1602810316691-915389be2a9c",
    location: "Delhi",
    contact: "user1@example.com"
  },
  {
    id: 2,
    title: "Men's Kurta",
    description: "Elegant navy blue kurta in great condition. Size L.",
    imageUrl: "https://images.unsplash.com/photo-1629373081417-2e1e16e1f86c",
    location: "Mumbai",
    contact: "user2@example.com"
  },
  {
    id: 3,
    title: "Kids Lehenga",
    description: "Like-new kids lehenga, worn once. Size M.",
    imageUrl: "https://images.unsplash.com/photo-1603252109394-3c1f5e58d34f",
    location: "Kolkata",
    contact: "user3@example.com"
  },
  {
    id: 4,
    title: "Accessories Combo",
    description: "Set of bangles, earrings and anklets. Ideal for gifting.",
    imageUrl: "https://images.unsplash.com/photo-1611859871222-b3442d4f7784",
    location: "Bangalore",
    contact: "user4@example.com"
  },
  {
    id: 5,
    title: "Western Gown",
    description: "Chic black western gown, party wear. Size S.",
    imageUrl: "https://images.unsplash.com/photo-1551029506-080ddee5a97c",
    location: "Jaipur",
    contact: "user5@example.com"
  }
];

const ProductFeed = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1a3d35]">Explore Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-[#1a3d35]">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description.slice(0, 80)}...</p>
              <p className="text-sm text-gray-500">📍 {product.location}</p>
              <a
                href={`mailto:${product.contact}`}
                className="inline-block mt-2 px-4 py-2 bg-[#447d68] text-white text-sm rounded hover:bg-[#366755] transition"
              >
                Contact Seller
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
