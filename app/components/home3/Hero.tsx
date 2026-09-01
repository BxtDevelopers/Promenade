// 'use client'

// import { useEffect, useRef } from 'react'
// import { Check } from 'lucide-react'
// import { useBookingModal } from '../common/BookingModalProvider'


// export default function Hero() {
//   const { openBookingModal } = useBookingModal();
//   const archRef = useRef<SVGGElement>(null)

//   useEffect(() => {
//     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
//     const group = archRef.current
//     if (!group) return

//     const CX = 500, CY = 560, AN = 15
//     const arcs: SVGPathElement[] = []

//     for (let a = 0; a < AN; a++) {
//       const r = 82 + a * 33
//       const p = document.createElementNS('http://www.w3.org/2000/svg', 'path')
//       p.setAttribute('d', `M${CX - r} ${CY} A${r} ${r} 0 0 1 ${CX + r} ${CY}`)
//       p.setAttribute('fill', 'none')
//       p.setAttribute('stroke', (a === 4 || a === 9 || a === 13) ? 'rgba(232,154,114,.3)' : 'rgba(244,236,221,.5)')
//       p.setAttribute('stroke-width', '1')
//       p.setAttribute('stroke-linecap', 'round')
//       p.style.strokeDasharray = '1'
//       p.style.strokeDashoffset = reduce ? '0' : '1'
//       group.appendChild(p)
//       arcs.push(p)
//     }

//     if (!reduce) {
//       arcs.forEach((p, i) => {
//         p.style.transition = `stroke-dashoffset 1.7s ease ${i * 0.055}s`
//       })
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           arcs.forEach(p => { p.style.strokeDashoffset = '0' })
//         })
//       })
//     }

//     return () => { while (group.firstChild) group.removeChild(group.firstChild) }
//   }, [])

//   return (
//     <header
//       className="relative flex items-end overflow-hidden"
//       style={{ minHeight: 'clamp(560px,82vh,760px)' }}
//     >
//       {/* Background arch SVG */}
//       <div className="absolute inset-0 z-0">
//         <svg
//           viewBox="0 0 1000 560"
//           preserveAspectRatio="xMidYMax slice"
//           aria-hidden="true"
//           className="absolute inset-0 w-full h-full"
//         >
//           <g ref={archRef} />
//         </svg>
//       </div>

//       {/* Gradient overlay */}
//       {/* <div
//         className="absolute inset-0 z-[1]"
//         style={{
//           background: `
//             linear-gradient(180deg,transparent 0%,transparent 46%,rgba(11,28,44,.5) 76%,rgba(11,28,44,.96) 100%),
//             radial-gradient(70% 60% at 72% 28%,rgba(232,154,114,.12),transparent 60%)
//           `,
//         }}
//       /> */}

//       {/* Content */}
//       <div
//         className="relative z-[2] w-full mx-auto"
//         style={{
//           maxWidth: '1340px',
//           padding: '120px clamp(22px,4vw,60px) clamp(48px,6vw,80px)',
//         }}
//       >
//         {/* Eyebrow */}
//         <div
//           className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-accent opacity-0"
//           style={{ animation: 'fade 1s ease 0.3s forwards' }}
//         >
//           Comprehensive Family Dentistry with Sleep Solutions
//         </div>

//         {/* Headline */}
//         <h1
//           className="font-serif font-light leading-[0.98] tracking-[-0.025em] mt-[22px] text-ink"
//           style={{ fontSize: 'clamp(44px,7.6vw,98px)' }}
//         >
//           <span className="block overflow-hidden">
//             <span
//               className="inline-block"
//               style={{ transform: 'translateY(110%)', animation: 'lnrise 1.1s cubic-bezier(.16,.84,.34,1) 0.45s forwards' }}
//             >
//               Family Dentist 
//             </span>
//           </span>
//           <span className="block overflow-hidden">
//             <span
//               className="inline-block"
//               style={{ transform: 'translateY(110%)', animation: 'lnrise 1.1s cubic-bezier(.16,.84,.34,1) 0.58s forwards' }}
//             >
//               in{' '}
//               <em className="not-italic font-normal text-accent">Chandler, AZ.</em>
//             </span>
//           </span>
//         </h1>

