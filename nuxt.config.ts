export default defineNuxtConfig({
    modules: [
        'nuxt-font-loader',
    ],
    // @ts-ignore
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
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
