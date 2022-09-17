import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/svelte-photoshop/",
  plugins: [svelte(), tsconfigPaths()],
  server: {
    port: 3030,
  },
});
