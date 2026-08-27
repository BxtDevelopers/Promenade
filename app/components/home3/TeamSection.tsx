import Image from 'next/image'
import Reveal from '../common/Reveal'
import { TEAM, TEAM_PHOTO, TEAM_PHOTO_ALT } from '@/app/lib/data/teamData'

/**
 * "Meet the team" band on the homepage.
 *
 * (services/[slug] and services/[slug]/[subservices] both import this and then
 * never render it — dead imports, not usages.)
 *
 * This used to render one dashed arch per person containing their initials,
 * waiting on headshots that were never shot. On live pages that read as an
 * unfinished placeholder, and the initials told a patient nothing.
 *
 * It now leads with the real group photo and keeps the names and roles as a
 * list beneath it. When individual headshots do exist, the arch grid is worth
 * revisiting — but a real photo of the actual team beats three empty frames.
 */
export default function TeamSection() {
  return (
    <section id="team" className="bg-bg-2 pb-[clamp(70px,8vw,118px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <Reveal className="mb-[clamp(34px,4vw,52px)]" delay={0}>
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-accent">
            The people behind your care
          </span>
          <h2 className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-white mt-2 text-[clamp(30px,4vw,52px)]">
            Meet the <em className="italic text-accent">team</em>.
          </h2>
        </Reveal>

        {/*
          Framing is derived from the source file — see the notes on TEAM_PHOTO
          in lib/data/teamData.ts. Short version: the group sits low in a 3:4
          portrait under a lot of ceiling, so the crop is bottom-anchored and
          never 16:9, which cannot hold heads and feet at once.

          Lazy rather than preloaded: this sits far below the fold on every page
          that renders it, and marking it eager would make React hoist a
          high-priority <link rel="preload"> for it into the head, ahead of the
          page's own LCP image.
        */}
        <Reveal delay={0.05}>
          <div className="relative overflow-hidden rounded-[22px] border border-[rgba(244,236,221,0.14)] aspect-[4/5] sm:aspect-[4/3]">
            <Image
              src={TEAM_PHOTO}
              alt={TEAM_PHOTO_ALT}
              fill
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-bottom"
            />
          </div>
        </Reveal>

        <ul className="list-none mt-[clamp(28px,3vw,40px)] grid gap-x-[clamp(26px,3vw,40px)] gap-y-[22px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(({ name, role }, i) => (
            /* Reveal renders a <div>, so it has to sit inside the <li> rather
               than wrap it — a <ul> whose children are divs is not a list, and
               axe flags it as one. */
            <li key={name} className="border-t border-[rgba(244,236,221,0.14)] pt-[16px]">
              <Reveal delay={0.1 + i * 0.06}>
                <div className="text-[11.5px] tracking-[0.16em] uppercase font-medium text-accent">
                  {role}
                </div>
                <h3 className="font-serif font-light tracking-[-0.02em] leading-[1.1] mt-[8px] text-white text-[clamp(19px,2.2vw,24px)]">
                  {name}
                </h3>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
