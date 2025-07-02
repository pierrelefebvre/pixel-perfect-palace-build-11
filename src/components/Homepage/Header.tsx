import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="w-[358px] h-[65px] absolute bg-[#FFCF00] rounded-[0_32.5px_32.5px_0] border-[3px] border-solid border-[#292D32] left-[15px] top-[35px] max-md:w-[calc(100%_-_30px)] max-sm:w-[calc(100%_-_20px)] max-sm:left-2.5" />
      <h1 className="w-[358px] h-9 text-[#292D32] text-center text-[22px] font-normal absolute left-[15px] top-[50px] max-md:w-[calc(100%_-_30px)] max-sm:w-[calc(100%_-_20px)] max-sm:text-xl max-sm:left-2.5">
        Hello there!
      </h1>
    </header>
  );
};
