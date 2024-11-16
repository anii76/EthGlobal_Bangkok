import { ConfigEnv, defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import TsconfigPaths from 'vite-tsconfig-paths'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const config = {
    plugins: [react(), TsconfigPaths()],
    server: {
      open: true,
      host: 'dev.kinto.xyz',
      port: 3001,
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'dev.kinto.xyz+3-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'dev.kinto.xyz+3.pem')),
      },
    },
    build: {
      outDir: "build",
      sourcemap: true,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/setupTests",
      mockReset: true,
    },
    base: '/'
  };
  console.log('env', env);

  if (env.command !== 'serve') {
    config.base = '/app/'
  }

  return config;
});
