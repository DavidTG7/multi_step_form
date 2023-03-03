import "./app.css";
import { Main } from "./components/main/Main";
import { ContextProviderd } from "./Context";

export const App = () => {

  return (
    <ContextProviderd>
      <Main />
    </ContextProviderd>
  );
};
