import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // permite cualquier host local
    port: 1000,
    allowedHosts: [
      "interbanking-phrase-react-senior.onrender.com"
    ],
  },
});
