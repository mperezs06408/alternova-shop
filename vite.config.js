import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import process from "process";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log(env);

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@slices": path.resolve(__dirname, "./src/store/slices"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@atoms": path.resolve(__dirname, "./src/components/atom"),
        "@molecules": path.resolve(__dirname, "./src/components/molecules"),
        "@organisms": path.resolve(__dirname, "./src/components/organisms"),
        "@template": path.resolve(__dirname, "./src/components/template"),
        "@styles": path.resolve(__dirname, "./src/styles"),
      },
    },
    plugins: [react(), /*fs(),*/ svgr()],
  };
});
