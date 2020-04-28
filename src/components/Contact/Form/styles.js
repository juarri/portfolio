import styled from "styled-components"

export const Wrapper = styled.form`
  margin: 2em 0;
`

export const InputDiv = styled.div`
  margin-bottom: 2em;
`

export const Label = styled.label`
  display: flex;
  margin-bottom: 1em;

  ${({ theme }) => theme.text.text}

  color: ${({ theme }) => theme.colors.white};
`

export const TextInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.grey};

  :focus {
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const TextArea = styled.textarea`
  padding: 1em;

  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.grey};

  border: none;
`

export const Submit = styled.input`
  padding: 1em 2em;

  ${({ theme }) => theme.text.text}

  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};

  border: none;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.darkerBlue};
  }
`
