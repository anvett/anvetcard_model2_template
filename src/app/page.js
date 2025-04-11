"use client";

import React from "react";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";
import ContactMethods from "@/components/profile/ContactMethods/ContactMethods";
import SocialMediaLinks from "@/components/profile/SocialMediaLinks/SocialMediaLinks";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal";
import Slider from "@/components/cardContent/Slider/Slider";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience";
import BankInfo from "@/components/cardContent/PaymentInfo/PaymentInfo";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDisplay";
import VideoPlayer from "@/components/cardContent/VideoPlayer/VideoPlayer";
import SimpleYouTubeEmbed from "@/components/cardContent/VideoPlayer/SimpleYouTubeEmbed";
import CallToAction from "@/components/cardContent/cta/cta";
import { servicesItems } from "@/data/products";
import { educationEntries } from "@/data/education";
import { slidesData } from "@/data/slides";
import { banksData } from "@/data/banks";
import { contactsData } from "@/data/contact";
import { socialLinks } from "@/data/socialLinks";
import { profileData } from "@/data/profile";

export default function TemplateCard() {
  return (
    <main className="min-h-screen flex flex-col bg-image-background">
      {/* Perfil */}
      <section className="w-full bg-gradient-primary text-light">
        <ProfileCard
          profile={profileData}
          layoutOptions={{
            bgColor: "bg-transparent",
            textColor: "text-light",
            borderColor: "border-secondary",
            nameSize: "text-size-6 sm:text-size-9",
            titleSize: "text-size-3 sm:text-size-4",
            descriptionSize: "text-size-2 sm:text-size-3",
          }}
          buttonOptions={{
            type: "btn-rounded",
            bgColor: "bg-secondary shadow-xl shadow-dark",
            textColor: "text-dark",
            textSize: "text-size-2 sm:text-3",
            saveLabel: "Guardar Contacto",
            whatsappLabel: "Contáctame",
            websiteLabel: "Visitar Web",
            whatsappMessage: "Hola, estoy interesado en tus servicios de producción",
            vcfLink: "/assets/vcards/wvg.vcf",
          }}
          imageOptions={{
            width: 300,
            height: 300,
            size: "w-60 h-60 aspect-square",
            rounded: "rounded-xl",
            shadow: "shadow-xl shadow-secondary",
          }}
          animationOptions={{ duration: 0.8 }}
        />
        <ContactMethods
          contacts={contactsData}
          variant="icons-only"
          layoutOptions={{
            bgColor: "bg-transparent",
            gap: "gap-4",
            padding: "pt-spacing-4 pb-spacing-2",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-secondary shadow-xl shadow-dark",
            textColor: "text-dark",
            textSize: "text-size-2 sm:text-2",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
          modalOptions={{
            modalBgColor: "bg-light",
            modalTextColor: "text-dark",
            modalTextSize: "text-lg",
            modalTitle: "Ubicación y Horarios",
            modalButtonText: "Cerrar",
            animationDuration: 0.5,
          }}
        />
        <SocialMediaLinks
          socialLinks={socialLinks}
          variant="icon-only"
          layoutOptions={{
            layout: "row",
            gap: "gap-2",
            componentBgColor: "bg-transparent",
            padding: "p-4 pb-spacing-3",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-secondary shadow-xl shadow-dark",
            hoverColor: "hover:bg-secondary hover:text-light",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
          animate={true}
        />
      </section>

      {/* Video */}
      <section className="bg-dark">
        <SimpleYouTubeEmbed
          video="https://www.youtube.com/watch?v=bxxHuAXVOPU"
          titleOptions={{
            text: "¡Vive la experiencia con nosotros!",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
            weight: "font-bold",
            alignment: "text-center",
            marginBottom: "mb-spacing-3",
          }}
          containerOptions={{
            bgColor: "bg-image-with-overlay",
            padding: "p-6",
            borderColor: "border border-secondary",
            borderRadius: "rounded-xl",
            shadow: "shadow-md shadow-secondary",
            maxWidth: "max-w-5xl",
            ratio: "16/9",
          }}
        />
      </section>

      {/* Ventajas / Educación */}
      <section className="bg-gradient-secondary">
        <EducationExperience
          entries={educationEntries}
          componentTitle="¿Por qué elegirnos?"
          titleOptions={{
            text: "¿Por qué elegirnos?",
            color: "text-dark",
            size: "text-size-5 sm:text-size-7",
          }}
          blockOptions={{ gap: "gap-6", bgColor: "bg-transparent" }}
          accordionOptions={{
            bgColor: "bg-light",
            borderColor: "border border-gray-300",
            contentBgColor: "bg-gradient-primary",
          }}
          textOptions={{
            titleColor: "text-dark",
            titleSize: "text-size-2 sm:text-3",
            detailColor: "text-light",
            detailSize: "text-size-1 sm:text-2",
          }}
          behaviorOptions={{ useBulletPoints: true, animate: true }}
        />
      </section>

      {/* Servicios */}
      <section className="bg-gradient-primary" id="services">
        <GalleryWithModal
          items={servicesItems}
          titleOptions={{
            text: "Nuestros Servicios",
            color: "text-secondary",
            size: "text-size-5 sm:text-size-7",
            subtitle: "Haz clic para ver más detalles",
          }}
          galleryOptions={{
            bgColor: "bg-transparent",
            itemBg: "bg-light shadow-lg shadow-secondary",
            titleColor: "text-light",
            titleSize: "text-size-2 sm:text-3",
          }}
          modalOptions={{
            bgColor: "bg-gradient-primary",
            titleColor: "text-secondary",
            titleSize: "text-size-4 sm:text-size-5",
            descriptionColor: "text-light",
            descriptionSize: "text-base sm:text-lg",
            highlightColor: "text-secondary",
            highlightSize: "text-size-4 sm:text-size-5",
            aspectRatio: "4:3",
          }}
          buttonOptions={{
            text: "Solicitar Información",
            type: "btn-rounded",
            size: "text-base sm:text-lg",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            hoverColor: "hover:bg-secondary hover:text-light",
          }}
        />
      </section>

      <SimpleYouTubeEmbed
        video="https://www.youtube.com/watch?v=EBn5isfOnsY"
        titleOptions={{
          text: "¡Calidad Garantizada!",
          color: "text-light",
          size: "text-size-5 sm:text-size-7",
          weight: "font-bold",
          alignment: "text-center",
          marginBottom: "mb-spacing-3",
        }}
        containerOptions={{
          bgColor: "bg-image-with-overlay",
          padding: "p-6",
          borderColor: "border border-secondary",
          borderRadius: "rounded-xl",
          shadow: "shadow-md shadow-secondary",
          maxWidth: "max-w-5xl",
          ratio: "16/9",
        }}
      />

      {/* Slider */}
      <section className="bg-gradient-secondary">
        <Slider
          slides={slidesData}
          titleOptions={{
            text: "Nuestro impacto en imágenes",
            color: "text-dark",
            size: "text-size-5 sm:text-size-7",
            weight: "font-semibold",
          }}
          carouselOptions={{
            bgColor: "bg-transparent",
            borderColor: "border border-light",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            imageSize: "w-3/4 sm:w-1/2",
            gap: "gap-6",
          }}
          buttonOptions={{
            bgColor: "bg-dark",
            textColor: "text-light",
            hoverColor: "hover:bg-light hover:text-dark",
            activeBgColor: "bg-primary",
            activeTextColor: "text-light",
          }}
          behaviorOptions={{
            animationSpeed: 1.0,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            showIndicators: false,
          }}
        />
      </section>

      {/* Información de Pago */}
      <section id="info_pago" className="bg-image-with-overlay">
        <BankInfo
          banks={banksData}
          titleOptions={{
            text: "Métodos de Pago",
            color: "text-light",
            size: "text-size-4 sm:text-size-5",
          }}
          layoutOptions={{
            bgColor: "bg-transparent ",
            layout: "row",
            iconSize: 100,
            borderColor: "border border-secondary ",
          }}
          modalOptions={{
            bgColor: "bg-gradient-primary",
            titleColor: "text-secondary",
            textColor: "text-light",
            buttonType: "btn-rounded",
            buttonBgColor: "bg-secondary",
            buttonTextColor: "text-dark",
            copyButtonText: "Copiar",
            closeButtonText: "Cerrar",
          }}
        />
      </section>

      {/* QR */}
      <QRDisplay
        titleOptions={{
          text: "Escanea y contáctanos",
          color: "text-light",
          size: "text-size-4 sm:text-size-5",
          weight: "font-semibold",
        }}
        qrOptions={{
          image: "/assets/images/qrcode.png",
          size: "w-52 h-52",
          alt: "Código QR para contacto",
          borderColor: "border border-secondary",
          borderRadius: "rounded-sm",
          shadow: "shadow-lg shadow-secondary",
          bgColor: "bg-gradient-primary",
          gap: "gap-6",
        }}
      />

      {/* CTA */}
      <section className="bg-gradient-primary">
        <CallToAction
          titleOptions={{
            text: "¿Querés llevar tu evento al siguiente nivel?",
            color: "text-white",
            size: "text-3xl sm:text-4xl",
            weight: "font-extrabold",
          }}
          buttonOptions={{
            text: "Habla con nosotros",
            phoneNumber: "+593983003789",
            type: "btn-rounded",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            hoverColor: "hover:bg-primary hover:text-light",
            borderColor: "border border-transparent",
            textSize: "text-lg sm:text-xl",
          }}
          layoutOptions={{
            bgColor: "bg-transparent",
            borderColor: "border-none",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            backgroundImage: "/assets/images/cta-back.png",
          }}
        />
      </section>
    </main>
  );
}
