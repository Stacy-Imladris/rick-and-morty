import {useAppDispatch, useAppSelector} from '../../store/store';
import {useEffect} from 'react';
import {getCharacters} from '../../store/characters-reducer';
import s from './CharacterContent.module.scss'
import {Character} from './Character/Character';

export const CharacterContent = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(state => state.characters.characters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return <div className={s.container}>
        {
            characters.map(m => <Character key={m.id} character={m}/>)
        }
    </div>
}

