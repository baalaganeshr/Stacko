import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="page-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-12 backdrop-blur-sm md:p-16 lg:p-20">
            {/* Simple background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10" />
            
            <div className="relative text-center">
              <div className="mx-auto max-w-2xl space-y-8">
                <p className="text-xs uppercase tracking-wider font-semibold text-white/60">
                  Professional Development
                </p>
                
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  Advance Your Technology Career
                </h2>
                
                <p className="text-lg leading-relaxed text-white/80">
                  Join over 1,200 professionals who have advanced their careers through our comprehensive training programs.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-6">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn btn-primary rounded-xl px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105"
                  >
                    Request Information
                  </a>
                  <Link
                    to="/contact"
                    className="btn btn-secondary rounded-xl px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105"
                  >
                    Enterprise Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
