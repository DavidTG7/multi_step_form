import { Info } from "../../pages/info/Info";
import { Aside } from "./aside/Aside";
import { MainBox } from "./main.styles";
import { Summary } from '../../pages/summary/Sumary';
import { AddOns } from "../../pages/addOns/AddOns";
import { Thank } from "../../pages/thank/Thank";
import {Plan}  from '../../pages/plan/Plan'

export const Main = () => {
  return (
    <>
      <MainBox>
        <Aside />
        {/* <Info /> */}
        {/* <Plan/> */}
        {/* <Summary /> */}
        {/* <AddOns /> */}
        <Thank/>
      </MainBox>
    </>
  );
};