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
  title: "Yazid KABRE | Étudiant Cybersécurité - Recherche PFA Pentest",
  description: "Étudiant en Master Cybersécurité à HESTIM, en recherche d'un PFA en tant que pentester. Formation pratique sur TryHackMe, compétences en tests d'intrusion, exploitation de vulnérabilités et développement d'outils de sécurité offensive.",
  keywords: [
    "étudiant cybersécurité Maroc",
    "recherche PFA pentest",
    "testeur d'intrusion stage",
    "TryHackMe pentest",
    "exploitation vulnérabilités",
    "tests d'intrusion",
    "OWASP Top 10",
    "outils pentest",
    "sécurité offensive",
    "HESTIM cybersécurité",
    "développeur web mobile sécurité",
    "Python sécurité",
    "Cisco Networking 88.5%"
  ].join(", "),
  authors: [{ name: "Yazid KABRE" }],
  openGraph: {
    title: "Yazid KABRE - Portfolio Pentest & Cybersécurité",
    description: "Portfolio d'un étudiant en cybersécurité spécialisé pentest. Formation TryHackMe, compétences tests d'intrusion et développement sécurité.",
    url: "https://yazid-pentest-portfolio.vercel.app",
    siteName: "Yazid KABRE - Portfolio Pentest",
    images: [
      {
        url: "/images/linkdin_pic.jpg",
        width: 800,
        height: 600,
        alt: "Yazid KABRE - Étudiant Cybersécurité Pentest",
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
    title: "Yazid KABRE | Portfolio Pentest",
    description: "Étudiant en cybersécurité - Recherche PFA Pentester",
    images: ["/images/linkdin_pic.jpg"],
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
        <meta name="target" content="recrutement, stage, PFA, pentest" />
        
        {/* Type de contenu */}
        <meta property="og:type" content="portfolio" />
        <meta name="classification" content="Portfolio étudiant cybersécurité" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}