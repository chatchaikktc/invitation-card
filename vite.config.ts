import { defineConfig, loadEnv } from "vite";
import path, { resolve } from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_PUBLIC_URL,
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        treeshake: true,
        input: {
          main: resolve(__dirname, "index.html"),
          en: resolve(__dirname, "en/index.html"),
        },
        output: {
          assetFileNames: (assetInfo) => {
            const fileExt = assetInfo.name.split(".").pop();

            if (fileExt === "css") {
              return `assets/[name]-[hash].[ext]`;
            }

            return `assets/[name].[ext]`;
          },
        },
      },
      chunkSizeWarningLimit: 1500,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [react(), svgr()],
  };
});
