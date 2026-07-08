export default defineNuxtConfig({
    compatibilityDate: '2026-07-08',
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
