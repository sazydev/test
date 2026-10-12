"use client";

import { useState } from "react";
import { formations } from "@/lib/formations";
import type { Category, Formation } from "@/types/formation";
import { FormationCard } from "./formation-card";
import { FormationModal } from "./formation-modal";

const filters = ["Toutes", "Web", "IA", "Design", "Social"] as const;
export function Catalogue() {
  const [filter, setFilter] = useState<Category | "Toutes">("Toutes");
  const [selected, setSelected] = useState<Formation | null>(null);
  const visible = formations.filter(
    (formation) => filter === "Toutes" || formation.category === filter,
  );
  return (
    <section id="formations" className="section catalogue container">
      <div className="section-top">
        <p className="eyebrow">01 / À TOI DE JOUER</p>
        <span className="section-index">LE CATALOGUE</span>
      </div>
      <div className="catalogue-heading">
        <h2>
          CHOISIS CE QUE
          <br />
          TU VEUX <span className="accent">CRÉER.</span>
        </h2>
        <p>
          Un projet en tête ? Commence par les compétences qui vont t’aider à le
          concrétiser.
        </p>
      </div>
      <div className="catalogue-toolbar">
        <div
          className="filters"
          role="group"
          aria-label="Filtrer les formations"
        >
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="catalogue-count" role="status">
          0{visible.length} parcours à explorer
        </span>
      </div>
      <div className="formation-grid">
        {visible.map((formation) => (
          <FormationCard
            key={formation.id}
            formation={formation}
            onProgram={() => setSelected(formation)}
          />
        ))}
      </div>
      <p className="catalogue-disclaimer">
        <span>ⓘ</span> Catalogue de démonstration · Offres et tarifs à confirmer
        avant ouverture.
      </p>
      <FormationModal formation={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
