# Nader Fkih Hassen: Portfolio

Personal portfolio site (static HTML, CSS, JavaScript) hosted on GitHub Pages.

## Live

https://naderfkihhassen.github.io/Portfolio/

## Featured work

- **Thiabee**: Saudi fashion marketplace ([thiabee.com](https://thiabee.com))
- **DrWarsha**: iOS automotive care app ([drwarsha.com](https://drwarsha.com), App Store visible in Saudi Arabia)
- **Lura**: graduation / internship project (StartupFACTORY)

## Features

- FR / EN language toggle (stored in `localStorage` as `portfolio.lang`)
- Responsive layout
- Contact form via FormSubmit
- No build step: edit files and push to `main`

## Stack

- HTML5
- CSS3 (custom properties, responsive layout)
- JavaScript (ES6+)
- Google Fonts: Syne, Source Sans 3

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Edit copy

UI strings live in `script.js` under `translations.en` and `translations.fr`. Mark elements with `data-i18n="key"`.
