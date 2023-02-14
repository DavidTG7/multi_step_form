import styled from "styled-components";

export const PageContainerBox = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 4rem 7rem;
  width: 60rem;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 4rem 3rem 4rem;
    background: var(--white);
    border-radius: 10px;
    top: 3.3rem;
    box-shadow: 0px 40px 40px -30px  var(--light-gray);
  }
`;

export const InfoHeading = styled.h1`
  font-size: 3.4rem;
  color: var(--marine-blue);
`;

export const InfoText = styled.p`
  color: var(--cool-gray);
  font-size: 1.6rem;
  margin: 1rem 0 2rem 0;

`;
