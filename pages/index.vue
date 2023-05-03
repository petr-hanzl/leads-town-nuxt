<template>
    <v-app>
        <v-container class="d-flex justify-center">
            <v-col cols="12" md="8" lg="6">
                <p class="text-h4 text-center text-primary mb-6">Zadejte identifikační údaje</p>
                <form @submit.prevent="submit">
                    <v-row>
                        <v-col>
                            <v-text-field
                                base-color="primary"
                                color="primary"
                                v-model="firstname.value.value"
                                :error-messages="firstname.errorMessage.value!"
                                label="Jméno"
                            ></v-text-field>
                        </v-col>

                        <v-col>
                            <v-text-field
                                base-color="primary"
                                color="primary"
                                v-model="lastname.value.value"
                                :error-messages="lastname.errorMessage.value!"
                                label="Příjmení"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-text-field
                        base-color="primary"
                        color="primary"
                        v-model="email.value.value"
                        :error-messages="email.errorMessage.value!"
                        label="E-mail"
                    ></v-text-field>

                    <v-checkbox
                        v-model="checkbox.value.value"
                        :error-messages="checkbox.errorMessage.value!"
                        value="1"
                        label="Přijímám zasílání marketingových emailů"
                        type="checkbox"
                        color="primary"
                    ></v-checkbox>

                    <v-row class="d-flex justify-end">
                        <v-btn
                            class="me-4"
                            type="submit"
                            rounded
                            color="primary"
                            variant="tonal"
                            size="large"
                        >
                            Potvrdit
                        </v-btn>
                    </v-row>
                </form>
            </v-col>

        </v-container>
    </v-app>
</template>

<script setup lang="ts">

import {useField, useForm} from 'vee-validate'

const {handleSubmit} = useForm({
    validationSchema: {
        firstname(value: string) {
            if (value?.length >= 2) return true

            return 'Jméno musí mít alespoň 2 znaky.'
        },
        lastname(value: string) {
            if (value?.length >= 2) return true

            return 'Jméno musí mít alespoň 2 znaky.'
        },
        email(value: string) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Neplatná e-mailová adresa.'
        },
        checkbox(value: any) {
            if (value === '1') return true

            return 'Musí být potvrzeno.'
        },
    },
});

const firstname = useField('firstname');
const lastname = useField('lastname');
const email = useField('email');
const checkbox = useField('checkbox');
const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
    useRouter().push('/form')
});

</script>


<style scoped>

</style>
