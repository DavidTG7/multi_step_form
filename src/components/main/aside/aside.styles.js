import styled from "styled-components";

export const AsideBox = styled.div`
  position: relative;
`;

export const AsideBGImageDesk = styled.img`

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const AsideBGImageMobil = styled.img`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
  }
`;

export const ItemsContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  display: flex;
  flex-flow: column;
  gap: 2.5rem;

  @media screen and (max-width: 800px) {
    position: initial;
    flex-flow: row;
    margin-top: 2.5rem;
  }
`;


