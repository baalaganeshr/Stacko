import team from "@/data/team";
import Reveal from "@/components/Reveal";

const values = [
  {
    icon: "🎯",
    title: "Excellence in Delivery",
    description: "We deliver high-quality web and mobile solutions that exceed expectations and drive real business results.",
  },
  {
    icon: "💡",
    title: "Innovation First",
    description: "Leveraging cutting-edge technologies to build modern, scalable applications tailored to your needs.",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    description: "We work closely with our clients, ensuring transparent communication and collaboration throughout the development process.",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Support Available",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#06070C] to-black py-12 px-4 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <Reveal>
        <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-400 mb-4 font-semibold">About STACKO</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional Development Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are a team of experienced developers dedicated to delivering exceptional web applications, 
            mobile solutions, and automation services that help businesses grow and succeed in the digital world.
          </p>
        </div>
      </Reveal>

      {/* Stats Section */}
      <Reveal>
        <div className="max-w-5xl mx-auto mb-20 relative z-10">
          <div className="grid grid-cols-3 gap-4 md:gap-6 p-6 md:p-10 rounded-2xl bg-[#0d0f14]/80 border border-white/[0.08] backdrop-blur-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-secondary-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.number}</p>
                <p className="text-xs md:text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Values Section */}
      <Reveal>
        <div className="max-w-6xl mx-auto mb-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <div className="p-8 rounded-xl bg-[#0d0f14]/80 border border-white/[0.08] hover:border-secondary-500/40 transition-all duration-300 backdrop-blur-sm">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Team Section */}
      <Reveal>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-400 mb-4 font-semibold">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Founders</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A passionate team of developers committed to delivering excellence in every project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.1}>
                <div className="group p-6 rounded-xl bg-[#0d0f14]/80 border border-white/[0.08] hover:border-secondary-500/40 transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-secondary-400 mb-4">{member.title}</p>
                  <p className="text-sm text-white/60 mb-3 line-clamp-2">{member.specialty}</p>
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-secondary-400 hover:text-secondary-300 transition-colors"
                    >
                      View Portfolio
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
