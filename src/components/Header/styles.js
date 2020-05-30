import styled from "styled-components"

export const Wrapper = styled.section`
  position: relative;

  width: 100%;

  background-color: var(--dark-blue);

  overflow: hidden;
`

export const ConfettiWrapper = styled.div`
  z-index: 0;

  position: absolute;

  pointer-events: none;

  img:nth-child(2) {
    left: 50%;
  }
`

export const Confetti = styled.img`
  max-width: var(--max-width);
`

export const Container = styled.header`
  margin: 0 auto;
  padding: var(--section-padding);
  max-width: var(--max-width);

  background-color: inherit;

  @media only screen and (min-width: 750px) {
    padding: 10vh 5%;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const Content = styled.div`
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: start;

  margin-bottom: 5vh;

  @media only screen and (min-width: 750px) {
    align-self: center;
    margin-bottom: 0;
  }
`

export const Title = styled.h1`
  margin: 0.1em 0 0 0;

  ${({ theme }) => theme.text.title};

  color: var(--white);

  span {
    position: relative;
    bottom: 0.3em;

    ${({ theme }) => theme.text.subTitle};

    color: var(--main);
  }
`

export const SubTitle = styled.h2`
  margin: 0.5em 0 0 0;

  ${({ theme }) => theme.text.subTitle};

  color: var(--white);
`

export const Text = styled.p`
  margin: 0.5em 0 1em 0;

  ${({ theme }) => theme.text.text};

  color: var(--gray);

  max-width: 400px;
`

export const Buttons = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 1fr 1fr;

  @media only screen and (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Button = styled.button`
  padding: 0.5em 1em;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ secondary }) =>
    secondary ? "var(--dark-blue)" : "var(--main)"};

  ${({ theme }) => theme.text.text};

  white-space: nowrap;
  color: ${({ secondary }) => (secondary ? "var(--main)" : "var(--dark-blue)")};

  border: ${({ secondary }) => (secondary ? "2px dashed var(--main)" : "none")};
  border-radius: 0.25em;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    background: ${({ secondary }) =>
      secondary ? "var(--main)" : "var(--darker-blue)"};

    color: ${({ secondary }) =>
      secondary ? "var(--darker-blue)" : "var(--main)"};
  }
`
