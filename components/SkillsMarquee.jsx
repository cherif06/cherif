"use client";

import React from "react";

const skills = [
  "JavaScript",
  "PHP",
  "Vue.js",
  "Nuxt.js",
  "Laravel",
  "Tailwind CSS",
  "Next.js",
  "Flutter",
  "MySQL",
  "Supabase",
  "Git",
  "Docker",
  "CI/CD",
  "Figma",
  "Hostinger",
  "WordPress",
  "C++",
  "Arduino",
];

const SkillsMarquee = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 border-y border-white/10 bg-[#16161c]/60 backdrop-blur-sm">
      <div className="animate-marquee flex items-center gap-6 sm:gap-8">
        {/* Set 1 */}
        {skills.map((skill, index) => (
          <div key={`skill-1-${index}`} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-white/70 hover:text-accent transition-colors duration-300 select-none">
              {skill}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#00ff99] shrink-0" />
          </div>
        ))}

        {/* Set 2 pour boucle infinie fluide sans coupure */}
        {skills.map((skill, index) => (
          <div key={`skill-2-${index}`} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-white/70 hover:text-accent transition-colors duration-300 select-none">
              {skill}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#00ff99] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
