import { useState } from "react";
import "./App.css";
import Main from "./component/Main";
import "./component/style.css";
import DisplayFlightDetail from "./component/DisplayFlightDetail";

const App = () => {
  const [state, setstate] = useState();
  const displayData = (text) => {
    setstate(text);
  };

  return (
    <div>
      <Main displayData={displayData} />
      <DisplayFlightDetail flightDetail={state} />
    </div>
  );
};

export default App;
