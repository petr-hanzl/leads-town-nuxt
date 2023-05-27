export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('apollo:error', (error) => {
        console.error(JSON.stringify(error, null, 2))
        if (error.graphQLErrors){
            error.graphQLErrors.forEach((e)=>{
                if (e.message.includes("record not found")) {
                    alert("user with this email does not exist")
                }
            })
        }

        // Handle different error cases
    })
})