//         {/* Badges */}
//         <div
//           className="flex flex-wrap gap-[10px] mt-[26px] opacity-0"
//           style={{ animation: 'fade 1.2s ease 0.95s forwards' }}
//         >
//           {['Accepting new patients', 'Flexible scheduling'].map(text => (
//             <span
//               key={text}
//               className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.03em] text-ink rounded-full px-4 py-[9px] border border-coral"
//               style={{
//                 background: 'rgba(244,236,221,0.04)',
//               }}
//             >
//               <Check className='w-4 h-4 text-accent'/>
//               {text}
//             </span>
//           ))}
//         </div>

//         {/* Footer row */}
//         <div
//           className="flex items-center justify-between gap-[30px] mt-[30px] flex-wrap opacity-0"
//           style={{ animation: 'fade 1.2s ease 1.1s forwards' }}
//         >
//           <p
//             className="text-ink font-light leading-[1.55]"
//             style={{ maxWidth: '42ch', fontSize: 'clamp(16px,1.3vw,19px)' }}
//           >
//             Comprehensive, gentle dental care for families across Chandler — Ocotillo, Fulton Ranch, and Sun Lakes.
//           </p>
//           <button
//             onClick={openBookingModal}
//             className="inline-flex items-center gap-3 rounded-full font-sans font-semibold text-[14px] tracking-[0.05em] uppercase text-white bg-coral no-underline whitespace-nowrap transition-all duration-300 hover:bg-ink hover:-translate-y-0.5"
//             style={{
//               padding: '17px 30px',
//               boxShadow: '0 20px 44px -18px rgba(232,154,114,0.7)',
//             }}
//           >
//             Schedule my first visit →
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }

'use client'

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useBookingModal } from '../common/BookingModalProvider'

