import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      external: [
        "/609cf3f6efc015e88e460fe3/63160e036a2fa1ffd878fd44_img_sg_background_dont.png",
        "/609cf3f6efc015e88e460fe3/6316114c6a2fa10e26792324_img_sg_atomic_do.png",
      ],
    },
    chunkSizeWarningLimit: 3000,
  },
});
