
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration pour GitHub Pages
export default defineConfig({
  plugins: [react()],
  // Le point '.' permet un déploiement flexible sur n'importe quel sous-dossier GitHub Pages
  base: './', 
  // On définit explicitement le dossier source des fichiers statiques
  publicDir: 'public', 
  build: {
    outDir: 'dist',
    // On s'assure que le contenu du dossier public est copié à la racine du dossier dist
    copyPublicDir: true,
    // On désactive la mise en cache agressive des noms de fichiers pour les assets si nécessaire
    assetsInlineLimit: 0, 
  }
})
