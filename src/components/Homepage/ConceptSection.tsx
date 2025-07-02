import React from 'react';

export const ConceptSection: React.FC = () => {
  return (
    <section className="w-[357px] h-[229px] absolute bg-[#F8F8F8] rounded-[3px] border-[3px] border-solid border-[#292D32] left-[15px] top-[120px] max-md:w-[calc(100%_-_30px)] max-md:left-[15px] max-sm:w-[calc(100%_-_20px)] max-sm:left-2.5">
      <header className="w-[357px] h-9 text-[#292D32] text-center text-[22px] font-normal absolute left-px top-2.5">
        &lt;&lt;&lt; Le concept &gt;&gt;&gt;
      </header>
      
      <div className="w-[353px] h-px absolute bg-[#292D32] left-px top-[57px]" />
      
      <article className="space-y-4">
        <div className="flex items-start gap-4 absolute top-[63px] left-4">
          <span className="w-[17px] h-9 text-[#292D32] text-center text-[22px] font-normal">1</span>
          <div className="flex items-center gap-2">
            <svg 
              width="16" 
              height="13" 
              viewBox="0 0 13 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-90 flex-shrink-0 fill-[#292D32]"
            >
              <path d="M5.56656 9.9687L6.1573 9.0523C6.642 8.32215 7.09642 7.56221 7.52054 6.77246C7.9598 5.99761 8.44451 5.26002 8.97466 4.55967C9.64113 3.93384 10.2925 3.88913 10.9286 4.42557C11.3679 4.60438 11.8299 5.0216 12.3146 5.67724C12.3903 5.85605 12.4661 6.03486 12.5418 6.21367C12.6327 6.39249 12.7236 6.6309 12.8144 6.92892C12.9205 7.22694 12.9811 7.55475 12.9962 7.91238C13.0114 8.2849 12.9811 8.63507 12.9053 8.96289C12.7539 9.49932 12.4433 10.0507 11.9738 10.6169C11.8829 10.7361 11.7087 10.9596 11.4512 11.2874C11.2089 11.6302 10.9135 12.0176 10.5651 12.4497C10.2167 12.8818 9.84562 13.3289 9.45179 13.7908C9.05797 14.2527 8.66414 14.6625 8.27032 15.0201C7.36149 15.8397 6.71017 16.1451 6.31634 15.9365C6.24061 15.9067 6.127 15.8248 5.97553 15.6906C5.82406 15.5714 5.71803 15.4969 5.65744 15.4671C5.18788 15.5863 4.66531 15.5491 4.08972 15.3554C3.78677 15.1915 3.55957 15.0276 3.4081 14.8636C3.27177 14.6997 3.11273 14.4688 2.93096 14.1708C2.67346 13.4555 2.45383 12.5093 2.27206 11.3321C2.0903 10.155 1.88581 9.10445 1.65861 8.18059C1.4314 7.27164 1.19662 6.35523 0.954267 5.43138C0.363531 3.04723 0.0454416 1.35598 9.38042e-07 0.357621C0.0908832 0.327819 0.196914 0.283117 0.31809 0.223513C0.439267 0.17881 0.560443 0.134108 0.68162 0.0894049C0.999709 -0.0298023 1.22692 -0.0298023 1.36324 0.0894049C1.51471 0.223513 1.65861 0.33527 1.79493 0.424675C1.9464 0.528981 2.11302 0.66309 2.29479 0.826999C2.47655 0.990909 2.68104 1.28148 2.90824 1.6987C3.13545 2.11593 3.34751 2.58531 3.54442 3.10684C3.75648 3.62837 3.95339 4.17225 4.13516 4.73849C4.31692 5.31962 4.47597 5.87095 4.61229 6.39248C4.76376 6.92892 4.89251 7.4132 4.99854 7.84532C5.10457 8.29235 5.19546 8.64252 5.27119 8.89584L5.56656 9.9687Z" fill="#292D32" />
            </svg>
            <p className="w-72 h-[21px] text-[#292D32] text-sm font-normal max-sm:text-xs max-sm:w-[calc(100%_-_80px)]">
              Choisis un easter egg parmi ceux listés
            </p>
          </div>
        </div>
        
        <div className="w-[54px] h-px absolute bg-[#292D32] left-[55px] top-[54px]" />
        <div className="w-[353px] h-px absolute bg-[#292D32] left-px top-[108px]" />
        
        <div className="flex items-start gap-4 absolute top-[116px] left-7">
          <span className="w-[17px] h-9 text-[#292D32] text-center text-[22px] font-normal">2</span>
          <div className="flex items-center gap-2">
            <svg 
              width="8" 
              height="14" 
              viewBox="0 0 5 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-[165deg]"
            >
              <path d="M0.487078 14.0767C0.551703 12.7562 0.619825 11.5603 0.691444 10.4891C0.751908 9.42076 0.810985 8.43653 0.868675 7.53635C0.91521 6.63917 0.961452 5.80781 1.0074 5.0423C1.05634 4.28794 1.09602 3.56594 1.12643 2.87632C1.04071 2.11022 1.26426 1.49438 1.79707 1.02881C2.10919 0.765847 2.51065 0.568608 3.00146 0.437096C3.49227 0.305584 3.87532 0.262724 4.15062 0.308515C4.42292 0.343152 4.61944 0.451896 4.74017 0.634749C4.87205 0.814613 4.93631 1.05444 4.93295 1.35423C4.94374 1.66219 4.92565 2.08548 4.87868 2.62412C4.83471 3.1739 4.79244 3.90854 4.75188 4.82804C4.70017 5.75052 4.64029 6.68715 4.57225 7.63792C4.40772 10.0134 4.22002 11.6777 4.00915 12.6308C3.92552 12.988 3.81349 13.2392 3.67307 13.3844C3.53564 13.5408 3.39482 13.6622 3.25061 13.7487C3.10938 13.8463 2.98081 13.9465 2.86489 14.0493C2.74896 14.1521 2.67667 14.3508 2.64801 14.6454C2.6082 14.943 2.46231 15.1794 2.21034 15.3545C1.94722 15.5326 1.681 15.6099 1.41168 15.5864C1.1342 15.5771 0.896744 15.4494 0.699319 15.2035C0.493728 14.9716 0.422981 14.596 0.487078 14.0767Z" fill="#292D32" />
            </svg>
            <p className="w-[262px] h-[17px] text-[#292D32] text-sm font-normal max-sm:text-xs max-sm:w-[calc(100%_-_80px)]">
              Aide-toi de la boussole pour te guider
            </p>
          </div>
        </div>
        
        <div className="w-12 h-px absolute bg-[#292D32] left-[68px] top-[108px]" />
        <div className="w-[353px] h-px absolute bg-[#292D32] left-[3px] top-[159px]" />
        
        <div className="flex items-start gap-4 absolute top-[174px] left-[33px]">
          <span className="w-[17px] h-9 text-[#292D32] text-center text-[22px] font-normal">3</span>
          <div className="flex items-center gap-2">
            <div className="w-[70px] h-px absolute bg-[#292D32] left-[50px] top-[-15px]" />
            <p className="w-[251px] h-[17px] text-[#292D32] text-sm font-normal max-sm:text-xs max-sm:w-[calc(100%_-_80px)]">
              Traverse le portail en réalité augmentée et récupère l'easter egg
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
