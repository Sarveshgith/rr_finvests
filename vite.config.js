import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // set to 1000 kB or any other value
  },
})
