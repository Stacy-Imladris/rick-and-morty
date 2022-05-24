import {instance, ResponseType} from './api';
import {AxiosResponse} from 'axios';
import {CharactersParamsType} from '../store/characters-reducer';

export const charactersAPI = {
    getCharacters(params: CharactersParamsType) {
        return instance.get<any, AxiosResponse<ResponseType<CharacterType>>>('character', {params}).then(res => res.data)
    },
}

export type CharacterType = {
    created: string
    episode: string[]
    gender: GenderType
    id: number
    image: string
    location: LocationAndOriginType
    name: string
    origin: LocationAndOriginType
    species: string
    status: string
    type: string
    url: string
}

export type GenderType = 'Female' | 'Male' | 'Genderless' | 'unknown'

export type LocationAndOriginType = {
    name: string
    url: string
}

