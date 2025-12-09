"use client";

import { useState, useEffect } from 'react';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const loadCredlyScript = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (isMounted) {
      loadCredlyScript();
    }
  }, [isMounted]);

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black">
      {/* Background pattern/design subtle */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Colonne de gauche - TON IMAGE */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src="/images/linkdin_pic.jpg"
                alt="Yazid KABRE"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-2xl border-8 border-white dark:border-gray-800 shadow-lg"
              />
              {/* Élément décoratif rouge */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--primary-color)] rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Colonne de droite - Contenu */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Etudiant en Cybersécurité (Ecole d'ingénieur)
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Je suis un <span className="text-[var(--primary-color)] font-semibold">développeur web et mobile</span> 
                en transition vers la <span className="text-[var(--primary-color)] font-semibold">sécurité offensive</span>. 
                Actuellement en formation pratique sur 
                <span className="text-[var(--primary-color)] font-semibold"> TryHackMe (Cyber Security 101)</span>, 
                je me spécialise dans l'exploitation de vulnérabilités et les tests d'intrusion.
              </p>

              <p className="text-lg leading-relaxed">
                Mon expérience en développement d'applications web et mobiles me donne une compréhension 
                approfondie des architectures applicatives, essentielle pour identifier et tester les vulnérabilités.
              </p>

              <p className="text-lg leading-relaxed">
                Mon objectif actuel : <span className="text-[var(--primary-color)] font-semibold">Réaliser un PFA en pentest</span>, 
                pour appliquer mes connaissances en analyse de vulnérabilités, tests d'intrusion et développement d'outils 
                de sécurité offensive.
              </p>
            </div>

            {/* Stats avec theme rouge */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Boîte 1 */}
              <div className="flex items-center justify-center text-center p-6 bg-red-50 dark:bg-gray-800 rounded-lg border border-red-100 dark:border-gray-700 shadow-sm min-h-[160px]">
                <div className="text-gray-600 dark:text-gray-300">
                  Certificat Fondamentaux Cisco Networking
                </div>
              </div>

              {/* Boîte 2 */}
              <div className="flex items-center justify-center text-center p-6 bg-red-50 dark:bg-gray-800 rounded-lg border border-red-100 dark:border-gray-700 shadow-sm min-h-[160px]">
                <div className="text-gray-600 dark:text-gray-300">
                  Certificat Cyber Security 101 TryHackMe (en cours)
                </div>
              </div>

              {/* Boîte 3 (Badge Credly) */}
              <div className="flex items-center justify-center p-6 bg-red-50 dark:bg-gray-800 rounded-lg border border-red-100 dark:border-gray-700 shadow-sm min-h-[160px]">
                <div className="flex justify-center">
                  {isMounted ? (
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id="4a641cb8-478d-4b6e-87d7-5ab6dbb700a4"
                      data-share-badge-host="https://www.credly.com"
                    ></div>
                  ) : (
                    <div className="animate-pulse">
                      <div className="w-32 h-8 bg-gray-300 rounded mb-2"></div>
                      <div className="w-24 h-6 bg-gray-200 rounded"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}