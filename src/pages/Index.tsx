import React from 'react';
import { Header } from '@/components/Homepage/Header';
import { ConceptSection } from '@/components/Homepage/ConceptSection';
import { LocationGrid } from '@/components/Homepage/LocationGrid';
import { Footer } from '@/components/Homepage/Footer';
import { PinkZigzag, Clouds, StarLeft, StarRight } from '@/components/Homepage/DecorativeElements';
import { Character } from '@/components/Homepage/Character';

const Index = () => {
  return (
    <main className="w-[390px] h-[844px] border relative bg-[#C2E4FF] mx-auto my-0 rounded-[25px] border-solid border-[#292D32] max-md:w-full max-md:max-w-[390px] max-md:h-auto max-md:min-h-[844px] max-sm:border-[none]">
      <Header />
      <ConceptSection />
      <LocationGrid />
      <Footer />

      {/* Decorative Elements */}
      <PinkZigzag />
      <Clouds />
      <StarLeft />
      <StarRight />
      <Character />
    </main>
  );
};

export default Index;
