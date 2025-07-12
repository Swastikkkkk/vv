import React from 'react';
import heroImage from '../assets/Heroimage.jpg'; // make sure the image exists

const HeroSection = () => {
  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Text & Buttons */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Rewear
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md mb-6">
          Giving fashion a second chance. Shop sustainably, wear consciously.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#447d68] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#366755] transition">
            Get Started
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-[#1a3d35] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
