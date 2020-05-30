import styled from "styled-components"

export const Container = styled.section`
  margin: 0 auto;

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
  color:  var(--white);

  span {
    color: var(--main);
  }
`

export const Email = styled.p`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.text.text}
  color: var(--white);

  cursor: pointer;

  transition: ease-in-out 0.2s;

  :hover {
    svg {
      transform: translate(0, -0.2em);
    }
  }

  svg {
    fill: ${({ isCopied }) => (isCopied ? "#00FA9A" : "currentColor")};
    margin-left: 0.5em;
    width: 20px;

    transition: ease-in-out 0.2s;
  }
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
