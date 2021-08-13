import React from "react";
import Data from "./DataFile/FlightDetail.json";

function Search(props) {
  const orgDes = {
    origin: props.onOriginSearch.origin,
    destination: props.onDesSearch.destination,
  };

  const searchHandler = () => {
    const newFilter = Data.filter((value) => {
      return value.origin.toLowerCase().includes(orgDes.origin.toLowerCase());
    });
    props.onAdd(newFilter);
  };

  return (
    <button className="search__btn" onClick={searchHandler}>
      Search
    </button>
  );
}

export default Search;
