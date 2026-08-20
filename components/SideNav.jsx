"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBriefcase, FaFileAlt, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const links = [
    {
        name: "Services",
        path: "#services",
        icon: <FaBriefcase />,
    },
    {
        name: "Résumé",
        path: "#resume",
        icon: <FaFileAlt />,
    },
    {
        name: "Projets",
        path: "#projets",
        icon: <FaFolderOpen />,
    },
    {
        name: "Contact",
        path: "#contact",
        icon: <FaEnvelope />,
    },
];

const containerVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 18,
            staggerChildren: 0.08,
        },
    },
    exit: {
        opacity: 0,
        x: 80,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.85 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { opacity: 0, x: 40, scale: 0.85, transition: { duration: 0.15 } },
};

const SideNav = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
                >
                    {/* Ligne décorative verticale avec gradient animé en boucle */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-white/10 overflow-hidden pointer-events-none rounded-full">
                        <motion.div
                            className="w-full h-16 bg-gradient-to-b from-[#00ff99] via-[#00ff99] to-[#00ff99]"
                            animate={{
                                y: ["-100%", "300%"],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                filter: "drop-shadow(0 0 6px rgba(0, 255, 153, 0.8))",
                            }}
                        />
                    </div>

                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative flex items-center justify-end"
                        >
                            {/* Tooltip */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 8, scale: 0.92 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 8, scale: 0.92 }}
                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                        className="absolute right-[calc(100%+14px)] px-3 py-1.5 rounded-lg bg-accent text-primary text-xs font-bold tracking-wider uppercase whitespace-nowrap shadow-[0_0_20px_rgba(0,255,153,0.4)] pointer-events-none"
                                    >
                                        {link.name}
                                        {/* Flèche pointant vers le bouton */}
                                        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-y-[5px] border-l-[6px] border-y-transparent border-l-accent" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Bouton icône */}
                            <Link
                                href={link.path}
                                className="group relative w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden"
                            >
                                {/* Fond avec glow conditionnel et glassmorphisme */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl"
                                    animate={
                                        hoveredIndex === index
                                            ? {
                                                  backgroundColor: "rgba(0,255,153,1)",
                                                  boxShadow: "0 0 20px rgba(0,255,153,0.5), 0 0 40px rgba(0,255,153,0.2)",
                                              }
                                            : {
                                                  backgroundColor: "rgba(22,22,28,0.1)",
                                                  boxShadow: "0 0 0px rgba(0,255,153,0)",
                                              }
                                    }
                                    transition={{ duration: 0.25 }}
                                />

                                {/* Bordure subtile */}
                                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-accent/60 transition-colors duration-300 backdrop-blur-md" />

                                {/* Icône */}
                                <motion.div
                                    animate={
                                        hoveredIndex === index
                                            ? { color: "#121217", scale: 1.2 }
                                            : { color: "rgba(255,255,255,0.75)", scale: 1 }
                                    }
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative z-10 text-base"
                                >
                                    {link.icon}
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default SideNav;
