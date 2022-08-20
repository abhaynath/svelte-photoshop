import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-photoshop/",
  plugins: [svelte()],
  server:{
    port:3030
  }
});
