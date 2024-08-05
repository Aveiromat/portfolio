import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temadracula from './themes/dracula'

function App() {
  const [estaUsandoTemadracula, setEstaUsandoTemadracula] = useState(true)

  function trocaTema() {
    setEstaUsandoTemadracula((prevTema) => !prevTema)
  }

  const temaAtual = estaUsandoTemadracula ? 'dracula' : 'light'

  return (
    <ThemeProvider theme={estaUsandoTemadracula ? temadracula : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} tema={temaAtual} />
        <main>
          <Sobre tema={temaAtual} />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
