import Image from "next/image";
import { Arrow, Sparkle } from "./ui/icons";

export function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-stars" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> on essaie quelque chose
          </p>
          <h1>
            PASSE DE
            <br />
            <span className="idea-line">« J’AI UNE IDÉE »</span>
            <br />À <span className="accent">« JE L’AI FAIT ».</span>
          </h1>
          <p className="hero-description">
            Créer ton premier site, utiliser l’IA, construire une identité
            visuelle ou lancer tes contenus : découvre des formations qui
            t’aident à avancer, étape par étape.
          </p>
          <div className="hero-actions">
            <a href="#formations" className="button">
              Découvrir les formations <Arrow diagonal />
            </a>
            <a href="#methode" className="text-link">
              Comprendre la méthode <Arrow />
            </a>
          </div>
          <p className="hero-footnote">
            <span>✳</span> Pour débuter <i /> Pour pratiquer <i /> Pour créer
          </p>
        </div>
        <div className="hero-scene">
          <div className="scene-orbit orbit-one" />
          <div className="scene-orbit orbit-two" />
          <div className="scene-glow" />
          <div className="scene-label">
            <span className="status-dot" /> MODE CRÉATION : ACTIVÉ
          </div>
          <Image
            src="/images/creative-lab.webp"
            alt="Ordinateur en 3D entouré de fenêtres créatives, d’un curseur et d’outils de design en suspension."
            width={1200}
            height={1200}
            preload
            sizes="(max-width: 760px) 100vw, 55vw"
            className="hero-art"
          />
          <div className="floating-note">
            <span className="note-icon">
              <Sparkle />
            </span>
            <div>
              UNE IDÉE, C’EST LE DÉBUT.<strong>La suite, c’est toi.</strong>
            </div>
            <Arrow diagonal />
          </div>
          <span className="scene-caption">IMAGINE. APPRENDS. CRÉE.</span>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>LE DÉCLIC POUR TE LANCER</span>
        <a href="#formations" aria-label="Explorer les formations">
          ↓
        </a>
        <span>FAIS PLACE À TES IDÉES.</span>
      </div>
    </section>
  );
}
