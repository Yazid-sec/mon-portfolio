import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-blue-600 text-white p-4 shadow-md z-50 ">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-bold font-serif tracking-tight transition-transform duration-200 hover:scale-105">
          Yazid KABRE
        </a>
        
        {/* Menu desktop */}
        <div className="hidden md:flex gap-6 font-serif tracking-tight text-lg mr-12">
          <a href="#about" className="hover:text-blue-200 transition-colors">
            À propos
          </a>
          <a href="#skills" className="hover:text-blue-200 transition-colors">
            Compétences
          </a>
          <a href="#projects" className="hover:text-blue-200 transition-colors">
            Projets
          </a>
          <a href="#contact" className="hover:text-blue-200 transition-colors">
            Contact
          </a>
        </div>

        {/* Menu mobile - Composant séparé */}
        <MobileMenu />
      </nav>
    </header>
  );
}