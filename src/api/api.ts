import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.github.com/"
});

export const userAPI = {
    getUser(user: string) {debugger
        return instance.get(`users/${user}`)
    },
    getRepositories(user:string, page:number, per_page:number) {
        return instance.get(`users/${user}/repos?page=${page}&per_page=${per_page}`)
    }
}
// https://api.github.com/users/SashaZaicev/repos
// currentPage: number, pageSize: number
//     ?page=${page}&per_page=${per_page}