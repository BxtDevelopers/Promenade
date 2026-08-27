/**
 * The practice's support staff, and the group photo of them.
 *
 * This lives here because the roster was previously declared twice — once in
 * components/home3/TeamSection.tsx (service and sub-service pages) and once in
 * components/about2/TeamSection.tsx (/about-us) — and the two had already
 * drifted: a new assistant was added to one and not the other. One source
 * means adding or losing a team member is a single edit.
 *
 * Dr. Sarin is deliberately not in this list. She appears in the group photo,
 * but she is a dentist rather than support staff and is covered properly by
 * the doctor components and by DOCTORS in lib/seo.ts. Adding her here would
 * put her in two places on the same page.
 */
export type TeamMember = {
  name: string;
  role: string;
};

export const TEAM: readonly TeamMember[] = [
  { name: "Stephanie Crow", role: "Patient Coordinator" },
  { name: "Theresa Kelly", role: "Dental Assistant" },
  { name: "Jolyn Uhrinyak", role: "Dental Hygienist" },
  { name: "Tanisha Begay", role: "Dental Assistant" },
];

/**
 * Group photo, shot in the reception area.
 *
 * Framing notes, so they survive a swap: the source is 1536x2048 (3:4
 * portrait) and the group sits low in it — the dark band of scrubs runs from
 * 66% to 100% of the source height, with faces just above that and a lot of
 * empty ceiling on top. A centred crop lands on bare wall and cuts the heads
 * off, and no 16:9 frame can hold both heads and feet. Bottom-anchored at 4:3
 * keeps the whole group; the 4:5 mobile frame shows ~94% of the source.
 *
 * Consumers should render it with `object-cover object-bottom` and the
 * `aspect-[4/5] sm:aspect-[4/3]` pair. Re-derive if the photo is replaced.
 */
export const TEAM_PHOTO = "/assets/team-group.jpg";

export const TEAM_PHOTO_ALT =
  "The five-person Promenade Dental team standing together in the practice's reception area in Chandler, Arizona.";
