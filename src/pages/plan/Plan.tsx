import { useState } from 'react';
import PlanStyle from './plan.styles.js'
import { PlanType } from '../../components/PlanType/PlanType.js'
import arcadeIcon from '../../../multi-step-form-main/assets/images/icon-arcade.svg'
import advancedIcon from '../../../multi-step-form-main/assets/images/icon-advanced.svg'
import proIcon from '../../../multi-step-form-main/assets/images/icon-pro.svg'
import PageHeader from '../../components/PageHeader/PageHeader'
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
    <PlanStyle isActive={isActive}>
      <PageHeader title={'Select your plan'} text={'You have the option of monthly or yearly billing.'} />
      <div className='plan-type-container'>
        {plans.map(plan => 
          <PlanType name={plan.name} value={plan.value} icon={plan.icon} setPlanSelected={setPlanSelected} planSelected={planSelected} isActive={isActive}  key={plan.value + plan.name}/>
        )}
      </div>
      <div className='plan-duration'>
        <p>Monthly</p>
        <button onClick={handleClick} className="toggle-button">
          <div className="toggle-button-dot" />
        </button>
        <p>Yearly</p>
      </div>
    </PlanStyle>
  )
}