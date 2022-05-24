import s from '../FilterCharacter.module.scss';
import {useState} from 'react';
import {FilterButton} from '../../../common/components/FilterButton/FilterButton';
import {useAppDispatch} from '../../../store/store';
import {getCharacters} from '../../../store/characters-reducer';

export const Species = () => {
    const [speciesOn, setSpeciesOn] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const onClickSetSpecies = (value: string) => {
        //dispatch(params...)
        dispatch(getCharacters())
    }

    return <div onMouseEnter={() => setSpeciesOn(true)}
                onMouseLeave={() => setSpeciesOn(false)}>
        <div className={s.title}>
            <div>Species</div>
            <div>▽</div>
        </div>
        {
            speciesOn && <div>
              <FilterButton title={'Human'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Alien'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Humanoid'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Poopybutthole'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Mythological'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Unknown'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Animal'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Disease'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Robot'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Cronenberg'} onClick={() => onClickSetSpecies('female')}/>
              <FilterButton title={'Planet'} onClick={() => onClickSetSpecies('female')}/>
            </div>
        }
    </div>
}