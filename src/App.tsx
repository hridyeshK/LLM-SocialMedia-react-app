import "./App.css";
import GlobalContext from "./components/GlobalContext";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <GlobalContext>
        <BrowserRouter>
          <PermanentDrawerLeft />
        </BrowserRouter>
      </GlobalContext>
    </>
  );
}

export default App;
