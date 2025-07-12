import React from 'react';

const dummyProducts = [
  { title: 'Floral Kurti', owner: 'Neha', points: 20 },
  { title: 'Blue Denim Jacket', owner: 'Arjun', points: 35 },
];

const ProductFeed = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1a3d35]">Browse Listings</h2>
        <button className="bg-[#447d68] text-white px-4 py-2 rounded-lg hover:bg-[#366755]">+ Add Product</button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {dummyProducts.map((item, index) => (
          <div key={index} className="p-4 bg-[#f0f4f3] rounded-xl">
            <h3 className="font-semibold text-lg text-[#1a3d35]">{item.title}</h3>
            <p className="text-sm text-gray-600">Posted by: {item.owner}</p>
            <p className="text-sm text-[#519872]">Redeem for {item.points} points</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeed;
