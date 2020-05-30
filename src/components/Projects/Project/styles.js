import styled from "styled-components"

export const Wrapper = styled.div`
  margin-top: 10%;

  @media only screen and (min-width: 900px) {
    all: unset;
    /* display: grid;
    gap: 10%;
    grid-template-columns: auto auto; */
  }

  img {
    max-width: 450px;

    max-height: 550px;

    box-shadow: -11px 11px 0px #ffc759;
  }
`

export const Title = styled.h4`
  ${({ theme }) => theme.text.subTitle}

  color: var(--white);
`

export const SubTitle = styled.h5`
  margin-bottom: 0;

  ${({ theme }) => theme.text.text}

  color: var(--white);
`

export const Description = styled.p`
  margin-top: 0.1em;

  ${({ theme }) => theme.text.text}

  color: var(--gray);
`
