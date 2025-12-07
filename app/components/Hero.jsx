export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.jpg" // Remplace par ton image
          alt="Cybersecurity background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Yazid KABRE
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
          Étudiant en Cybersécurité 
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}