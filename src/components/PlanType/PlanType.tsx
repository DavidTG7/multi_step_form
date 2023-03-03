import { PlanTypeStyle  } from "./PlanTpe.style"

interface props {
  value: number,
  name: string,
  icon: string,
  setPlanSelected: React.Dispatch<React.SetStateAction<string>>,
  planSelected: string,
  isActive: boolean
}

export const PlanType = ({value, name, icon, setPlanSelected, planSelected, isActive}: props) => {
  const handleSelect = () => {
    setPlanSelected(name)
  }

  return (
    <PlanTypeStyle onClick={handleSelect} selected={name === planSelected? true:false} isActive={isActive}>
      <div className="plantype-description-container">
        <img src={icon} alt="" />
        <div className="plantype-description">
          <p>{name}</p>
          <span>${value}/{!isActive? 'mo': 'yr'}</span>
          <small>2 moths free</small>
        </div>
      </div>
    </PlanTypeStyle>
  )
}
