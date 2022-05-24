import {CharacterType} from '../../../api/characters-api';
import s from './Character.module.scss'

type CharacterPropsType = {
    character: CharacterType
}
export const Character = ({character}: CharacterPropsType) => {
    const {
        image,
        name,
        created,
        gender,
        id,
        location,
        origin,
        species,
        status,
        type
    } = character

    const statusColor = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'blue'

    return <div className={s.container}>
        <div className={s.imageBlock}>
            <img src={image} alt={'Character\'s image'}/>
            <div className={s.status} style={{backgroundColor: statusColor}}>
                {status}
            </div>
        </div>
        <div>name: {name}</div>
        <div>created: {created}</div>
        <div>gender: {gender}</div>
        <div>id: {id}</div>
        <div>locationName: {location.name}</div>
        <div>originName: {origin.name}</div>
        <div>species: {species}</div>
        <div>type: {type}</div>
    </div>
}