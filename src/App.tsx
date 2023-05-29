// import Styles
import { Global } from "./styles/Global"
import * as C from './AppStyles'

// import Components
import Header from "./components/Header"
import GridStep1 from "./components/GridStep1"
import GridStep2 from "./components/GridStep2"
import GridStep3 from "./components/GridStep3"
import Footer from './components/Footer'


import { ContextPiecesProvider } from './context/ContextPieces'
const App = () => {
  return (
    <>
      <ContextPiecesProvider>
        <C.Content>
          {/* header */}
          <Header />

          {/* main */}
          <C.Main>
            <GridStep1 />
            <C.GridColumn>
              <GridStep2 />
              <GridStep3 />
            </C.GridColumn>
          </C.Main>

          {/* footer */}
          <Footer title={'Página teste Envolve - Todos os Direitos Resevados '} />
        </C.Content>
      </ContextPiecesProvider>
      <Global />
    </>
  )
}

export default App