import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, name: "C" },
  { id: 2, name: "C++" },
  { id: 3, name: "Java" },
  { id: 4, name: "JavaScript" },
  { id: 5, name: "Python" },
  { id: 6, name: "Backend Development" },
  { id: 7, name: "Cybersecurity" },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#06070C] to-black py-12 px-4 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <Reveal>
        <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-400 mb-4 font-semibold">Our Courses</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Learn & Master Technology
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional courses designed to help you master modern programming languages and development skills.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-600 to-purple-600 px-8 py-4 rounded-lg text-white font-semibold hover:from-secondary-500 hover:to-purple-500 hover:shadow-lg hover:shadow-secondary-500/30 transition-all duration-300"
          >
            Enroll Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Reveal>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.1}>
              <div className="group p-8 rounded-xl bg-[#0d0f14]/80 border border-white/[0.08] hover:border-secondary-500/50 transition-all duration-300 backdrop-blur-sm text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{course.name}</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-secondary-500 to-purple-600 rounded-full mx-auto" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
