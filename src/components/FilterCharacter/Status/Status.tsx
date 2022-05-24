import s from '../FilterCharacter.module.scss';
import {useState} from 'react';
import {FilterButton} from '../../../common/components/FilterButton/FilterButton';
import {getCharacters} from '../../../store/characters-reducer';
import {useAppDispatch} from '../../../store/store';

export const Status = () => {
    const [statusOn, setStatusOn] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const onClickSetStatus = (value: string) => {
        //dispatch(params...)
        dispatch(getCharacters())
    }

    return <div onMouseEnter={() => setStatusOn(true)}
                onMouseLeave={() => setStatusOn(false)}>
        <div className={s.title}>
            <div>Status</div>
            <div>▽</div>
        </div>
        {
            statusOn && <div>
              <FilterButton title={'alive'} onClick={() => onClickSetStatus('alive')}/>
              <FilterButton title={'dead'} onClick={() => onClickSetStatus('dead')}/>
              <FilterButton title={'unknown'} onClick={() => onClickSetStatus('unknown')}/>
            </div>
        }
    </div>
}