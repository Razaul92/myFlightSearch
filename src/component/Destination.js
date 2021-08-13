import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Data from "./DataFile/Data.json";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import data from "./DataFile/Suggested.json";

const defaultDes = {
  key: 0,
  name: "Mumbai",
  countryCode: "IN",
  code: "BOM",
};

function Destination(props) {
  const [display, setDisplay] = useState(false);
  const [searchDestination, setSearchDestination] = useState();
  const [filterDestination, setFilterDestination] = useState(data);
  const [selectedDes, setSelectedDes] = useState(defaultDes);

  const clickHandler = () => {
    setDisplay(() => !display);
    props.onAddDestination(defaultDes.code);
  };

  const selectHandler = (key, name, countryCode, code) => {
    const passData = { key, name, countryCode, code };
    setSelectedDes(passData);
    setDisplay(false);
    setSearchDestination("");
    props.onAddDestination(code);
  };

  const filterHandler = (e) => {
    const search = e.target.value;
    setSearchDestination(search);
    const newFilter = Data.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
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
        <div className="sync__icon">
          <SyncAltIcon className="sync" />
        </div>
        <p>TO</p>
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
      {filterDestination.length !== 0 && display && (
        <div className="searched__Destination">
          {filterDestination === data && <p>Suggested</p>}
          {filterDestination.length === 0 && <p>No Place Found</p>}
          {filterDestination.slice(0, 15).map((val, key) => {
            return (
              <div
                className="searched__city"
                id={Math.random()}
                key={key}
                onClick={() =>
                  selectHandler(key, val.name, val.country_code, val.code)
                }
              >
                <FlightLandIcon className="flight__icon" />
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

export default Destination;
