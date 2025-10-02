import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default Home;