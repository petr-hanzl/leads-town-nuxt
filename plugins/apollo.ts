export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('apollo:error', (error) => {
        console.error(JSON.stringify(error, null, 2))

        // Handle different error cases
    })
})
