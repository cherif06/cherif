"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "(+221) 77 693 12 31",
    href: "tel:+221776931231",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bakhoumcherif06@gmail.com",
    href: "mailto:bakhoumcherif06@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Localisation",
    description: "Dakar, Sénégal",
    href: null,
  },
];

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
];

const services = [
  { value: "backend", label: "Architecture Backend & APIs Laravel" },
  { value: "fullstack", label: "Développement Fullstack & SaaS (Nuxt/Vue)" },
  { value: "devops", label: "DevOps, CI/CD & Déploiement Cloud" },
  { value: "mobile", label: "Application Mobile Flutter (iOS & Android)" },
  { value: "iot", label: "Solutions IoT & Systèmes Embarqués" },
  { value: "seo", label: "Optimisation Performance & SEO" },
  { value: "ai", label: "Intégration IA & Services Tiers" },
  { value: "other", label: "Autre / Projet sur mesure" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible de contacter le serveur. Réessayez plus tard.");
    }
  };

  return (
    <section
      className="bg-[url('/assets/bg2.png')] bg-repeat-y"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl px-4 sm:px-8 sm:mx-auto py-12"
      >
        {/* Header */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <span className="text-accent mb-2 text-lg font-medium tracking-wide">
            Travaillons ensemble
          </span>
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden mb-3 relative">
            <motion.div
              className="h-full bg-accent rounded-full absolute left-1/2 -translate-x-1/2"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Contactez-moi
          </h1>
          <p className="text-white/60 mt-4 max-w-xl text-sm sm:text-base leading-relaxed md:text-left text-center">
            Disponible en <span className="text-accent font-medium">Freelance</span> ou <span className="text-accent font-medium">CDI</span> — Développeur Fullstack & DevOps basé à Dakar. Décrivez votre projet, je vous répondrai rapidement.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1"
          >
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-6 p-8 sm:p-10 rounded-3xl bg-[#16161c]/40 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
            >
              {/* Accent glow top */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent rounded-full" />

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  Recrutez-Moi
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Fullstack · DevOps · IoT · 3+ ans d&apos;expérience · Disponible immédiatement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Prénom"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent/60 focus:ring-0 rounded-xl transition-all duration-300"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Nom"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent/60 focus:ring-0 rounded-xl transition-all duration-300"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email professionnel"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent/60 focus:ring-0 rounded-xl transition-all duration-300"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent/60 focus:ring-0 rounded-xl transition-all duration-300"
                />
              </div>

              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full bg-white/5 border-white/10 text-white/70 focus:border-accent/60 rounded-xl transition-all duration-300">
                  <SelectValue placeholder="Quel service vous intéresse ?" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a24] border-white/10 text-white">
                  <SelectGroup>
                    <SelectLabel className="text-accent/70 text-xs">Mes services</SelectLabel>
                    {services.map((s) => (
                      <SelectItem
                        key={s.value}
                        value={s.value}
                        className="text-white/80 focus:bg-accent/10 focus:text-accent cursor-pointer"
                      >
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                placeholder="Décrivez votre projet ou opportunité..."
                value={formData.message}
                onChange={handleChange}
                required
                className="h-[140px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent/60 focus:ring-0 rounded-xl resize-none transition-all duration-300"
              />

              {/* Feedback */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-sm"
                  >
                    <FaCheckCircle className="text-green-400 shrink-0" />
                    Message envoyé ! Je vous répondrai dans les plus brefs délais.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm"
                  >
                    <FaExclamationCircle className="text-red-400 shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto sm:min-w-[180px] bg-accent text-primary font-bold py-3 px-8 rounded-xl hover:bg-accent/90 hover:shadow-[0_0_25px_rgba(0,255,153,0.4)] transition-all duration-300 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2 justify-center">
                    <motion.span
                      className="inline-block w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                    />
                    Envoi en cours...
                  </span>
                ) : (
                  "Envoyer le message →"
                )}
              </Button>
            </form>
          </motion.div>

          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="xl:w-[380px] flex flex-col gap-6"
          >
            {/* Carte disponibilité */}
            <div className="relative rounded-3xl bg-[#16161c]/40 backdrop-blur-xl border border-[#00ff99]/20 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent rounded-full" />
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#00ff99] animate-pulse" />
                <span className="text-accent text-sm font-semibold tracking-wide">Disponible dès maintenant</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Cherif Bakhoum</h4>
              <p className="text-white/50 text-sm mb-4">Développeur Fullstack & DevOps · Dakar, Sénégal</p>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "Nuxt 3", "Flutter", "Docker", "CI/CD"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="flex flex-col gap-4">
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {item.href ? (
                    <a href={item.href} className="group flex items-center gap-5 rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border border-white/10 p-5 hover:border-[#00ff99]/40 hover:shadow-[0_10px_30px_rgba(0,255,153,0.08)] transition-all duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] transition-all duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                        <p className="text-white font-medium text-sm group-hover:text-accent transition-colors">{item.description}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="group flex items-center gap-5 rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border border-white/10 p-5">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                        <p className="text-white font-medium text-sm">{item.description}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#16161c]/30 backdrop-blur-xl border border-white/10 p-4 text-white/60 hover:text-accent hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(0,255,153,0.1)] transition-all duration-300 text-sm font-medium"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
