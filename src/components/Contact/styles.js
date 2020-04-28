import styled from "styled-components"

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.dimensions.sectionPadding};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  background-color: ${({ theme }) => theme.colors.darkerBlue};
`

export const Content = styled.div`
  position: relative;
`

export const SectionHeading = styled.p`
  ${({ theme }) => theme.text.text}
  color: ${({ theme }) => theme.colors.grey};
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
`
