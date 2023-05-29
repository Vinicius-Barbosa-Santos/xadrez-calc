// import Styles
import * as C from './styles'

// import React
import { useContext } from 'react'

// import Components 
import GridItems from '../GridItems'

// import Context
import { ContextPieces } from '../../context/ContextPieces'

const GridStep1 = () => {
    const { items } = useContext(ContextPieces)

    return (
        <C.GridStep1>
            <h3>Passo 01 - Selecione peças</h3>

            <C.FlexGrid>
                <C.GridItemsMap>
                    {items.map((item) => (
                        <GridItems key={item.id} item={item} />
                    ))}
                </C.GridItemsMap>
            </C.FlexGrid>
        </C.GridStep1>
    )
}

export default GridStep1