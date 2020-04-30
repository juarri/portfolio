import styled from "styled-components"

export const Wrapper = styled.section`
  position: relative;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.darkBlue};

  overflow: hidden;
`

export const ConfettiWrapper = styled.div`
  img:nth-child(2) {
    left: 50%;
  }
`

export const Confetti = styled.img`
  z-index: 0;

  position: absolute;

  max-width: ${({ theme }) => theme.dimensions.maxWidth};
`

export const Container = styled.header`
  z-index: 1;

  margin: 0 auto;
  padding: ${({ theme }) => theme.dimensions.sectionPadding};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  background-color: inherit;

  @media only screen and (min-width: 750px) {
    padding: 10vh 5%;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  margin-bottom: 5vh;

  @media only screen and (min-width: 750px) {
    align-self: center;
    margin-bottom: 0;
  }
`

export const Hey = styled.p`
  margin: 0;

  ${({ theme }) => theme.text.subTitle};

  color: ${({ theme }) => theme.colors.main};
`

export const Title = styled.h1`
  margin: 0.1em 0 0 0;

  ${({ theme }) => theme.text.title};

  color: ${({ theme }) => theme.colors.white};
`

export const SubTitle = styled.h2`
  margin: 0.5em 0 0 0;

  ${({ theme }) => theme.text.subTitle};

  color: ${({ theme }) => theme.colors.grey};
`

export const Text = styled.p`
  margin: 0.5em 0 1em 0;

  ${({ theme }) => theme.text.text};

  color: ${({ theme }) => theme.colors.grey};

  max-width: 400px;
`

export const Buttons = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 1fr 1fr;

  @media only screen and (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Button = styled.button`
  padding: 1em 2em;

  display: flex;

  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.darkBlue : theme.colors.main};

  ${({ theme }) => theme.text.text};

  white-space: nowrap;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.main : theme.colors.dark};

  border: ${({ secondary }) => (secondary ? "2px dashed #FFC759" : "none")};

  cursor: pointer;

  :hover {
    background: ${({ theme, secondary }) =>
      secondary ? theme.colors.main : theme.colors.darkBlue};

    color: ${({ theme, secondary }) =>
      secondary ? theme.colors.main : theme.colors.dark};
  }
`
