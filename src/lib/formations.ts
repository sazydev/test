import type { Formation } from "@/types/formation";

// Catalogue de démonstration : remplacer les offres et les URL avant publication.
export const formations: Formation[] = [
  {
    id: "premier-site",
    number: "01",
    category: "Web",
    price: 49,
    visual: "web",
    beaconsUrl: null,
    title: "Ton premier site avec l’IA",
    tagline: "De la première idée au site en ligne.",
    description:
      "Apprends à préparer ton projet, travailler avec ChatGPT et Codex, comprendre les bases de React et Next.js, puis mettre ton site en ligne.",
    program: [
      "Installer les outils et prendre en main VS Code.",
      "Préparer un brief et organiser son projet.",
      "Construire les sections et intégrer ses images.",
      "Adapter le site au mobile et le publier.",
    ],
    project: "Un site vitrine que tu peux montrer et faire évoluer.",
  },
  {
    id: "ia-projets",
    number: "02",
    category: "IA",
    price: 29,
    visual: "ia",
    beaconsUrl: null,
    title: "L’IA pour tes projets",
    tagline: "Des idées plus claires. Des résultats plus utiles.",
    description:
      "Apprends à donner de bonnes consignes à l’IA pour préparer tes contenus, structurer tes idées et avancer sur tes projets.",
    program: [
      "Donner du contexte et formuler une demande précise.",
      "Préparer des textes et des plans de contenu.",
      "Améliorer les réponses et vérifier les informations.",
      "Construire une bibliothèque de prompts réutilisables.",
    ],
    project: "Une boîte à outils adaptée à ton propre projet.",
  },
  {
    id: "identite-visuelle",
    number: "03",
    category: "Design",
    price: 39,
    visual: "design",
    beaconsUrl: null,
    title: "Une identité visuelle qui te ressemble",
    tagline: "Donne une vraie personnalité à ton projet.",
    description:
      "Construis un univers cohérent avec des couleurs, des typographies et des visuels que tu sais utiliser.",
    program: [
      "Définir une direction avec un moodboard.",
      "Choisir sa palette et ses typographies.",
      "Composer ses premiers visuels avec Canva.",
      "Préparer des modèles pour ses prochaines publications.",
    ],
    project: "Une mini charte graphique et tes premiers supports.",
  },
  {
    id: "premiers-contenus",
    number: "04",
    category: "Social",
    price: 35,
    visual: "social",
    beaconsUrl: null,
    title: "Tes premiers contenus pour les réseaux",
    tagline: "Arrête de chercher quoi publier. Commence à créer.",
    description:
      "Apprends à trouver des sujets, préparer tes vidéos et organiser des contenus cohérents avec ton projet.",
    program: [
      "Définir son audience et ses thèmes.",
      "Écrire une accroche et un script court.",
      "Préparer et monter une vidéo verticale.",
      "Organiser un calendrier de publication.",
    ],
    project: "Un plan de contenu et trois premiers scripts.",
  },
];

export const faqs = [
  [
    "Je pars de zéro, je peux commencer ?",
    "Les parcours proposés sont pensés pour débuter. Consulte le programme et les prérequis de chaque formation sur sa page Beacons.",
  ],
  [
    "Où est-ce que j’achète la formation ?",
    "Le bouton de chaque formation t’emmène vers sa page Beacons, où tu peux consulter les détails et effectuer ton achat.",
  ],
  [
    "Comment est-ce que je reçois la formation ?",
    "Les modalités d’accès sont indiquées sur la page Beacons de la formation avant l’achat.",
  ],
  [
    "Faut-il prévoir des outils payants ?",
    "Cela dépend du parcours et des outils choisis. Consulte les prérequis pour connaître les éventuels coûts supplémentaires.",
  ],
  [
    "Quelle formation choisir en premier ?",
    "Commence par celle qui correspond à ton projet immédiat : créer un site, utiliser l’IA, préparer tes visuels ou publier des contenus.",
  ],
] as const;
