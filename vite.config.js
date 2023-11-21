import { defineConfig } from "vite";
import path from "path";

const dir = {
  src: "src",
  publicDir: "public",
  outDir: "dist",
};

export default defineConfig({
  root: dir.src,
  // base: "./",
  publicDir: `../${dir.publicDir}`,
  // plugins: [],

  build: {
    outDir: `../${dir.outDir}`,
    target: "es2018",
    cssTarget: "safari14",
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "src"),
    },
  },

  server: {
    open: true,
  },

  css: {
    devSourcemap: true,
  },
});
