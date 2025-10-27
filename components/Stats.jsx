"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Années d'expérience",
    },
    {
        num: 4,
        text: "Projets completés",
    },
    {
        num: 15,
        text: "Technologies maitrisées",
    },
    // {
    //     num: 19,
    //     text: "Ans",
    // }
]

const Stats = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section>
            <div className="container pb-5 mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
                    {stats.map((item,index)=>{
                        return <div className="flex-1 flex gap-4 items-center justify-center lg:justify-start" key={index}>
                            <CountUp 
                            end={item.num} 
                            duration={5} 
                            delay={2}
                            className="text-4xl lg:text-6xl font-extrabold"  
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                {item.text}
                            </p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats;