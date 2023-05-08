import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
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
                        primary: '#193765',
                        'primary-lighten-1': '#334D74',
                        'primary-lighten-2': '#6F7F96',
                        'primary-lighten-3': '#F3F5F8',
                        'primary-lighten-4': '#FFFFFF',
                        background: '#F8FEFF',
                        secondary: '#FFDC79',
                        'secondary-lighten-1': '#FCF5DE',
                        error: '#FF8DA0'
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
