import { useState } from "react";
import { NextStepButton } from "../../components/nextStepButton/NextStepButton";
import { PageContainer } from "../../components/pageContainer/PageContainer";
import { InfoInput, InfoLabel } from "./info.styles";

export const Info = () => {
  return (
    <PageContainer
      title="Personal Info"
      infoText="Please provide your name, email address, and phone number."
      nextButton
      goBackButton
    >
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
    </PageContainer>
  );
};
