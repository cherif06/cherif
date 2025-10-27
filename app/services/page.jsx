"use client";

import {BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
    {
        num: '01',
        title: 'Développement back-end',
        description: "Capable de gérer la communication avec une base de données en suivant une logique MVC (Modèle-Vue-Contrôleur). Capable de mettre en place un dashboard, de mettre en place un système d\'authentification et un systeme d'envoie d\'emails.",
        href: ""
    },
    {
        num: '02',
        title: 'Développement front-end',
        description: 'Développement de sites web modernes (vitrines, portfolios, landing pages, blogs) avec un design responsive et une expérience utilisateur fluide.',
        href: ""
    },
    {
        num: '03',
        title: 'Conception de maquettes via Figma',
        description: 'Bonne maîtrise de Figma pour la lecture, l’interprétation et l’intégration de maquettes UI/UX. Capable d’extraire les éléments nécessaires à l’intégration (couleurs, typographies, espacements, images, icônes SVG) et de reproduire fidèlement un design en HTML, CSS (ou Bootstrap)',
        href: ""
    },
    {
        num: '04',
        title: 'Déploiement',
        description: 'Je maîtrise le déploiement d’applications fullstack ou statiques sur Hostinger.',
        href: ""
    },
    {
        num: '05',
        title: 'Referencement SEO',
        description: 'Je maîtrise le référencement SEO pour améliorer la visibilité des sites web sur les moteurs de recherche.',
        href: ""
    },
]

import {motion} from "framer-motion";

const Services = () =>{
    return ( 
        <section className="min-h-[80vh] flex flex-col justify-center pt-16 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}

                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                {services.map((service,index)=>{
                    return (<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent  transition-all duration-500">
                                {service.num}
                            </div>
                            <Link href={service.href} className="w-[100px] h-[50px] rounded-full bg-white fleche duration-500 flex justify-center items-center hover:-rotate-45">
                              <BsArrowDownRight className="text-primary text-3xl" />
                            </Link>
                        </div>
                        <h2 className="text-[30px] font-bold leading-none text-white group-hover-vert  transition-all duration-500">{service.title}</h2>
                        <p className="text-white/60 text-[13px]" >{service.description}</p>
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                    );
                })}
                </motion.div>
            </div>
        </section> 
    );
};

export default Services;