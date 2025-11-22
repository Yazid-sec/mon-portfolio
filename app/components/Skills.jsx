export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un parcours en <span className="text-blue-600 font-semibold">développement</span> qui me donne 
            une base solide pour me spécialiser en <span className="text-blue-600 font-semibold">cybersécurité</span>
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 🛡️ CARTE CYBERSÉCURITÉ - EN APPRENTISSAGE */}
        {/* 🛡️ CARTE CYBERSÉCURITÉ - TRYHACKME EN COURS */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
  <div className="flex items-center mb-4">
    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
      <span className="text-2xl">🛡️</span>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
        Cybersécurité
      </h3>
      <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
        🎯 Formation TryHackMe en cours
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        Préparation Security Engineer & CompTIA Pentest+
      </p>
    </div>
  </div>
  
  <div className="space-y-4">
    {/* Modules TryHackMe complétés/réussis */}
    <div>
      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">
        ✅ Modules TryHackMe validés :
      </h4>
      <div className="flex flex-wrap gap-2">
        {['Introduction to Cyber Security', 'Pre Security', 'Web Fundamentals', 'Linux Fundamentals'].map((module) => (
          <span 
            key={module}
            className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
          >
            {module}
          </span>
        ))}
      </div>
    </div>
    
    {/* En cours de travail */}
    <div>
      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">
        🔄 En cours d'apprentissage :
      </h4>
      <div className="flex flex-wrap gap-2">
        {['Network Security', 'OWASP Top 10', 'Vulnerability Analysis', 'Security Principles'].map((skill) => (
          <span 
            key={skill}
            className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
    
    {/* Prochaines étapes concrètes */}
    <div>
      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">
        📅 Prochaines certifications visées :
      </h4>
      <div className="flex flex-wrap gap-2">
        {['TryHackMe Security Engineer', 'CompTIA Pentest+', 'Junior Security Analyst'].map((certification) => (
          <span 
            key={certification}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm border border-dashed border-blue-300 dark:border-blue-700"
          >
            {certification}
          </span>
        ))}
      </div>
    </div>
  </div>
  
  {/* Indicateur de progression */}
  <div className="mt-4 bg-gray-100 dark:bg-gray-700 rounded-full h-2">
    <div 
      className="bg-orange-500 h-2 rounded-full" 
      style={{ width: '40%' }}
      title="Progression TryHackMe: 40%"
    ></div>
  </div>
  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
    Progression globale TryHackMe
  </p>
</div>

          {/* 💻 CARTE DÉVELOPPEMENT - ACQUIS */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Développement
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  ✅ Compétences acquises
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'React', 'HTML/CSS', 'MySQL', 'Laravel', 'GraphQL', 'GitHub'].map((skill) => (
                <span 
                  key={skill}
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 📱 CARTE MOBILE - ACQUIS */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Mobile
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  ✅ Compétences acquises
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['Kotlin', 'Jetpack Compose', 'Android Studio'].map((skill) => (
                <span 
                  key={skill}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section objectif - version réaliste */}
      {/* Section parcours - aligné avec TryHackMe */}
<div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-xl">
  <div className="max-w-3xl mx-auto">
    <h3 className="text-2xl font-bold mb-4">🚀 Mon Parcours Cybersécurité</h3>
    <p className="text-lg mb-6">
      Je me forme activement via <span className="font-bold">TryHackMe</span> avec pour objectif les certifications 
      <span className="font-bold"> Security Engineer</span> et <span className="font-bold">CompTIA Pentest+</span>. 
      Mon background en <span className="font-bold">développement</span> me permet de mieux comprendre 
      les vulnérabilités applicatives et d'apprendre plus efficacement.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">TryHackMe Active Learner</span>
      <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">Security Fundamentals</span>
      <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">Développement comme atout</span>
    </div>
    <div className="mt-4">
      <a 
        href="https://tryhackme.com/p/kabreyazid12" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
      >
        <span>Voir mon profil TryHackMe</span>
        <span>↗</span>
      </a>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}