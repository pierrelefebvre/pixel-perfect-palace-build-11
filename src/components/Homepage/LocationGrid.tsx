import React from 'react';
import { LocationCard } from './LocationCard';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export const LocationGrid: React.FC = () => {
  const handleChoose = (location: string) => {
    console.log(`Choisi: ${location}`);
    // Here you would implement the navigation logic
  };

  const handleInfo = (location: string) => {
    console.log(`Info pour: ${location}`);
    // Here you would implement the info modal logic
  };

  const WazemmesIcon = () => (
    <svg 
      width="99" 
      height="91" 
      viewBox="0 0 99 91" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-[86px]"
    >
      <path 
        d="M19.5 88L9.5 80.5L36.5 51.5L2 56V44.5L39.5 39.5L24.5 14.5L36.5 8L49.5 30.5L72.5 2L81.5 8L59.5 35.5L97.5 29V39.5L59.5 47L78.5 77.5L68.5 83L47.5 51.5L19.5 88Z" 
        fill="#FB6023" 
        stroke="#292D32" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    </svg>
  );

  const GareIcon = () => (
    <svg 
      width="98" 
      height="97" 
      viewBox="0 0 98 97" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-[86px]"
    >
      <path 
        d="M83.3473 14.8966L50.7515 35.0621L41.0299 6L33.0239 38.6207H1L29.021 52.8552L14.1527 82.5103L41.0299 67.6828L50.7515 92L61.6168 61.7517H96.5L67.9072 47.5172L83.3473 14.8966Z" 
        fill="#FFDE3B" 
        stroke="#292D32" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    </svg>
  );

  const RedPointIcon = () => (
    <svg 
      width="13" 
      height="101" 
      viewBox="0 0 13 101" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-[95px]"
    >
      <path 
        d="M51.7755 5C41.8871 33.9816 31.6975 44.7086 5 53.4135C36.9208 63.832 49.2816 73.9951 61.5204 100C63.1576 74.1369 71.029 62.2871 100.5 47.0192C70.9887 40.2663 61.175 30.2764 51.7755 5Z" 
        fill="#32AE66" 
        stroke="#292D32" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <section className="absolute w-[358px] h-[227px] left-[15px] top-[369px] max-md:w-[calc(100%_-_30px)] max-sm:w-[calc(100%_-_20px)] max-sm:left-2.5">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <LocationCard
              title="Wazemmes"
              starIcon={<WazemmesIcon />}
              onChoose={() => handleChoose('Wazemmes')}
              onInfo={() => handleInfo('Wazemmes')}
            />
          </CarouselItem>
          
          <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <LocationCard
              title="Gare Lille Flandres"
              starIcon={<GareIcon />}
              onChoose={() => handleChoose('Gare Lille Flandres')}
              onInfo={() => handleInfo('Gare Lille Flandres')}
            />
          </CarouselItem>
          
          <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <LocationCard
              title="RED POINT"
              starIcon={<RedPointIcon />}
              onChoose={() => handleChoose('RED POINT')}
              onInfo={() => handleInfo('RED POINT')}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