export default function Hero() {
  const { openBookingModal } = useBookingModal()

  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  const [reduceMotion, setReduceMotion] = useState(false)
  const [loadVideo, setLoadVideo] = useState(false)
  const [allowVideo, setAllowVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    /*
     * Phones and tablets get the poster only. The background video is
     * decorative, and it was the largest single transfer on the site — on a
     * cellular connection it competes for bandwidth with the content a
     * visitor actually came for, and this is where paid traffic lands. The
     * poster is a still from the same footage, so nothing is lost but motion.
     *
     * Lower or remove VIDEO_MIN_WIDTH to bring the video back to small
     * screens.
     */
    const VIDEO_MIN_WIDTH = 1024
    const wideQuery = window.matchMedia(`(min-width: ${VIDEO_MIN_WIDTH}px)`)

    // Honour Data Saver where the browser reports it.
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection

    // Both queries are watched rather than read once: a window that opens
    // narrow and is then widened, or a tablet rotated into landscape, should
    // pick the video up rather than being stuck on the poster for the session.
    const sync = () => {
      setReduceMotion(motionQuery.matches)
      setAllowVideo(
        !motionQuery.matches && wideQuery.matches && !connection?.saveData,
      )
    }

    sync()
    motionQuery.addEventListener('change', sync)
    wideQuery.addEventListener('change', sync)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (heroRef.current) observer.observe(heroRef.current)

    return () => {
      observer.disconnect()
      motionQuery.removeEventListener('change', sync)
      wideQuery.removeEventListener('change', sync)
    }
  }, [])

  return (
    <header
      ref={heroRef}
      className="relative flex items-end overflow-hidden min-h-[90vh] lg:min-h-[86vh]"
    >
      {/*
        Poster — this is the LCP element, so it is a real <Image preload>
        rather than the CSS background-image it used to be. A background-image
        is invisible to the preload scanner: the browser cannot even know the
        URL until it has downloaded and parsed the stylesheet and laid the
        element out, which put the site's largest paint at the back of the
        queue. `preload` emits a <link rel="preload" fetchpriority="high"> in
        the head instead, and routes the file through the image optimizer so
        phones get a phone-sized AVIF rather than the full-width webp.
      */}
      <Image
        src="/assets/hero-poster.webp"
        alt=""
        aria-hidden="true"
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 object-cover object-center"
      />

      {/* Video */}
      {loadVideo && allowVideo && !reduceMotion && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          src="/assets/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/hero-poster.webp"
          onCanPlay={() => setVideoReady(true)}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[2]" />

      {/* Content */}
      <div
        className="relative z-[3] w-full mx-auto"
        style={{
          maxWidth: '1340px',
          padding:
            '120px clamp(22px,4vw,60px) clamp(48px,6vw,80px)',
        }}
      >
        <div
          className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-accent opacity-0"
          style={{
            animation: 'fade 1s ease 0.3s forwards',
          }}
        >
          Comprehensive Family Dentistry with Sleep Solutions
        </div>

        <h1
          className="font-serif font-light leading-[0.98] tracking-[-0.025em] mt-[22px] text-white"
          style={{
            fontSize: 'clamp(44px,7.6vw,98px)',
          }}
        >
          <span className="block overflow-hidden">
            <span
              className="inline-block"
              style={{
                transform: 'translateY(110%)',
                animation:
                  'lnrise 1.1s cubic-bezier(.16,.84,.34,1) 0.45s forwards',
              }}
            >
              Family Dentist
            </span>
          </span>

          <span className="block overflow-hidden">
            <span
              className="inline-block"
              style={{
                transform: 'translateY(110%)',
                animation:
                  'lnrise 1.1s cubic-bezier(.16,.84,.34,1) 0.58s forwards',
              }}
            >
              in{' '}
              <em className="not-italic font-normal text-accent">
                Chandler, AZ.
              </em>
            </span>
          </span>
        </h1>

        <div
          className="flex flex-wrap gap-[10px] mt-[26px] opacity-0"
          style={{
            animation:
              'fade 1.2s ease 0.95s forwards',
          }}
        >
          {[
            'Accepting new patients',
            'Flexible scheduling',
          ].map((text) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.03em] text-white rounded-full px-4 py-[9px] border border-coral"
              style={{
                background:
                  'rgba(244,236,221,0.04)',
              }}
            >
              <Check className="w-4 h-4 text-accent" />
              {text}
            </span>
          ))}
        </div>

        <div
          className="flex items-center justify-between gap-[30px] mt-[30px] flex-wrap opacity-0"
          style={{
            animation:
              'fade 1.2s ease 1.1s forwards',
          }}
        >
          <p
            className="text-white font-light leading-[1.55]"
            style={{
              maxWidth: '42ch',
              fontSize:
                'clamp(16px,1.3vw,19px)',
            }}
          >
            Comprehensive, gentle dental care
            for families across Chandler —
            Ocotillo, Fulton Ranch, and Sun
            Lakes.
          </p>

          {/*
            Primary books, secondary calls. The primary used to be the tel:
            link — reasonable when the only booking path was a form the
            practice answered by phone anyway, and wrong now that the widget
            holds live availability. The practice is closed Fri-Sun and after
            7pm, which is exactly when a visitor who can only call gives up.

            The call stays, one tap away, because a phone number is the path
            that never breaks: no third-party frame, no JavaScript, no
            availability to be empty.
          */}
          <div className="flex flex-wrap items-center gap-[14px]">
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center gap-3 rounded-full font-sans font-semibold text-[14px] tracking-[0.05em] uppercase text-ink hover:text-bg bg-coral whitespace-nowrap transition-all duration-300 hover:bg-ink hover:-translate-y-0.5"
              style={{
                padding: '17px 30px',
                boxShadow:
                  '0 20px 44px -18px rgba(232,154,114,0.7)',
              }}
            >
              Schedule my first visit →
            </button>

            <Link
              href='tel:+14808028188'
              className="inline-flex items-center gap-3 rounded-full border border-coral font-sans font-medium text-[14px] tracking-[0.05em] uppercase text-white no-underline whitespace-nowrap transition-all duration-300 hover:border-white hover:bg-white/10"
              style={{ padding: '16px 28px' }}
            >
              Call (480) 802-8188
            </Link>
          </div>
        </div>
      </div>

      {/* Video pause control — small, unobtrusive, respects motion-sensitive users */}
      {/* <button
        onClick={toggleVideo}
        aria-label={playing ? 'Pause background video' : 'Play background video'}
        className="absolute z-[3] right-[18px] top-[18px] sm:right-[26px] sm:top-[26px] inline-flex items-center justify-center w-[38px] h-[38px] rounded-full border border-[rgba(244,236,221,0.3)] text-ink transition-colors duration-300 hover:border-coral hover:text-accent"
        style={{ background: 'rgba(11,28,44,0.45)', backdropFilter: 'blur(6px)' }}
      >
        {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-[1px]" />}
      </button> */}
    </header>
  )
}
