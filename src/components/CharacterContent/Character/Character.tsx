import {CharacterType} from '../../../api/characters-api';
import s from './Character.module.scss'

type CharacterPropsType = {
    character: CharacterType
}
export const Character = ({character}: CharacterPropsType) => {
    const {image, name, gender, location, species, status} = character

    const statusColor = status === 'Alive' ? '#7bfd91' : status === 'Dead' ? '#fd7b7b' : '#7be7fd'

    return <div className={s.container}>
        <div className={s.imageBlock}>
            <img className={s.image} src={image} alt={'Character\'s image'}/>
            <div className={s.status} style={{backgroundColor: statusColor}}>
                {status}
            </div>
        </div>
        <div className={s.infoBlock}>
            <div className={s.name}>{name}</div>
            <div className={s.info}>
                <div className={s.item}>gender: {gender}</div>
                <div className={s.item}>species: {species}</div>
                <div className={s.item}>location: {location.name}</div>
            </div>
        </div>
    </div>
}