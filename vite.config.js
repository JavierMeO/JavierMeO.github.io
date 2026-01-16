import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pricing: resolve(__dirname, "pages/privacy_politic.html"),
        contact: resolve(__dirname, "pages/terms_Conditions.html"),
      },
    },
  },
});
