import {defineStore} from "pinia";
import {UserInfo} from "~/store/userStore";
import {decodeJwt} from 'jose'
import {b} from "vite-node/types-c39b64bb";

export interface LoginInput {
    email: string
    password: string
}

const LOGIN_USER_MUTATION = gql`
    mutation authLogin($email: String!, $password: String!) {
        authLogin(loginInput: {email: $email, password: $password}) {
            id
            email
            token
        }
    }
`

const emptyUserInfo = (): UserInfo => ({
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    token: '',
    resultSet: [],
    answerSet: []
})


const FORM_REGISTER_MUTATION = gql`
    mutation formRegister($email: String!, $firstName: String!, $lastName: String!, $acceptEmailing: Boolean!) {
        formRegister(registerInput: {email: $email, firstName: $firstName, lastName: $lastName, acceptEmailing: $acceptEmailing}) {
            id
            firstName
            lastName
            email
            token
        }
    }
`

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        currentUser: null as UserInfo | null,
        exp: 0
    }),
    actions: {
        decodeJWT() {
            if (!this.currentUser || this.currentUser.token == "") {
                return
            }
            const jwtToken = decodeJwt(this.currentUser.token)
            if (jwtToken.exp) {
                this.exp = jwtToken.exp * 1000
            }
        },
        isAuthenticated(): boolean {
            if (this.exp == 0 && this.currentUser) {
                this.decodeJWT()
            }

            return this.exp > Date.now()
        },
        async loginUser(email: string, password: string) {
            const { mutate: login } = useMutation(LOGIN_USER_MUTATION, {
                variables: {
                    email: email,
                    password: password
                }
            })
            login()
                .then((res) => {
                    if (res?.data) {
                        if(process.client) {
                            localStorage.setItem("token", res.data.authLogin.token)
                        }


                        this.currentUser = emptyUserInfo()
                        console.log(res.data)
                        this.currentUser = res.data.authLogin

                        this.decodeJWT()
                        navigateTo('/admin/u')
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        async formRegister(firstName: string, lastName: string, email: string, acceptEmailing: boolean) {
            const { mutate: formRegister } = useMutation(FORM_REGISTER_MUTATION, {
                variables: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    acceptEmailing: acceptEmailing
                },
            })
            formRegister()
                .then(res => {
                    if (res?.data) {
                        this.currentUser = res.data.formRegister

                        this.decodeJWT()
                    }
                    navigateTo('/question/0')
                })
                .catch(e => {
                    console.log(e)
                })
        },
    },
    getters: {
        getCurrentUser(state): UserInfo {
            if (state.currentUser) {
                return state.currentUser
            }
            return emptyUserInfo()
        }
    }
})
