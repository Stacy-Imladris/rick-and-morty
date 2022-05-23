import {instance, ResponseType} from './api';
import {AxiosResponse} from 'axios';

export const episodesAPI = {
    getEpisodes() {
        return instance.get<any, AxiosResponse<ResponseType<EpisodeType>>>('episode').then(res => console.log(res))
    },
}

export type EpisodeType = {
    air_date: string
    characters: string[]
    created: string
    episode: string
    id: number
    name: string
    url: string
}