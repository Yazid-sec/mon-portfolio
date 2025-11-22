export default function Projects() {
  const projects = [
    {
      title: "FuturionPay - Écosystème Complet",
      description: "Application mobile de gestion d'abonnements avec backend API. Développé en Kotlin Multiplatform pour le frontend et Laravel + GraphQL pour le backend.",
      category: "🚀 Full-Stack - Mobile & Backend",
      technologies: ["Kotlin", "KMP", "Jetpack Compose", "Laravel", "GraphQL", "Lighthouse", "MySQL"],
      status: "🟢 Développé et testé",
      demoType: "🎥 Démonstrations disponibles",
      features: [
        "Application mobile multiplateforme",
        "API GraphQL moderne", 
        "Gestion des abonnements",
        "Système de paiement",
        "Architecture scalable"
      ],
      note: "Projet complet full-stack - Code source et démonstrations sur demande"
    },
    {
      title: "Portfolio Développeur",
      description: "Site portfolio moderne développé avec React, Next.js et Tailwind CSS. Design responsive et optimisé pour les recruteurs.",
      category: "💻 Frontend - React/Next.js",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Git", "Vercel"],
      status: "🟢 En ligne et actif",
      demoType: "🌐 Site live - Vous êtes ici !",
      features: [
        "Design responsive et moderne",
        "Optimisation SEO",
        "Dark/Light mode",
        "Animation fluides",
        "Déploiement continu"
      ],
      note: "Développé en direct avec intégration des bonnes pratiques modernes"
    },
    {
      title: "Outil Python Cybersécurité",
      description: "Projet à venir en Python orienté analyse de sécurité - Scanner de vulnérabilités ou automate de tests de pénétration.",
      category: "🐍 Python - Cybersécurité",
      technologies: ["Python", "Sécurité", "Automation", "Analyse", "Rapports"],
      status: "🟡 En réflexion",
      demoType: "💡 Prochain projet collaboratif",
      features: [
        "Analyse automatisée",
        "Génération de rapports",
        "Tests de sécurité",
        "Interface CLI ou web"
      ],
      note: "Prochain projet - Ouvert aux suggestions et collaboration"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des projets concrets qui démontrent ma polyvalence technique et ma capacité à développer des solutions complètes
          </p>
        </div>

        {/* Grille des projets */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* En-tête colorée */}
              <div className={`h-2 ${
                project.category.includes('Full-Stack') ? 'bg-gradient-to-r from-purple-500 to-blue-500' :
                project.category.includes('Frontend') ? 'bg-gradient-to-r from-green-500 to-blue-500' :
                'bg-gradient-to-r from-yellow-500 to-orange-500'
              }`}></div>

              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  
                  {/* Colonne gauche - Informations principales */}
                  <div className="lg:w-2/3">
                    {/* En-tête */}
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                          {project.title}
                        </h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status.includes('🟢') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        project.status.includes('🟡') ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Type de démo */}
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {project.demoType}
                      </span>
                    </div>

                    {/* Fonctionnalités */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">
        🎯 Fonctionnalités principales :
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Colonne droite - Technologies et actions */}
                  <div className="lg:w-1/3">
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">
                        🛠️ Technologies utilisées :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Note */}
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        <span className="font-semibold">ℹ️ </span> {project.note}
                      </p>
                    </div>

                    {/* Bouton d'action */}
                    <div className="mt-4">
                      {project.title.includes("Portfolio") ? (
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                          ✅ Vous visitez ce projet
                        </button>
                      ) : project.status.includes("🟡") ? (
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg font-medium transition-colors text-sm cursor-not-allowed">
                          ⌛ En planification
                        </button>
                      ) : (
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                          📧 Demander les détails
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section collaboration */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🤝 Projet Collaboratif</h3>
            <p className="text-lg mb-6">
              Je suis ouvert à développer un projet ensemble ! Que ce soit une application web, 
              un outil de cybersécurité ou une solution innovante, n'hésitez pas à me contacter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">Projets Python</span>
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">Applications Web</span>
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">Outils Cybersécurité</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}