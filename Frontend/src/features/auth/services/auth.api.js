import axios from "axios";
import config from "../../../config/config";

const api = axios.create({
    baseURL: `${config.BACKEND_URI}/api/auth`,
    withCredentials: true
})

export async function register({ username, email, password }) {
    try {
        const response = await api.post(`/register`, { username, email, password });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function login({ info, password }) {
    try {
        const response = await api.post(`/login`, { info, password });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function logout() {
    try {
        const response = await api.get(`/logout`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getMe() {
    try {
        const response = await api.get(`/get-me`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}