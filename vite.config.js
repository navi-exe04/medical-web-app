import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@atoms": path.resolve(__dirname, "src/components/atoms/"),
      "@molecules": path.resolve(__dirname, "src/components/molecules/"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@templates": path.resolve(__dirname, "src/components/templates/"),
      "@styles": path.resolve(__dirname, "src/public/styles/"),
      "@scripts": path.resolve(__dirname, "src/public/scripts/"),
    },
  },
});
