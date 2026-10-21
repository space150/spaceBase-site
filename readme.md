spaceBase.space150.com
======================
The public site promoting spaceBase, built with [Next.js](https://nextjs.org) and exported as a static site to GitHub Pages.

## Setup
1. `nvm use`
1. `npm install`
1. `npm run dev`
1. `npm run lint` and `npm run typecheck` to keep things clean.

## Build
`npm run build` exports the static site to `out/`. Preview it with `npm start`.

## Deploy
Pushing to `gh-pages` builds and deploys the site through GitHub Actions. The site is also rebuilt every January 1st so the footer copyright year stays current.

## Upgrading spaceBase
spaceBase is pulled in from `npm` as the `spacebase` package.

`npm install spacebase@latest`

The site's own overrides live in `styles/`, while stock spaceBase partials are imported from `spacebase/scss/`.