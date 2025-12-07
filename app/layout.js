import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yazid KABRE | Étudiant Cybersécurité - Recherche PFA SOC",
  description: "Étudiant en Master Cybersécurité à HESTIM, en recherche d'un projet de fin d'année (PFA) en tant qu'analyste SOC. Formation pratique sur TryHackMe, compétences en réseau (Cisco 88.5%), Python sécurité, et développement full-stack.",
  keywords: [
    "étudiant cybersécurité Maroc",
    "recherche PFA SOC analyst",
    "projet de fin d'année cybersécurité",
    "stage SOC analyst Casablanca",
    "TryHackMe Cyber Security 101",
    "Cisco Networking 88.5%",
    "Python sécurité",
    "analyse de logs",
    "HESTIM cybersécurité"
  ].join(", "),
  authors: [{ name: "Yazid KABRE" }],
  openGraph: {
    title: "Yazid KABRE - Portfolio Étudiant Cybersécurité",
    description: "Étudiant en cybersécurité recherchant un PFA en tant qu'analyste SOC. Formation TryHackMe et compétences développement.",
    url: "https://yazid-kabre-portfolio.vercel.app",
    siteName: "Yazid KABRE - Portfolio",
    images: [
      {
        url: "/images/linkdin_pic.jpg",
        width: 800,
        height: 600,
        alt: "Photo profil Yazid KABRE",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yazid KABRE | Portfolio Cybersécurité",
    description: "Étudiant en cybersécurité - Recherche PFA SOC Analyst",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626" />
        
        {/* Localisation pour recruteurs marocains */}
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Casablanca, Settat" />
        <meta name="target" content="recrutement, stage, PFA" />
        
        {/* Type de contenu */}
        <meta property="og:type" content="portfolio" />
        <meta name="classification" content="Portfolio étudiant" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}