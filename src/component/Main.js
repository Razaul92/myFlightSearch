import React, { useState } from "react";
import Origin from "./Origin";
import Destination from "./Destination";
import Calender from "./Calender";
import Search from "./Search";

function Main(props) {
  const [addOriginData, setAddOriginData] = useState({ origin: "DEL" });
  const [addDesData, setAddDesData] = useState({
    destination: "BOM",
  });

  const originHandler = (text) => {
    setAddOriginData({ origin: text });
  };

  const destinationHandler = (text) => {
    setAddDesData({ destination: text });
  };

  const displayFlight = (text) => {
    props.displayFlight([text]);
  };

  const addHandler = (text) => {
    props.displayData(text);
  };

  return (
    <div className="container">
      <h3>Search your Flight</h3>

      <div className="section">
        <Origin onAddOrigin={originHandler} />

        <Destination onAddDestination={destinationHandler} />
        <Calender />
      </div>
      <Search
        onOriginSearch={addOriginData}
        onDesSearch={addDesData}
        displayFlight={displayFlight}
        onAdd={addHandler}
      />
    </div>
  );
}

export default Main;
