"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';

const links = [

    {
        name: "Services",
        path: "#services",
    },
    {
        name: "résume",
        path: "#resume",
    },
    {
        name: "Projets",
        path: "#projets",
    },
    {
        name: "contact",
        path: "#contact",
    },

]

const MobileNav =()=>{
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center ">
            <CiMenuFries className='text-[32px] text-accent cursor-pointer'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col" >
            <div className='mt-25 mb-15 lg:mb-20 text-center text-2xl'>
                <Link href="/" >
                    <h1 className='text-4xl font-semibold'>Cherif<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index)=>{
                    const isActive = link.path === pathname;
                    return (
                    <Link href={link.path} key={index} className={`group relative py-1 text-xl capitalize font-medium transition-colors duration-300 ${isActive ? "text-accent" : "text-white/80 hover:text-accent"}`}>
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                            {link.name}
                        </span>
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
        </SheetContent>
    </Sheet>
}

export default MobileNav;