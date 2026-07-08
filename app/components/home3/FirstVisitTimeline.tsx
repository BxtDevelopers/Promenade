'use client'

import React from 'react'

const steps = [
  {
    num: '01',
    title: 'A Warm Welcome',
    desc: 'Step into our calming space. We’ll quickly review your details so you can relax before your appointment.',
  },
  {
    num: '02',
    title: 'Comprehensive Exam',
    desc: 'Using ultra-precise, low-radiation digital imaging, we capture a complete picture of your oral health.',
  },
  {
    num: '03',
    title: 'Personalized Plan',
    desc: 'Dr. Shriya takes the time to walk you through the findings, designing a care plan exclusively tailored to you.',
  },
  {
    num: '04',
    title: 'Transparent Care',
    desc: 'No surprises. We explain your benefits, outline the timeline, and seamlessly schedule your next steps.',
  },
]

export default function FirstVisitFlow() {
  return (
    <section id="first-visit" className="py-[clamp(74px,8vw,120px)] bg-bg-2 relative">
      
      {/* Subtle cinematic gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[linear-gradient(180deg,rgba(232,154,114,0.02),transparent)] pointer-events-none"></div>

      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)] relative z-10">
        
        <div className="flex flex-col lg:flex-row items-start gap-[clamp(40px,8vw,100px)]">
          
          {/* Left Column: Sticky Header */}
          <div className="rv lg:sticky lg:top-[140px] lg:w-[40%] flex-shrink-0">
            <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral flex items-center gap-4">
              Your Journey Begins
            </span>
            <h2 className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-white mt-6 text-[clamp(36px,4.5vw,58px)]">
              What to expect on your{' '}
              <em className="italic text-coral tracking-wider">first visit.</em>
            </h2>
            <p className="font-light text-[15.5px] leading-[1.75] mt-[20px] text-muted-2 max-w-[40ch]">
              We’ve engineered our onboarding to be entirely stress-free. From the moment you walk through the doors of Promenade Dental, your comfort is our priority.
            </p>
          </div>

          {/* Right Column: Editorial Step List */}
          <div className="lg:w-[60%] flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="rv group flex flex-col md:flex-row items-start md:items-center gap-[24px] md:gap-[40px] py-[clamp(32px,5vw,48px)] border-t border-coral first:border-t-0 lg:first:pt-0"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Large Editorial Number */}
                <div className="flex-shrink-0 font-serif text-3xl lg:text-6xl leading-[0.8] text-white/40 transition-colors duration-500 ease-out group-hover:text-coral select-none">
                  {step.num}
                </div>

                {/* Step Content */}
                <div className="flex-1 transform transition-transform duration-500 ease-out group-hover:translate-x-2">
                  <h3 className="font-serif text-[24px] md:text-[28px] text-white leading-[1.2] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.7] text-muted max-w-[46ch]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
        
          </div>

        </div>
      </div>
    </section>
  )
}