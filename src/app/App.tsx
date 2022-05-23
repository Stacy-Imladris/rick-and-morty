import s from './App.module.scss'
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../store/store';
import {getCharacters} from '../store/characters-reducer';

export const App = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>Header</div>
            <div className={s.contentContainer}>
                <div className={s.filter}>Filter</div>
                <div className={s.content}><Content/></div>
            </div>
            <div className={s.footer}>Footer</div>
        </div>
    )
}

export const Content = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(state => state.characters.characters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
            characters.map(m => (
                <div>
                    <div><img src={m.image} alt={'Character\'s image'}/></div>
                    <div>Name: {m.name}</div>
                    <div>Name: {m.created}</div>
                    <div>Name: {m.gender}</div>
                    <div>Name: {m.id}</div>
                    <div>Name: {m.location.name}</div>
                    <div>Name: {m.origin.name}</div>
                    <div>Name: {m.species}</div>
                    <div>Name: {m.status}</div>
                    <div>Name: {m.type}</div>
                </div>
            ))
        }
    </div>
}