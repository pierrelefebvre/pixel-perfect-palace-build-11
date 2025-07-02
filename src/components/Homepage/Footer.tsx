import React from 'react';
import { HamburgerIcon } from './DecorativeElements';

export const Footer: React.FC = () => {
  return (
    <footer className="relative">
      <div className="w-[390px] h-[258px] absolute bg-[#465DEB] left-0 top-[470px]" />
      
      <p className="w-64 h-9 text-[#292D32] text-center text-xl font-normal absolute left-[67px] top-[698px] max-md:w-[calc(100%_-_30px)] max-md:left-[15px] max-sm:w-[calc(100%_-_20px)] max-sm:text-lg max-sm:left-2.5">
        Choisis un easter egg
      </p>
      
      <nav className="absolute bottom-0 w-full">
        <div className="w-[449px] h-[116px] absolute left-[-26px] border-[3px] border-solid border-[#292D32] top-[780px]" />
        <div className="w-28 h-[116px] absolute border-[3px] border-solid border-[#292D32] left-[311px] top-[780px]" />
        <div className="w-[136px] h-[116px] absolute border-[3px] border-solid border-[#292D32] -left-8 top-[780px]" />
        
        <HamburgerIcon />
        
        <a 
          href="https://ynov.com" 
          className="w-36 h-9 text-[#292D32] text-center text-[21px] font-normal absolute left-[123px] top-[796px] max-sm:text-lg hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ynov.com
        </a>
        
        <button 
          className="w-[47px] h-9 text-[#292D32] text-center text-3xl font-normal absolute left-[327px] top-[790px] max-sm:text-[25px] hover:text-[#465DEB] transition-colors duration-200"
          aria-label="Information"
        >
          i
        </button>
      </nav>
    </footer>
  );
};
