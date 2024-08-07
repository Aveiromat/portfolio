import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 16px;
  margin-bottom: 16px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  cursor: pointer;
`

export const Center = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
