import { ActualStep, ItemStepBox, NumberStep, StepInfoBox, StepInfoType } from "./itemStep.styles";

export const ItemStep = ({number, infoType}) => {
  return(
    <ItemStepBox>
      <NumberStep>{number}</NumberStep>
      <StepInfoBox>
        <ActualStep>STEP {number}</ActualStep>
        <StepInfoType>{infoType}</StepInfoType>
      </StepInfoBox>
    </ItemStepBox>
  );
};