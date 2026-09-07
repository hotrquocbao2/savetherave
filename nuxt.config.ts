import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "https://s.pageclip.co/v1/pageclip.css",
          media: "screen",
          rel: "stylesheet",
        },
      ],
      script: [
        {
          src: "https://s.pageclip.co/v1/pageclip.js",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",

  css: [
    "~/assets/css/tailwind.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  shadcn: {
    componentDir: "./app/components/ui",
    prefix: "Ui",
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
