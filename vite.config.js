import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['preuve.honyzey.site', 'localhost'],
  },
  plugins: [vue()],
})
