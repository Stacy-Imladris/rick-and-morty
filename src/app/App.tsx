import s from './App.module.scss'
import {CharacterContent} from '../components/CharacterContent/CharacterContent';
import {FilterCharacter} from '../components/FilterCharacter/FilterCharacter';

export const App = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>Header</div>
            <div className={s.contentContainer}>
                <div className={s.filter}><FilterCharacter/></div>
                <div className={s.content}><CharacterContent/></div>
            </div>
            <div className={s.footer}>Footer</div>
        </div>
    )
}

