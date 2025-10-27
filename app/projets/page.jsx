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
        className='min-h-[80vh] flex flex-col justify-center py-12 lg:px-0'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row lg:gap-[30px]'>
                    <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none' >
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover-vert transition-all duration-500 capitalize' >
                                Projet {project.category} 
                            </h2>
                            <p>{project.description}</p>
                            <ul className='flex gap-4'>
                                {project.Stack.map((item,index)=>{
                                    return ( 
                                        <li key={index} className='text-xl text-accent'>
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
                    <div className='w-full lg:w-[50%]'>
                        <Swiper 
                        spaceBetween={30} 
                        slidesPerView={1} 
                        className='lg:h-[520px] mb-8'
                        onSlideChange={handleSlideCange}>
                            {projets.map((project,index)=>{
                                return <SwiperSlide key={index} className='w-full'>
                                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                        <div className='relative w-full h-full'>
                                            <Image src={project.image} fill className='object-cover' alt='' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projets;