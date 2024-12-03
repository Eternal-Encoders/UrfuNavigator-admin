import axios from "axios"
import { IApiResonse } from "./interfaces";

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 1000,
});

async function make_get_all<T extends IApiResonse>(collection: string): Promise<T[]> {
    return (await api.get<T[]>(collection)).data
}
async function make_get<T extends IApiResonse>(collection: string, id: string): Promise<T> {
    return (await api.get<T>(collection, {
        params: {
            id
        }
    })).data
}
async function make_put<T extends IApiResonse>(collection: string): Promise<T[]> {
    return (await api.put<T[]>(collection)).data
}
async function make_post<T extends IApiResonse>(collection: string): Promise<T[]> {
    return (await api.post<T[]>(collection)).data
}
async function make_delete<T extends IApiResonse>(collection: string): Promise<T[]> {
    return (await api.delete<T[]>(collection)).data
}

export {
    make_get_all,
    make_get,
    make_post,
    make_put,
    make_delete
}