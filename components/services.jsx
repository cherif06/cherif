"use client";

import {BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
    {
        num: '01',
        title: "Développement d'API avec Laravel",
        description: "Conception et mise en place d'API RESTful robustes, sécurisées et performantes avec le framework Laravel. Architecture évolutive, authentification JWT/Sanctum, intégration de services tiers et gestion efficace des bases de données.",
        href: "",
        span: "9"
    },
    {
        num: '02',
        title: 'Interfaces modernes & responsive',
        description: "Développement d'interfaces réactives et modernes avec Vue.js, Nuxt.js et Tailwind CSS. Approche Utility-First pour un code léger, maintenable et parfaitement adapté à tous les écrans.",
        href: "",
        span: "7"
    },
    {
        num: '03',
        title: 'DevOps & Déploiement',
        description: "Déploiement autonome sur VPS Hostinger et hébergement mutualisé. Configuration de Nginx, sécurisation SSL, gestion des domaines et DNS. Automatisation de la mise en production via GitHub Actions (CI/CD) et gestion sécurisée du serveur par SSH.",
        href: "",
        span: "7"
    },
    {
        num: '04',
        title: 'Développement mobile',
        description: "Conception et développement d'applications mobiles multiplateformes (iOS & Android) fluides et performantes avec Flutter. Intégration d'interfaces modernes, connexion fluide aux API back-end et optimisation de l'expérience utilisateur.",
        href: "",
        span: "9"
    },
    {
        num: '05',
        title: 'Référencement SEO & Google Analytics',
        description: "Optimisation du référencement naturel (SEO) pour maximiser la visibilité et le positionnement sur les moteurs de recherche. Intégration et configuration de Google Analytics pour le suivi précis du trafic, analyse d'audience et structuration sémantique.",
        href: "",
        span: "16"
    },
]

import {motion} from "framer-motion";

const getColSpanClass = (span) => {
    const spanMap = {
        '9': 'md:col-span-9',
        '10': 'md:col-span-10',
        '7': 'md:col-span-7',
        '6': 'md:col-span-6',
        '16': 'md:col-span-16',
    };
    return spanMap[span] || 'md:col-span-4';
};

const Services = () =>{
    return ( 
    <section className="flex flex-col items-center lg:items-start">
        <span className="text-accent mb-2 sm:text-lg font-medium">Ce que je peux faire pour vous</span>
        {/* Barre animée */}
        <div className="w-[200px] sm:w-[320px] h-0.5 bg-white/10 rounded-full overflow-hidden mb-3 relative">
            <motion.div 
                className="h-full bg-accent rounded-full absolute left-1/2 -translate-x-1/2"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-8 font-bold">Mes Services</h1>
        
        
        <div className="min-h-[80vh] flex flex-col justify-center pt-16 xl:py-0" id="services">
                <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}

                }}
                className="grid grid-cols-1 md:grid-cols-16 gap-[30px] "
                >
                {services.map((service,index)=>{
                    return (
                    <div key={index} className={`flex flex-col bg-[#27272c] px-6 py-4 rounded-2xl group ${getColSpanClass(service.span)} relative overflow-hidden`}  >
                        {/* Bordure animée au hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                            <svg 
                                className="w-full h-full absolute" 
                                xmlns="http://www.w3.org/2000/svg">
                                <motion.rect
                                    x="1"
                                    y="1"
                                    width="calc(100% - 2px)"
                                    height="calc(100% - 2px)"
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
                                        ease: "linear"
                                    }}
                                />
                            </svg>
                        </div>
                        
                        <div className="w-full flex justify-between items-center relative z-10">
                            <div className="text-4xl font-extrabold text-outline text-transparent mb-4 transition-all duration-500">
                                {service.num}
                            </div>
                            {/* <Link href={service.href} className="w-[100px] h-[50px] rounded-full bg-white fleche duration-500 flex justify-center items-center hover:-rotate-45">
                              <BsArrowDownRight className="text-primary text-3xl" />
                            </Link> */}
                        </div>
                        <h2 className="text-[30px] font-bold leading-none text-white group-hover-vert mb-4 transition-all duration-500 relative z-10">{service.title}</h2>
                        <p className="text-white/60 text-[13px] relative z-10" >{service.description}</p>
                    </div>
                    );
                })}
                </motion.div>
        </div> 
    </section>
    );
};

export default Services;