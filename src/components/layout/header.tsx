"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { Arrow } from "@/components/ui/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          className="logo"
          href="#accueil"
          aria-label={`${site.name}, accueil`}
        >
          {site.name}
          <span className="logo-dot" />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          aria-label="Navigation principale"
          className={open ? "navigation is-open" : "navigation"}
        >
          <a href="#formations" onClick={() => setOpen(false)}>
            Formations
          </a>
          <a href="#methode" onClick={() => setOpen(false)}>
            La méthode
          </a>
          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <a
            href="#formations"
            className="button button-small"
            onClick={() => setOpen(false)}
          >
            Trouver ma formation <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
