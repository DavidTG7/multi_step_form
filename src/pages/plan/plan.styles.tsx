import style from 'styled-components'

interface PlanStyleProps {
  isActive: boolean
}

export const PlanStyle = style.section<PlanStyleProps>`
  display: grid;
  gap: 1.4rem;
  border-radius: 10px;
  background: var(--white);
  border: 1px solid black;
  padding: 1.8rem 1.4rem;
  
  .plan-type-container {
    display:grid;
    gap: .6rem;
  }

  .plan-duration {
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    background-color: var(--alabaster);
    border-radius: 5px;
    border: 1px solid var(--magnolia);
    
    p { 
      font-weight: bold;
      margin: 0 1rem;
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
  }
  
  @media (min-width: 560px) {
    max-width: 500px;
    gap: 2.5rem;
    .plan-type-container  {
      grid-template-columns: repeat(3, 155px);
    }
    .plantype-description-container{
      flex-direction: column;
      .plantype-description {
        margin-top: 3rem;
        margin-left: 0;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
export default PlanStyle