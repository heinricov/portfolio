import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Flowbite } from "flowbite-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Flowbite()],
  base: "/portfolio/",
});
