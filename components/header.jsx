import Link from 'next/link';
import {Button} from "./ui/button";

// components
import Nav from './Nav';
import MobileNav from './MobileNav';

const header=()=>{
    return(
        <header className='py-5 lg:py-8 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Cherif<span className='text-accent'>.</span>
                </h1>
                </Link>
                {/* Navigation and hire me button */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Engagez-moi</Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <MobileNav/>
                </div>
                
            </div>
        </header>
    )};

    export default header;