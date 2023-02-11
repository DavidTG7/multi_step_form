import { NextStepButton } from "../../components/nextStepButton/NextStepButton"
import { PageContainer } from "../../components/pageContainer/PageContainer"
import { InfoHeading, InfoInput, InfoLabel, InfoText } from "./info.styles"

export const Info = () => {
  return (
    <PageContainer>
      <InfoHeading>Personal info</InfoHeading>
      <InfoText>
        Please provide your name, email address, and phone number.
      </InfoText>
      <InfoLabel>
        Name
        <InfoInput type="text" />
      </InfoLabel>
      <InfoLabel>
        Email Address
        <InfoInput type="email" />
      </InfoLabel>
      <InfoLabel>
        Phone Number
        <InfoInput type="tel" />
      </InfoLabel>
      <NextStepButton />
    </PageContainer>
  )
}