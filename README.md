# Blocage mental - Masterclass gratuite

Landing page statique professionnelle inspirée du contenu de `deepperformance.site/landing-page`.

Identité visuelle : Deep Performance.

Nom de dépôt public recommandé :

```text
blocage-mental-masterclass
```

URL publique attendue :

```text
https://deepperformance.site/
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

Dans GitHub, créer un dépôt public nommé `blocage-mental-masterclass`, pousser ce dossier comme racine du dépôt, activer GitHub Pages avec la source `GitHub Actions`, puis configurer le domaine personnalisé `deepperformance.site`.

DNS requis pour le domaine racine :

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

Optionnel pour `www.deepperformance.site` :

```text
CNAME www   elhisse-clprepas.github.io
```

## Contrôle avant publication

- Page principale : `index.html`.
- URL publique : `https://deepperformance.site/`.
- SEO minimal : balise canonical, Open Graph, Twitter Card, `robots.txt` et `sitemap.xml`.
- Vidéo principale : `assets/videos/temoignage-client-01.mp4`.
- Affiche principale : `assets/images/affiches/affiche-masterclass-05.jpeg`.

Note : `assets/videos/masterclass-introduction.mp4` dépasse légèrement la recommandation GitHub de 50 Mo. La page reste publiable, mais une compression vidéo améliorera la vitesse de chargement.
