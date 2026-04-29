"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from "next/image";

const Photo = () => {
    const spinControls = useAnimation();

    const startSpin = (duration) => {
        spinControls.start({
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
            transition: { duration, repeat: Infinity, repeatType: "reverse" },
        });
    };

    useEffect(() => { startSpin(20); }, []);

    return (
        <div className='w-full h-full relative'>
            <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity: 1,
                    transition: { delay: 1.3, duration: 0.4, ease: "easeInOut"},
                }}>
                <motion.div
                    className='relative w-[300px] h-[300px] lg:w-[406px] lg:h-[406px]'
                    whileHover="photoHover"
                    onHoverStart={() => startSpin(5)}
                    onHoverEnd={() => startSpin(20)}
                >
                <motion.div className='w-[298px] h-[298px] lg:w-[398px] lg:h-[398px]  mix-blend-lighten absolute'>
                    <Image
                        src="/assets/option1.jpg"
                        priority
                        quality={100}
                        fill
                        alt=''
                        className='object-contain rounded-full mask-b-from-80% mask-l-from-80% mask-r-from-80% '
                    />
                </motion.div>

                <motion.svg 
                className="w-[300px] h-[300px] lg:h-[406px] lg:w-[406px] " 
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                variants={{ photoHover: { scale: 1.25 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}>
                    <motion.circle 
                    cx="253" 
                    cy="253" 
                    r="250" 
                    stroke="#00ff99" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={spinControls}
                    />
                </motion.svg>

                </motion.div>
            </motion.div>
        </div>
    );
}

export default Photo;