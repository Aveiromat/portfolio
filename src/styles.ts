import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dracula'

const EstiloGlobal = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Inclui padding e border no cálculo de largura e altura */
  font-family: 'Inter', sans-serif;
  list-style: none;
}

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => (props.theme as Theme).corDeFundo};

    @media (max-width: 768px) {
      padding-top: 16px;
      padding-bottom: 16px; /* Ajusta o padding inferior para dispositivos menores */
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 168px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
