'use client';
import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Bouton hamburger */}
      <button 
        className="text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--primary-color)] shadow-lg">
          <div className="flex flex-col p-4 font-serif tracking-tight text-lg space-y-4">
            <a href="#about" className="hover:opacity-80 transition-opacity py-2" onClick={() => setIsOpen(false)}>
              À propos
            </a>
            <a href="#skills" className="hover:opacity-80 transition-opacity py-2" onClick={() => setIsOpen(false)}>
              Compétences
            </a>
            <a href="#projects" className="hover:opacity-80 transition-opacity py-2" onClick={() => setIsOpen(false)}>
              Projets
            </a>
            <a href="#contact" className="hover:opacity-80 transition-opacity py-2" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}