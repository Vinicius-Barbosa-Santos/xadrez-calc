// import Styles
import * as C from './styles'

// import Assets
import logoImage from '../../assets/logo.png'

const Header = () => {
    return (
        <C.Header>
            <img src={logoImage} alt="Envolve" />
            <C.Line />
        </C.Header>
    )
}

export default Header