import s from '../FilterCharacter.module.scss';
import {useState} from 'react';

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
              <button>Human</button>
              <button>Alien</button>
              <button>Humanoid</button>
              <button>Poopybutthole</button>
              <button>Mythological</button>
              <button>Unknown</button>
              <button>Animal</button>
              <button>Disease</button>
              <button>Robot</button>
              <button>Cronenberg</button>
              <button>Planet</button>
            </div>
        }
    </div>
}