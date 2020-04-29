import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100%;

  background-color: ${({ bgColor }) => bgColor};
`

export const Container = styled.section`
  margin: 0 auto;

  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  padding: ${({ theme }) => theme.dimensions.sectionPadding};

  background-color: inherit;
`

export const Heading = styled.h3`
  ${({ theme }) => theme.text.text}
  color: ${({ theme }) => theme.colors.grey};
`
