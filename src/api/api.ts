import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
})

export type ResponseType<T> = {
    info: InfoType
    results: T[]
}

export type InfoType = {
    count: number
    next: Nullable<string>
    pages: number
    prev: Nullable<string>
}

export type Nullable<T> = null | T