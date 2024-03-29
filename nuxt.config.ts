// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image',
    ],
    image: {
    //    provider: 'imagekit',
    //    provider: 'vercel',
    //    dir: 'assets/images'
        imgix: {
            baseURL: 'https://vyg-g.imgix.net'
        },
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/doyv0ggke/image/upload/'
        },
        imagekit: {
            baseURL: 'https://ik.imagekit.io/goayjq27t5/'
        }
    },
})
