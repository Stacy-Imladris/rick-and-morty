import s from '../FilterCharacter.module.scss';
import {useState} from 'react';
import {FilterButton} from '../../../common/components/FilterButton/FilterButton';

export const Species = () => {
    const [speciesOn, setSpeciesOn] = useState<boolean>(false)

    return <div onMouseEnter={() => setSpeciesOn(true)}
                onMouseLeave={() => setSpeciesOn(false)}>
        <div className={s.title}>
            <div>Species</div>
            <div>▽</div>
        </div>
        {
            speciesOn && <div>
              <FilterButton title={'Human'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Alien'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Humanoid'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Poopybutthole'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Mythological'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Unknown'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Animal'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Disease'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Robot'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Cronenberg'} onClick={() => onClickSetGender('female')}/>
              <FilterButton title={'Planet'} onClick={() => onClickSetGender('female')}/>
            </div>
        }
    </div>
}