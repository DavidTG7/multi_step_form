import styled from "styled-components";

export const NextButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 7rem;
  padding: 1.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  color: var(--white);
  background: var(--marine-blue);
  font-size: 1.7rem;
  width: 14rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--marine-blue-hover);
  }

  @media screen and (max-width: 800px) {
   bottom: -16rem;
   right: 0;
  }
`;
