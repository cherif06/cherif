"use client";
import Link from 'next/link';
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

// components
import Nav from './Nav';
import MobileNav from './MobileNav';


const Header = () => {
    return (
        <header
            className={`z-50 py-4 lg:py-5 text-white transition-all duration-500 bg-[#121217]/70 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]`}
        >
            <div className='max-w-7xl px-4 sm:px-8 mx-auto flex justify-between items-center'>
                {/* Logo */}
                <Link href="/" className='group flex items-center'>
                    <h1 className='text-4xl font-semibold transition-transform duration-300 group-hover:scale-105'>
                        Cherif<span className='text-accent inline-block transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-0.5'>.</span>
                    </h1>
                </Link>

                {/* Navigation and hire me button */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="#contact">
                        <Button className="hover:translate-x-2 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] transition-all duration-300">
                            Engagez-moi
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;