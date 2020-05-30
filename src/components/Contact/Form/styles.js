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

  color: var(--white);
`

export const TextInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--gray);
  color: var(--gray);

  :focus {
    color: var(--gray);
  }

  @media only screen and (min-width: 750px) {
    width: 100%;
  }
`

export const TextArea = styled.textarea`
  padding: 1em;

  background-color: var(--dark-blue);
  color: var(--gray);

  border: none;

  @media only screen and (min-width: 750px) {
    width: 100%;
  }
`

export const Submit = styled.input`
  padding: 1em 2em;

  ${({ theme }) => theme.text.text}

  background-color: var(--dark-blue);
  color: var(--white);

  border: none;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    background-color: var(--main);
    color: var(--dark-blue);
  }
`
