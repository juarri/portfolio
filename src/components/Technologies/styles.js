import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.main};
`

export const Container = styled.section`
  margin: 0 auto;

  padding: ${({ theme }) => theme.dimensions.sectionPadding};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  background-color: inherit;

  display: flex;
  gap: 4vh;
  flex-wrap: wrap;
  justify-content: space-around;
`
