type FilterButtonPropsType = {
    title: string
    onClick: () => void
}

export const FilterButton = ({title, onClick}: FilterButtonPropsType) => {
    return <button onClick={onClick}>{title}</button>
}