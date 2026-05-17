import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Macros-fisch/', // Добавили эту строчку, чтобы пути вели в твою подпапку
})
