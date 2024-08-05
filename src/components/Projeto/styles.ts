import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  display: grid;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 24px;
  border: 1px solid ${(props) => props.theme.corDaBordaBotao};
  cursor: pointer;
  text-align: center;
  align-self: end;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoBotaoHover};
  }
`
