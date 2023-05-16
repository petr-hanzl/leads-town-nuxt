import {useUserStore} from "~/store/userStore";

export default defineNuxtRouteMiddleware(async (to) => {
    const userStore = useUserStore()

    if (to.path === '/') {
        return;
    }


    let loggedIn = false
    let token: string

    if (process.client) {
        // @ts-ignore
        token = localStorage.getItem('token')
    }



    // @ts-ignore
    if (token) {

        if (!userStore.isTokenActive()) {
            // @ts-ignore
            userStore.verifyJWT(token)
            if (userStore.isTokenActive()) {
                loggedIn = true
            }
        } else {
            loggedIn = true
        }


    }

    if (loggedIn) {
        return;
    } else {
        return navigateTo('/');
    }
})


// export default defineNuxtRouteMiddleware(async (to) => {
//     const userStore = useUserStore()
//
//     // index is always available
//     if (to.path == '/') {
//         return
//     }

//
//     if (process.client) {
//         const token = localStorage.getItem('token')
//         let loggedIn = false
//         if (token) {
//
//             if (!userStore.isTokenActive()) {
//                 // @ts-ignore
//                 userStore.verifyJWT(localStorage.getItem('token'))
//                     .then(res => {
//                         if (res?.data) {
//                             userStore.renewJWTExp(res.data.verifyToken.payload.exp * 1000)
//                         } else if (res?.errors) {
//                             // @ts-ignore
//                             userStore.refreshJWT(localStorage.getItem('token'))
//                                 .then(res => {
//                                     if(res?.data) {
//                                         console.log(res.data)
//                                         userStore.renewJWTExp(res.data.refreshToken.refreshExpiresIn * 1000)
//                                     }
//                                 })
//                         }
//                     })
//                 if (userStore.isTokenActive()) {
//                     loggedIn = true
//                 }
//             } else {
//                 loggedIn = true
//             }
//         } else if (userStore.currentUser) {
//             // @ts-ignore
//             userStore.verifyJWT(localStorage.getItem('token'))
//             if (userStore.isTokenActive()) {
//                 loggedIn = true
//             }
//         }
//
//         if (loggedIn) {
//             return to;
//         }
//     }
// })
