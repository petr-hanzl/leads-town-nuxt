import {defineStore} from "pinia";
import {UserInfo} from "~/store/userStore";
import {decodeJwt} from 'jose'


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

const CREATE_USER_MUTATION = gql`
    mutation createUser($email: String!, $firstName: String!, $lastName: String!, $acceptEmailing: Boolean!) {
        createUser(userInput: {email: $email, firstName: $firstName, lastName: $lastName, acceptEmailing: $acceptEmailing}){
            id,
            firstName,
            lastName,
            email,
            token
        }
    }`


export const useAuthStore = defineStore("authStore", {
    state: () => ({
        currentUser: null as UserInfo | null,
        exp: 0
    }),
    actions: {
        isAuthenticated(): boolean {
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

                        const jwtToken = decodeJwt(res.data.authLogin.token)
                        if (jwtToken.exp) {
                            this.exp = jwtToken.exp * 1000
                        }

                        console.log(Date.now())
                        console.log(this.exp)
                        useRouter().push({path:'admin/u'})
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        saveUser(firstName: string, lastName: string, email: string) {
            const {mutate: createUser} = useMutation(CREATE_USER_MUTATION, {
                variables: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    acceptEmailing: true
                },
            })
            createUser()
                .then(res => {
                if(res?.data) {
                    this.currentUser = res.data.createUser
                }
            })
                .catch((e) => {
                    console.log(e)
                })
        }
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
