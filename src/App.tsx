import "./App.css";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>  
    <BrowserRouter>
      <PermanentDrawerLeft/>
      </BrowserRouter>
    </>
  );
}

export default App;
