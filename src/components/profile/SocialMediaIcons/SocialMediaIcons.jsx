"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialMediaIcons = ({
  socialLinks,
  buttonType = "btn-circle", // Tipo de botón personalizable
  bgColor = "",
  borderColor = "",
  hoverColor = "",
  iconSize = "w-6 h-6", // Tamaño del ícono
  gap = "gap-4", // Espaciado entre botones
  layout = "row", // 'row' (horizontal) o 'column' (vertical)
  animate = true, // Habilitar/deshabilitar animaciones
  componentBgColor = "bg-transparent",
}) => {
  // Variantes de animación
  const fadeIn = animate
    ? {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
        }),
      }
    : {};

  return (
    <div className={`flex ${layout === "row" ? "flex-wrap justify-center" : "flex-col items-center"} pb-spacing-3 ${gap} p-4 ${componentBgColor}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.type}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center ${buttonType} ${bgColor} ${borderColor} ${hoverColor}`.trim()}
          custom={index}
          initial={animate ? "hidden" : false}
          animate={animate ? "visible" : false}
          variants={fadeIn}
          whileHover={animate ? { scale: 1.1, y: -5, transition: { duration: 0.3 } } : {}}
          aria-label={`Abrir ${link.type}`}
        >
          <Image
            src={`/assets/icons/${link.icon}`}
            alt={`${link.type} icon`}
            width={0}
            height={0}
            className={`${iconSize} object-contain`}
            sizes="100vw"
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;

