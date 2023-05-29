// import Styles 
import * as C from './styles'

// import Components
import ItemsSelected from '../ItemsSelected'

// import Context
import { ContextPieces } from '../../context/ContextPieces'
import { useContext } from 'react'

const GridStep2 = () => {
    const { selectedCard } = useContext(ContextPieces)

    return (
        <C.GridStep2>
            <h3>Passo 02 - Revise a seleção</h3>

            <C.ItemsSelectedGrid>
                {selectedCard.map((card) => (
                    <ItemsSelected key={card.id} card={card} />
                ))}
            </C.ItemsSelectedGrid>
        </C.GridStep2>
    )
}

export default GridStep2