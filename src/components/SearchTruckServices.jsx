import React from "react";
import "../Search.css";
import { connect } from "react-redux";
import { setFilter, setFilteredLocations } from "../actions";

const TruckServices = (props) => {
  const handleChange = (event, key) => {
    props.setFilter({ [key]: event.target.checked });
  };
  return (
    <div className="SearchTruckContainer SearchAllSub">
      <div className="inline rowTitle">Truck Services: </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="travelStop"
          name="oil"
          onChange={(e) => handleChange(e, "oilChange")}
        />
        <label htmlFor="oil">Oil Change</label>
      </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="travelStop"
          name="mechanical"
          onChange={(e) => handleChange(e, "lightMechanical")}
        />
        <label htmlFor="mechanical">Light Mechanical</label>
      </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="travelStop"
          name="tire"
          onChange={(e) => handleChange(e, "tirePass")}
        />
        <label htmlFor="tire">Tire Pass</label>
      </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="travelStop"
          name="truck"
          onChange={(e) => handleChange(e, "truckTireCare")}
        />
        <label htmlFor="truck">Truck Tire Care</label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setFilter(filter));
      dispatch(setFilteredLocations());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckServices);
