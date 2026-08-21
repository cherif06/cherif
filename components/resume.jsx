"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaPhp,
  FaVuejs,
  FaLaravel,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaUser,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiHostinger,
  SiMysql,
  SiNuxtdotjs,
  SiFlutter,
  SiSupabase,
  SiArduino,
  SiRedis,
  SiGithubactions,
  SiVercel,
  SiNginx,
} from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "À propos de moi",
  description:
    "Développeur Fullstack & DevOps passionné par la conception d'architectures web évolutives, d'applications mobiles et de solutions IoT. Fort d'une expertise sur Laravel, Nuxt 3, Vue.js et Flutter, je conçois des systèmes résilients, optimisés pour la performance (caching, SEO, multi-tenancy) et automatisés via des pipelines CI/CD et conteneurs Docker.",
  info: [
    {
      fieldName: "Nom complet",
      fieldValue: "Cherif Bakhoum",
    },
    {
      fieldName: "Téléphone",
      fieldValue: "(+221) 77 693 12 31",
    },
    {
      fieldName: "Expérience",
      fieldValue: "3+ années",
    },
    {
      fieldName: "Localisation",
      fieldValue: "Dakar, Sénégal",
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Sénégalaise",
    },
    {
      fieldName: "Statut",
      fieldValue: "Disponible en Freelance / CDI",
    },
    {
      fieldName: "Spécialités",
      fieldValue: "Fullstack, DevOps & IoT",
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais, Wolof",
    },
  ],
};

const experience = {
  title: "Mes Expériences",
  description:
    "Parcours professionnel et missions de consulting en développement Fullstack, DevOps et intégration d'infrastructures cloud.",
  items: [
    {
      company: "CEGESINTL",
      position: "Développeur Fullstack & DevOps",
      contract: "Freelance / Consulting",
      duration: "Depuis Mars 2026 (6 mois)",
      description:
        "Optimisation des performances web (médias WebP, réduction du temps de chargement) et maintenance évolutive de la plateforme BTP.",
    },
    {
      company: "Enedi Consulting (DKR Services)",
      position: "Développeur Fullstack & DevOps",
      contract: "Freelance / Consulting",
      duration: "Déc. 2025 - Mars 2026 (3 mois)",
      description:
        "Déploiement d'une pipeline CI/CD pour la mise en production sans interruption, maintenance corrective et ajout d'APIs tierces (WhatsApp).",
    },
    {
      company: "CEGESINTL",
      position: "Stagiaire Développeur Web",
      contract: "Stage",
      duration: "Déc. 2025 - Mars 2026 (3 mois)",
      description:
        "Conception d'une application moderne avec Inertia.js (Laravel + Vue.js), dashboard complet, automatisation d'emails et SEO avancé.",
    },
    {
      company: "Enedi Consulting",
      position: "Stagiaire Développeur Web",
      contract: "Stage",
      duration: "Juil. 2025 - Oct. 2025 (3 mois)",
      description:
        "Développement complet d'une solution web incluant automatisation d'emails, optimisation SEO et déploiement de production sur Hostinger.",
    },
  ],
};

const education = {
  title: "Mon Parcours Académique",
  description:
    "Solide cursus universitaire en informatique de gestion renforcé par un socle scientifique rigoureux.",
  items: [
    {
      etablissement: "Institut Africain de Management (IAM Dakar)",
      diplome: "Licence en Informatique de Gestion",
      duration: "2023 - 2026",
      details: "Spécialisation en architectures logicielles, bases de données et gestion de projets SI.",
    },
    {
      etablissement: "Lycée Sergeant Malamine Camara",
      diplome: "Baccalauréat Scientifique (S2)",
      duration: "2020 - 2023",
      details: "Sciences exactes, mathématiques appliquées et sciences physiques.",
    },
  ],
};

