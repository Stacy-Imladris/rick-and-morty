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
              <FilterButton title={'Human'}/>
              <FilterButton title={'Alien'}/>
              <FilterButton title={'Humanoid'}/>
              <FilterButton title={'Poopybutthole'}/>
              <FilterButton title={'Mythological'}/>
              <FilterButton title={'Unknown'}/>
              <FilterButton title={'Animal'}/>
              <FilterButton title={'Disease'}/>
              <FilterButton title={'Robot'}/>
              <FilterButton title={'Cronenberg'}/>
              <FilterButton title={'Planet'}/>
            </div>
        }
    </div>
}