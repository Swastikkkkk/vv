import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './FirebaseConfig'; // adjust if needed
import sampleImage from './assets/image.png'; // local image

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
    <section className="w-full bg-[#f0f4f3] py-16">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1a3d35] mb-12">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => handleCategoryClick(cat.title)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-[1.03]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-2xl font-semibold bg-black/50 px-6 py-2 rounded-xl backdrop-blur-sm">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
