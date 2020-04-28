import styled from "styled-components"

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.dimensions.sectionPadding};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  background-color: ${({ theme }) => theme.colors.darkerBlue};
`

export const SectionHeading = styled.section`
  ${({ theme }) => theme.text.text}
  color: ${({ theme }) => theme.colors.grey};
`

export const Content = styled.div`
  h4 {
    ${({ theme }) => theme.text.subTitle}
    
    
    color: ${({ theme }) => theme.colors.white};
  }

  h5 {
    ${({ theme }) => theme.text.text}
    font-weight: 900;
    

    color: ${({ theme }) => theme.colors.grey};

  }

  p {
    ${({ theme }) => theme.text.text}

    color: ${({ theme }) => theme.colors.grey};

  }
`

export const Button = styled.button`
  padding: 0 1em 0 0;

  ${({ theme }) => theme.text.text}

  color: ${({ theme }) => theme.colors.main};

  background: none;
  border: none;
`
