import {defineStore} from "pinia";

export interface UserInfo {
    id: number
    email: string
    firstName: string
    lastName: string
    token: string
}

const emptyUserInfo = (): UserInfo => ({
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    token: ''
})

const CREATE_USER_MUTATION = gql`
    mutation createUser($email: String, $firstName: String, $lastName: String, $acceptEmailing: Boolean) {
        createUser(extendUserInput: {email: $email, firstName: $firstName, lastName: $lastName, acceptEmailing: $acceptEmailing}){
            user{
                id,
                firstName,
                lastName,
                email,
                token
            }
        }
    }`

const VERIFY_TOKEN_MUTATION = gql`
    mutation verifyToken($token: String){
        verifyToken(token: $token) {
            payload {
                username,
                exp,
                origIat,
            }
        }
    }
`

export const useUserStore = defineStore("userStore", {
    state: () => ({
        currentUser: null as UserInfo | null,
        tokenExp: 0
    }),
    actions: {
        verifyToken() {
            const {mutate:verifyToken} = useMutation(VERIFY_TOKEN_MUTATION, {
                variables: {
                    token: localStorage.getItem("token")
                },
            })
            verifyToken().then(res => {
                if (res?.data) {
                    console.log(res.data)
                    this.tokenExp = res.data.Verify.payload.exp
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
                if(res?.data) {
                    this.currentUser = res.data.createUser.user
                    localStorage.setItem("token", res.data.createUser.user.token)
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
