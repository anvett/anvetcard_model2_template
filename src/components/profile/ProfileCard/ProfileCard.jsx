


// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const ProfileCard = ({
//   profile,
//   layoutOptions = {},
//   buttonOptions = {},
//   imageOptions = {},
//   animationOptions = {},
// }) => {
//   const {
//     bgColor = "bg-white",
//     textColor = "text-black",
//     borderColor = "border-gray-300",
//     nameSize = "text-xl sm:text-2xl md:text-3xl",
//     titleSize = "text-lg sm:text-xl md:text-2xl",
//     descriptionSize = "text-base sm:text-lg md:text-xl",
//   } = layoutOptions;

//   const {
//     type = "btn-solid",
//     bgColor: buttonBgColor = "bg-primary",
//     textColor: buttonTextColor = "text-white",
//     textSize: buttonTextSize = "text-sm sm:text-base md:text-lg",
//     saveLabel = "Guardar Contacto",
//     whatsappLabel = "Escríbenos",
//     websiteLabel = "Visitar Sitio Web",
//     vcfLink = "/assets/vcards/contact.vcf",
//     whatsappMessage = "Hola, quiero saber más sobre tus servicios.",
//   } = buttonOptions;

//   const {
//     size: imageSize = "w-40 h-40",
//     rounded: imageRounded = "rounded-md",
//     shadow: imageShadow = "shadow-lg",
//   } = imageOptions;

//   const { duration = 0.6 } = animationOptions;

//   // Animaciones
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration, ease: "easeInOut" },
//     },
//   };

//   const imageZoomIn = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: duration + 0.2, ease: "easeInOut" },
//     },
//   };

//   const whatsappLink = profile.phone
//     ? `https://wa.me/${profile.phone}?text=${encodeURIComponent(whatsappMessage)}`
//     : null;

//   return (
//     <div className={`flex justify-center p-1 w-full ${bgColor} ${borderColor} border-none rounded-lg`}>
//       <div className="card w-full max-w-sm shadow-xl shadow-secondary text-center sm:max-w-md lg:max-w-lg xl:max-w-xl ">
//         {/* ✅ Imagen */}
//         <figure className="flex justify-center pt-spacing-2 pb-spacing-4">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={imageZoomIn}
//             className={`${imageSize} relative ${imageRounded} overflow-hidden ${imageShadow}`}
//           >
//             <Image
//               src={profile.image}
//               alt="Foto de perfil"
//               fill
//               className={`object-contain ${imageRounded}`}
//             />
//           </motion.div>
//         </figure>

//         {/* ✅ Contenido */}
//         <div className={`card-body bg-transparent ${textColor}`}>
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className={`${nameSize} font-bold font-primary italic`}
//           >
//             {profile.name}
//           </motion.h2>

//           <motion.h4
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className={`${titleSize} font-semibold`}
//           >
//             {profile.title}
//           </motion.h4>

//           <motion.p
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className={`${descriptionSize}`}
//           >
//             {profile.description}
//           </motion.p>

//           {/* ✅ Botones */}
//           <motion.div
//             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//             whileTap={{ scale: 0.95 }}
//             className="card-actions justify-center flex-wrap gap-3 mt-4"
//           >
//             {/* Guardar Contacto */}
//             <a
//               href={vcfLink}
//               download
//               className={`${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize} px-4 py-2 rounded-md`}
//             >
//               {saveLabel}
//             </a>

//             {/* WhatsApp opcional */}
//             {profile.phone && (
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize} px-4 py-2 rounded-md`}
//               >
//                 {whatsappLabel}
//               </a>
//             )}

//             {/* Website opcional */}
//             {profile.website && (
//               <a
//                 href={profile.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize} px-4 py-2 rounded-md`}
//               >
//                 {websiteLabel}
//               </a>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;



"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfileCard = ({
  profile,
  layoutOptions = {},
  buttonOptions = {},
  imageOptions = {},
  animationOptions = {},
}) => {
  // 🎨 Opciones de layout (texto y fondo)
  const {
    bgColor = "bg-white",
    textColor = "text-black",
    borderColor = "border-gray-300",
    nameSize = "text-xl sm:text-2xl md:text-3xl",
    titleSize = "text-lg sm:text-xl md:text-2xl",
    descriptionSize = "text-base sm:text-lg md:text-xl",
  } = layoutOptions;

  // 🎯 Opciones de botones
  const {
    type = "btn-solid",
    bgColor: buttonBgColor = "bg-primary",
    textColor: buttonTextColor = "text-white",
    textSize: buttonTextSize = "text-sm sm:text-base md:text-lg",
    saveLabel = "Guardar Contacto",
    whatsappLabel = "Escríbenos",
    websiteLabel = "Visitar Sitio Web",
    vcfLink = "/assets/vcards/contact.vcf",
    whatsappMessage = "Hola, quiero saber más sobre tus servicios.",
  } = buttonOptions;

  // 🖼️ Opciones de imagen
  const {
    width = 200,
    height = 200,
    size: imageSize = "w-40 h-40",
    rounded: imageRounded = "rounded-md",
    shadow: imageShadow = "shadow-lg",
  } = imageOptions;

  const { duration = 0.6 } = animationOptions;

  // 🎞️ Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeInOut" },
    },
  };

  const imageZoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration + 0.2, ease: "easeInOut" },
    },
  };

  const whatsappLink = profile.phone
    ? `https://wa.me/${profile.phone}?text=${encodeURIComponent(whatsappMessage)}`
    : null;

  return (
    <div className={`flex justify-center p-1 w-full ${bgColor} ${borderColor} border-none rounded-lg`}>
      <div className="card w-full max-w-sm shadow-xl shadow-secondary text-center sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* ✅ Imagen */}
        <figure className="flex justify-center pt-spacing-4 pb-spacing-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageZoomIn}
            className={`relative flex justify-center items-center overflow-hidden ${imageRounded} ${imageShadow} ${imageSize}`}
          >
            <Image
              src={profile.image}
              alt="Foto de perfil"
              width={width}
              height={height}
              className={`object-cover w-full h-full ${imageRounded}`}
            />
          </motion.div>
        </figure>

        {/* ✅ Contenido */}
        <div className={`card-body bg-transparent ${textColor}`}>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${nameSize} font-bold font-primary italic`}
          >
            {profile.name}
          </motion.h2>

          <motion.h4
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${titleSize} font-semibold`}
          >
            {profile.title}
          </motion.h4>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${descriptionSize}`}
          >
            {profile.description}
          </motion.p>

          {/* ✅ Botones */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="card-actions justify-center flex-wrap gap-3 mt-4"
          >
            {/* Guardar Contacto */}
            <a
              href={vcfLink}
              download
              className={`${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize} px-4 py-2 rounded-md`}
            >
              {saveLabel}
            </a>

            {/* WhatsApp opcional */}
            {profile.phone && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize} px-4 py-2 rounded-md`}
              >
                {whatsappLabel}
              </a>
            )}

            {/* Website opcional */}
            {profile.website && (
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize} px-4 py-2 rounded-md`}
              >
                {websiteLabel}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
