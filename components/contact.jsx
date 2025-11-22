"use client";
import {Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import{
Select, 
SelectContent, 
SelectGroup, 
SelectItem, 
SelectLabel, 
SelectTrigger,
SelectValue
} from "@/components/ui/select";


const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Télèphone",
        description: "77 693 12 31"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "bakhoumcherif06@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Adresse",
        description: "Cité biagui, Yoff Virage"
    },
]


const Contact = () => {
    return (
        <motion.section 
        initial = {{opacity: 0}}
        animate = {{opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="py-6"
        >
        <div className="container mx-auto" id="contact">
            <div className='flex flex-col items-center md:items-start mb-8'>
                <span className="text-accent mb-2 text-lg font-medium">Restons en contact</span>
                <div className="w-[320px] h-0.5 bg-white/10 rounded-full overflow-hidden mb-3 relative">
                    <motion.div 
                        className="h-full bg-accent rounded-full absolute left-1/2 -translate-x-1/2"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </div>
                <h1 className="text-6xl mb-4 md:mb-8 font-bold">Contactez-moi</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px] ">
                <div className="lg:h-[54%] order-2 lg:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-3xl text-accent">Recrutez-Moi</h3>
                        <p className="text-white/60 text-sm">
                        Je suis ouvert aux opportunités de projets, n'hésitez pas à me contacter si vous recherchez un développeur web passionné et motivé.                        
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="Prénom"/>
                            <Input type="lastname" placeholder="Nom"/>
                            <Input type="email" placeholder="Email"/>
                            <Input type="phone" placeholder="Numéro"/>
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choissisez un service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Choissisez un service</SelectLabel>
                                    <SelectItem value="cst">Développement front-end</SelectItem>
                                    <SelectItem value="mst">Développement back-end</SelectItem>
                                    <SelectItem value="pst">Conception de maquettes via Figma</SelectItem>
                                    <SelectItem value="est">Déploiement</SelectItem>
                                    <SelectItem value="oth">Referencement SEO</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Textarea className="h-[150px]" placeholder="Ecrivez votre message ici."/>
                        <Button className="max-w-40">Envoyer</Button>
                    </form>
                </div>
                <div className="flex-1 flex items-center lg:justify-end order-1 lg-order-none mb-8 lg:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item,index)=>{
                           return (
                           <li key={index} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                <div className="text-[28px]" >{item.icon}</div>
                            </div>
                            <div className="flex-1" >
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl" >{item.description}</h3>
                            </div>
                           </li>
                           ) 
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </motion.section>
    );
};

export default Contact;

