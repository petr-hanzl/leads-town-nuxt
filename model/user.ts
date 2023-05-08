import {UserInfo} from "~/store/userStore";

export class User {
    readonly id: number
    readonly email: string
    readonly firstName: string
    readonly lastName: string


    constructor(userInfo: UserInfo) {
        this.id = userInfo.id;
        this.email = userInfo.email;
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
    }
}
