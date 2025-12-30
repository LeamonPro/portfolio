# Aymen - Creative Developer Portfolio

A futuristic portfolio built with React, TypeScript, and Framer Motion.

## Features
- **Futuristic Design**: Glassmorphism, neon accents, and dark mode.
- **Motion**: Smooth animations powered by Framer Motion.
- **Responsive**: Fully optimized for mobile and desktop.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Locally**:
    ```bash
    npm run dev
    ```

## Deployment to GitHub Pages

To deploy this portfolio to GitHub Pages:

1.  **Configure Base Path**:
    Open `vite.config.ts` and add the `base` property with your repository name.
    
    ```ts
    export default defineConfig({
      plugins: [react()],
      base: '/your-repo-name/', // Change this to your repository name
    })
    ```

2.  **Install `gh-pages`**:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  **Update `package.json`**:
    Add these scripts to `package.json`:
    
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      ...
    }
    ```

4.  **Deploy**:
    Run the deploy command:
    ```bash
    npm run deploy
    ```
