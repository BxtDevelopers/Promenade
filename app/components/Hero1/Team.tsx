
const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Cosmetic Dentist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    bio: "Harvard-trained with 15 years of expertise in smile transformations.",
  },
  {
    name: "Dr. James Okafor",
    role: "Orthodontic Specialist",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    bio: "Certified Invisalign Diamond Provider with over 3,000 cases completed.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Implantologist",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    bio: "Specialist in full-arch restorations and mini dental implants.",
  },
];

export default function Team() {
    return(
        <div className="w-[90%] mx-auto py-24 lg:py-32" >
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
              Our Specialists
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D]">
              Meet the Team Behind Your Smile
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A365D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-7">
                  <h4 className="text-2xl font-semibold font-['Sora'] text-[#1A365D]">{member.name}</h4>
                  <p className="text-[#ffa07a] text-[14px] font-['Poppins'] font-semibold mb-3 tracking-wide">{member.role}</p>
                  <p className="text-[#64748B] text-[15px] font-['Poppins'] leading-relaxed font-medium">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    )

}