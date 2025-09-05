import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT:
// - If you deploy to https://<user>.github.io/<repo>/, set base to '/<repo>/'.
// - If you deploy to https://<user>.github.io/ (user/organization site), set base to '/'.
const base = (process.env.VITE_BASE_PATH ?? '/<REPO_NAME>/')

export default defineConfig({
  plugins: [react()],
  base,
})
