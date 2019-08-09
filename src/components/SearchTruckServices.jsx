import React from "react";
import "../Search.css";

export const TruckServices = () => {
  return (
    <div className="SearchTruckContainer SearchAllSub">
      <div className="inline rowTitle">Truck Services: </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="travelStop" name="oil" />
        <label for="oil">Oil Change</label>
      </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="travelStop" name="mechanical" />
        <label for="mechanical">Light Mechanical</label>
      </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="travelStop" name="tire" />
        <label for="tire">Tire Pass</label>
      </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="travelStop" name="truck" />
        <label for="truck">Truck Tire Care</label>
      </div>
    </div>
  );
};
