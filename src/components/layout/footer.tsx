import { site } from "@/config/site";
import { Arrow } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-main">
        <div>
          <a className="logo" href="#accueil">
            {site.name}
            <span className="logo-dot" />
          </a>
          <p>{site.tagline}</p>
        </div>
        <nav aria-label="Navigation de pied de page">
          <a href="#formations">
            Formations <Arrow diagonal />
          </a>
          <a href="#methode">
            La méthode <Arrow diagonal />
          </a>
          <a href="#faq">
            FAQ <Arrow diagonal />
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {site.name} · Fais place à tes idées.</span>
        <div>
          {site.legalUrl ? (
            <a href={site.legalUrl}>Mentions légales</a>
          ) : (
            <span>Mentions légales — à renseigner</span>
          )}
          {site.privacyUrl ? (
            <a href={site.privacyUrl}>Confidentialité</a>
          ) : (
            <span>Confidentialité — à renseigner</span>
          )}
          {site.contactEmail ? (
            <a href={`mailto:${site.contactEmail}`}>Contact</a>
          ) : (
            <span>Contact — à renseigner</span>
          )}
        </div>
        <a href="#accueil" className="back-top" aria-label="Retour en haut">
          ↑
        </a>
      </div>
    </footer>
  );
}
