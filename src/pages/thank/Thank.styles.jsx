import styled from 'styled-components'

export const ThankContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-self: center;
  padding: 4rem 6rem;
  width: 60rem;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 7rem 3rem;
    background: var(--white);
    border-radius: 10px;
    top: 3.3rem;
    box-shadow: 0px 40px 40px -30px  var(--light-gray);
  }
`;

export const ThankTitle = styled.h1`
  font-size: 2.7rem;
  color: var(--marine-blue);
  @media screen and (min-width: 800px) {
    font-size: 3rem;
  }
`;

export const ThankInfo = styled.p`
  color: var(--cool-gray);
  font-size: 1.7rem;
  line-height: 2.7rem;
  margin: 1rem 0 2rem 0;

`;
export const ThankIconStyle = styled.img`
  height: 60px;
  margin: 2rem 0;
`;
export const ThankIcon = ({icon}) => {
  return (
    <ThankIconStyle src={icon}/>
  )
}
