import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { Catalogue } from "@/components/catalogue";
import { MethodSection } from "@/components/method-section";
import { FAQ } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Arrow, Sparkle } from "@/components/ui/icons";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="skills-strip">
          <div className="container skills-inner">
            <div>
              <strong>04</strong>
              <span>
                parcours
                <br />
                pour commencer
              </span>
            </div>
            <div>
              <strong>WEB</strong>
              <span>
                crée ton
                <br />
                premier site
              </span>
            </div>
            <div>
              <strong>IA</strong>
              <span>
                transforme
                <br />
                tes idées
              </span>
            </div>
            <div>
              <strong>
                DESIGN
                <br />& SOCIAL
              </strong>
              <span>
                donne-leur
                <br />
                de la visibilité
              </span>
            </div>
          </div>
        </div>
        <Catalogue />
        <MethodSection />
        <div className="creative-marquee" aria-hidden="true">
          <span>UNE IDÉE</span>
          <Sparkle />
          <span>UN DÉCLIC</span>
          <Sparkle />
          <span>UN PROJET</span>
          <Sparkle />
          <span className="outline-text">À TOI DE CRÉER</span>
          <Sparkle />
        </div>
        <FAQ />
        <section className="container final-cta">
          <div className="cta-orbit" aria-hidden="true" />
          <p className="eyebrow">ÇA COMMENCE PAR UN PREMIER PAS.</p>
          <h2>
            TON PROCHAIN PROJET
            <br />
            <span className="accent">COMMENCE ICI.</span>
          </h2>
          <p>Choisis une compétence. Crée quelque chose de concret.</p>
          <a className="button" href="#formations">
            Choisir ma formation <Arrow diagonal />
          </a>
          <span className="cta-spark" aria-hidden="true">
            <Sparkle />
          </span>
        </section>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
