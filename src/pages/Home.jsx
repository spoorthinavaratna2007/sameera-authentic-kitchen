import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProductSection from '../components/ProductSection';
import SeasonalSpecials from '../components/SeasonalSpecials';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home({ onOpenPriceChart, onQuickView }) {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Us Section */}
      <About />

      {/* 3. Our Products Section */}
      <ProductSection
        onOpenPriceChart={onOpenPriceChart}
        onQuickView={onQuickView}
      />

      {/* 4. Seasonal Specials - Sankranti Collection */}
      <SeasonalSpecials
        onQuickView={onQuickView}
      />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. Contact and Direct Order Section */}
      <Contact />

      {/* 7. Location Section - Find Us */}
      <Location />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
