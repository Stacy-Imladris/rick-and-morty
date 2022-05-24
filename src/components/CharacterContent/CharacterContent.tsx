import {useAppDispatch, useAppSelector} from '../../store/store';
import {useEffect} from 'react';
import {getCharacters} from '../../store/characters-reducer';
import s from './CharacterContent.module.scss'
import {Character} from './Character/Character';
import {Paginator} from './Paginator/Paginator';
import {Search} from './Search/Search';
import {selectCharacters} from '../../store/selectors';

export const CharacterContent = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(selectCharacters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return <div className={s.container}>
        <Search/>
        <div className={s.characterBlock}>
            {characters.map(m => <Character key={m.id} character={m}/>)}
        </div>
        <Paginator/>
    </div>
}

