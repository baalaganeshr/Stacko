import React from 'react';
import { Link } from "react-router-dom";
import MobileButton from "./MobileButton";

const programTracks = [
  "Enterprise Dashboard Development",
  "Advanced React Certification",
  "AI Delivery Pods",
  "Corporate Training Pipeline",
];



const Hero = React.memo(() => {
  return (
    <section className="relative isolate overflow-x-hidden bg-[radial-gradient(circle_at_top,#2E1D57_0%,#06070C_68%)] section-padding">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(139,92,246,0.22),transparent_65%)]" />
        <div className="absolute -top-24 -left-12 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/35 to-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 to-transparent blur-[140px]" />
      </div>

      <div className="page-shell grid lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 min-h-[80vh] md:min-h-[85vh] py-12 md:py-16">
        <div className="flex flex-col justify-center max-w-2xl text-center lg:text-left order-2 lg:order-1">
          <span
            className="uppercase tracking-wider font-semibold mb-6 md:mb-8 text-sm md:text-base animate-[fadeInUp_0.6s_ease-out] text-primary-400"
          >
            🚀 STACKO - Professional Development Platform
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 leading-[1.1] font-black animate-[fadeInUp_0.8s_ease-out_0.1s_both] tracking-tight"
          >
            Learn modern web development from{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              expert developers
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 text-white/85 animate-[fadeInUp_0.9s_ease-out_0.2s_both] font-medium"
          >
            Master React, Node.js, and full-stack development through hands-on courses. 
            Build real projects with guidance from experienced developers.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 w-full animate-[fadeInUp_0.9s_ease-out_0.3s_both]"
          >
            <MobileButton
              variant="primary"
              size="lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e?: React.MouseEvent) => {
                e?.preventDefault();
                e?.stopPropagation();
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSftmT9nAdqWqHIW5N_hM4JW5CFHNlKq-H_Sc0ndz_G3r4WXWA/viewform", "_blank", "noopener,noreferrer");
              }}
            >
              🎯 Start Learning
            </MobileButton>
            
            <Link 
              to="/services"
              className="inline-flex items-center justify-center font-semibold rounded-2xl px-10 py-5 text-lg min-h-[60px] w-full sm:w-auto sm:min-w-[180px] bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
            >
              📋 View Services
            </Link>
          </div>


        </div>

        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div
            className="hero-code-block w-full max-w-lg lg:max-w-xl rounded-3xl md:rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-gray-900/95 to-gray-800/90 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/25 hover:shadow-3xl hover:scale-105 animate-[fadeInUp_0.8s_ease-out_0.4s_both] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <p className="text-sm uppercase tracking-[0.2em] text-green-400 font-bold">Programs launching Q1 2025</p>
            </div>
            <div className="space-y-5 text-white/80">
              {programTracks.map((track, index) => (
                <div 
                  key={track} 
                  className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg flex-shrink-0" />
                  <span className="leading-relaxed font-medium text-base">{track}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-6 text-sm text-white/70 transition-all duration-300 hover:bg-white/6">
              <p className="font-bold text-white tracking-tight">Remote-first · Weekly delivery · Portfolio-grade assets</p>
              <p className="mt-3 leading-relaxed">
                Teams collaborate live with STACKO mentors, ship production features, and exit with a polished playbook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
