import styled from "styled-components";

export const GoBackBackAnchor = styled.a`
  position: absolute;
  bottom: 3.6rem;
  text-decoration: none;
  color: var(--cool-gray);
  font-size: 1.7rem;
  font-weight: 700;
  transition: .2s;

  &:hover {
    color: var(--marine-blue);
  }

  @media screen and (max-width: 800px) {
   bottom: -14.5rem;
   left: 0;
  }
`