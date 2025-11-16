import Reveal from "@/components/Reveal";

const techCompanies = [
  "Microsoft",
  "Google", 
  "Amazon",
  "Netflix",
  "IBM",
  "Oracle"
];

const CourseShowcase = () => {
  return (
    <section className="section-padding">
      <div className="page-shell">
        {/* Trust Section */}
        <div className="text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60 mb-8">
              Trusted by professionals at leading technology companies
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
              {techCompanies.map((company, index) => (
                <div
                  key={company}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="text-sm font-semibold text-white/80">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;









