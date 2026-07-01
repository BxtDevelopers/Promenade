'use client'

import { useEffect, useRef } from 'react'

const reviews = [
  { quote: 'Dr. Wei does excellent work at reasonable prices. To my husband and me, it\'s worth the 120-mile drive.', author: 'Deborah S.' },
  { quote: "I'm terrified of the dentist, but the team helped me overcome the fear. I actually enjoy coming now.", author: 'Peter L.' },
  { quote: 'Our whole family goes here — gentle and thorough, and our kids actually like going to the dentist now.', author: 'Sue Z.' },
  { quote: "Everyone here is so nice and professional. The best dental care I've had in my whole life.", author: 'Joyce F.' },
  { quote: "A great practice — caring and understanding of every patient's needs, with a wonderful staff.", author: 'Alanna L.' },
  { quote: 'A wonderful experience with the whole team. Very professional, and all my questions are always answered.', author: 'Roy R.' },
]

export default function TestimonialsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    // Duplicate for seamless loop
    track.innerHTML += track.innerHTML
  }, [])

  return (
    <section
      className="py-[clamp(74px,8vw,120px)] bg-bg-2"
      id="reviews"
    >
      {/* Header */}
      <div
        className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]"
      >
        <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
          A reputation to carry forward
        </span>
        <h2
          className="font-serif font-light leading-[1.04] tracking-[-0.02em] mt-4 text-ivory max-w-[22ch] text-[clamp(30px,4.6vw,58px)]"
        >
          Patients don&apos;t usually rave about the dentist.{' '}
          <em className="italic text-coral">Ours do.</em>
        </h2>

        {/* Rating badge */}
        <div
          className="rv inline-flex items-center gap-[18px] mt-6 rounded-2xl px-[24px] py-[16px] border border-[rgba(244,236,221,0.14)] bg-[rgba(244,236,221,0.04)]"
        >
          <span
            className="font-serif font-light text-coral leading-none text-[46px]"
          >
            4.9
          </span>
          <div>
            <div className="text-coral text-[15px] tracking-[3px]">★★★★★</div>
            <div
              className="text-[12.5px] tracking-[0.05em] uppercase mt-[5px] font-medium text-ivory-2"
            >
              <b className="text-ivory font-semibold">150+</b> Google reviews
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden mt-[clamp(40px,5vw,60px)] marquee-mask"
      >
        <div
          ref={trackRef}
          className="flex gap-[18px] w-max"
          style={{
            animation: 'mq 46s linear infinite',
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-none rounded-[20px] w-[min(390px,82vw)] p-[24px_26px] border border-[rgba(244,236,221,0.14)] bg-[linear-gradient(180deg,rgba(244,236,221,0.03),transparent)]"
            >
              <div className="text-coral text-[12px] tracking-[3px] mb-3">★★★★★</div>
              <p
                className="font-serif font-light text-[18px] leading-[1.45] text-ivory-2"
              >
                &ldquo;{r.quote}&rdquo;
              </p>
              <cite
                className="block mt-[14px] not-italic text-[12px] tracking-[0.08em] uppercase text-muted"
              >
                — {r.author}
              </cite>
            </div>
          ))}
        </div>
      </div>

      <p
        className="text-center text-[12.5px] font-light mt-[26px] mx-auto px-4 text-muted-2 max-w-[640px]"
      >
        Real reviews from Promenade Dental over the years — the care Dr. Shriya is carrying forward. Hers will be added as she sees patients.
      </p>
    </section>
  )
}