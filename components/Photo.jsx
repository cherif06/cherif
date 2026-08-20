"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { FaCode, FaCheckCircle, FaLaptopCode, FaGithub } from "react-icons/fa";

const statsData = [
  {
    num: 3,
    suffix: "+",
    text: "Années d'exp.",
    icon: <FaLaptopCode className="text-accent text-sm" />,
    // En haut à gauche
    position: "top-[-10px] left-[-30px] lg:top-[-15px] lg:left-[-60px]",
    delay: 0,
    floatDuration: 4.5,
    floatY: [-4, 9, -4],
  },
  {
    num: 8,
    suffix: "+",
    text: "Projets finis",
    icon: <FaCheckCircle className="text-accent text-sm" />,
    // En haut à droite
    position: "top-[20px] right-[-30px] lg:top-[15px] lg:right-[-55px]",
    delay: 0.2,
    floatDuration: 5,
    floatY: [5, -5, 5],
  },
  {
    num: 20,
    suffix: "+",
    text: "Technologies",
    icon: <FaCode className="text-accent text-sm" />,
    // En bas à gauche
    position: "bottom-[25px] left-[-35px] lg:bottom-[20px] lg:left-[-65px]",
    delay: 0.4,
    floatDuration: 4.8,
    floatY: [6, -4, 6],
  },
  {
    num: 267,
    suffix: "",
    text: "Github 2026",
    icon: <FaGithub className="text-accent text-sm" />,
    // En bas à droite
    position: "bottom-[-10px] right-[-25px] lg:bottom-[-15px] lg:right-[-45px]",
    delay: 0.6,
    floatDuration: 5.2,
    floatY: [-5, 5, -5],
  },
];

const Photo = () => {
  const spinControls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  const startSpin = (duration) => {
    spinControls.start({
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      transition: { duration, repeat: Infinity, repeatType: "reverse" },
    });
  };

  useEffect(() => {
    setIsMounted(true);
    startSpin(20);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative"
      >
        <motion.div
          className="relative w-[300px] h-[300px] lg:w-[406px] lg:h-[406px]"
          whileHover="photoHover"
          onHoverStart={() => startSpin(5)}
          onHoverEnd={() => startSpin(20)}
        >
          {/* Photo de profil */}
          <motion.div className="w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] mix-blend-lighten absolute">
            <Image
              src="/assets/option1.png"
              priority
              quality={100}
              fill
              alt="Cherif Bakhoum"
              className="object-contain rounded-full mask-b-from-80% mask-l-from-80% mask-r-from-80%"
            />
          </motion.div>

          {/* Cercle SVG Rotatif */}
          <motion.svg
            className="w-[300px] h-[300px] lg:h-[406px] lg:w-[406px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            variants={{ photoHover: { scale: 1.08 } }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={spinControls}
            />
          </motion.svg>

          {/* Badges Flottants des Stats */}
          {isMounted &&
            statsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: item.floatY,
                  transition: {
                    opacity: { delay: 0.5 + item.delay, duration: 0.5 },
                    scale: { delay: 0.5 + item.delay, duration: 0.5, type: "spring", stiffness: 200 },
                    y: {
                      delay: 0.8 + item.delay,
                      duration: item.floatDuration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(0, 255, 153, 0.45)",
                  borderColor: "rgba(0, 255, 153, 0.8)",
                  transition: { duration: 0.2 },
                }}
                className={`absolute ${item.position} z-20 flex items-center gap-2.5 px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl bg-[#16161c]/10 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default select-none transition-colors group`}
              >
                {/* Icône du badge */}
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  {item.icon}
                </div>

                {/* Données chiffrées & libellé */}
                <div className="flex flex-col text-left">
                  <div className="flex items-baseline gap-0.5">
                    <CountUp
                      end={item.num}
                      duration={3.5}
                      delay={0.5 + item.delay}
                      className="text-base lg:text-lg font-extrabold text-white leading-none font-mono"
                    />
                    {item.suffix && (
                      <span className="text-accent font-bold text-xs lg:text-sm font-mono leading-none">
                        {item.suffix}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] lg:text-[11px] font-medium text-white/70 whitespace-nowrap leading-tight mt-0.5">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;