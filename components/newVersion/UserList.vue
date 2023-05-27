<template>
    <v-card class="mx-auto">
        <v-list style="column-count: 2">
            <v-list-item v-for="user in userStore.userList" :title="user.email" class="listHover" rounded="xl" @click="pushUserPage(user)"/>
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
    import {UserInfo, useUserStore} from "~/store/userStore"
    const userStore = useUserStore()


    // only fetch if store is empty
    // if (userStore.userList.length === 0) {
    //
    // }
    await userStore.fetchAllUsers()


    const token = useCookie("token")
    console.log(token)

    const pushUserPage = (user: UserInfo) => {
        userStore.setViewedUser(user)
        return navigateTo(`/admin/u/${user.id}`)
    }

</script>

<style scoped>

.listHover:hover {
    background: rgb(var(--v-theme-primary), 0.1);
}

</style>
