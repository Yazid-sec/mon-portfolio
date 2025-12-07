export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Colonne de gauche - TON IMAGE */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src="/images/linkdin_pic.jpg"
                alt="Yazid KABRE"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-xl border-4 border-white dark:border-gray-800"
              />
              {/* Élément décoratif rouge */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--primary-color)] rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Colonne de droite - Contenu */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
             Étudiant en Cybersécurité & Développeur Web/Mobile
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Je suis un <span className="text-[var(--primary-color)] font-semibold">développeur web & mobile</span> 
                en transition vers la cybersécurité défensive. Actuellement en formation pratique sur 
                <span className="text-[var(--primary-color)] font-semibold"> TryHackMe (Cyber Security 101)</span>, 
                j'applique mes compétences en développement à l'analyse de sécurité.
              </p>

              <p className="text-lg leading-relaxed">
                Mon expérience en développement d'applications web et mobiles me donne une compréhension 
                technique approfondie des systèmes, essentielle pour l'analyse d'incidents de sécurité 
                et la détection de vulnérabilités.
              </p>

              <p className="text-lg leading-relaxed">
                Mon objectif actuel : <span className="text-[var(--primary-color)] font-semibold">devenir analyste SOC</span>, 
                en spécialisant mes compétences en surveillance réseau, analyse de logs et réponse aux incidents, 
                tout en capitalisant sur mon background technique en développement.
              </p>
            </div>

            {/* Stats avec theme rouge */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-red-50 dark:bg-gray-800 rounded-lg border border-red-100 dark:border-gray-700">
                <div className="text-2xl font-bold text-[var(--primary-color)]">88.5%</div>
                <div className="text-gray-600 dark:text-gray-300">Cisco Networking</div>
              </div>
              <div className="text-center p-4 bg-red-50 dark:bg-gray-800 rounded-lg border border-red-100 dark:border-gray-700">
                <div className="text-2xl font-bold text-[var(--primary-color)]">40%</div>
                <div className="text-gray-600 dark:text-gray-300">TryHackMe (en cours)</div>
              </div>
              <div className="text-center p-4 bg-red-50 dark:bg-gray-800 rounded-lg border border-red-100 dark:border-gray-700">
                <div className="text-2xl font-bold text-[var(--primary-color)]">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Focus SOC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}