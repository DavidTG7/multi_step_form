import { GoBackButton } from "../goBackButton/GoBackButton";
import { NextStepButton } from "../nextStepButton/NextStepButton";
import { InfoHeading, InfoText, PageContainerBox } from "./pageContainer.styles";

export const PageContainer = ({ children, title, infoText, goBackButton, nextButton }) => {
  return (
    <PageContainerBox>
      <InfoHeading>{title}</InfoHeading>
      <InfoText>
        {infoText}
      </InfoText>
      {children}
      {goBackButton && <GoBackButton />}
      {nextButton && <NextStepButton />}
    </PageContainerBox>
  );
};
