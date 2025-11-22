export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discutons de vos projets, opportunités ou simplement échangeons autour du développement et de la cybersécurité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Colonne gauche - Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Prenons contact
            </h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <a 
                    href="mailto:ton.email@example.com" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    ton.email@example.com
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/ton-profil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/ton-profil
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Connectons-nous professionnellement
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                  <a 
                    href="https://github.com/ton-pseudo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    github.com/ton-pseudo
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Mes projets et contributions
                  </p>
                </div>
              </div>

              {/* TryHackMe */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🛡️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">TryHackMe</h4>
                  <a 
                    href="https://tryhackme.com/p/kabreyazid12" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    tryhackme.com/p/kabreyazid12
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Ma progression en cybersécurité
                  </p>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Localisation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    France
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Ouvert aux opportunités remote
                  </p>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🎯 Disponibilité</h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Actuellement en formation cybersécurité - Ouvert aux stages, alternances et projets collaboratifs
              </p>
            </div>
          </div>

          {/* Colonne droite - Message court */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Un projet en tête ?
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Que vous soyez recruteur, développeur ou passionné de cybersécurité, 
                n'hésitez pas à me contacter. Je suis particulièrement intéressé par :
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Opportunités en cybersécurité</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Projets de développement innovants</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Collaborations techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Échanges autour des bonnes pratiques</span>
                </li>
              </ul>

              <p className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <strong>💡 Conseil pro :</strong> Mentionnez "Portfolio React" dans votre message pour me montrer que vous avez pris le temps de découvrir mon travail.
              </p>
            </div>

            {/* Bouton d'action principal */}
            <div className="mt-8">
              <a 
                href="mailto:ton.email@example.com"
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-lg"
              >
                ✉️ Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}