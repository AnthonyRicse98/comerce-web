import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // Importa el plugin

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // Lo añade aquí
  ],
  base: "https://anthonyricse98.github.io/comerce-web/",
})