import {instance, ResponseType} from './api';
import {GenderType} from './characters-api';
import {AxiosResponse} from 'axios';

export const locationsAPI = {
    getLocations() {
        return instance.get<any, AxiosResponse<ResponseType<LocationType>>>('location').then(res => console.log(res))
    },
}

export type LocationType = {
    created: string
    dimension: string
    gender: GenderType
    id: number
    name: string
    residents: string[]
    type: string
    url: string
}