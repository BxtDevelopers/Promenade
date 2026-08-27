'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import Reveal from '../common/Reveal'
import { TEAM, TEAM_PHOTO, TEAM_PHOTO_ALT } from '@/app/lib/data/teamData'

export default function TeamSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

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
    <section id="team" className="bg-white py-[clamp(70px,8vw,118px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <Reveal className="mb-[clamp(34px,4vw,52px)]" delay={0}>
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-accent">
            Come say hello
          </span>
          <h2 className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-neutral-900 mt-2 text-[clamp(30px,4vw,52px)]">
            Meet the <em className="italic text-accent">team</em>.
          </h2>
          {/* <p className="font-light text-[15.5px] leading-[1.75] mt-[14px] text-neutral-500 max-w-[62ch]">
            A quick hello from Dr. Shriya, and the friendly faces who&rsquo;ll
            greet you at every visit.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[clamp(30px,4vw,64px)] items-stretch">
          {/* Intro video — portrait */}
          <Reveal delay={0.05}>
            <div className="relative mx-auto w-full max-w-[380px] rounded-[24px] overflow-hidden  w-[600px] h-[600px] ">
              <video
                ref={videoRef}
                src="/assets/dr-shriya-intro.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 pointer-events-none rounded-[24px] bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,transparent_30%,transparent_60%,rgba(0,0,0,0.55)_100%)]" />

              {/* Caption, bottom-left */}
              {/* <div className="absolute left-[20px] right-[20px] bottom-[20px]">
                <span className="text-[10.5px] tracking-[0.26em] uppercase font-medium text-accent">
                  A message from
                </span>
                <p className="font-serif font-light text-white leading-[1.2] mt-[4px] text-[22px]">
                  Dr. Shriya Sarin
                </p>
              </div> */}

              {/* Controls, top-right */}
              <div className="absolute right-[14px] top-[14px] flex items-center gap-[8px]">
                <button
                  onClick={toggleMute}
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                  className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-coral hover:text-accent"
                  style={{ background: 'rgba(11,28,44,0.55)', backdropFilter: 'blur(6px)' }}
                >
                  {muted ? <VolumeX className="w-[15px] h-[15px]" /> : <Volume2 className="w-[15px] h-[15px]" />}
                </button>
                <button
                  onClick={togglePlay}
                  aria-label={playing ? 'Pause video' : 'Play video'}
                  className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-coral hover:text-accent"
                  style={{ background: 'rgba(11,28,44,0.55)', backdropFilter: 'blur(6px)' }}
                >
                  {playing ? <Pause className="w-[15px] h-[15px]" /> : <Play className="w-[15px] h-[15px] translate-x-[1px]" />}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Team roster — editorial index list */}
          <div className="flex flex-col justify-center divide-y divide-neutral-200 border-t border-b border-neutral-200 lg:border-t-0 lg:border-b-0">
            {TEAM.map(({ name, role }, i) => (
              <Reveal key={name} delay={0.1 + i * 0.06}>
                <div className="group relative flex items-center gap-[22px] py-[26px] md:py-[30px] overflow-hidden">
                  {/* Ghost index number */}
                  <span className="font-serif font-light leading-none text-[clamp(52px,6vw,76px)] text-accent/60 transition-colors duration-500 group-hover:text-accent/90 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between gap-[4px] sm:gap-[16px]">
                    <b className="font-serif font-light text-neutral-900 text-[clamp(22px,2.4vw,30px)] leading-[1.1] tracking-[-0.01em]">
                      {name}
                    </b>
                    <span className="text-[11.5px] tracking-[0.2em] uppercase font-medium text-accent shrink-0">
                      {role}
                    </span>
                  </div>

                  {/* Animated underline sweep on hover */}
                  <span className="pointer-events-none absolute left-0 bottom-0 h-[1.5px] w-full origin-left scale-x-0 bg-coral transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/*
          The team, in the room patients actually walk into. The roster above
          is a text index and the video is one person; neither shows the group
          a visitor will meet at the front desk.

          Not `priority`: this sits well below the fold, and marking it eager
          would make React hoist a high-priority <link rel="preload"> for it in
          the head, ahead of the page's own LCP image. next/image is lazy by
          default, which is what we want here.
        */}
        <Reveal className="mt-[clamp(34px,4vw,56px)]" delay={0.1}>
          <figure className="m-0">
            {/* Crop geometry is derived from the source file; the reasoning
                is recorded alongside TEAM_PHOTO in lib/data/teamData.ts. */}
            <div className="relative overflow-hidden rounded-[24px] border border-neutral-200 aspect-[4/5] sm:aspect-[4/3]">
              <Image
                src={TEAM_PHOTO}
                alt={TEAM_PHOTO_ALT}
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover object-bottom"
              />
            </div>
            <figcaption className="mt-[14px] text-[13px] font-light leading-[1.6] text-neutral-500">
              The Promenade Dental team at our Fulton Ranch office.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}