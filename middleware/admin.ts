import {useAuthStore} from "~/store/authStore";

export default defineNuxtRouteMiddleware((to, from) => {

    // todo is admin
    if (!useAuthStore().isAuthenticated()) {

        return navigateTo('/admin')
    }

})
