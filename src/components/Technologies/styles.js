import styled from "styled-components"

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.dimensions.sectionPadding};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  background-color: ${({ theme }) => theme.colors.main};

  display: flex;
  gap: 4vh;
  flex-wrap: wrap;
  justify-content: space-around;
`
