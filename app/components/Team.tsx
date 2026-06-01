const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Cosmetic Dentist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    bio: "Harvard-trained with 15 years of expertise in creating flawless, natural-looking smile transformations.",
  },
  {
    name: "Dr. James Okafor",
    role: "Orthodontic Specialist",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
    bio: "Certified Invisalign Diamond Provider. Passionate about helping patients achieve perfectly aligned smiles.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Implantologist",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
    bio: "Specialist in full-arch restorations and implantology, restoring both function and confidence.",
  },
];

export default function Team() {
  return (
    <section className="bg-[#FDE8D8]/40 py-24 lg:py-32 relative">
      <div className="w-[92%] max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-[#ffa07a]" />
            <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#ffa07a] font-['DM_Sans']">
              Our Specialists
            </span>
            <span className="w-10 h-[2px] bg-[#ffa07a]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-[#1A365D] tracking-tight">
            Meet the Team <br className="hidden md:block"/> Behind Your Smile
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 pt-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative bg-transparent rounded-[2rem] transition-all duration-500 hover:-translate-y-3"
            >
              {/* Layered Card Effect */}
              <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(26,54,93,0.08)] group-hover:shadow-[0_20px_40px_rgba(26,54,93,0.15)] transition-all duration-500">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D] via-[#1A365D]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Floating Content Box */}
              <div className="relative -mt-20 mx-6 bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(26,54,93,0.1)] border border-white/60 group-hover:border-[#ffa07a]/30 transition-colors duration-300">
                <h4 className="text-2xl font-bold font-['Poppins'] text-[#1A365D] mb-1">
                  {member.name}
                </h4>
                <p className="text-[#ffa07a] text-[15px] font-['DM_Sans'] font-bold mb-4 tracking-wide uppercase">
                  {member.role}
                </p>
                <div className="w-12 h-px bg-[#1A365D]/10 mb-4 group-hover:w-full group-hover:bg-[#ffa07a] transition-all duration-500" />
                <p className="text-[#1A365D]/70 text-[15px] font-['DM_Sans'] font-medium leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}