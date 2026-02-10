'use client';

import React, { useState } from 'react';
import PremiumNavbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ImpactSection from '@/components/ImpactSection';
import PricingPagee from '@/components/PricingPage';
import ProcessSection from '@/components/ProcessSection';
import PremiumFooter from '@/components/Footer';
import ArchitectBuilder from './builder/page';
// Aapka builder component

const Page = () => {
  // Ye state decide karegi ke Builder dikhana hai ya Landing Page
  const [isBuilding, setIsBuilding] = useState(false);

  // Jab user free plan select karega
  const handleSelectFree = () => {
    // Scroll top par le jao taaki builder shuru se dikhe
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Builder ko active kar do
    setIsBuilding(true);
  };

  return (
    <>
    
      {isBuilding ? (
        <ArchitectBuilder />
      ) : (
      
        <>
          <PremiumNavbar />
          <Hero />
          <ProjectSection />
           <PricingPagee onSelectFree={handleSelectFree} />
          <ExpertiseSection />
          <ImpactSection />
           <ProcessSection />
          <PremiumFooter />
        </>
      )}
    </>
  );
};

export default Page;