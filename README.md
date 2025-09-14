# dvsa-webchat-form
Webchat form for DVSA front end interface into the contact centre
Webchat agent front end interface styled according to the GOV.UK Design System

Details: contact DVSA webchat team
[https://www.dvsa.gov.uk/contact-us](https://www.dvsa.gov.uk/contact-us)

## Project structure
This project uses [Eleventy](https://www.11ty.dev/) for static site generation and supports internationalisation (English/Welsh).

- Source files: `src/`
  - English pages: `src/en/`
  - Welsh pages: `src/cy/`
  - Shared layouts/macros: `src/_includes/`
  - Data files: `src/_data/`
- Output: `_site/`

## Getting started
Install dependencies:

```bash
npm install
```

Run the site locally:

```bash
npm start
```

Or build the static site:

```bash
npm run build
```

The generated site will be in the `_site/` directory. Open `http://localhost:8080` in your browser to view locally.

## Internationalisation
Add new pages in `src/en/` and `src/cy/` for English and Welsh content. Use shared layouts and macros for consistency.
