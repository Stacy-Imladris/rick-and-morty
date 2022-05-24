import s from '../FilterCharacter.module.scss';
import {useState} from 'react';

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
              <button>alive</button>
              <button>dead</button>
              <button>unknown</button>
            </div>
        }
    </div>
}