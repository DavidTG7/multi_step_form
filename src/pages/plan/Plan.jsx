import { PageContainer } from "../../components/pageContainer/PageContainer";
import { useState } from 'react';
import { PlanStyle, PlanContainer, PlanDuration } from './Plan.styles.jsx'
import { PlanType } from '../../components/PlanType/PlanType'
import arcadeIcon from '../../images/icon-arcade.svg'
import advancedIcon from '../../images/icon-advanced.svg'
import proIcon from '../../images/icon-pro.svg'

const plans = [
  {
    name: 'Arcade',
    value: 90,
    icon: arcadeIcon,
  },
  {
    name: 'Advanced',
    value: 120,
    icon: advancedIcon,
  },
  {
    name: 'Pro',
    value: 150,
    icon: proIcon,
  }
]
  

export const Plan = () => {
  const [isActive, setIsActive] = useState(false)
  const [planSelected, setPlanSelected] = useState('')

  function handleClick() {
    setIsActive(!isActive);
  }

  return(
    <PageContainer
      title='Select your plan'
      infoText='You have the option of monthly or yearly billing.'
      nextButton
      goBackButton
    >
      <PlanStyle>
        <PlanContainer>
          {plans.map(plan => 
            <PlanType name={plan.name} value={plan.value} icon={plan.icon} setPlanSelected={setPlanSelected} planSelected={planSelected} isActive={isActive}  key={plan.value + plan.name}/>
          )}
        </PlanContainer>
        <PlanDuration isActive={isActive} handleClick={handleClick}/>
      </PlanStyle>
    </PageContainer>
  )
}