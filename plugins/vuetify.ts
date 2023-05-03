import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            themes: {
                light: {
                    colors: {
                        primary: '#827717',
                        secondary: '#9E9D24',
                    },
                },
            },
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
