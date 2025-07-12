import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Herosection';
import CategoriesSection from './CategoriesSection';
import ImpactSection from './ImpactSection';
import Footer from './Footer';
import ProductFeed from './user/ProductFeed';
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductFeed
      <CategoriesSection />
      <ImpactSection />
      <Footer/>
      {/* Add more sections as needed */}
    </>
  );
};

export default LandingPage;
