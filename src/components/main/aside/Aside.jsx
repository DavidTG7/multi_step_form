import bgDesktop from "../../../images/bg-sidebar-desktop.svg";
import bgMobil from "../../../images/bg-sidebar-mobile.svg";
import {
  AsideBGImageDesk,
  AsideBGImageMobil,
  AsideBox,
  ItemsContainer,
} from "./aside.styles";
import { ItemStep } from "./itemStep/ItemStep";

const itemsList = [
  {
    number: 1,
    infoType: "YOUR INFO",
  },
  {
    number: 2,
    infoType: "SLECT PLAN",
  },
  {
    number: 3,
    infoType: "ADD-ONS",
  },
  {
    number: 4,
    infoType: "SUMMARY",
  },
];

const allItems = itemsList.map(({ number, infoType }) => {
  return <ItemStep number={number} infoType={infoType} />;
});

export const Aside = () => {
  return (
    <>
      <AsideBGImageMobil src={bgMobil} alt="Backgroun Image" />
      <AsideBox>
        <AsideBGImageDesk src={bgDesktop} alt="Backgroun Image" />
        <ItemsContainer>{allItems}</ItemsContainer>
      </AsideBox>
    </>
  );
};
