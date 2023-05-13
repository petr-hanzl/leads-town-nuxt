import path from "path";

export default defineNuxtConfig({
    modules: [
        'nuxt-font-loader',
        '@vee-validate/nuxt',
        '@nuxtjs/apollo',
        '@pinia/nuxt',
        '@nuxt/image-edge',
    ],
    // @ts-ignore
    buildModules: [
        '@pinia/nuxt',
        {
            disableVuex: true
        }
        ],
    css: ['vuetify/lib/styles/main.sass'],
    target: 'static',
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        ssr: {
            noExternal: ["vuetify"]
        }
    },

    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://marketingquestionnairebackend-production.up.railway.app/graphql/'
                // httpEndpoint: 'http://127.0.0.1:8000/graphql/'
            }
        }
    },


    fontLoader: {
        external:[
            {
                src: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                family: 'Roboto',
                class: 'sans-serif'
            },
            {
                src: "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
                family: 'Roboto',
                class: 'sans-serif'
            },
            {
                src: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap",
                family: 'Roboto',
                class: 'sans-serif'
            },
            {
                src: "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap",
                family: 'Roboto',
                class: 'sans-serif'
            },
            {
                src: "https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap",
                family: 'Roboto',
                class: 'sans-serif'
            }

        ]
    }

})
