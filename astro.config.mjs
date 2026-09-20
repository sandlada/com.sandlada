// @ts-check
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    site: "https://sandlada.com",
    trailingSlash: "ignore",
    output: "static",
    integrations: [mdx(), sitemap()],
    devToolbar: { enabled: false },
    vite: {
        plugins: [tailwindcss()],
    },
})
