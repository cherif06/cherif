"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const SideNav = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Afficher la navbar après 300px de scroll
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
                >
                    <div className="flex flex-col gap-6 p-4 ">
                        {links.map((link, index) => (
                            <Link
                                href={link.path}
                                key={index}
                                className="group relative w-16 h-16 hover:h-12 flex items-center justify-center rounded-full bg-[#27272c]/80 hover:bg-[#00ff99] backdrop-blur-sm border border-accent/20 transition-all duration-300"
                            >
                                {/* Icône */}
                                <div className="text-white text-xl group-hover:text-primary transition-all duration-300">
                                    {link.icon}
                                </div>
                                
                                {/* Tooltip au hover */}
                                <div className="absolute -left-20 w-28 h-12 flex items-center -z-10 bg-accent text-primary px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                    {link.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default SideNav;
