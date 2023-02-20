import { useState } from "react";
import { PageContainer } from "../../components/pageContainer/PageContainer";
import { CheckBoxInput, AddOnInputBox, AddOnTitle, AddOnInfoBox, AddOnText, AddOnPrice, ClickDiv } from "./addOns.styles";

let addOnsStatus = [
  {
    name: "onlineService",
    status: true,
    title: "Online service",
    text: "Access to multiplayer games",
    price: "1"
  },
  {
    name: "largerStorage",
    status: true,
    title: "Larger Storage",
    text: "Extra 1TB of cloud save",
    price: "2"

  },
  {
    name: "customizableProfile",
    status: false,
    title: "Customizable profile",
    text: "Custom theme on your profile",
    price: "2"

  }
];

export const AddOns = () => {
  const [addOnsCheck, setAddOnsCheck] = useState(addOnsStatus);
  const [monthly, setMonthly] = useState(false)

  const addOnsCheckSetter = (index: number) => {
    if (addOnsStatus[index].status === false) {
      addOnsStatus[index].status = true
    } else {
      addOnsStatus[index].status = false
    }

    setAddOnsCheck([...addOnsStatus])
  }

  const allAddOns = addOnsStatus.map((item, index) => {
    return (
      <AddOnInputBox active={item.status} key={item.name}>

        <CheckBoxInput type="checkbox" checked={item.status ? "checked" : ""} />
        <AddOnInfoBox>

          <AddOnTitle>{item.title}</AddOnTitle>
          <AddOnText>{item.text}</AddOnText>
        </AddOnInfoBox>
        <AddOnPrice>+${item.price}/{monthly ? "mo" : "yr"}</AddOnPrice>
        <ClickDiv id={item.name} onClick={(e: any) => addOnsCheckSetter(index)} />
      </AddOnInputBox>
    );
  })

  return (
    <PageContainer
      title="Pick add-ons"
      infoText="Add-ons help enhance your gaming experience"
      goBackButton
      nextButton
    >

      {allAddOns}

    </PageContainer>
  )
}
