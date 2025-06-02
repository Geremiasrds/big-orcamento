// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/big-orcamento/', // 👈 ISSO é essencial para o deploy funcionar
})