import {CharacterType} from '../../../api/characters-api';

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

    return <div>
        <div style={{position: 'relative'}}>
            <img src={image} alt={'Character\'s image'}/>
            <div style={{position: 'absolute', top: 0, left: 0, backgroundColor: 'pink'}}>{status}</div>
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