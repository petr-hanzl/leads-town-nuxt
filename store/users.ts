import {defineStore} from "pinia";
import {c} from "consola/dist/consola-3fef035a";
import {User} from "~/model/user";

export interface UserInfo {
    id: number
    email: string
    firstName: string
    lastName: string
    token: string
}


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
        createUser(firstName: string, lastName: string, email: string) {
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
            // @ts-ignore todo make type safe
            return state.currentUser
        }
    }
})
