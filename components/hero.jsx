"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24" >
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-xl">Développeur Web Full Stack</span>
          <h2 className="h1 mb-6">
            Salut c'est <br /> <span className="text-accent">Cherif Bakhoum</span>
          </h2>
          <p className="max-w-[600px] mb-9 text-white/80">
            Développeur Full-Stack passionné par la création dʼinterfaces modernes, performantes et orientées utilisateur. Je maîtrise le développement
            d'applications web et mobiles en combinant la puissance de Laravel et Supabase en backend avec la réactivité de Vue.js, Tailwind CSS et
            Flutter en frontend. Autonome et rigoureux, jʼai déjà mené à bien la conception et le déploiement de projets complets, du cloud aux stores
            mobiles.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              onClick={async () => {
                // Notifier par email (sans bloquer le téléchargement)
                fetch("/api/cv-download", { method: "POST" }).catch(() => {});
                // Déclencher le téléchargement
                const link = document.createElement("a");
                link.href = "/assets/CV_2026-07-14_Cherif_Bakhoum.pdf";
                link.download = "CV_Cherif_Bakhoum.pdf";
                link.click();
              }}
            >
              Telecharger mon CV
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
     <Stats />
    </section>
  )
}

export default Hero;