import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Exo_2, Cinzel } from "next/font/google";

// 🌐 Metadata para SEO
export const metadata = {
  title: "WVG Producciones - Vive la experiencia",
  description: "Organización y producción de eventos artísticos, sociales y corporativos.",
  keywords: "eventos, producción, pantallas LED, sonido, iluminación, artistas, shows en vivo",
  authors: [{ name: "WVG Producciones" }],
  robots: "index, follow",
  openGraph: {
    title: "WVG Producciones",
    description: "Organización y producción de eventos artísticos, sociales y corporativos.",
    url: "https://wvgproducciones.anvetcard.com", // ajustalo si cambia el dominio
    images: [
      {
        url: "https://wvgproducciones.anvetcard.com/assets/images/shared.png",
        alt: "WVG Producciones",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WVG Producciones",
    description: "Shows y eventos con estilo profesional",
    images: ["https://wvgproducciones.anvetcard.com/assets/images/shared.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700", "800"], // Regular, Bold y ExtraBold
  variable: "--font-exo",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export default function RootLayout({ children }) {
  const menuConfig = [
    { label: "Inicio", href: "#inicio" },
    { label: "Info. Pago", href: "#info_pago" },
    { label: "Servicios", href: "#services" },
  ];

  const footerLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Info. Pago", href: "#info_pago" },
    { label: "Servicios", href: "#services" },
  ];

  return (
    <html lang="es">
      <body suppressHydrationWarning className={`${exo2.variable} ${cinzel.variable} min-h-screen flex flex-col`}>
        <Navbar
          bgColor="bg-dark"
          textColor="text-secondary"
          borderColor="border-secondary"
          logoSrc="/assets/images/logo.png"
          menuItems={menuConfig}
          linkTextSize="text-size-2"
          navTextSize="text-size-4"
          mobileMenuBg="bg-dark"
          mobileMenuTextColor="text-accent"
          mobileIconColor="text-secondary"
        />
        <main>{children}</main>
        <Footer
          bgColor="bg-gradient-primary"
          bgSecondColor="bg-dark"
          textColor="text-light"
          borderColor="border-secondary"
          footerLinks={footerLinks}
          linkTextSize="text-size-1"
          copyrightText="© 2025 Anvetcorp SAS. Todos los derechos reservados."
          copyrightColor="text-light"
          copyrightSize="text-size-2"
          footerLogo="/assets/images/logo.png"
        />
      </body>
    </html>
  );
}
