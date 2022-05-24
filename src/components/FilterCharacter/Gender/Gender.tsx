import s from '../FilterCharacter.module.scss';
import {useState} from 'react';
import {FilterButton} from '../../../common/components/FilterButton/FilterButton';
import {useAppDispatch} from '../../../store/store';
import {getCharacters} from '../../../store/characters-reducer';

export const Gender = () => {
    const [genderOn, setGenderOn] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const onClickSetGender = (value: string) => {
        //dispatch(params...)
        dispatch(getCharacters())
    }

    return <div onMouseEnter={() => setGenderOn(true)}
                onMouseLeave={() => setGenderOn(false)}>
        <div className={s.title}>
            <div>Gender</div>
            <div>▽</div>
        </div>
        {
            genderOn && <div>
              <FilterButton title={'female'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'male'} onClick={() => onClickSetGender('male')}/>
              <FilterButton title={'genderless'} onClick={() => onClickSetGender('genderless')}/>
              <FilterButton title={'unknown'} onClick={() => onClickSetGender('unknown')}/>
            </div>
        }
    </div>
}