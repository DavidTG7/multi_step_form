import styled from "styled-components";

export const MainBox = styled.main`
  display: flex;
  position: relative;
  gap: 2rem;
  padding: 2rem;
  background: var(--white);
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    flex-flow: column;
    align-items: center;
    background: transparent;
    padding: 0;
    gap: 0;
    border-radius: 0;
    width: 375px;
    margin: auto;
  }
`;


