import { Info } from "../../pages/info/Info";
import { Aside } from "./aside/Aside";
import { MainBox } from "./styles";

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