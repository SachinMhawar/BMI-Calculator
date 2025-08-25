// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // agar React use kar rahe ho

export default defineConfig({
  plugins: [react()],
  base: '/BMI-Calculator/'  // <-- repo name exactly yahi do
})
