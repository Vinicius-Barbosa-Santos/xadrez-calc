// import Interfaces
import { GridItemsType } from '../../interfaces/GridItemsType'

// import Styles
import * as C from './styles'

// import Context
import { ContextPieces } from '../../context/ContextPieces'
import { useContext } from 'react'

interface Props {
    item: GridItemsType,
}

const GridItems = ({ item }: Props) => {
    const { addSelectedCard } = useContext(ContextPieces)

    const handleGridClick = (item : GridItemsType) => {
        addSelectedCard(item)
    }

    return (
        <C.GridItems onClick={() => handleGridClick(item)}>
            <C.NameIcon>{item.name}</C.NameIcon>
            <C.ItemDesc>{item.description}</C.ItemDesc>
            <C.Icon>
                <C.ImageIcon src={item.image} alt={item.name} />
            </C.Icon>

            <C.Points>{item.value}</C.Points>
        </C.GridItems>
    )
}

export default GridItems