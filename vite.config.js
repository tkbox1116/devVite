import { defineConfig } from "vite";
import imageminPlugin from "@macropygia/vite-plugin-imagemin-cache";
import sassGlobImports from "vite-plugin-sass-glob-import";
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
  plugins: [
    sassGlobImports(),
    imageminPlugin({
      cacheDir: ".cache",
      concurrency: 4,
      plugins: {
        pngquant: { quality: [0.65, 1] },
        mozjpeg: { quality: 85 },
      },
    }),
  ],

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
