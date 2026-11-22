# Travel Ventures

Site vitrine React pour découvrir des paysages du monde : une page d'accueil, des destinations et un formulaire de contact. Design « Océan » (Nunito, bleu-vert #0E7490). Projet d'Emile Dufoulon.

**En ligne :** https://emilesch19.github.io/Travel_Ventures/

## Points techniques

- React 19 + Vite, composants fonctionnels (`Navbar`, `Home`, `Decouvrir`, `Contact`)
- Images optimisées en WebP (≈ 600 Ko au total au lieu de plus de 100 Mo), dimensions déclarées, chargement différé (`loading="lazy"`) sous la ligne de flottaison et image de fond allégée sur mobile
- Destinations décrites dans `src/data/destinations.js` (ajouter une destination = une photo + un objet)
- Formulaire contrôlé (`useState`) : champs obligatoires, destination pré-remplie au clic sur une carte (état remonté dans le parent), confirmation — démo, rien n'est envoyé
- Responsive, navigation par ancres avec défilement doux, libellés accessibles
- Déploiement automatique sur GitHub Pages à chaque push sur `main` (GitHub Actions)

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:5173/Travel_Ventures/
npm run build
npm run lint
```
