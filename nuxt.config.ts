export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: '426286',
    public: {
      apiKey: process.env.FIRE_APIKEY,
      authDomain: process.env.FIRE_AUTHDOMAIN,
      projectId: process.env.FIRE_PROJECTID,
      storageBucket: process.env.FIRE_STORAGEBUCKET,
      messagingSenderId: process.env.FIRE_MESSAGINGSENDERID,
      appId: process.env.FIRE_APPID
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-svgo', '@nuxt/image'],
  routeRules: {
    '/dashboard/**': { ssr: false }
  },
})
// https://medium.com/@chakas3/unleash-your-creativity-with-the-new-storybook-nuxt-module-b7beb1441bed