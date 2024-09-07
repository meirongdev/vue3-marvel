import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  VitePWA({
    registerType: "prompt",
    injectRegister: false,
    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      // type: 'module',
    },
    workbox: {
      globPatterns: ['**/*.{js, css, html, icon, png, svg, jpg}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    includeAssets: ['fonts/*.ttf', 'images/*.png', 'css/*.css'],
    manifest: {
      short_name: 'Marvel Explorer',
      name: "Mavel Explorer PWA",
      description: "Marvel Explorer PWA for showcase",
      // start_url: "/",
      display: "standalone",
      theme_color: "#333333",
      background_color: "#000000",
      orientation: "portrait",
      icons: [
        {
          "src": "/android-chrome-192x192.png",
          "sizes": "192x192", "type": "image/png"
        },
        {
          "src": "/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }],
      prefer_related_applications: false,
    },
  })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
})
