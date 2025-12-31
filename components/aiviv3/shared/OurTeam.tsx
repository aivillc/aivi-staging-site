import Image from 'next/image';

const team = [
  {
    name: 'Giorgio Mihaila',
    role: 'Co-Founder & CTO',
    image: '/giorgiom.webp',
    bio: 'Built Amazon Connect\'s global expansion (100,000 agents, 22 countries) and Five9\'s enterprise platform still in use today. 20+ years architecting contact center technology at Amazon, Cisco, Five9, and Avaya.',
    mission: 'Now building the AI Revenue Engine that makes traditional contact centers obsolete—not by replacing humans, but by making them 2X more productive.',
    linkedin: 'https://www.linkedin.com/in/gmihaila/',
    email: 'giorgio@aivi.io',
  },
  {
    name: 'Olly Whittle',
    role: 'Co-Founder & Chief Revenue Officer',
    image: '/ollyw.webp',
    bio: '15+ years running digital agencies managing $100M+ in annual ad spend. Founder of SWARM Social (digital marketing) and BudiPay (fintech).',
    mission: 'Saw clients waste millions on "bad leads" that were actually fine—just followed up too slowly. Built AIVI to solve the $1.2M/month problem he saw everywhere.',
    linkedin: 'https://www.linkedin.com/in/ollyaivoice/',
    email: 'olly@aivi.io',
  },
];

export default function OurTeam() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl font-manrope mt-6">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-[32px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal text-[#1A1A1A] mb-4">
          Meet the <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">Team</span>
        </h2>
        <p className="text-center text-[17px] sm:text-[18px] md:text-[19px] text-[#666666] mb-12 max-w-[700px] mx-auto">
          The experienced leaders driving AIVI&apos;s mission forward
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative bg-white border-2 border-[#E8E5E0] rounded-2xl p-6 sm:p-8 hover:border-[#f84608]/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 border-4 border-gradient-to-br from-[#f84608]/20 to-[#321ca3]/20 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1A1A1A] mb-1">
                  {member.name}
                </h3>
                <p className="text-[16px] sm:text-[17px] md:text-[18px] font-medium bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#666666] leading-[1.7] mb-3">
                  {member.bio}
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.7] mb-6 font-medium">
                  {member.mission}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white text-[14px] font-medium rounded-lg hover:bg-[#004182] transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 px-4 py-2 bg-[#f8f8f8] text-[#1A1A1A] text-[14px] font-medium rounded-lg border border-[#E8E5E0] hover:border-[#f84608]/30 hover:bg-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {member.email}
                  </a>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f84608]/5 to-[#321ca3]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
