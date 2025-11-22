export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Colonne de gauche - Photo/Illustration */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                YK
              </div>
              {/* Élément décoratif */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Colonne de droite - Contenu */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Développeur Passionné & Futur Ingénieur en Cybersécurité
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Je suis un{" "}
                <span className="text-blue-600 font-semibold">
                  développeur web et mobile junior
                </span>
                avec une passion grandissante pour la cybersécurité.
                Actuellement en formation en Génie informatique option
                <span className="text-blue-600 font-semibold">
                  {" "}
                  Cybersécurité
                </span>
                , je combine mes compétences en développement avec une approche
                sécurité-first.
              </p>

              <p className="text-lg leading-relaxed">
                J'ai déjà eu l'opportunité de travailler en stage en entreprise
                où j'ai pu développer une application concrète et comprendre les
                enjeux du développement en milieu professionnel.
              </p>

              <p className="text-lg leading-relaxed">
                Mon objectif principal ? Devenir{" "}
                <span className="text-blue-600 font-semibold">
                  pentester professionnel
                </span>
                . Le développement reste un{" "}
                <span className="text-blue-600 font-semibold">
                  atout stratégique
                </span>{" "}
                pour comprendre les vulnérabilités des applications et proposer
                des solutions de sécurisation efficaces.
              </p>
            </div>

            {/* Stats ou informations clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  2+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Projets Complets
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  6+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Mois d'Expérience
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">Motivé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
