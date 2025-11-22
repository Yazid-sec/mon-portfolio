'use client';
import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' }
  ];

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
        <div className="absolute top-full left-0 w-full bg-blue-600 shadow-lg">
          <div className="flex flex-col p-4 font-serif tracking-tight text-lg space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}