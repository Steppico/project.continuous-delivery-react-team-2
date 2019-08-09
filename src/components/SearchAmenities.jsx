import React from "react";
import "../Search.css";

export const Amenities = () => {
  return (
    <div className="SearchAmenitiesContainer SearchAllSub">
      <div className="inline rowTitle">Amenities: </div>
      <div className="inline">
        <input type="checkbox" value="ATM" name="atm" />
        <label for="atm">ATM</label>
      </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="WIFI" name="wifi" />
        <label for="wifi">WIFI</label>
      </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="Other" name="other" />
        <label for="other">Other</label>
      </div>
    </div>
  );
};
