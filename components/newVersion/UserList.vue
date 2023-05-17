<template>
    <v-card class="mx-auto">
        <v-list style="column-count: 2">
            <nuxt-link style="text-decoration: none; color: inherit;" to="/">
                <v-list-item v-for="user in userStore.userList" :title="user.email" class="listHover" rounded="xl"/>
            </nuxt-link>
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
  import {useUserStore} from "~/store/userStore"
  const userStore = useUserStore()

  await userStore.fetchAllUsers()

</script>

<style scoped>

.listHover:hover {
    background: rgb(var(--v-theme-primary), 0.1);
}

</style>
