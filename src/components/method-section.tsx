import { CourseArt } from "./ui/course-art";
import { Sparkle } from "./ui/icons";
import { site } from "@/config/site";

const steps = [
  [
    "Choisis ton projet",
    "Un site, une identité ou tes premiers contenus : définis ce que tu veux créer.",
  ],
  [
    "Avance étape par étape",
    "Découvre les outils et les méthodes dans un ordre qui a du sens.",
  ],
  ["Mets en pratique", "Applique ce que tu apprends à ton propre projet."],
];
export function MethodSection() {
  return (
    <section id="methode" className="method-section">
      <div className="container method-grid">
        <div className="method-art" aria-hidden="true">
          <div className="method-glow" />
          <div className="collectible collectible-back">
            <CourseArt kind="design" />
            <div className="collectible-footer">
              <strong>
                MAKE IT
                <br />
                YOUR OWN.
              </strong>
              <span>
                DESIGN
                <br />
                03 / {site.name}
              </span>
            </div>
          </div>
          <div className="collectible collectible-front">
            <CourseArt kind="web" />
            <div className="collectible-footer">
              <strong>
                FROM IDEA
                <br />
                TO REALITY.
              </strong>
              <span>
                WEB
                <br />
                01 / {site.name}
              </span>
            </div>
          </div>
          <span className="method-stamp">
            À TOI<small>DE PASSER À L’ACTION</small>
          </span>
          <div className="method-spark">
            <Sparkle />
          </div>
          <span className="method-art-caption">
            DES COMPÉTENCES. UN VRAI PROJET.
          </span>
        </div>
        <div className="method-copy">
          <p className="eyebrow">02 / LA MÉTHODE</p>
          <h2>
            APPRENDS
            <br />
            <span className="accent">EN FAISANT.</span>
          </h2>
          <p className="method-intro">
            Commencer un projet digital peut vite devenir compliqué : trop
            d’outils, trop de tutoriels, et aucune idée de la prochaine étape.
            L’objectif ici est simple : partir d’un projet concret et apprendre
            ce dont tu as besoin pour le réaliser.
          </p>
          <ol className="method-steps">
            {steps.map(([title, description], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
