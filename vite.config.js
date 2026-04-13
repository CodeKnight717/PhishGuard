import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative base path for GitHub Pages to support any repo name
  base: './', 
  plugins: [react()],
})