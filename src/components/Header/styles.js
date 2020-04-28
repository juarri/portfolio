import styled from "styled-components"

export const Wrapper = styled.header`
  padding: ${({ theme }) => theme.dimensions.sectionPadding};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  background-color: ${({ theme }) => theme.colors.darkBlue};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  margin-bottom: 5vh;
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
`

export const Buttons = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`

export const Button = styled.button`
  display: inline-flex;

  flex-direction: row;
  padding: 1em 2em;

  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.darkBlue : theme.colors.main};

  ${({ theme }) => theme.text.text};

  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.main : theme.colors.dark};

  border: ${({ secondary }) => (secondary ? "2px dashed #FFC759" : "none")};
`

export const Mockup = styled.img``
