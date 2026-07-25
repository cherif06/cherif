"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
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
    title: "Télèphone",
    description: "77 693 12 31",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bakhoumcherif06@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "Cité biagui, Yoff Virage",
  },
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
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto" id="contact">
        <div className="flex flex-col items-center md:items-start mb-8">
          <span className="text-accent mb-2 text-lg font-medium">
            Restons en contact
          </span>
          <div className="w-[320px] h-0.5 bg-white/10 rounded-full overflow-hidden mb-3 relative">
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
          <h1 className="text-6xl mb-4 md:mb-8 font-bold">Contactez-moi</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:h-[54%] order-2 lg:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl text-accent">Recrutez-Moi</h3>
              <p className="text-white/60 text-sm">
                Je suis ouvert aux opportunités de projets, n&apos;hésitez pas
                à me contacter si vous recherchez un développeur web passionné
                et motivé.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Prénom"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Nom"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Numéro"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                value={formData.service}
                onValueChange={handleServiceChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisissez un service</SelectLabel>
                    <SelectItem value="api">Développement d&apos;API avec Laravel</SelectItem>
                    <SelectItem value="ui">Interfaces modernes &amp; responsive</SelectItem>
                    <SelectItem value="devops">DevOps &amp; Déploiement</SelectItem>
                    <SelectItem value="mobile">Développement mobile</SelectItem>
                    <SelectItem value="seo">Référencement SEO &amp; Google Analytics</SelectItem>
                    <SelectItem value="fullstack">Développement Fullstack</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[150px]"
                name="message"
                placeholder="Écrivez votre message ici."
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Feedback messages */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg px-4 py-3 text-sm"
                  >
                    <FaCheckCircle className="text-green-400 shrink-0" />
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 text-sm"
                  >
                    <FaExclamationCircle className="text-red-400 shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                className="max-w-40 relative"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                    />
                    Envoi...
                  </span>
                ) : (
                  "Envoyer"
                )}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg-order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
