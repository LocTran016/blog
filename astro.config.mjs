import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import { astroImageTools } from "astro-imagetools";
// <!-- TODO: Remove Astro Icons -->
import netlify from "@astrojs/netlify";
export default /** @type {import('astro').AstroUserConfig} */defineConfig({
  integrations: [sitemap(), tailwind(), partytown(), svelte(), icon(), astroImageTools]
  //   site: "https://stargazers.club",
  ,
  output: "server",
  adapter: netlify()
});