import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://angeloChoquet.github.io",
  base: "Landing-Page-Astro",
  integrations: [tailwind(), icon({
    collections: {
      local: "./src/icons"
    }
  }), react()]
});