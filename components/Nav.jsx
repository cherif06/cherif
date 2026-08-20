"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Services",
        path: "#services",
    },
    {
        name: "Résumé",
        path: "#resume",
    },
    {
        name: "Projets",
        path: "#projets",
    },
    {
        name: "Contact",
        path: "#contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-8">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`group relative py-1 capitalize font-medium text-base transition-colors duration-300 ${
                            isActive ? "text-accent" : "text-white/80 hover:text-accent"
                        }`}
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                            {link.name}
                        </span>

                        {/* Barre de soulignement animée avec lueur néon */}
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-out rounded-full ${
                                isActive
                                    ? "w-full shadow-[0_0_8px_#00ff99]"
                                    : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#00ff99]"
                            }`}
                        />
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;