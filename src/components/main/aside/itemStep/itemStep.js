import styled from "styled-components";

export const ItemStepBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const NumberStep = styled.p`
  display: grid;
  place-items: center;
  background: ${({isActive}) => isActive ? "var(--light-blue)" : "transparent"};
  border-radius: 50%;
  border: 1px solid var(--alabaster);
  font-size: 1.5rem;
  font-weight: 700;
  width: 3.4rem;
  text-align: center;
  aspect-ratio: 1;
  margin: 0;
  color: ${({isActive}) => isActive ? "var(--marine-blue)" : "var(--alabaster)"};
`;

export const StepInfoBox = styled.div`
  display: flex;
  flex-flow: column;
  gap: .4rem;
`;

export const ActualStep = styled.h2`
  color: var(--cool-gray);
  font-weight: 400;
  font-size: 1.3rem;
`;

export const StepInfoType = styled.h3`
  color: var(--alabaster);
  font-size: 1.6rem;
`;