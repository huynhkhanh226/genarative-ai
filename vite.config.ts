import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  console.log("mode ", mode);
  console.log("env", env);
  console.log("VITE_OPENAI_API_KEY:", env.VITE_OPENAI_API_KEY);
  return {
    // vite config
    plugins: [react(), tailwindcss(), crx({ manifest })],
    define: {
      __OPENAI_API_KEY__: JSON.stringify(env.VITE_OPENAI_API_KEY),
    },
    server: {
      host: "localhost",
      port: 3000,
    },
    // build: {
    //   target: "esnext",
    //   sourcemap: false,
    //   rollupOptions: {
    //     output: {
    //       entryFileNames: "assets/[name].js",
    //       chunkFileNames: "assets/[name]-[hash].js",
    //     },
    //   },
    // },
  };
});
