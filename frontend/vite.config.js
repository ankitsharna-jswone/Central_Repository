import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        '/api/charts/get': {
            target: 'http://localhost:3009',
            changeOrigin: true,
            secure: false,
        },
    },
},
})

