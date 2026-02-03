import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base: assets load correctly at any URL (e.g. .../gym-landing-page/)
  base: './',
})
