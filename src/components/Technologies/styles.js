import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100%;

  background-color: var(--main);
`

export const Container = styled.section`
  margin: 0 auto;

  padding: var(--section-padding);
  max-width: var(--max-width);

  background-color: inherit;

  display: flex;
  gap: 4vh;
  flex-wrap: wrap;
  justify-content: space-around;
`
