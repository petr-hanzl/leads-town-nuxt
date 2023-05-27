import {useAuthStore} from "~/store/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
    if (!useAuthStore().isAuthenticated()) {
        return navigateTo('/admin')
    }

})
