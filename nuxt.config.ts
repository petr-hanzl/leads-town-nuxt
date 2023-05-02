import path from "path";

export default defineNuxtConfig({

    modules: [
        'nuxt-font-loader',
        '@vee-validate/nuxt',
        '@nuxtjs/apollo'
    ],

    // @ts-ignore
    css: ['vuetify/lib/styles/main.sass'],
    configureWebpack: {
        resolve: {
            symlinks: false,
            alias: {
                vue: path.resolve(`./node_modules/vue`)
            }
        }
    },
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
