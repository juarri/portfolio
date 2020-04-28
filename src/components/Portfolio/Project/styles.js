import styled from "styled-components"

export const Title = styled.h4`
  ${({ theme }) => theme.text.subTitle}
  
  color: ${({ theme }) => theme.colors.white};
`

export const SubTitle = styled.h5`
  margin-bottom: 0;

  ${({ theme }) => theme.text.text}  

  color: ${({ theme }) => theme.colors.white};
`

export const Description = styled.p`
  margin-top: .1em;

  ${({ theme }) => theme.text.text}

  color: ${({ theme }) => theme.colors.grey};`
