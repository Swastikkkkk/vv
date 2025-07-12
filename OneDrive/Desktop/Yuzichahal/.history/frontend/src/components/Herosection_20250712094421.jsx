import React from 'react';
import heroImage from '../assets/Heroimage.jpg'; // change to your actual image name

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Rewear
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
          Giving fashion a second chance. Shop sustainably, wear consciously.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
