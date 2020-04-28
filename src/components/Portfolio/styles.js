import styled from "styled-components"

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.dimensions.sectionPadding};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  background-color: ${({ theme }) => theme.colors.darkBlue};
`

export const SectionHeading = styled.p`
  ${({ theme }) => theme.text.text}
  color: ${({ theme }) => theme.colors.grey};
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 50px;
  height: 50px;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.main : theme.colors.grey};

  border: none;
  cursor: pointer;

  transition: 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    color: ${({ theme }) => theme.colors.main};
  }
`
