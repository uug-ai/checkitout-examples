import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBaseUrl = env.VITE_API_BASE_URL || 'http://localhost:8000/api'

  return {
    plugins: [
      react(),
      {
        name: 'checkout-plugin-config',
        transformIndexHtml() {
          return [{
            tag: 'script',
            children: `window.CheckoutPluginConfig = ${JSON.stringify({ apiBaseUrl })}`,
            injectTo: 'head-prepend',
          }]
        },
      },
    ],
    server: {
      host: true,
    },
  }
})
