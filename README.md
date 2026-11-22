# Travel Ventures

Site vitrine React pour découvrir des paysages du monde : une page d'accueil, des destinations et un formulaire de contact. Projet d'Emile Dufoulon.

**En ligne :** https://emilesch19.github.io/Travel_Ventures/

## Points techniques

- React 19 + Vite, composants fonctionnels (`Navbar`, `Home`, `Decouvrir`, `Contact`)
- Images optimisées en WebP (≈ 600 Ko au total au lieu de plus de 100 Mo), dimensions déclarées, chargement différé (`loading="lazy"`) sous la ligne de flottaison et image de fond allégée sur mobile
- Formulaire contrôlé (`useState`) avec champs obligatoires et confirmation — démo, rien n'est envoyé
- Responsive, navigation par ancres avec défilement doux, libellés accessibles
- Déploiement automatique sur GitHub Pages à chaque push sur `main` (GitHub Actions)

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:5173/Travel_Ventures/
npm run build
npm run lint
```
