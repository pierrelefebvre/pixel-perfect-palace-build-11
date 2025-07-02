import React, { useState } from 'react';

interface LocationCardProps {
  title: string;
  starIcon: React.ReactNode;
  onChoose: () => void;
  onInfo: () => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({ 
  title, 
  starIcon, 
  onChoose, 
  onInfo 
}) => {
  const [isChooseHovered, setIsChooseHovered] = useState(false);
  const [isInfoHovered, setIsInfoHovered] = useState(false);

  return (
    <article className="w-[161px] h-[227px] relative max-md:w-full max-md:max-w-[300px] max-md:mx-auto max-md:my-0 max-sm:w-[calc(100%_-_20px)]">
      <div className="w-[161px] h-[163px] absolute bg-[#FAE3D5] rounded-lg border-4 border-solid border-[#292D32] left-0 top-[43px]" />
      
      <div className="absolute left-[34px] top-0">
        {starIcon}
      </div>
      
      <h3 className="w-[161px] h-9 text-[#292D32] text-center text-[17px] font-normal absolute left-0 top-[101px] max-sm:text-[15px]">
        {title}
      </h3>
      
      <button
        className={`flex w-[137px] justify-center items-center gap-2.5 absolute h-[23px] rounded-[22px] left-3 top-[149px] transition-colors duration-200 ${
          isChooseHovered ? 'bg-[#1a1d24]' : 'bg-[#292D32]'
        }`}
        onMouseEnter={() => setIsChooseHovered(true)}
        onMouseLeave={() => setIsChooseHovered(false)}
        onClick={onChoose}
        aria-label={`Choisir ${title}`}
      >
        <span className="w-[137px] text-white text-center text-[15px] font-normal">
          choisir
        </span>
      </button>
      
      <button
        className="inline-flex flex-col items-start gap-2.5 absolute w-[89px] h-12 left-9 top-[179px]"
        onMouseEnter={() => setIsInfoHovered(true)}
        onMouseLeave={() => setIsInfoHovered(false)}
        onClick={onInfo}
        aria-label={`Informations sur ${title}`}
      >
        <svg 
          width="89" 
          height="48" 
          viewBox="0 0 89 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[89px] h-12 relative"
        >
          <path 
            d="M44.5 1.5C56.5893 1.5 67.4597 4.14606 75.2539 8.34961C83.1087 12.5859 87.5 18.1876 87.5 24C87.5 29.8124 83.1087 35.4141 75.2539 39.6504C67.4597 43.8539 56.5893 46.5 44.5 46.5C32.4107 46.5 21.5403 43.8539 13.7461 39.6504C5.89132 35.4141 1.5 29.8124 1.5 24C1.5 18.1876 5.89132 12.5859 13.7461 8.34961C21.5403 4.14606 32.4107 1.5 44.5 1.5Z" 
            fill={isInfoHovered ? "#d0d0d0" : "#E5E5E5"} 
            stroke="#292D32" 
            strokeWidth="3"
            className="transition-colors duration-200"
          />
        </svg>
        <span className="w-[89px] relative text-[#292D32] text-center text-[15px] font-normal top-3">
          info
        </span>
      </button>
    </article>
  );
};
