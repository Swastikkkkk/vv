import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './FirebaseConfig'; // Update path as needed
import sampleImage from '../assets/image.png'; // Adjust if your file path is different

const categories = [
  { title: 'Traditional', image: sampleImage },
  { title: 'Modern', image: sampleImage },
  { title: 'Western', image: sampleImage },
  { title: 'Ethnic', image: sampleImage },
  { title: 'Kidswear', image: sampleImage },
  { title: 'Accessories', image: sampleImage },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Please log in to browse this category.');
      navigate('/login');
    } else {
      navigate(`/category/${category.toLowerCase()}`);
    }
  };

  return (
    <div className="py-16 px-4 bg-[#f0f4f3]">
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#1a3d35]">
        Browse by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.title}
            onClick={() => handleCategoryClick(cat.title)}
            className="relative cursor-pointer rounded-2xl overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 object-cover group-hover:brightness-50 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold bg-black/50 px-4 py-2 rounded-xl backdrop-blur-sm">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
