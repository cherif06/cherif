"use client";

import {motion} from 'framer-motion';
import react, { useState } from "react";
import Link from "next/link";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Image from 'next/image';
import { Item } from '@radix-ui/react-select';
import WorkSliderBtns from '@/components/WorkSliderBtns';


const projets = [
    {
        num: '01',
        category: 'fullStack',
        title: 'SenCV',
        description: "Application web permettant de generer son CV personnalisé.",
        Stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}, {name: "Bootstrap"}, {name: "PHP"}, {name:"Hostinger"}],
        image: '/assets/projet1.png',
        live:'https://plum-squirrel-409565.hostingersite.com/',
        github:'',
    },
    {
        num: '02',
        category: 'frontend',
        title: 'Mon portfolio',
        description: "Site porfolio responsive avec une interface fluide et dynamique.",
        Stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "Next.js"}, {name: "Tailwind.Css"}, {name:"Vercel"}],
        image: '/assets/projet2.png',
        live:'/',
        github:'',
    },
    {
        num: '03',
        category: 'fullStack',
        title: 'Dkr Services',
        description: "Site vitrine pour une entreprise de nettoyage professionnel. Systeme d'estimation de prix pour le service demandé. Système Auth et dashboard admin pour gérer les messages et demandes de services.",
        Stack: [{ name: "laravel"}, {name: "Vue.js"}, {name: "MySQL"}, {name: "Tailwind.Css"}, {name:"Hostinger"}],
        image: '/assets/projet3.png',
        live:'https://mydkrservices.com',
        github:'',
    },
    {
        num: '04',
        category: 'frontend',
        title: 'Site BTP',
        description: "Site vitrine pour une entreprise du BTP.",
        Stack: [{ name: "WordPress"}, {name:"Hostinger"}],
        image: '/assets/projet4.png',
        live:'',
        github:'',
    },
]

const Projets = () =>{
    const [project, setProject] = useState(projets[0]);

    const handleSlideCange = (swiper) =>{
        const currentIndex = swiper.activeIndex;
        setProject(projets[currentIndex]);
    }

    return (
        <motion.section
        initial = {{opacity: 0}}
        animate = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className='min-h-[80vh] flex flex-col justify-center lg:px-0' id="projets">
                <div className='flex flex-col items-center md:items-start mb-8'>
                    <span className="text-accent mb-2 text-lg font-medium">Mes réalisations</span>
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
                    <h1 className="text-6xl mb-4 md:mb-8 font-bold">Mes Projets</h1>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-[30px]'>
                    <div className='w-full lg:w-[45%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none' >
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-8xl switch-color leading-none font-extrabold text-transparent'>
                                {project.num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover-vert transition-all duration-500 capitalize' >
                                Projet {project.category} 
                            </h2>
                            <p>{project.description}</p>
                            <ul className='flex gap-4 w-full flex-wrap'>
                                {project.Stack.map((item,index)=>{
                                    return ( 
                                        <li key={index} className='text-xl text-accent inline'>
                                            {item.name}
                                            {index !== project.Stack.length - 1 && ","}
                                        </li> 
                                    );
                                })}
                            </ul>
                            <div className='border border-white/20'></div>
                            <div className='flex items-center gap-4'>
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className='text-white text-3xl group-hover-vert' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Projet déployé</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className='text-white text-3xl group-hover-vert' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Le depôt Github est privé</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>             
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[55%]'>
                        <Swiper 
                        spaceBetween={30} 
                        slidesPerView={1} 
                        className='lg:h-[520px] mb-8'
                        onSlideChange={handleSlideCange}>
                            {projets.map((project,index)=>{
                                return <SwiperSlide key={index} className='w-full p-2'>
                                    <div className='h-[460px] overflow-visible relative group flex justify-center items-center bg-pink-50/20 rounded-xl'>
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                        <div className='relative w-full h-full'>
                                            <Image src={project.image} fill className='object-cover rounded-xl' alt='' />
                                        </div>
                                        <div className="absolute inset-0 z-20 -bottom-0.5 transition-opacity duration-500 rounded-xl pointer-events-none">
                                            <svg 
                                                className="w-full h-full absolute" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                <motion.rect
                                                    x="1"
                                                    y="1"
                                                    width="calc(100% - 4px)"
                                                    height="calc(100% - 4px)"
                                                    rx="16"
                                                    stroke="#00ff99"
                                                    strokeWidth="4"
                                                    fill="none"
                                                    strokeDasharray="500 500"
                                                    animate={{
                                                        strokeDashoffset: [0, -1000],
                                                    }}
                                                    transition={{
                                                        duration: 8,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
            </div>
        </motion.section>
    );
};

export default Projets;