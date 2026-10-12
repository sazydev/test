import type { Formation } from "@/types/formation";
import { Sparkle } from "./icons";

export function CourseArt({ kind }: { kind: Formation["visual"] }) {
  return (
    <div className={`course-art art-${kind}`} aria-hidden="true">
      <div className="art-grid" />
      <span className="art-orbit" />
      {kind === "web" && (
        <div className="mini-browser">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>your-next-idea.site</span>
          </div>
          <div className="browser-content">
            <div className="browser-pill" />
            <strong>
              MAKE
              <br />
              <em>IT REAL.</em>
            </strong>
            <div className="browser-line" />
            <div className="browser-button" />
            <span className="browser-cursor">↖</span>
          </div>
        </div>
      )}
      {kind === "ia" && (
        <>
          <div className="ai-sculpture">
            <Sparkle />
          </div>
          <div className="prompt-chip">
            Ton idée <span>→</span> Ta prochaine étape
          </div>
          <span className="art-dot" />
        </>
      )}
      {kind === "design" && (
        <>
          <div className="palette-sheet">
            <span>THE CREATIVE EDIT</span>
            <strong>
              Aa<span>✳</span>
            </strong>
            <div className="swatches">
              <i />
              <i />
              <i />
              <i />
            </div>
            <small>MAKE IT YOURS.</small>
          </div>
          <div className="palette-circle" />
        </>
      )}
      {kind === "social" && (
        <>
          <div className="social-phone">
            <div className="phone-notch" />
            <div className="phone-star">
              <Sparkle />
            </div>
            <div className="play-triangle" />
            <div className="phone-caption">
              UNE IDÉE.
              <br />
              UN CONTENU.
            </div>
            <div className="phone-lines" />
          </div>
          <div className="social-notification">
            <span>↗</span> À toi de créer.
          </div>
        </>
      )}
      <span className="art-coordinate">DIGITAL SKILLS / CREATIVE TOOLS</span>
    </div>
  );
}
