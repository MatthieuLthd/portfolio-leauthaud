import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "https://matthieulthd.github.io/portfolio-leauthaud",
})
