import s from '../FilterCharacter.module.scss';
import {useState} from 'react';
import {FilterButton} from '../../../common/components/FilterButton/FilterButton';

export const Status = () => {
    const [statusOn, setStatusOn] = useState<boolean>(false)

    return <div onMouseEnter={() => setStatusOn(true)}
                onMouseLeave={() => setStatusOn(false)}>
        <div className={s.title}>
            <div>Status</div>
            <div>▽</div>
        </div>
        {
            statusOn && <div>
              <FilterButton title={'alive'}/>
              <FilterButton title={'dead'}/>
              <FilterButton title={'unknown'}/>
            </div>
        }
    </div>
}