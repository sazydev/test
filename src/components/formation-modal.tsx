"use client";

import { useEffect, useRef } from "react";
import type { Formation } from "@/types/formation";
import { BeaconsButton } from "./formation-card";

export function FormationModal({
  formation,
  onClose,
}: {
  formation: Formation | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!formation || !element) return;
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [formation]);
  return (
    <dialog
      ref={dialog}
      className="formation-modal"
      aria-labelledby="program-title"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const focusable = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not(:disabled), a[href], input:not(:disabled), [tabindex="0"]',
          ),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const box = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            onClose();
        }
      }}
    >
      {formation && (
        <div className="modal-content">
          <button
            autoFocus
            className="modal-close"
            aria-label="Fermer le programme"
            onClick={onClose}
          >
            ×
          </button>
          <p className="eyebrow">
            PARCOURS {formation.number} / {formation.category}
          </p>
          <h2 id="program-title">{formation.title}</h2>
          <p className="modal-description">{formation.description}</p>
          <h3>Ce que tu vas apprendre</h3>
          <ol className="program-list">
            {formation.program.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <div className="final-project">
            <p className="eyebrow">TON PROJET FINAL</p>
            <p>{formation.project}</p>
          </div>
          <div className="modal-bottom">
            <strong>{formation.price} €</strong>
            <BeaconsButton formation={formation} />
          </div>
          <p className="demo-note">
            Programme et tarif de démonstration. Les détails définitifs seront
            indiqués sur Beacons.
          </p>
        </div>
      )}
    </dialog>
  );
}
