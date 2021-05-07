import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.github.com/"
});

export const userAPI = {
    getUser(user: string) {
        return instance.get(`users/${user}`)
    }
}