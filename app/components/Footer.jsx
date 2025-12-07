export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Yazid KABRE
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Étudiant en Cybersécurité | SOC Analyst en formation
            </p>
          </div>

          {/* Version */}
          <div className="mt-4 md:mt-0">
            <span className="text-gray-500 text-xs">
              v2.0 - Portfolio SOC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}