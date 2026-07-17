'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const images = [
  {
    src: '/assets/gallery/living-room.jpg',
    title: 'A Comfortable Waiting Area Designed to Help You Feel at Ease',
    tag: 'Patient Comfort',
  },
  {
    src: '/assets/gallery/lobby.jpeg',
    title: 'Modern, Welcoming Spaces Throughout Our Chandler Office',
    tag: 'Office Tour',
  },
  {
    src: '/assets/gallery/reception.jpg',
    title: 'Friendly Team Members Ready to Welcome Your Family',
    tag: 'Reception',
  },
  {
    src: '/assets/gallery/treatment-room.jpg',
    title: 'Private Treatment Rooms for Personalized Dental Care',
    tag: 'Patient Care',
  },
  {
    src: '/assets/gallery/treatment-room-2.jpg',
    title: 'Technology That Supports Precise Diagnosis and Treatment',
    tag: 'Dental Technology',
  },
  {
    src: '/assets/gallery/treatment-room-3.jpg',
    title: 'Clean, Organized Clinical Spaces Focused on Safety and Comfort',
    tag: 'Modern Dentistry',
  },
]
export default function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    // Duplicate for a seamless loop, same trick as the reviews marquee
    track.innerHTML += track.innerHTML
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section className="py-[clamp(74px,8vw,120px)] bg-white" id="gallery">
      {/* Header */}
      <div className="text-center px-[clamp(22px,4vw,60px)]">
        <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
        Explore Our Office
        </span>

        <h2 className="font-serif font-light leading-[1.04] mt-4 text-ivory max-w-[24ch] mx-auto text-[clamp(30px,4.6vw,58px)]">
        A Dental Office Designed Around
        <em className="italic text-coral"> Comfort, Technology & Care</em>
        </h2>

        <p className="text-[15px] font-light leading-[1.65] text-muted mt-[18px] max-w-[80ch] mx-auto">
        Take a look inside Promenade Dental in Chandler, AZ. From our welcoming reception area to our modern treatment rooms, every space is designed to help patients feel comfortable, informed, and confident in their dental care.
        </p>
      </div>

      {/* Full-width video */}
      <div className="rv relative mt-[clamp(40px,5vw,60px)] px-[clamp(22px,4vw,60px)]">
        <div
          className="relative overflow-hidden rounded-[28px] border border-[rgba(11,28,44,0.08)] h-[400px] mx-auto md:aspect-[16/8]"
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/gallery/office-tour.mov"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Scrim for legibility — kept dark since it sits over video footage, not the page bg */}
          <div className="absolute inset-0 pointer-events-none bg-black/40" />

          {/* Caption, bottom-left */}
          <div className="absolute left-[22px] bottom-[22px] sm:left-[30px] sm:bottom-[26px]">
            <span className="text-[11px] tracking-[0.28em] uppercase font-medium text-coral">
            Office Tour
            </span>

            <p className="font-serif font-light text-ivory-2 mt-[6px] text-[clamp(19px,2.2vw,26px)]">
            Experience Promenade Dental Before Your Visit
            </p>
          </div>

          {/* Controls, bottom-right */}
          <div className="absolute right-[18px] top-[18px] lg:right-[26px] lg:bottom-[26px] flex items-center gap-[10px]">
            <button
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-full border border-[rgba(244,236,221,0.3)] text-ivory-2 transition-colors duration-300 hover:border-coral hover:text-coral"
              style={{ background: 'rgba(11,28,44,0.55)', backdropFilter: 'blur(6px)' }}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
              className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-full border border-[rgba(244,236,221,0.3)] text-ivory-2 transition-colors duration-300 hover:border-coral hover:text-coral"
              style={{ background: 'rgba(11,28,44,0.55)', backdropFilter: 'blur(6px)' }}
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-[1px]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Portrait image marquee */}
      <div
        className="rv overflow-hidden mt-[clamp(40px,5vw,56px)] marquee-mask"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-[16px] w-max"
          style={{
            animation: 'mq 52s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {images.map((img, i) => (
            <figure
              key={`${img.tag}-${i}`}
              className="group flex-none relative overflow-hidden rounded-[20px] border border-[rgba(11,28,44,0.08)] w-[min(260px,62vw)]"
              style={{ aspectRatio: '3 / 4' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg,transparent 45%,rgba(11,28,44,.85) 100%)',
                }}
              />
              <figcaption className="absolute left-[16px] right-[16px] bottom-[14px]">
                <span className="text-[10px] tracking-[0.24em] uppercase font-medium text-coral">
                  {img.tag}
                </span>
                <p className="font-serif font-light text-ivory-2 leading-[1.2] mt-[4px] text-[clamp(15px,1.6vw,18px)]">
                  {img.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}