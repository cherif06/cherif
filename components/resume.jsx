"use client";

import { Description } from "@radix-ui/react-dialog";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaPhp,
    FaJava,
    FaVuejs,
    FaLaravel,
    FaWordpress,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiC,
    SiCplusplus,
    SiHostinger,
} from "react-icons/si";

const about = {
    title: "A propos",
    Description:"Des informations à mon sujet",
    info: [
        {
            fieldName: 'Nom',
            fieldValue: "Cherif Bakhoum",
        },
        {
            fieldName: 'Numéro',
            fieldValue: "(+221) 77 693 12 31",
        },
        {
            fieldName: 'Experience',
            fieldValue: "2+ années",
        },
        // {
        //     fieldName: '',
        //     fieldValue: "Cherif Bakhoum",
        // },
        {
            fieldName: 'Nationalité',
            fieldValue: "Sénégalais",
        },
        {
            fieldName: 'Freelance',
            fieldValue: "Disponible",
        },
        {
            fieldName: 'Langages',
            fieldValue: "Francais, Anglais, Wolof",
        },
    ]
    
}

const experience={
    icon: '/assets/resume/badge.svg',
    title: "Mes experiences",
    Description: "Pour l'instant, je n'ai eu qu'une seule opportunité de stage en entreprise, mais durant cette période, j'ai pu travailler sur plusieurs projets qui mettent en valeur mes compétences en développement web.",
    items:[
        {
            company: "Enedi Consulting",
            position: "Stagiaire en Développement Web",
            duration: "Juillet 2025 - Octobre 2025"
        },
        // {
        //     company: "Entreprise",
        //     position: "Poste",
        //     duration: "2022 - Present"
        // },
        // {
        //     company: "Entreprise",
        //     position: "Poste",
        //     duration: "2022 - Present"
        // },
    ]
}

const education={
    icon: '/assets/resume/cap.svg',
    title: "Mon Parcours",
    Description: "Voici mon parcours d'apprentissage au fil des années",
    items:[
        {
            etablissement: "Institut Africain de management",
            diplome: "License en Informatique de gestion",
            duration: "2023 - Présent"
        },
        {
            etablissement: "Lycée Sergeant Malamine Camara",
            diplome: "Bac Scientifique (S2)",
            duration: "2023"
        },

    ]
}

const skills = {
    title: "Mes Compétences",
    Description: "Voici les différents langages et outils que je suis capable de manipuler.",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: 'html 5',
        },
        {
            icon: <FaCss3/>,
            name: 'css',
        },
        {
            icon: <FaJs/>,
            name: 'javascript',
        },
        {
            icon: <FaReact/>,
            name: 'react',
        },
        {
            icon: <FaVuejs/>,
            name: 'vue.js',
        },
        {
            icon: <FaPhp/>,
            name: 'PHP',
        },
        {
            icon: <FaLaravel/>,
            name: 'laravel',
        },
        {
            icon: <FaWordpress/>,
            name: 'wordpress',
        },
        {
            icon: <SiNextdotjs/>,
            name: 'next.js',
        },
        {
            icon: <SiTailwindcss/>,
            name: 'tailwind.css',
        },
        {
            icon: <FaNodeJs/>,
            name: 'node.js',
        },
        {
            icon: <FaFigma/>,
            name: 'figma',
        },
        {
            icon: <SiHostinger/>,
            name: 'hostinger',
        },
        {
            icon: <FaJava/>,
            name: 'java',
        },
        {
            icon: <SiCplusplus/>,
            name: 'c++',
        },
        
    ]
}

import {
    Tabs,
    TabsContent, 
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
 } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () =>{
    return ( 
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
        opacity:1,
        transition: {delay:2.4, duration:0.4, ease: 'easeIn'}

    }}
    className="w-full py-12 lg:pt-8" id="resume"
    >
        <div className='flex flex-col items-center md:items-start mb-8'>
            <span className="text-accent mb-2 text-lg font-medium">Mon parcours</span>
            <div className="w-[320px] h-0.5 bg-white/10 rounded-full overflow-hidden mb-3 relative">
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
            <h1 className="text-6xl mb-4 md:mb-8 font-bold">Mon CV</h1>
        </div>
        <div>
            <Tabs 
            defaultValue="experience"
            className="w-full flex flex-col lg:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="competence">Competences</TabsTrigger>
                    <TabsTrigger value="propos">A propos</TabsTrigger>
                </TabsList>
                <div className="flex-1">
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center lg:text-left ">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="text-white/60 mx-auto lg:mx-0" >
                                {experience.Description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] " >
                                    {experience.items.map((item, index)=>{
                                        return <li key={index} className="bg-[#232329] h-[184px] group relative py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
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
                                                        strokeDasharray="20 60 80 40 125 90 200"
                                                        animate={{
                                                            strokeDashoffset: [0, -615],
                                                        }}
                                                        transition={{
                                                            duration: 8,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        }}
                                                    />
                                                </svg>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center lg:text-left ">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="text-white/60 mx-auto lg:mx-0" >
                                {education.Description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] " >
                                    {education.items.map((item, index)=>{
                                        return <li key={index} className="bg-[#232329] h-[184px] group relative py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                            <span className="text-accent" >{item.duration}</span>
                                            <h3 className="text-xl min-h-[60px] text-center lg:text-left">{item.diplome}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.etablissement}</p>
                                            </div>
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
                                                        strokeDasharray="20 60 80 40 125 90 200"
                                                        animate={{
                                                            strokeDashoffset: [0, -615],
                                                        }}
                                                        transition={{
                                                            duration: 8,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        }}
                                                    />
                                                </svg>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>                    
                    </TabsContent>
                    <TabsContent value="competence" className="w-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="text-white/60 mx-auto lg:mx-0">{skills.Description}</p>
                            </div>
                            <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 xl:gap-[20px]">
                                {skills.skillList.map((skill,index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="bg-[#232329] glow-animated hover:bg-transparent p-7 rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl transition-all group-hover-vert group-hover:rotate-6 duration-300">{skill.icon}</div>
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
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize text-base">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="propos" className="w-full text-center lg:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="text-white/60 mx-auto lg:mx-0">{about.Description}</p>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-8  mx-auto lg:mx-0">
                                {about.info.map((item,index)=>{
                                    return <li key={index} className="flex justify-center lg:justify-start gap-4">
                                        <span className="text-white/60 text-lg">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                })} 
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    );
};

export default Resume;