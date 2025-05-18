// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://arekchwedcz.uk",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Instrument Serif",
        cssVariable: "--font-instrument-serif",
      },
      {
        provider: fontProviders.google(),
        name: "Atkinson Hyperlegible",
        cssVariable: "--font-atkinson-hyperlegible",
        weights: [400, 700],
      },
    ],
  },
});
