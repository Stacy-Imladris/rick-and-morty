import {useAppDispatch, useAppSelector} from '../../store/store';
import {useEffect} from 'react';
import {getCharacters} from '../../store/characters-reducer';
import s from './CharacterContent.module.scss'
import {Character} from './Character/Character';
import {Paginator} from './Paginator/Paginator';
import {Search} from './Search/Search';

export const CharacterContent = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(state => state.characters.characters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return <div className={s.container}>
        <Search/>
        {
            characters.map(m => <Character key={m.id} character={m}/>)
        }
        <Paginator/>
    </div>
}

