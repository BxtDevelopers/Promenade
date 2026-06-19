// 'use client';

// import React, { useState } from 'react';
// import { useScrollReveal } from '@/app/lib/useScrollReveal';

// // 1. Data Interfaces
// interface FAQItem {
//   q: string;
//   a: string;
// }

// interface FAQData {
//   eyebrow: string;
//   heading: string;
//   items: FAQItem[];
// }

// export default function ServiceFAQSection({ data }: { data: FAQData }) {
//   const [leadRef, leadIn] = useScrollReveal();
//   const [open, setOpen] = useState<number | null>(0);

//   return (
//     <section className="py-section bg-bg-2 border-t border-line">
//       <div className="px-site max-w-[90%] mx-auto">

//         {/* ── Header ── */}
//         <div
//           ref={leadRef as React.RefObject<HTMLDivElement>}
//           className={[
//             'text-center max-w-5xl mx-auto mb-14 md:mb-20',
//             'transition-all duration-1000 ease-out',
//             leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
//           ].join(' ')}
//         >
//           <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
//             {data.eyebrow}
//           </span>
//           <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-ivory">
//             {data.heading}
//           </h2>
//         </div>

//         {/* ── Accordion List ── */}
//         <div className="max-w-[760px] mx-auto divide-y divide-line border-y border-line">
//           {data.items.map((item, i) => {
//             const isOpen = open === i;
            
//             return (
//               <div key={i} className="group/faq">
//                 <button
//                   onClick={() => setOpen(isOpen ? null : i)}
//                   className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left cursor-pointer"
//                   aria-expanded={isOpen}
//                 >
//                   <span className="font-serif font-normal text-[18px] md:text-[20px] text-ivory group-hover/faq:text-coral transition-colors duration-300">
//                     {item.q}
//                   </span>
//                   <span
//                     className={[
//                       'shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
//                       isOpen 
//                         ? 'border-coral bg-coral/10 rotate-45' 
//                         : 'border-line group-hover/faq:border-coral/50',
//                     ].join(' ')}
//                   >
//                     <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden="true">
//                       <path 
//                         d="M6 1v10M1 6h10" 
//                         stroke="currentColor" 
//                         className="text-coral" 
//                         strokeWidth="1.4" 
//                         strokeLinecap="round" 
//                       />
//                     </svg>
//                   </span>
//                 </button>
                
//                 {/* 
//                   Using a grid transition trick for silky smooth accordion 
//                   height animation without hardcoding pixel max-heights 
//                 */}
//                 <div
//                   className="grid transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
//                   style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
//                 >
//                   <div className="overflow-hidden">
//                     <p className="text-muted text-[15px] font-light leading-[1.7] pb-6 md:pb-8 max-w-[60ch]">
//                       {item.a}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
interface FAQItem {
  q: string;
  a: string;
}

interface FAQData {
  eyebrow: string;
  heading: string;
  items: FAQItem[];
}

export default function ServiceFAQSection({ data }: { data: FAQData }) {
  const [leadRef, leadIn] = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  // Split the data into two halves for the two-column layout
  const midPoint = Math.ceil(data.items.length / 2);
  const leftItems = data.items.slice(0, midPoint);
  const rightItems = data.items.slice(midPoint);

  // Helper function to render a column of FAQs
  const renderFAQColumn = (items: FAQItem[], offset: number) => (
    <div className="flex flex-col divide-y divide-line ">
      {items.map((item, index) => {
        // Calculate the true global index to keep the accordion state synced
        const actualIndex = index + offset;
        const isOpen = open === actualIndex;

        return (
          <div key={actualIndex} className="group/faq">
            <button
              onClick={() => setOpen(isOpen ? null : actualIndex)}
              className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-normal text-[18px] md:text-[20px] text-ivory group-hover/faq:text-coral transition-colors duration-300 pr-4">
                {item.q}
              </span>
              <span
                className={[
                  'shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
                  isOpen
                    ? 'border-coral bg-coral/10 rotate-45'
                    : 'border-line group-hover/faq:border-coral/50',
                ].join(' ')}
              >
                <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden="true">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    className="text-coral"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            {/* Smooth auto-height grid trick */}
            <div
              className="grid transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="text-muted text-[15px] font-light leading-[1.7] pb-6 md:pb-8 max-w-[50ch]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-section bg-bg-2 border-t border-line">
      <div className="px-site max-w-[90%] mx-auto">
        
        {/* ── Header ── */}
        <div
          ref={leadRef as React.RefObject<HTMLDivElement>}
          className={[
            'text-center max-w-5xl mx-auto mb-14 md:mb-20',
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
            {data.eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-ivory">
            {data.heading}
          </h2>
        </div>

        {/* ── Two-Column Accordion Layout ── */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-24">
          {/* Left Column (Items 0 to Midpoint) */}
          {renderFAQColumn(leftItems, 0)}

          {/* Right Column (Items Midpoint to End) */}
          {renderFAQColumn(rightItems, midPoint)}
        </div>

      </div>
    </section>
  );
}