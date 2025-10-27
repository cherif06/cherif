"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';


const Home = () => {
  return (
    <section className="h-full">
     <div className="container mx-auto h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24" >
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-xl">Developpeur Junior</span>
          <h2 className="h1 mb-6">
            Salut c'est <br /> <span className="text-accent">Cherif Bakhoum</span>
          </h2>
          <p className="max-w-[600px] mb-9 text-white/80">
            Développeur web junior passionné par la création d'interfaces modernes et interactives. Curieux, autonome et motivé à apprendre en continu et à contribuer à des projets concrets en équipe.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <a href="/assets/CV_2025-10-27_Cherif_Bakhoum.pdf" download>Telecharger mon CV</a>
              <FiDownload className="text-xl" />
            </Button> 
            <div className="mb-8 lg:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="order-1 pt-10 lg:pt-0 xl:pe-10 lg:order-none mb-8 lg:mb-0 ">
          <Photo />
        </div>
      </div>
     </div>
     <Stats />
    </section>
  );
}
export default Home;

