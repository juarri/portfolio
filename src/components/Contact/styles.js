import styled from "styled-components"

export const Container = styled.section`
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.darkerBlue};

  @media only screen and (min-width: 750px) {
    display: grid;
    gap: 10%;
    grid-template-columns: auto auto;
  }
`

export const Content = styled.div`
  position: relative;

  @media only screen and (min-width: 750px) {
    align-items: start;
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.text.subTitle}
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.main};
  }
`

export const Email = styled.p`
  ${({ theme }) => theme.text.text}
  color: ${({ theme }) => theme.colors.white};
`

export const HalfCircle = styled.img`
  position: absolute;
  top: 50%;
  right: 0;

  @media only screen and (min-width: 750px) {
    width: 100%;

    left: 0;
  }
`
