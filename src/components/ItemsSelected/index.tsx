// import Styles
import * as C from './styles'

// import Assets
import trash from '../../assets/trash.png'

// import Context 
import { ContextPieces } from '../../context/ContextPieces'

// import Interface
import { GridItemsType } from '../../interfaces/GridItemsType'
import { useContext } from 'react'

interface Props {
    card: GridItemsType
}
const ItemsSelected = ({ card }: Props) => {
    const { handleDelete } = useContext(ContextPieces)

    const handleDeleteItem = (id: number) => {
        handleDelete(id)
    }

    return (
        <C.ItemsSelected>
            <C.LeftSide>
                <C.ImageSelected>
                    <C.Image src={card.image} alt="" />
                </C.ImageSelected>

                <C.ItemsSelectedText>
                    <C.ItemSelectedName>{card.name}</C.ItemSelectedName>
                    <C.ItemSelectedDesc>{card.description}</C.ItemSelectedDesc>
                </C.ItemsSelectedText>
            </C.LeftSide>

            <C.RightSide>
                <C.Quantity>
                    <span>{card.value}</span>
                </C.Quantity>

                <C.Trash onClick={() => handleDeleteItem(card.id)}>
                    <C.TrashImage src={trash} alt="" />
                </C.Trash>
            </C.RightSide>
        </C.ItemsSelected>
    )
}

export default ItemsSelected