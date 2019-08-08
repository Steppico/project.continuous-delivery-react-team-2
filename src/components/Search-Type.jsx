import React from "react";
import "../Search.css";

export const Type = () => {
  return (
    <div className="SearchTypeContainer SearchAllSub">
      <div className="inline rowTitle">Type: </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="travelStop" name="travel" />
        <label for="travel">Travel Stop</label>
      </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="countryStop" name="country" />
        <label for="country">Country Stop</label>
      </div>
    </div>
  );
};
