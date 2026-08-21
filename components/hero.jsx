"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import SkillsMarquee from "@/components/SkillsMarquee";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-full bg-[url('/assets/bg1.png')]">
      <div className="max-w-7xl px-4 sm:px-8 sm:mx-auto flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">

        {/* Texte */}
        <div className="text-center mt-6 lg:mt-0 lg:text-left order-2 lg:order-none">

          {/* Badge disponibilité glassmorphism */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full bg-[#16161c]/60 backdrop-blur-xl border border-[#00ff99]/20 shadow-[0_4px_20px_rgba(0,255,153,0.08)]"
          >
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#00ff99] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-white/80">
              Disponible · Freelance / CDI · Dakar, Sénégal
            </span>
          </motion.div> */}

          <span className="text-xl font-semibold tracking-wide text-gradient-accent block mb-1">
            Développeur Fullstack & DevOps
          </span>
          <h2 className="font-semibold text-4xl lg:text-6xl leading-tight mt-3 lg:mt-0 mb-6">
            Salut c'est <br /> <span className="text-accent">Cherif Bakhoum</span>
          </h2>
          <p className="max-w-[600px] lg:text-lg mb-9 text-white/80">
            Développeur Fullstack autonome, spécialisé dans la conception d'architectures web/SaaS complexes, d'applications mobiles (Flutter) et de
            pipelines DevOps (Laravel, Nuxt 3, Docker, CI/CD). Solides compétences en intégration IoT, scalabilité backend (Redis, Queues) et exploitation
            d'APIs (IA, Stockage, Paiement, Traduction, Authentification). Habitué à se documenter et à travailler en anglais.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 transition-all duration-300 hover:-rotate-2 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,255,153,0.45)] active:scale-95"
              onClick={async () => {
                fetch("/api/cv-download", { method: "POST" }).catch(() => {});
                const link = document.createElement("a");
                link.href = "/assets/CV_2026-08-19_Cherif_Bakhoum.pdf";
                link.download = "CV_Cherif_Bakhoum.pdf";
                link.click();
              }}
            >
              Télécharger mon CV
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 lg:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:-translate-y-1.5 hover:shadow-[0_0_18px_rgba(0,255,153,0.6)] hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 pt-10 lg:pt-0 xl:pe-10 lg:order-none mb-8 lg:mb-0">
          <Photo />
        </div>
      </div>
      <SkillsMarquee />
    </section>
  );
};

export default Hero;
