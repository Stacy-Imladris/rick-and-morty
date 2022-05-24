import s from './FilterCharacter.module.scss'
import {Status} from './Status/Status';
import {Species} from './Species/Species';
import {Gender} from './Gender/Gender';

export const FilterCharacter = () => {
    return (
        <div className={s.container}>
            <div className={s.filter}>Filters</div>
            <Status/>
            <Species/>
            <Gender/>
        </div>
    )
}