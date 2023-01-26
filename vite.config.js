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
      "@api": path.resolve(__dirname, '/src/api')
    }
  },
  plugins: [react(),fs()],
})
