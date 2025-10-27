"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name: "Accueil",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "résume",
        path: "/resume",
    },
    {
        name: "Projets",
        path: "/projets",
    },
    {
        name: "contact",
        path: "/contact",
    },

]

const MobileNav =()=>{
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center ">
            <CiMenuFries className='text-[32px] text-accent cursor-pointer cursor-pointer'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col" >
            <div className='mt-25 mb-15 lg:mb-20 text-center text-2xl'>
                <Link href="/" >
                    <h1 className='text-4xl font-semibold'>Cherif<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index)=>{
                    return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
}

export default MobileNav;