import styled from "styled-components"

export const Container = styled.section`
  @media only screen and (min-width: 750px) {
    padding: 7vh 0;

    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: center;
  }
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
