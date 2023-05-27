import {defineStore} from "pinia";
import {UserInfo} from "~/store/userStore";


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
        }
    }`

const VERIFY_TOKEN_MUTATION = gql`
    mutation verifyToken($token: String){
        verifyToken(token: $token) {
            payload 
        }
    }
`

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        currentUser: null as UserInfo | null,
        exp: 0
    }),
    actions: {
        isTokenActive(): boolean {
            return this.exp > Date.now()
        },
        async verifyJWT(token: string) {
            const {mutate:verifyToken} = useMutation(VERIFY_TOKEN_MUTATION, {
                variables: {
                    token: token
                },
            })
            verifyToken().then(res => {
                if (res?.data) {
                    console.log("verify token: " + res.data.verifyToken.payload.exp)

                    this.exp = res.data.verifyToken.payload.exp * 1000
                }
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
            createUser().then(res => {
                // @ts-ignore
                if(res?.data) {
                    console.log(res.data.createUser.id)
                    this.currentUser = res.data.createUser
                } else if (res?.errors) {
                    console.log(JSON.stringify(res.errors, null, 2))
                }
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
