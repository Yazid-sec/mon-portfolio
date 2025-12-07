"use client";
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
  id: 1,
  title: "FuturionPay",
  description: "Application mobile multiplateforme (iOS/Android) avec backend API Laravel pour la gestion d'abonnements partenaires. Expérience concrète en développement full-stack.",
  category: "Développement Mobile",
  technologies: ["Kotlin", "KMP", "Laravel", "GraphQL", "MySQL"],
  status: "Projet Entreprise",
  images: [
    "/images/futurionPay/Capture1.png",
    "/images/futurionPay/Capture2.png",
    "/images/futurionPay/Capture3.png",
    "/images/futurionPay/Capture4.png",
    "/images/futurionPay/Capture5.png",
    "/images/futurionPay/Capture6.png",
    "/images/futurionPay/Capture7.png",
    "/images/futurionPay/Capture8.png",
    "/images/futurionPay/Capture9.png",
    "/images/futurionPay/Capture10.png",
    "/images/futurionPay/Capture11.png",
    "/images/futurionPay/Capture12.png",
    "/images/futurionPay/Capture13.png",
    "/images/futurionPay/Capture14.png",
    "/images/futurionPay/Capture15.png",
    "/images/futurionPay/Capture16.png",
    "/images/futurionPay/Capture17.png",
    "/images/futurionPay/Capture18.png",
    "/images/futurionPay/Capture19.png",
    "/images/futurionPay/Capture20.png",
    "/images/futurionPay/Capture21.png"
  ]
},
    {
      id: 2,
      title: "TryHackMe - Labs SOC",
      description: "Labs pratiques sur TryHackMe (Cyber Security 101) couvrant l'analyse réseau, sécurité Windows/Linux, et introduction aux outils défensifs.",
      category: "Cybersécurité", 
      technologies: ["TryHackMe", "Linux", "Wireshark", "Log Analysis", "Windows/AD"],
      status: "En progression",
      link: "https://tryhackme.com/p/kabreyazid12"
    },
    {
      id: 3,
      title: "Script Python - Analyse Logs",
      description: "Développement d'un script Python pour l'automatisation de l'analyse basique de logs et la détection de patterns suspects.",
      category: "Python & Sécurité",
      technologies: ["Python", "Log Analysis", "Automation", "Regex"],
      status: "En développement"
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Réactive le scroll
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          {/* Titre simple */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Projets & Réalisations
            </h2>
            <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto"></div>
          </div>

          {/* Grille simple - même hauteur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {/* En-tête */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-[var(--primary-color)]">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Statut et bouton */}
                <div className="flex justify-between items-center mt-auto">
                  <span className={`text-sm font-medium ${
                    project.status === 'Projet Entreprise' ? 'text-green-600' :
                    project.status === 'En progression' ? 'text-blue-600' :
                    'text-yellow-600'
                  }`}>
                    {project.status}
                  </span>
                  
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--primary-color)] hover:underline"
                    >
                      Voir →
                    </a>
                  ) : (
                    <button 
                      onClick={() => project.images ? openProjectModal(project) : {}}
                      className="text-sm text-[var(--primary-color)] hover:underline"
                    >
                      Détails
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal pour afficher les images */}
      {selectedProject && selectedProject.images && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {selectedProject.images.length} captures d'écran
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Image container */}
            <div className="relative h-96 md:h-[500px] bg-gray-100 dark:bg-gray-800">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Capture ${currentImageIndex + 1}`}
                className="w-full h-full object-contain p-4"
              />
              
              {/* Navigation buttons */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex 
                        ? 'bg-[var(--primary-color)]' 
                        : 'bg-gray-400 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Footer modal */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}