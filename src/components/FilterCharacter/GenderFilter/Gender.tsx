import s from '../FilterCharacter.module.scss';

export const Gender = () => {


    return <div onMouseEnter={() => setGenderOn(true)}
                onMouseLeave={() => setGenderOn(false)}>
        <div className={s.title}>
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
}