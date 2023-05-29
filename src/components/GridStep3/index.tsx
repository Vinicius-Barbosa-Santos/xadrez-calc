// import Styles
import { useContext } from 'react'
import Button from '../Button'
import * as C from './styles'

// import Context
import { ContextPieces } from '../../context/ContextPieces'

const GridStep3 = () => {
    const { selectedCard, total } = useContext(ContextPieces)

    return (
        <C.GridStep3>
            <C.Flex>
                <C.FlexLeftSide>
                    <h3>Passo 03 - Resumo da seleção</h3>

                    <C.Quantity>
                        <p>Quantidade de peças selecionados: </p>
                        <C.QuantityBox>
                            <p>{selectedCard.length}</p>
                        </C.QuantityBox>
                    </C.Quantity>
                </C.FlexLeftSide>

                <C.FlexRightSide>
                    <C.Total>
                        <p>Total: </p>
                        <C.TotalBox>{total}</C.TotalBox>
                    </C.Total>

                    <C.ButtonFlex>
                        <Button title={'Limpar tudo'} />
                    </C.ButtonFlex>
                </C.FlexRightSide>
            </C.Flex>
        </C.GridStep3>
    )
}

export default GridStep3