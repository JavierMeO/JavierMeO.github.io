import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default {
  content: [
    "./index.html",
    "./src/**.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  base: "/IAurora"
}
