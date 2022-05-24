import {useState} from 'react';
import s from './FilterCharacter.module.scss'
import {Status} from './Status/Status';
import {Species} from './SpeciesFilter/Species';

export const FilterCharacter = () => {

    const [genderOn, setGenderOn] = useState<boolean>(false)

    return (
        <div className={s.container}>
            <div className={s.filter}>Filters</div>
            <Status/>
            <Species/>

        </div>
    )
}