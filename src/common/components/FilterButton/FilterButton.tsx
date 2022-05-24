type FilterButtonPropsType = {
    title: string
}

export const FilterButton = ({title}: FilterButtonPropsType) => {
    return <button>{title}</button>
}