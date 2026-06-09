'use client';

const ITEMS = [
  'Most PPO Plans Accepted',
  'Same-Day Emergencies',
  'New Patients Welcome',
  'Beautiful Smiles for All Ages',
] as const;

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto flex items-center justify-center gap-6 flex-wrap py-[22px]">
        {ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            <span className="text-[12px] tracking-wide3 uppercase text-ivory-2 font-medium">
              {item}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="w-[5px] h-[5px] rounded-full bg-coral inline-block shrink-0 hidden sm:inline-block" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}