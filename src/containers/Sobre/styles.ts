import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 0;
  margin-bottom: 64px;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-evenly;
    margin-top: 32px;
  }

  img {
    height: 100%;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      padding-top: 40px;
    }
  }
`
