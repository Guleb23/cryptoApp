import axios from "axios";

export const BASE_URL = 'https://localhost:7262/';

export const ENDPOINTS = {
    users: 'Users',
    registration: "CreateUser",
    login: 'login?'

}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint;
    return {
        fetch: () => axios.get(url),
        fetchLogin: (login, password) => axios.get(url + "login=" + login + "&" + "password=" + password),
        fetchById: id => axios.get(url + id),
        post: userInfo => axios.post(url, userInfo),
    }
}