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
        createUser(acceptEmailing:$acceptEmailing, email:$email, firstName:$firstName, lastName:$lastName){
            user{
                id,
                firstName,
                lastName,
                email,
                token
            }
        }
    }`

export const useUserStore = defineStore("userStore", {
    state: () => ({
        currentUser: null as UserInfo | null
    }),
    actions: {
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
                } else if (res?.errors) {
                    console.log(res.errors)
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
