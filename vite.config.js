import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Ensure that warnings are emitted
      emitError: false, // Do not emit errors
    }),
  ],
});
