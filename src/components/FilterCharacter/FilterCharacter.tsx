import {useState} from 'react';

export const FilterCharacter = () => {
    const [statusOn, setStatusOn] = useState<boolean>(false)
    const [speciesOn, setSpeciesOn] = useState<boolean>(false)
    const [genderOn, setGenderOn] = useState<boolean>(false)

    return (
        <div>
            <div style={{textAlign: 'center'}}>Filters</div>
            <div onMouseEnter={() => setStatusOn(true)}
                 onMouseLeave={() => setStatusOn(false)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
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
            <div onMouseEnter={() => setSpeciesOn(true)}
                 onMouseLeave={() => setSpeciesOn(false)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
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
            <div onMouseEnter={() => setGenderOn(true)}
                 onMouseLeave={() => setGenderOn(false)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>Gender</div>
                    <div>▽</div>
                </div>
                {
                    genderOn && <div>
                      <button>female</button>
                      <button>male</button>
                      <button>genderless</button>
                      <button>unknown</button>
                    </div>
                }
            </div>
        </div>
    )
}