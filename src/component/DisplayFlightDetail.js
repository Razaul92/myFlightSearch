import React from "react";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";

function DisplayFlightDetail(props) {
  const { flightDetail } = props;

  function mul(val) {
    return val * 987;
  }

  return (
    <ul className="flightDetail__container">
      <p>Details of All the Available Flights</p>

      {flightDetail !== undefined && flightDetail.length === 0 && (
        <span>No Flights Found.</span>
      )}
      {flightDetail !== undefined &&
        flightDetail.map((val, key) => {
          return (
            <li key={key} className="flightDetail">
              <div className="depart_date1">
                <FlightTakeoffIcon className="flight__Icon" />
              </div>
              <div className="depart_date">
                <span>Depart Date: {val.depart_date}</span>
                <hr />
                <span>Origin : {val.origin}</span>
              </div>
              <div className="depart_date">
                <span className="horizontal__line">
                  Duration: {val.duration} Mins
                </span>

                <span>Distance: {val.distance} kms</span>
              </div>
              <div className="depart_date1">
                <FlightLandIcon className="flight__Icon" />
              </div>
              <div className="depart_date">
                <span>Return Date: {val.return_date}</span>
                <hr />
                <span>Destination : {val.destination}</span>
              </div>
              <div className="depart_date">
                <span>Price: &#8377; {mul(val.value)}</span>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default DisplayFlightDetail;
