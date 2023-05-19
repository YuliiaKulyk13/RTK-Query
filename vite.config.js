import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/RTK-Query/",
  server: {
    open: "https://github.com/YuliiaKulyk13/RTK-Query",
    port: 8000,
  },
});
