import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "https://anthonyricse98.github.io/comerce-web/", 
  resolve: {
    alias: {
      '@literals': path.resolve(__dirname, './src/literals.js'),
    },
  },
})