import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  server: {
    post: 3000,
    open: true,
  },
  build: {
    outDir: "../dist",
  },
});
