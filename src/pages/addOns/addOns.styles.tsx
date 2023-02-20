import styled from "styled-components";

export const CheckBoxInput = styled.input`

  transform: scale(1.4);
&:checked {
  accent-color: var(--purplish-blue);
  padding: 5rem;
  }
`;

export const AddOnInputBox = styled.div`
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border: solid 1px ${({ active }) => active ? "var(--purplish-blue)" : "var(--light-gray)"};
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ active }) => active ? "var(--magnolia)" : "transparent"};

  &:hover {
    border: solid 1px var(--purplish-blue);
  }

  @media screen and (max-width: 800px) {  
    padding: 1rem 1.5rem;
    gap: 2rem;
  }
`;

export const AddOnInfoBox = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 2rem;
  margin-right: auto;

  @media screen and (max-width: 800px) {  
    margin-left: 0;
  }
`

export const AddOnTitle = styled.h2`
  color: var(--marine-blue);
  font-size: 1.8rem;
`;

export const AddOnText = styled.p`
  color: var(--cool-gray);
  font-size: 1.6rem;
`;

export const AddOnPrice = styled.p`
  color: var(--purplish-blue);
  font-size: 1.6rem;
`;

export const ClickDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
`;