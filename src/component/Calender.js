import React, { useState } from "react";
import Day from "./Helper/FindDay";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender() {
  const [date, setDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  let myDate = new Date(date);
  let myDate1 = new Date(returnDate);

  const changeHandler = (date) => {
    setDate(date);
  };

  const onChange = (date) => {
    setReturnDate(date);
  };

  return (
    <div className="comp1">
      <div className="subComp1">
        <h3>
          Departure <KeyboardArrowDownIcon className="keyIcon" />
        </h3>
        <span className="day">{myDate.getDate()}</span>
        <DatePicker
          className="date"
          onChange={changeHandler}
          selected={date}
          dateFormat="MMMyy"
          showYearDropdown
          scrollableMonthYearDropdown
        />
        <span>{Day(myDate.getDay())}</span>
      </div>

      <div className="subComp1">
        <h3>
          Return <KeyboardArrowDownIcon className="keyIcon" />
        </h3>
        <span className="day">{myDate1.getDate()}</span>
        <DatePicker
          className="date"
          onChange={onChange}
          selected={returnDate}
          dateFormat="MMMyy"
          showYearDropdown
          scrollableMonthYearDropdown
        />
        <span>{Day(myDate1.getDay())}</span>
      </div>
    </div>
  );
}

export default Calender;
