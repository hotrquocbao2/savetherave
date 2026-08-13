import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },


  modules: ['@nuxtjs/tailwindcss', "shadcn-nuxt", "@nuxt/fonts", "@nuxt/icon"],

  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },

  app: {
    head: {
      script: [
        { src: "https://s.pageclip.co/v1/pageclip.js" },
      ],
      link: [
        { rel: "stylesheet", href: "https://s.pageclip.co/v1/pageclip.css", media: "screen" },
      ],
    },
  },
});