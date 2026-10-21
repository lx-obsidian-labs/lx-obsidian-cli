import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.lxobsidianportal.co.za",
  server: {
    port: Number(process.env.PORT ?? 4173),
  },
});
