import styled from 'styled-components'

interface SummaryStyleProps {
  strong: boolean
}


export const SummaryStyle = styled.div`
  display: grid;
  gap: 1.4rem;
  border-radius: 10px;

  @media (min-width: 560px) {
    gap: 2.5rem;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;  

  }
`

export const SummaryBox = styled.div`
  background-color: var(--alabaster);
  border-radius: 10px;
  padding: 2rem;
`

export const SummaryBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .8rem;
  border-bottom: 1px solid var(--light-gray);
 
`
export const SummaryBoxTopPlan = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin: .5rem 0;
  a{
    color: var(--cool-gray);
    font-size: 1.6rem;
  }
  strong {
    display:block;
    color: var(--marine-blue);
    font-size: 1.6rem;
  }
  @media (min-width: 560px) {
    margin-bottom: 1rem;

  }
`
export const SummaryValue = styled.p<SummaryStyleProps>`
  font-size: 1.6rem;
  color: var(--marine-blue);
  ${(props)=>props.strong? 'font-weight:600;':''}
`

export  const SummaryGrayText = styled.p`
  color: var(--cool-blue);
  font-size: 1.6rem;
`

export const SummaryBoxBottom = styled.div`
  display: grid;
  gap: 1.5rem;
  padding-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
  }
  div p:first-child {
    color: var(--cool-gray);
  }
  div p:last-child {
    color: var(--marine-blue);
    font-weight: 500;
  }
`
export const SummaryBoxBottomItem = styled.div`

`

export const SummaryResult = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  color: var(--cool-gray);

  strong {
    color: var(--purplish-blue);
  }
`
export const SummaryFinalPrice = styled.strong`
  font-size: 1.8rem;
  color: var(--purplish-blue);
`

export default SummaryStyle