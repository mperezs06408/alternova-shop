import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'vite-plugin-fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      "@": path.resolve(__dirname, '/src'),
      "@slices": path.resolve(__dirname, '/src/store/slices'),
      "@assets": path.resolve(__dirname, '/src/assets')
    }
  },
  plugins: [react(),fs()],
})
