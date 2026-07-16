import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the repo name for GitHub Pages project sites.
// If you deploy to Vercel or a custom domain, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/fadehaus-barbershop/',
})
