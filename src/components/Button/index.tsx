// import Styles
import * as C from './styles'

// import Assets 
import trash from '../../assets/trash.png'

// import Context
import { ContextPieces } from '../../context/ContextPieces'
import { useContext } from 'react'

interface Props {
    title: string
}

const Button = ({ title }: Props) => {
    const { handleClearAll } = useContext(ContextPieces)

    const handleClearGrid = () => {
        handleClearAll()
    }

    return (
        <C.Button onClick={handleClearGrid}>
            <img src={trash} alt="" />
            {title}
        </C.Button>
    )
}

export default Button