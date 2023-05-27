import {defineStore} from "pinia";
import {AnswerInfo} from "~/store/answerStore";

export interface UserInfo {
    id: number
    email: string
    firstName: string
    lastName: string
    token: string
    resultSet: Result[],
    answerSet: AnswerInfo[]
}

interface Result {
    ppc: number
    emailing: number
    social_networks: number
}


const ALL_USERS = gql`
    query{
        listUsers{
            id
            email
            firstName
            lastName
            resultSet{
                emailing
                socialNetworks
                ppc
            }
            answerSet { 
                answerValue
                question {
                    questionText
                    questionCategory {
                        category
                    }
                    answerCategory {
                        category
                    }
                }
            }
        }
    }
`

type UserResult = {
    listUsers: UserInfo[]
}

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userList: [] as UserInfo[],
        currentViewedUser: null as UserInfo | null,
    }),
    actions: {
        async fetchAllUsers() {
            const{ data } = await useAsyncQuery<UserResult>(ALL_USERS)
            if (data.value) {
                this.userList = data.value.listUsers
            }
        },
        setViewedUser(user: UserInfo) {
            this.currentViewedUser = user
        }
    }
})
