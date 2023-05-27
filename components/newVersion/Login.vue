<template>
    <v-container fluid class="fill-height h-screen d-flex flex-column justify-space-between bg-white pa-0">
        <v-row class="w-100 h-100">
            <v-col cols="12" lg="4" class="px-3 pb-0">
                <!-- back button -->
                <v-row class="pa-6">
                    <v-col v-if="mdAndDown" class="d-flex justify-end">
                        <!--                        <nuxt-img alt="logo leads town" height="15" src="logo.png"/>-->
                    </v-col>
                </v-row>
                <!-- text -->
                <v-row class="w-100 pa-6 mt-0 d-flex flex-column align-content-lg-space-between text-primary">
                    <v-col>
                        <p class="text-h4 text-sm-h3 font-weight-black">
                            Admin Auth
                        </p>
                    </v-col>
                    <v-col class="pt-lg-10">
                        <p class="text-h5 text-sm-h4 font-weight-bold">
                            Login into Admin panel
                        </p>
                    </v-col>

                </v-row>
            </v-col>

            <v-col cols="12" lg="8" class="px-0 pb-0">
                <v-sheet color="primary" class="h-100 w-100 rounded-corner d-flex align-center">
                    <v-container fluid class="fill-height d-flex flex-column justify-space-between px-6 pb-9">

                        <v-row v-if="!mdAndDown" class="w-100 pt-2">
                            <v-col class="d-flex justify-end">
                                <!--                                <nuxt-img alt="logo leads town" height="15" src="logo.png" style="filter: invert(100%);"/>-->
                            </v-col>
                        </v-row>

                        <v-row class="w-100 pe-lg-16 mt-10 mt-lg-0" justify="center">
                            <form @submit.prevent="submit" class="pe-lg-16 me-lg-16">

                                <v-text-field
                                    rounded
                                    variant="solo"
                                    base-color="primary"
                                    color="primary"
                                    v-model="email.value.value"
                                    :error-messages="email.errorMessage.value!"
                                    label="E-mail"
                                ></v-text-field>

                                <v-text-field
                                    rounded
                                    type="password"
                                    variant="solo"
                                    base-color="primary"
                                    color="primary"
                                    v-model="password.value.value"
                                    :error-messages="password.errorMessage.value!"
                                    label="Password"
                                ></v-text-field>

                                <v-row class="d-flex justify-end">
                                    <v-btn
                                        class="me-4 text-body-1 text-primary font-weight-bold"
                                        type="submit"
                                        rounded
                                        color="secondary"
                                        size="large"
                                    >
                                        odeslat
                                    </v-btn>
                                </v-row>
                            </form>
                        </v-row>

                        <!--                        <v-row class="w-100 text-primary-lighten-2 text-h6">-->
                        <!--                            <v-col class="d-flex justify-end align-end">-->
                        <!--                                <p>02</p>-->
                        <!--                            </v-col>-->
                        <!--                        </v-row>-->

                    </v-container>
                </v-sheet>
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import {useField, useForm} from 'vee-validate'
import {useAuthStore} from "~/store/authStore";
import { useDisplay } from "vuetify";
import {useQuestionStore} from "~/store/questionStore";

const { mdAndDown } = useDisplay();

const {handleSubmit} = useForm({
    validationSchema: {
        password(value: string) {
            if (value?.length >= 2) return true

            return 'Heslo musí mít alespoň 2 znaky.'
        },

        email(value: string) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Neplatná e-mailová adresa.'
        },
    },
});

let email = useField('email');
let password = useField('password');

// retrieve store
const authStore = useAuthStore()
const questionStore = useQuestionStore()

await questionStore.fetchAllQuestions()


const submit = handleSubmit(userData => {
    authStore.loginUser(userData.email, userData.password)

});

</script>

<style scoped>
:deep(.v-messages__message) {
    margin-bottom: 20px;
}

.rounded-corner {
    border-top-left-radius: 10%;
}

</style>
