import type { Formation } from "@/types/formation";
import { CourseArt } from "./ui/course-art";
import { Arrow } from "./ui/icons";

export function BeaconsButton({ formation }: { formation: Formation }) {
  return formation.beaconsUrl ? (
    <a
      className="beacons-button"
      href={formation.beaconsUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Découvrir sur Beacons <Arrow diagonal />
    </a>
  ) : (
    <button className="beacons-button" disabled>
      Lien bientôt disponible <span aria-hidden="true">↗</span>
    </button>
  );
}

export function FormationCard({
  formation,
  onProgram,
}: {
  formation: Formation;
  onProgram: () => void;
}) {
  return (
    <article className={`formation-card card-${formation.visual}`}>
      <div className="card-visual">
        <CourseArt kind={formation.visual} />
        <span className="card-number">
          0{formation.number.replace(/^0/, "")} / COLLECTION
        </span>
        <span className="card-category">{formation.category}</span>
      </div>
      <div className="card-body">
        <div className="card-heading">
          <span>LE PARCOURS {formation.number}</span>
          <strong>
            {formation.price} <small>€</small>
          </strong>
        </div>
        <h3>{formation.title}</h3>
        <p>{formation.tagline}</p>
        <button className="program-button" onClick={onProgram}>
          Voir le programme <Arrow />
        </button>
        <BeaconsButton formation={formation} />
      </div>
    </article>
  );
}
