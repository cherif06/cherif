"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Cercle avec bordure rotative animée (comme Photo.jsx) */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 56 : 38,
          height: isHovered ? 56 : 38,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
        }}
      >
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "20 40 65 30 10 50 25 36" }}
            animate={{
              strokeDasharray: [
                "20 40 65 30 10 50 25 36",
                "50 25 15 55 40 30 8 53",
                "12 70 35 20 55 45 8 31"
              ],
              rotate: [0, 360],
            }}
            transition={{
              strokeDasharray: {
                duration: isHovered ? 3 : 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              rotate: {
                duration: isHovered ? 3 : 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              transformOrigin: "50% 50%",
            }}
          />
        </motion.svg>

        {/* Point central parfaitement aligné au centre du cercle */}
        <motion.div
          className="absolute w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_#00ff99]"
          animate={{
            scale: isHovered ? 1.4 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
}

