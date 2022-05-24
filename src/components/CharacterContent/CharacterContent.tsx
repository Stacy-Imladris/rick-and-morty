import {useAppDispatch, useAppSelector} from '../../store/store';
import {useEffect} from 'react';
import {getCharacters} from '../../store/characters-reducer';
import s from './CharacterContent.module.scss'

export const CharacterContent = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(state => state.characters.characters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return <div className={s.container}>
        {
            characters.map(m => (
                <div key={m.id}>
                    <div><img src={m.image} alt={'Character\'s image'}/></div>
                    <div>name: {m.name}</div>
                    <div>created: {m.created}</div>
                    <div>gender: {m.gender}</div>
                    <div>id: {m.id}</div>
                    <div>locationName: {m.location.name}</div>
                    <div>originName: {m.origin.name}</div>
                    <div>species: {m.species}</div>
                    <div>status: {m.status}</div>
                    <div>type: {m.type}</div>
                </div>
            ))
        }
    </div>
}