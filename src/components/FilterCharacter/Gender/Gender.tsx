import s from '../FilterCharacter.module.scss';
import {useState} from 'react';
import {FilterButton} from '../../../common/components/FilterButton/FilterButton';

export const Gender = () => {
    const [genderOn, setGenderOn] = useState<boolean>(false)

    return <div onMouseEnter={() => setGenderOn(true)}
                onMouseLeave={() => setGenderOn(false)}>
        <div className={s.title}>
            <div>Gender</div>
            <div>▽</div>
        </div>
        {
            genderOn && <div>
              <FilterButton title={'female'}/>
              <FilterButton title={'male'}/>
              <FilterButton title={'genderless'}/>
              <FilterButton title={'unknown'}/>
            </div>
        }
    </div>
}