import { Info } from "../../pages/info/Info";
import { Aside } from "./aside/Aside";
import { MainBox } from "./main.styles";

export const Main = () => {
  return (
    <>
      <MainBox>
        <Aside />
        <Info />
      </MainBox>
    </>
  );
};