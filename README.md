# Blocage mental - Masterclass gratuite

Landing page statique professionnelle inspirée du contenu de `deepperformance.site/landing-page`.

Identité visuelle : Deep Performance.

Nom de dépôt public recommandé :

```text
blocage-mental-masterclass
```

URL publique GitHub Pages :

```text
https://elhisse-clprepas.github.io/blocage-mental-masterclass/
```

## Structure

- `index.html` : page principale.
- `assets/css/styles.css` : styles responsive.
- `assets/js/main.js` : script léger.
- `assets/images/` : images publiques optimisées par nom.
- `assets/images/logo-deep-performance.svg` : logo DP public utilisé dans l’en-tête.
- `assets/images/affiches/` : affiches et supports visuels publics.
- `assets/videos/` : vidéos publiques de la masterclass et des témoignages.
- `content/texte-original-landing-page.txt` : texte extrait de la page source pour correction et reprise.
- `content/affiches-map.json` : correspondance entre les noms originaux et les noms publics des affiches.
- `.github/workflows/deploy-github-pages.yml` : publication automatique via GitHub Actions.

## Publication

Dans GitHub, créer un dépôt public nommé `blocage-mental-masterclass`, pousser ce dossier comme racine du dépôt, puis activer GitHub Pages avec la source `GitHub Actions`.

Si l’URL finale doit rester une page du site existant, par exemple `https://deepperformance.site/landing-page`, il faut intégrer cette landing page dans le site `deepperformance.site` ou créer une redirection depuis cette page vers l’URL GitHub Pages. GitHub Pages ne peut pas prendre seulement le chemin `/landing-page` sans faire pointer le domaine vers GitHub.

## Contrôle avant publication

- Page principale : `index.html`.
- URL publique : `https://elhisse-clprepas.github.io/blocage-mental-masterclass/`.
- SEO minimal : balise canonical, Open Graph, Twitter Card, `robots.txt` et `sitemap.xml`.
- Vidéo principale : `assets/videos/temoignage-client-01.mp4`.
- Affiche principale : `assets/images/affiches/affiche-masterclass-05.jpeg`.

Note : `assets/videos/masterclass-introduction.mp4` dépasse légèrement la recommandation GitHub de 50 Mo. La page reste publiable, mais une compression vidéo améliorera la vitesse de chargement.
