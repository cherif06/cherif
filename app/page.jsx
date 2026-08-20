"use client";
import Hero from "@/components/hero"
import Services from "@/components/services";
import Resume from "@/components/resume";
import Projets from "@/components/projets";
import Contact from "@/components/contact";


const Home = () => {
  return (
  <div className="flex flex-col space-y-12 sm:space-y-30">
    
    <Hero/>

    <Projets/>

    <Services/>

    <Resume/>

    <Contact/>

  </div>
  );
}
export default Home;

