export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discutons d'opportunités en pentest, tests d'intrusion ou échangeons autour de la sécurité offensive
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Colonne unique - Contacts et disponibilité */}
          <div className="mb-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <a 
                    href="mailto:kabreyazid12@gmail.com" 
                    className="text-[var(--primary-color)] hover:text-[var(--primary-hover)] transition-colors"
                  >
                    kabreyazid12@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/yazid-kabr%C3%A9-599b42278/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-hover)] transition-colors"
                  >
                    linkedin.com/in/yazid-kabre
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Connectons-nous professionnellement
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                  <a 
                    href="https://github.com/Yazid-sec" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-hover)] transition-colors"
                  >
                    github.com/Yazid-sec
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Projets
                  </p>
                </div>
              </div>

              {/* TryHackMe */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">TryHackMe</h4>
                  <a 
                    href="https://tryhackme.com/p/kabreyazid12" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-hover)] transition-colors"
                  >
                    tryhackme.com/p/kabreyazid12
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Parcours Cyber Security 101 en cours
                  </p>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-[var(--primary-color)] dark:text-red-300 mb-3 text-center text-lg">Disponibilité</h4>
              <p className="text-[var(--primary-color)] dark:text-red-400 text-center">
                Actuellement en Ingénieurie informatique <i class="fa fa-optin-monster" aria-hidden="true"></i> Cybersécurité à HESTIM - je suis à la recherche d'un PFA en tant que pentester / testeur d'intrusion
              </p>
            </div>

            {/* Objectif actuel - EN BAS */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                Objectif actuel
              </h3>
              
              <div className="text-gray-600 dark:text-gray-300 text-center mb-6">
                <p className="text-lg">
                  Je recherche un PFA en tant que <span className="text-[var(--primary-color)] font-semibold">pentester</span> pour appliquer mes compétences en tests d'intrusion, exploitation de vulnérabilités et sécurité offensive
                </p>
              </div>

              {/* Bouton d'action principal */}
              <div className="text-center">
                <a 
                  href="mailto:kabreyazid12@gmail.com"
                  className="inline-flex items-center justify-center bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}