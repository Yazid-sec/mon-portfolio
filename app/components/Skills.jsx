export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto"></div>
        </div>

        {/* Grille des compétences - Même hauteur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 🛡️ CARTE CYBERSÉCURITÉ - Simplifiée */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-[var(--primary-color)] flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Cybersécurité
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">TryHackMe & Cisco</p>
              </div>
            </div>
            
            {/* Progression THM */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>TryHackMe (Cyber Security 101)</span>
                <span className="font-bold text-[var(--primary-color)]">40%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-[var(--primary-color)] h-2 rounded-full" 
                  style={{ width: '40%' }}
                ></div>
              </div>
            </div>

            {/* Score Cisco */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Cisco Networking</span>
                <span className="font-bold text-[var(--primary-color)]">88.5%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-[var(--primary-color)] h-2 rounded-full" 
                  style={{ width: '88.5%' }}
                ></div>
              </div>
            </div>

            {/* Domaines principaux */}
            <div className="flex-1">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">
                Domaines d'apprentissage :
              </h4>
              <div className="space-y-2">
                {['Fondamentaux Sécurité', 'Réseaux TCP/IP', 'Linux & Windows/AD', 'Analyse de Logs', 'Outils défensifs'].map((domain) => (
                  <div key={domain} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full mr-2"></span>
                    {domain}
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="https://tryhackme.com/p/kabreyazid12"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-gray-100 dark:bg-gray-700 hover:bg-[var(--primary-color)] hover:text-white text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors text-sm text-center"
            >
              Voir mon profil THM
            </a>
          </div>

          {/* 💻 CARTE DÉVELOPPEMENT */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Développement
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Full-Stack & Python</p>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python (Security)', 'React', 'Next.js', 'JavaScript', 'Laravel', 'GraphQL', 'MySQL', 'GitHub'].map((tech) => (
                  <span 
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 mt-auto">
              Développement web & scripts sécurité Python
            </div>
          </div>

          {/* 📱 CARTE MOBILE */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Mobile
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Android & Kotlin</p>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {['Kotlin', 'KMP', 'Jetpack Compose', 'Android Studio', 'App Security'].map((tech) => (
                  <span 
                    key={tech}
                    className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 mt-auto">
              Applications mobiles & compréhension sécurité Android
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}