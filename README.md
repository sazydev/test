# DIGITAL$ — vitrine de formations

Site one page React / Next.js App Router, TypeScript et Tailwind CSS. Le projet local se trouve dans le dossier Klory ; la marque affichée est indépendante du nom du dossier.

## Lancer le projet

Node.js 24 LTS et npm sont installés sur ce poste.

```sh
npm install
npm run dev
```

Ouvrir http://localhost:3000. Pour une version de production : `npm run build`, puis `npm start`.

## Modifier la marque et les offres

- `src/config/site.ts` : nom de marque (utilisé par le logo, les métadonnées et le footer), description, phrase de marque et coordonnées.
- `src/lib/formations.ts` : catalogue de démonstration, prix en euros, catégories, accroches, descriptions, programmes, projets finaux et FAQ.
- `visual` sélectionne un visuel CSS/SVG dans `src/components/ui/course-art.tsx` : `web`, `ia`, `design` ou `social`.
- `src/app/globals.css` : palette, compositions, responsive et animations.
- `src/app/icon.svg` : monogramme du favicon, à adapter en cas de changement de marque.

### Liens Beacons

Dans chaque formation de `src/lib/formations.ts`, remplacer `beaconsUrl: null` par l’URL HTTPS complète de la vraie page Beacons de cette formation.

Le bouton désactivé « Lien bientôt disponible » devient automatiquement « Découvrir sur Beacons » et ouvre la page dans un nouvel onglet (`noopener noreferrer`). Aucune boutique tierce, URL devinée ou clé Stripe n’est utilisée. L’achat et le paiement restent sur Beacons.

## Avant une publication réelle

1. Remplacer ou confirmer le catalogue de démonstration : titres, tarifs, programmes, projets et prérequis. Retirer la mention de démonstration dans `catalogue.tsx` et `formation-modal.tsx` uniquement après validation.
2. Renseigner les quatre vraies pages Beacons et vérifier les modalités d’accès, éventuels coûts d’outils et détails commerciaux sur ces pages.
3. Renseigner `contactEmail`, `legalUrl` et `privacyUrl` dans `src/config/site.ts`. Tant que les valeurs sont nulles, des emplacements textuels s’affichent, sans faux lien.
4. Préparer les mentions légales et la politique de confidentialité avec les vraies informations de l’entreprise et les pratiques réellement utilisées. Aucune identité, adresse ou condition de vente n’a été inventée.
5. Choisir le domaine et l’hébergement, puis compléter si nécessaire les métadonnées et l’image de partage social.

Le site est livré localement. Aucun panier, compte utilisateur, formulaire de newsletter ou paiement intégré.

## Composants

`Header`, `Hero`, `FormationCard`, `FormationModal`, `Catalogue`, `MethodSection`, `FAQ`, `Footer`. Les interactions du menu et du catalogue sont côté client. Les autres sections sont rendues côté serveur. La FAQ utilise les éléments natifs `details`/`summary`. Le programme utilise `dialog`, avec fermeture par Échap, bouton et fond, boucle de focus et restitution du focus au déclencheur.

Les animations respectent `prefers-reduced-motion`. Le contenu reste visible sans déclenchement de l’observateur de défilement. Le visuel principal est optimisé avec `next/image` et les quatre visuels de formations sont construits en CSS/SVG.

## Visuels et police

- `public/images/creative-lab.webp` : illustration originale générée avec l’outil intégré imagegen, convertie en WebP (environ 123 Ko). Prompt conservé dans `docs/hero-asset.md`.
- `public/fonts/space-grotesk.ttf` : Space Grotesk, hébergée localement avec `next/font/local`. Source : dépôt officiel google/fonts. Licence OFL dans le même dossier. Aucun appel à Google Fonts depuis le navigateur.

## Vérifications

```sh
npm run build
npm run lint
npm run typecheck
npx playwright install chromium
npm run test:e2e
```

Les tests Chromium vérifient les quatre filtres, les quatre programmes, les fermetures, le focus clavier, le menu mobile, la FAQ, le chargement de l’image et l’absence de débordement à 360, 390, 768, 1024 et 1440 px. Les captures 360 et 1440 px sont écrites dans `test-results/` (ignoré par Git).

Le serveur local existant est réutilisé par Playwright. En CI, le test démarre son propre serveur.
