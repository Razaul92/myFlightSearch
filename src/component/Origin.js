import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Data from "./DataFile/Data.json";
import data from "./DataFile/Suggested.json";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

const defaultDes = {
  key: 0,
  name: "Delhi",
  countryCode: "IN",
  code: "DEL",
};

function Origin(props) {
  const [display, setDisplay] = useState(false);
  const [searchDestination, setSearchDestination] = useState("");
  const [filterDestination, setFilterDestination] = useState(data);
  const [selectedDes, setSelectedDes] = useState(defaultDes);

  const clickHandler = () => {
    setDisplay(() => !display);
    props.onAddOrigin(defaultDes.code);
  };

  const selectHandler = (key, name, countryCode, code) => {
    const passData = { key, name, countryCode, code };
    setSelectedDes(passData);
    setDisplay(false);
    setSearchDestination("");
    props.onAddOrigin(code);
  };

  const filterHandler = (e) => {
    const search = e.target.value;
    setSearchDestination(search);
    const newFilter = Data.filter((value) => {
      return value.code.toLowerCase().includes(search.toLowerCase());
    });

    if (search === "") {
      setFilterDestination([]);
    } else {
      setFilterDestination(newFilter);
    }
  };

  return (
    <div className="main__comp">
      <div className="comp" onClick={clickHandler}>
        <p>From</p>
        <h1>{selectedDes.name}</h1>
        <p>
          {selectedDes.code},{selectedDes.name} Airport -{" "}
          {selectedDes.countryCode}
        </p>
      </div>
      {display && (
        <div className="search">
          <input
            type="text"
            placeholder="Enter City/AirportName"
            onChange={filterHandler}
            value={searchDestination}
          />
          <SearchIcon className="search_Icon" />
        </div>
      )}
      {display && (
        <div className="searched__Destination">
          {filterDestination === data && <p>Suggested</p>}
          {filterDestination.length === 0 && <p>No Place Found</p>}
          {filterDestination.slice(0, 15).map((val, key) => {
            return (
              <div
                className="searched__city"
                id={Math.random()}
                key={Math.random()}
                onClick={() =>
                  selectHandler(key, val.name, val.country_code, val.code)
                }
              >
                <FlightTakeoffIcon className="flight__icon" />
                <span>
                  {val.name}, {val.country_code}
                </span>
                <p>{val.code}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Origin;
