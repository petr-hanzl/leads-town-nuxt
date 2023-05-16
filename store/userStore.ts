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
            payload 
        }
    }
`

const REFRESH_TOKEN_MUTATION = gql`
    mutation refreshToken($token: String) {
        refreshToken(token: $token){
            payload
            refreshExpiresIn
            token
        }
    }
`

export const useUserStore = defineStore("userStore", {
    state: () => ({
        currentUser: null as UserInfo | null,
        exp: 0
    }),
    actions: {
        isTokenActive(): boolean {
            return this.exp > Date.now()
        },
        verifyJWT(token: string) {
            const {mutate:verifyToken} = useMutation(VERIFY_TOKEN_MUTATION, {
                variables: {
                    token: token
                },
            })
            verifyToken()
                .then(res => {
                    if (res?.data) {
                        this.exp = res.data.verifyToken.payload.exp * 1000
                    } else if (res?.errors) {

                    }
            })
                .catch(err => {
                    this.refreshJWT(token)
                        .then(res => {
                            if (res?.data) {
                                this.exp = res.data.verifyToken.payload.exp * 1000
                            } else if (res?.errors) {
                                console.log("user store err")
                                console.log(res.errors)
                            }
                        })
                        .catch(err => {
                            console.log("catch refresh jwt")
                            console.log(err)
                        })
                })
        },
        async refreshJWT(token: string) {
            const {mutate:refreshToken} = useMutation(REFRESH_TOKEN_MUTATION, {
                variables: {
                    token: token
                }
            })
            return refreshToken()

        },
        renewJWTExp(timestamp: number) {
            this.exp = timestamp
        },
        async saveUser(firstName: string, lastName: string, email: string) {
            const {mutate: createUser} = useMutation(CREATE_USER_MUTATION, {
                variables: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    acceptEmailing: true
                },
            })
            return createUser()
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
