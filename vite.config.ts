import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署時，網址為 https://<username>.github.io/<repo-name>/
// 因此 base 必須設定為 '/<repo-name>/'。
// 若日後改用自訂網域或 Azure Static Web Apps，將 base 改回 '/' 即可。
// 可透過環境變數 VITE_BASE 覆寫，方便不同部署環境切換。
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASE ?? '/Learning/',
    plugins: [react()],
  }
})
