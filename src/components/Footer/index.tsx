// import Styles
import * as C from './styles'

interface Props {
    title: string
}

const Footer = ({ title }: Props) => {
    return (
        <C.Footer>{title}</C.Footer>
    )
}

export default Footer