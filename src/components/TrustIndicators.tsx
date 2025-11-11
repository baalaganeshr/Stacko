const TrustIndicators = () => {
  const companies = [
    { name: "Microsoft" },
    { name: "Google" },
    { name: "Amazon" },
    { name: "Netflix" },
    { name: "IBM" },
    { name: "Oracle" }
  ];

  return (
    <section className="py-8 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Company Logos */}
        <div className="text-center animate-fade-in-up">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-8">
            Trusted by professionals at leading technology companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="px-6 py-3 rounded border border-white/20 bg-black/20 hover:border-white/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <span className="text-white/80 font-semibold">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          
          <div className="glass-surface-soft rounded p-6 text-center border border-white/20 bg-black/20">
            <h4 className="text-lg font-bold text-white mb-3">Accelerated Learning</h4>
            <p className="text-white/80 text-sm">
              Comprehensive programs designed for working professionals. Complete advanced certifications in 12-16 weeks.
            </p>
          </div>
          
          <div className="glass-surface-soft rounded p-6 text-center border border-white/20 bg-black/20">
            <h4 className="text-lg font-bold text-white mb-3">Industry Projects</h4>
            <p className="text-white/80 text-sm">
              Build enterprise-grade applications using real client requirements and modern development practices.
            </p>
          </div>
          
          <div className="glass-surface-soft rounded p-6 text-center border border-white/20 bg-black/20">
            <h4 className="text-lg font-bold text-white mb-3">Career Services</h4>
            <p className="text-white/80 text-sm">
              Dedicated career support including resume optimization, interview preparation, and job placement assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;