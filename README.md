# eSIM Myanmar Website

This repository contains the frontend application for the eSIM Myanmar website. It is a Vite + React application.

## Run Locally

### Prerequisites

Node.js LTS (install from https://nodejs.org)

### Steps

1. Install dependencies:
```bash
npm install
```

2. Set the GEMINI_API_KEY in .env.local to your Gemini API key

3. Run the app:
```bash
npm run dev
```

## Local Build

### Requirements

Node.js LTS

### Steps

1. Install dependencies: `npm ci`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

## Deployment

This project uses GitHub Actions to build and deploy the site to GitHub Pages (branch: gh-pages). The workflow file is at .github/workflows/deploy.yml.

## CI/CD

The CI workflow will run on pushes to main and nexorasim/patch-52082. It installs dependencies, runs optional validations, builds the site, and deploys the dist folder to gh-pages using the GITHUB_TOKEN.

## Contact

- Email: info@esim.com.mm
- Phone: 09650000172
- Social: @eSIMMyanmarr

## Notes

Maintain plain text, professional formatting. No emojis are used in this README.