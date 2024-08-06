import styled from 'styled-components'

export const Social = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0px 8px;
    margin-top: 8px;
  }

  @media @breakpointMin {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }

  li {
    img {
      width: 24px;
      transition: all ease 0.3s;
      margin-bottom: 16px;

      &:hover {
        transform: scale(1.3);
      }

      @media @breakpointMobile {
        height: 30px;
      }
    }

    @media @breakpointMin {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
`
