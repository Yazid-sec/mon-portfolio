export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Yazid K. - Développeur & Apprenti Cybersécurité
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Portfolio développé avec React, Next.js et Tailwind CSS
            </p>
          </div>

          {/* Liens rapides */}
          <div className="flex items-center space-x-6">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Accueil
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              À propos
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Projets
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          {/* Version */}
          <div className="mt-4 md:mt-0">
            <span className="text-gray-500 text-xs">
              v1.0 • Made with 💻
            </span>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            "Le code est comme l'humour. Quand il faut l'expliquer, c'est qu'il n'est pas bon." - Cory House
          </p>
        </div>
      </div>
    </footer>
  );
}