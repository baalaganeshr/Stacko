import Reveal from "@/components/Reveal";

const officeHours = [
  {
    title: "Education partnerships",
    description: "Universities and bootcamps looking to integrate STACKO curriculum or internship tracks.",
  },
  {
    title: "Product sprints",
    description: "Founders and product leaders needing rapid delivery with a design-forward engineering team.",
  },
  {
    title: "Talent network",
    description: "Companies hiring STACKO alumni or offering apprenticeship-style roles for our fellows.",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#06070C] to-black pt-24 pb-20 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-400 mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's architect your next chapter
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Share your goals, timeline, and challenges. We'll assemble a tailored roadmap for your success.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 mt-20">
          <Reveal>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary-400 mb-6">Get Started</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Tell us about your project and we'll get back to you within 24 hours. Our team is ready to help you bring your vision to life.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="border-l-2 border-secondary-500/60 pl-4">
                  <p className="text-sm font-semibold text-white mb-1">Quick Response</p>
                  <p className="text-sm text-white/60">We respond to all inquiries within 24 hours during business days.</p>
                </div>
                
                <div className="border-l-2 border-secondary-500/60 pl-4">
                  <p className="text-sm font-semibold text-white mb-1">Free Consultation</p>
                  <p className="text-sm text-white/60">Initial consultation is completely free with no commitment required.</p>
                </div>
                
                <div className="border-l-2 border-secondary-500/60 pl-4">
                  <p className="text-sm font-semibold text-white mb-1">Custom Solutions</p>
                  <p className="text-sm text-white/60">Every project gets a tailored approach based on your specific needs.</p>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-secondary-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-secondary-500 hover:to-purple-500 hover:shadow-lg hover:shadow-secondary-500/30 transition-all duration-200"
              >
                Contact Us Now
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary-400 mb-6">Office Hours</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                We host weekly consults. Choose your track and we'll pair you with the right founder or lead engineer.
              </p>
              
              <div className="space-y-6 mb-10">
                {officeHours.map((slot) => (
                  <div key={slot.title} className="border-l-2 border-purple-500/60 pl-4">
                    <p className="text-sm font-semibold text-white mb-1">{slot.title}</p>
                    <p className="text-sm text-white/60">{slot.description}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white mb-3">Direct Line</p>
                <div className="space-y-2">
                  <a 
                    href="mailto:stackoindustries@gmail.com" 
                    className="block text-sm text-secondary-400 hover:text-secondary-300 transition-colors"
                  >
                    stackoindustries@gmail.com
                  </a>
                  <a 
                    href="tel:+919751987380" 
                    className="block text-sm text-secondary-400 hover:text-secondary-300 transition-colors"
                  >
                    +91 9751987380
                  </a>
                </div>
                <p className="mt-3 text-xs text-white/50">Response within 2 business days.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;


