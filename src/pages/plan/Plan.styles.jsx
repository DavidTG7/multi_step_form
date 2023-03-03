import styled from 'styled-components'

// interface PlanStyleProps {
//   isActive: boolean,
// }
// interface PlanDurationProps {
//   isActive: boolean,
//   handleClick: ()=>void
// }

export const PlanStyle = styled.section`
  display: grid;
  gap: 1.4rem;
  border-radius: 10px;
  background: var(--white);
  padding: 1.8rem 1.4rem;
  
  @media (min-width: 800px) {
    gap: 2.5rem;
    padding: 1.8rem 0;
  }
`;

export const PlanContainer = styled.div`
  display:grid;
  gap: 1.6rem;
  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 138px);
  }
`
export const PlanDurationStyle = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  background-color: var(--alabaster);
  border-radius: 5px;
  border: 1px solid var(--magnolia);
  
  p {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0 1rem;
    color: var(--cool-gray);
  }
  ${props => !props.isActive ? 
    'p:first-child{ color: var( --marine-blue) }':
      'p:last-child{ color: var( --marine-blue) }'
  };

  .toggle-button {
    position: relative;
    width: 40px;
    height: 20px;
    border: none;
    border-radius: 30px;
    background-color: var(--marine-blue);
    cursor: pointer;
  }
        
  .toggle-button-dot {
    position: absolute;
    top: 50%;
    ${props => !props.isActive? 'left: 3px;': 'right: 3px;'}
    width: 13px;
    height: 13px;
    border-radius: 20px;
    background-color: var(--white);
    transform: translate(0, -50%);
    
  }
`

export const PlanDuration = ({isActive, handleClick}) => {
  
  return (
    <PlanDurationStyle isActive={isActive}>
      <p>Monthly</p>
        <button onClick={handleClick} className="toggle-button">
          <div className="toggle-button-dot" />
        </button>
      <p>Yearly</p>
    </PlanDurationStyle>
  )
}

export default PlanStyle