const skills = {
  title: "Mes Compétences Techniques",
  description:
    "Outils, frameworks et technologies que j'utilise au quotidien pour concevoir des solutions performantes et scalables.",
  skillList: [
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiNuxtdotjs />, name: "Nuxt 3" },
    { icon: <FaVuejs />, name: "Vue.js" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiGithubactions />, name: "CI/CD" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaLinux />, name: "Linux / SSH" },
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiHostinger />, name: "Hostinger" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiArduino />, name: "Arduino / IoT" },
  ],
};

const Resume = () => {
  return (
    <div className="bg-[url('/assets/bg2.png')] bg-repeat-y">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="max-w-7xl px-4 sm:px-8 sm:mx-auto py-12 lg:pt-8"
      id="resume"
    >
      {/* Header de section */}
      <div className="flex flex-col items-center md:items-start mb-8">
        <span className="text-accent mb-2 text-lg font-medium">Mon parcours</span>
        <div className="w-[320px] h-0.5 bg-white/10 rounded-full overflow-hidden mb-3 relative">
          <motion.div
            className="h-full bg-accent rounded-full absolute left-1/2 -translate-x-1/2"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-8 font-bold">Mon CV</h1>
      </div>

      <div>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col gap-8"
        >
          {/* Navigation des Onglets avec design Glassmorphism et icônes (Pleine Largeur) */}
          <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-0 bg-transparent h-auto">
            <TabsTrigger
              value="experience"
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white hover:border-[#00ff99]/40 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:border-accent data-[state=active]:shadow-[0_0_25px_rgba(0,255,153,0.35)] transition-all duration-300"
            >
              <FaBriefcase className="text-lg shrink-0 transition-colors" />
              <span className="font-semibold text-sm sm:text-base">Expérience</span>
            </TabsTrigger>

            <TabsTrigger
              value="education"
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white hover:border-[#00ff99]/40 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:border-accent data-[state=active]:shadow-[0_0_25px_rgba(0,255,153,0.35)] transition-all duration-300"
            >
              <FaGraduationCap className="text-xl shrink-0 transition-colors" />
              <span className="font-semibold text-sm sm:text-base">Formation</span>
            </TabsTrigger>

            <TabsTrigger
              value="competence"
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white hover:border-[#00ff99]/40 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:border-accent data-[state=active]:shadow-[0_0_25px_rgba(0,255,153,0.35)] transition-all duration-300"
            >
              <FaLaptopCode className="text-lg shrink-0 transition-colors" />
              <span className="font-semibold text-sm sm:text-base">Compétences</span>
            </TabsTrigger>

            <TabsTrigger
              value="propos"
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white hover:border-[#00ff99]/40 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:border-accent data-[state=active]:shadow-[0_0_25px_rgba(0,255,153,0.35)] transition-all duration-300"
            >
              <FaUser className="text-base shrink-0 transition-colors" />
              <span className="font-semibold text-sm sm:text-base">À propos</span>
            </TabsTrigger>
          </TabsList>

          <div className="w-full">
            {/* ONGLET EXPÉRIENCES */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-[30px] text-center lg:text-left"
              >
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
                    {experience.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base">
                    {experience.description}
                  </p>
                </div>

                <div className="relative">
                  <div className="py-4 pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {experience.items.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="group relative flex flex-col justify-between rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border-[1px] border-[#00ff99]/20 p-6 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-[#00ff99] hover:shadow-[0_20px_50px_rgba(0,255,153,0.12)]"
                          >
                            {/* Bordure SVG animée au hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-20">
                              <svg
                                className="w-full h-full absolute"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <motion.rect
                                  x="0"
                                  y="0"
                                  width="100%"
                                  height="100%"
                                  rx="16"
                                  stroke="#00ff99"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeDasharray="20 60 50 80 40 125 90 200"
                                  animate={{
                                    strokeDashoffset: [0, -665],
                                  }}
                                  transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />
                              </svg>
                            </div>

                            <div>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2.5">
                                <span className="text-accent text-xs sm:text-sm font-mono font-medium">
                                  {item.duration}
                                </span>
                                <span className="self-center sm:self-auto text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 w-fit">
                                  {item.contract}
                                </span>
                              </div>

                              <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                                {item.position}
                              </h4>

                              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                                {item.description}
                              </p>
                            </div>

                            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#00ff99] shrink-0" />
                              <p className="text-white/90 text-sm font-medium">
                                {item.company}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* ONGLET ÉDUCATION / FORMATION */}
            <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-[30px] text-center lg:text-left"
              >
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
                    {education.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base">
                    {education.description}
                  </p>
                </div>

                <div className="relative">
                  <div className="py-4 pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {education.items.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="group relative flex flex-col justify-between rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border-[1px] border-[#00ff99]/20 p-6 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-[#00ff99] hover:shadow-[0_20px_50px_rgba(0,255,153,0.12)]"
                          >
                            {/* Bordure SVG animée au hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-20">
                              <svg
                                className="w-full h-full absolute"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <motion.rect
                                  x="0"
                                  y="0"
                                  width="100%"
                                  height="100%"
                                  rx="16"
                                  stroke="#00ff99"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeDasharray="20 60 50 80 40 125 90 200"
                                  animate={{
                                    strokeDashoffset: [0, -665],
                                  }}
                                  transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />
                              </svg>
                            </div>

                            <div>
                              <span className="text-accent text-xs sm:text-sm font-mono font-medium block mb-2">
                                {item.duration}
                              </span>
                              <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                                {item.diplome}
                              </h4>
                              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                                {item.details}
                              </p>
                            </div>

                            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#00ff99] shrink-0" />
                              <p className="text-white/90 text-sm font-medium">
                                {item.etablissement}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* ONGLET COMPÉTENCES */}
            <TabsContent value="competence" className="w-full mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-[30px]"
              >
                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    {skills.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base">
                    {skills.description}
                  </p>
                </div>

                <div className="relative">
                  <div className="py-3 pr-4">
                    <ul className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index} className="w-full">
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="group relative w-full h-[115px] sm:h-[120px] rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border-[1px] border-[#00ff99]/20 flex flex-col justify-center items-center p-3 cursor-pointer transition-all duration-300  hover:border-[#00ff99] hover:shadow-[0_10px_30px_rgba(0,255,153,0.15)]">
                                    {/* Bordure SVG animée au hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-20">
                                      <svg
                                        className="w-full h-full absolute"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <motion.rect
                                          x="0"
                                          y="0"
                                          width="100%"
                                          height="100%"
                                          rx="16"
                                          stroke="#00ff99"
                                          strokeWidth="2"
                                          fill="none"
                                          strokeDasharray="15 40 30 60"
                                          animate={{
                                            strokeDashoffset: [0, -300],
                                          }}
                                          transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "linear",
                                          }}
                                        />
                                      </svg>
                                    </div>

                                    <div className="text-3xl sm:text-4xl text-white/85 group-hover:text-accent group-hover:scale-110 transition-all duration-300 mb-1.5">
                                      {skill.icon}
                                    </div>
                                    <span className="text-[11px] sm:text-xs font-mono font-medium text-white/70 group-hover:text-white transition-colors text-center px-1 truncate max-w-full">
                                      {skill.name}
                                    </span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-primary font-medium text-xs">
                                  <p>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* ONGLET À PROPOS */}
            <TabsContent value="propos" className="w-full text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-[30px]"
              >
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                    {about.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    {about.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  {about.info.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="group relative rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border-[1px] border-[#00ff99]/20 p-5 flex flex-col justify-center transition-all duration-300 hover:border-[#00ff99] hover:shadow-[0_10px_30px_rgba(0,255,153,0.1)]"
                      >
                        <span className="text-white/50 text-xs uppercase tracking-wider mb-1">
                          {item.fieldName}
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base group-hover:text-accent transition-colors">
                          {item.fieldValue}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
    </div>
  );
};

export default Resume;