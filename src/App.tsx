import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatWeOffer from './components/WhatWeOffer';
import PhotoGallery from './components/PhotoGallery';
import BrandCollaboration from './components/BrandCollaboration';
import Reviews from './components/Reviews';
import BookStay from './components/BookStay';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeOffer />
      <PhotoGallery />
      <BrandCollaboration />
      <Reviews />
      <BookStay />
    </div>
  );
}

export default App;