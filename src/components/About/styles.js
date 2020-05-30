import styled from "styled-components"
import { Link } from "react-scroll"

export const Container = styled.section`
  @media only screen and (min-width: 750px) {
    padding: 7vh 0;

    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: center;
  }
`

export const Content = styled.div`
  h4 {
    ${({ theme }) => theme.text.subTitle}
    margin:  0;

    color: var(--white);
  }

  h5 {
    ${({ theme }) => theme.text.text}
    font-weight: 900;
    margin: 0.75em 0;

    color: var(--gray);
  }

  p {
    line-height: 1.5em;
    max-width: 50ch;
    color: var(--gray);
  }
`

export const Arrow = styled.svg`
  margin-left: 0.75em;
  width: 22px;

  transition: ease-in-out 0.15s;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;

  padding: 0 1em 0 0;

  ${({ theme }) => theme.text.text}

  color: var(--main);

  background: none;
  border: none;

  cursor: pointer;

  :hover {
    ${Arrow} {
      transform: translate(0.5em, 0);
    }
  }
`
