
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration simplifiée sans dépendance à 'path' ou '__dirname'
export default defineConfig({
  plugins: [react()],
  base: './', // Crucial pour le déploiement sur GitHub Pages
  build: {
    outDir: 'dist',
  }
})
