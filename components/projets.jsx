"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const projets = [
  {
    num: "01",
    category: "SaaS / IA & DevOps",
    title: "MaamCV",
    points: [
      "Architecture Nuxt 3 & Laravel API : Frontend dynamique sous Nuxt 3 (SEO optimisé) interconnecté à une API REST Laravel robuste.",
      "Scalabilité Backend : Implémentation de Redis (caching) et Laravel Queues pour l'exécution asynchrone des traitements d'IA (OpenRouter) et la génération de documents.",
      "Génération PDF & Multi-tenancy : Utilisation d'un conteneur Gotenberg pour l'export PDF haute performance et hébergement dynamique de portfolios sur sous-domaines automatisés.",
      "DevOps & Déploiement Continu : Automatisation du pipeline CI/CD via Dokploy sur VPS Linux et optimisation du référencement naturel.",
      "Intégration d'APIs tierces : Paiement PayDunya, modèles d'IA via OpenRouter et gestion des médias avec Cloudinary.",
    ],
    Stack: [
      { name: "Nuxt 3" },
      { name: "Laravel" },
      { name: "Redis" },
      { name: "Gotenberg" },
      { name: "Dokploy" },
      { name: "OpenRouter" },
      { name: "PayDunya" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projet1.png",
    imageMobile: "/assets/mb-projet1.png",
    live: "https://maamcv.com/",
    github: "",
  },
  {
    num: "02",
    category: "IoT / Mobile & Cloud",
    title: "Système IoT de Monitoring Temps Réel",
    points: [
      "IoT & Communication API : Capture des données en temps réel via un capteur de niveau d'eau et transmission sécurisée vers une API REST Laravel.",
      "Application Mobile Flutter : Développement d'une interface mobile cross-platform sous Flutter pour le suivi en direct, le traitement des métriques et le déclenchement d'alertes instantanées.",
      "Gestion & Stockage : Base de données temps réel Supabase & MySQL pour la persistance et l'historisation des flux télémétriques.",
    ],
    Stack: [
      { name: "Flutter" },
      { name: "Laravel" },
      { name: "Supabase" },
      { name: "IoT / C++" },
      { name: "Arduino" },
      { name: "MySQL" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projetVido.png",
    imageMobile: "/assets/mb-projetVido.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack & CI/CD & SEO",
    title: "Dkr Services",
    points: [
      "Plateforme de gestion pour une entreprise de nettoyage professionnel avec algorithme d'estimation de devis en temps réel.",
      "Déploiement d'une pipeline CI/CD pour la mise en production sans interruption, maintenance corrective et ajout d'APIs tierces (WhatsApp).",
      "Dashboard admin sécurisé pour la gestion des prospects, messages et demandes de services.",
    ],
    Stack: [
      { name: "Laravel" },
      { name: "Vue.js" },
      { name: "MySQL" },
      { name: "CI/CD" },
      { name: "Tailwind CSS" },
      { name: "Hostinger" },
    ],
    image: "/assets/projet3.png",
    imageMobile: "/assets/mb-projet3.png",
    live: "https://dkrservices.com",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack / CI/CD & SEO",
    title: "CEGESINTL",
    points: [
      "Plateforme web moderne utilisant Inertia.js pour lier Laravel et Vue.js en architecture SPA performante.",
      "Système de dashboard complet, logique d'automatisation d'emails et formulaire d'inscription pour programme de logement.",
      "Optimisation des performances web (médias WebP), réduction des temps de chargement et SEO avancé.",
    ],
    Stack: [
      { name: "Laravel" },
      { name: "Vue.js" },
      { name: "Inertia.js" },
      { name: "Tailwind CSS" },
      { name: "Hostinger" },
    ],
    image: "/assets/projet4.png",
    imageMobile: "/assets/mb-projet4.png",
    live: "https://cegesintl.com/",
    github: "",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const Projets = () => {
  return (
    <section className="bg-[url('/assets/bg2.png')] bg-repeat-y" id="projets">
      <div className="min-h-screen py-12 flex flex-col justify-center  max-w-7xl px-4 sm:px-8 sm:mx-auto">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start mb-12"
        >
          <span className="text-accent mb-2 text-lg font-medium tracking-wide">
            Mes réalisations
          </span>
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden mb-3 relative">
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Mes Projets
          </h1>
        </motion.div>

        {/* Liste des Cards pleine largeur (Full Width / Showcase layout) */}
        <div className="flex flex-col gap-12">
          {projets.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -6 }}
                className="group relative w-full rounded-3xl bg-[#16161c]/30 backdrop-blur-xl border-[1px] border-[#00ff99]/20 overflow-hidden transition-all duration-500 hover:border-[#00ff99]  hover:shadow-[0_20px_50px_rgba(0,255,153,0.12)]"
              >
                {/* Bordure SVG animée au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl z-20">
                  <svg
                    className="w-full h-full absolute"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      rx="24"
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

                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-stretch justify-between w-full min-h-[420px] lg:min-h-[480px]`}
                >
                  {/* Image Showcase occupant toute la moitié sans padding */}
                  <div className="w-full lg:w-5/12 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-[#121217]">
                      <Image
                        fill
                        src={project.imageMobile}
                        alt={project.title}
                        className="lg:hidden object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        className="hidden lg:block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121217]/70 via-transparent to-transparent lg:hidden" />

                    {/* Badges sur l'image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2.5 z-10">
                      <span className="px-3 py-1.5 rounded-lg bg-[#121217]/90 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-accent shadow-md">
                        {project.num}
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-[#121217]/90 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 capitalize shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenu textuel & Infos du projet */}
                  <div className="w-full lg:w-7/12 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                    <div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h2>

                      {/* Bullet points avec puces vertes lumineuses (Glowing Green Dots) */}
                      <ul className="space-y-3 mb-6">
                        {project.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3">
                            {/* Puce verte néon avec glow */}
                            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#00ff99] shrink-0 mt-2" />
                            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {/* Badges de Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.Stack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 group-hover:border-accent/30 group-hover:text-white transition-all"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>

                      {/* Liens d'action */}
                      <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                        {project.live ? (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-11 px-5 rounded-xl bg-accent text-primary font-bold text-sm flex items-center gap-2 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,255,153,0.5)] hover:scale-[1.02] transition-all duration-300"
                          >
                            <span>Voir le projet</span>
                            <BsArrowUpRight className="text-base" />
                          </Link>
                        ) : (
                          <div className="h-11 px-5 rounded-xl bg-white/5 border border-white/10 text-white/40 font-medium text-xs flex items-center gap-2 cursor-not-allowed">
                            <span>Projet privé</span>
                          </div>
                        )}

                        {project.github ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-primary hover:bg-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] transition-all duration-300"
                          >
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span>
                                    <BsGithub className="text-lg" />
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-primary text-xs font-medium">
                                  <p>Code source</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Link>
                        ) : (
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/30 cursor-not-allowed">
                                  <BsGithub className="text-lg" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white text-primary text-xs font-medium">
                                <p>Dépôt privé</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projets;