import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Herosection';
import CategoriesSection from './CategoriesSection';
import ImpactSection from './ImpactSection';
import Footer from './Footer';
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ImpactSection />
      <Footer/>
      {/* Add more sections as needed */}
    </>
  );
};

export default LandingPage;
