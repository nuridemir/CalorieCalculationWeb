import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  "base": "/CalorieCalculationWeb",
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
