import styled from "styled-components";

export const InfoLabel = styled.label`
  width: 100%;
  font-size: 1.4rem;
  color: var(--marine-blue);
  margin-top: 2rem;
`;

export const InfoInput = styled.input`
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  border: none;
  outline: solid 1px var(--light-gray);
  font-size: 1.8rem;
  padding: 1.1rem;
  border-radius: 5px;
  color: var(--marine-blue);
  font-weight: 700;

  &:focus {
    outline: solid 1px var(--purplish-blue);
  }

  &:required {
    outline: red solid 1px;
  }
`;
