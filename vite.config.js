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
      "@assets": path.resolve(__dirname, '/src/assets'),
      "@atoms": path.resolve(__dirname,'/src/components/atom'),
      "@molecules": path.resolve(__dirname,'/src/components/molecules'),
      "@organisms": path.resolve(__dirname,'/src/components/organisms'),
    }
  },
  plugins: [react(),fs()],
})
