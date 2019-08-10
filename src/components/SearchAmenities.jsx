import React from "react";
import "../Search.css";
import { connect } from "react-redux";
import { setFilter, setFilteredLocations } from "../actions";

export const Amenities = (props) => {
  const handleChange = (event, key) => {
    props.setFilter({ [key]: event.target.checked });
  };
  return (
    <div className="SearchAmenitiesContainer SearchAllSub">
      <div className="inline rowTitle">Amenities: </div>
      <div className="inline">
        <input
          type="checkbox"
          value="ATM"
          name="atm"
          onChange={(e) => handleChange(e, "atm")}
        />
        <label htmlFor="atm">ATM</label>
      </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="WIFI"
          name="wifi"
          onChange={(e) => handleChange(e, "wifi")}
        />
        <label htmlFor="wifi">WIFI</label>
      </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="Other"
          name="other"
          onChange={(e) => handleChange(e, "otherAmenities")}
        />
        <label htmlFor="other">Other</label>
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
)(Amenities);
