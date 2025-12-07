import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="bg-[var(--primary-color)] text-white fixed top-0 w-full p-4 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-bold font-serif tracking-tight transition-transform duration-200 hover:scale-105">
          Yazid KABRE
        </a>
        
        {/* Menu desktop */}
        <div className="hidden md:flex gap-6 font-serif tracking-tight text-lg mr-12">
          <a href="#about" className="hover:opacity-80 transition-opacity">
            À propos
          </a>
          <a href="#skills" className="hover:opacity-80 transition-opacity">
            Compétences
          </a>
          <a href="#projects" className="hover:opacity-80 transition-opacity">
            Projets
          </a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">
            Contact
          </a>
        </div>

        {/* Menu mobile - Composant séparé */}
        <MobileMenu />
      </nav>
    </header>
  );
}