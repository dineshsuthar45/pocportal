import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const FRONTEND_HOST = process.env.VITE_APP_HOST;
const FRONTEND_PORT = process.env.VITE_APP_PORT;

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(FRONTEND_PORT) || 3003,
    host: FRONTEND_HOST || "localhost" || "192.168.70.70",
  },

  build: {
    outDir: "build",
  },

  preview: {
    port: 3001,
    host: "localhost" || "192.168.70.70",
  },
});
