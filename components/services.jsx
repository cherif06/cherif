"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsServer,
  BsCpu,
  BsGlobe2,
  BsPhone,
  BsCloudCheck,
  BsGraphUpArrow,
  BsArrowUpRight,
} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    icon: BsServer,
    category: "Backend & Scalabilité",
    title: "Architecture Backend & APIs RESTful",
    description:
      "Conception d'architectures backend robustes, sécurisées et hautement scalables pour alimenter vos applications web et mobiles.",
    points: [
      "Conception et développement d'APIs RESTful sécurisées (JWT, Sanctum, OAuth 2.0).",
      "Optimisation des performances via le caching et les files d'attente (Queues).",
      "Modélisation, structuration et optimisation de bases de données relationnelles.",
      "Architectures modulaires et gestion du Multi-tenancy.",
    ],
    tags: ["Laravel", "Redis", "MySQL", "REST API", "OAuth 2.0"],
  },
  {
    num: "02",
    icon: BsCpu,
    category: "IA & Automatisation",
    title: "Intégration d'IA & Services Tiers",
    description:
      "Connexion de modèles d'intelligence artificielle et intégration d'APIs pour automatiser vos processus et enrichir vos applications.",
    points: [
      "Intégration de modèles de langage (LLMs) et solutions d'IA générative.",
      "Intégration de passerelles de paiement en ligne sécurisées (PayDunya, Stripe).",
      "Connexion d'APIs tierces, webhooks et services de messagerie / notification.",
      "Automatisation de flux de travail et traitement asynchrone.",
    ],
    tags: ["OpenRouter", "LLMs", "PayDunya", "Stripe", "Webhooks", "APIs"],
  },
  {
    num: "03",
    icon: BsGlobe2,
    category: "Fullstack & SaaS",
    title: "Développement Web Fullstack & SaaS",
    description:
      "Création d'applications web modernes, réactives et performantes offrant une expérience utilisateur fluide et intuitive.",
    points: [
      "Développement d'applications Single Page (SPA) et Server-Side Rendered (SSR).",
      "Conception de dashboards d'administration et plateformes interactives.",
      "Interfaces utilisateur ergonomiques et responsives avec Tailwind CSS.",
      "Architecture logicielle propre garantissant maintenabilité et évolutivité.",
    ],
    tags: ["Nuxt 3", "Vue.js", "Inertia.js", "Laravel", "Tailwind CSS"],
  },
  {
    num: "04",
    icon: BsPhone,
    category: "Mobile & IoT",
    title: "Applications Mobiles & Solutions IoT",
    description:
      "Développement d'applications mobiles cross-platform et intégration de flux de données connectées en temps réel.",
    points: [
      "Développement d'applications mobiles multiplateformes (iOS & Android).",
      "Communication sécurisée avec des équipements et capteurs connectés via API.",
      "Synchronisation et traitement de données télémétriques en temps réel.",
      "Gestion des notifications push, alertes instantanées et réactivité UI.",
    ],
    tags: ["Flutter", "iOS & Android", "IoT", "Supabase", "Temps Réel"],
  },
  {
    num: "05",
    icon: BsCloudCheck,
    category: "DevOps & Cloud",
    title: "DevOps, CI/CD & Déploiement Cloud",
    description:
      "Automatisation du cycle de déploiement et configuration d'infrastructures résilientes, sécurisées et monitorées.",
    points: [
      "Mise en place de pipelines d'intégration et déploiement continus (CI/CD).",
      "Conteneurisation des applications et environnements avec Docker.",
      "Configuration et sécurisation de serveurs Linux (Nginx, SSL, SSH).",
      "Déploiement sur serveurs VPS et plateformes cloud modernes.",
    ],
    tags: ["Dokploy", "Docker", "CI/CD", "Linux", "Nginx", "GitHub Actions"],
  },
  {
    num: "06",
    icon: BsGraphUpArrow,
    category: "Performance & SEO",
    title: "Optimisation de Performance & SEO",
    description:
      "Amélioration de la vitesse de chargement, de l'accessibilité et de la visibilité naturelle de vos sites sur les moteurs de recherche.",
    points: [
      "Optimisation des Core Web Vitals, réduction du TTFB et compression d'actifs.",
      "Référencement naturel technique (SEO sémantique, métadonnées structurées).",
      "Intégration d'outils d'analytique pour le suivi de trafic et de conversion.",
      "Stratégies de mise en cache et temps de rendu ultra-rapides.",
    ],
    tags: ["SEO Technique", "Core Web Vitals", "Google Analytics", "Caching"],
  },
];

const Services = () => {
  return (
    <section
      className="bg-[url('/assets/bg2.png')] bg-repeat-y"
      id="services"
    >
      <div className="min-h-screen py-12 flex flex-col justify-center max-w-7xl px-4 sm:px-8 sm:mx-auto">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start mb-12"
        >
          <span className="text-accent mb-2 text-lg font-medium tracking-wide">
            Ce que je peux vous apporter
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
            Mes Services
          </h1>
        </motion.div>

        {/* Grille des services - Apparition du bas vers le haut une par une */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#16161c]/30 backdrop-blur-xl border-[1px] border-[#00ff99]/20 p-7 sm:p-8 transition-all duration-300 hover:border-[#00ff99] hover:shadow-[0_20px_50px_rgba(0,255,153,0.12)]"
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
                      width="calc(100%)"
                      height="calc(100%)"
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

                <div>
                  {/* Header de la carte : Numéro, Badges & Icône */}
                  <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1.5 rounded-lg bg-[#121217]/90 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-accent shadow-md">
                        {service.num}
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-[#121217]/90 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 capitalize shadow-md">
                        {service.category}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] transition-all duration-300">
                      <IconComponent />
                    </div>
                  </div>

                  {/* Titre du service */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 relative z-10">
                    {service.title}
                  </h2>

                  {/* Description synthétique */}
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5 relative z-10">
                    {service.description}
                  </p>

                  {/* Liste à puces avec glowing green dots */}
                  <ul className="space-y-2.5 mb-6 relative z-10">
                    {service.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#00ff99] shrink-0 mt-2" />
                        <p className="text-white/80 text-xs leading-relaxed">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Badges de Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 relative z-10">
                    {service.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 group-hover:border-accent/30 group-hover:text-white transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bouton Contact / Discuter du projet */}
                  <div className="mt-5 pt-3">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-accent group-hover:underline"
                    >
                      <span>Lancer un projet</span>
                      <BsArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
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

export default Services;