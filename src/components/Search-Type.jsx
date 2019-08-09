import React from "react";
import "../Search.css";
import { connect } from "react-redux";
import { setFilter } from "../actions";

const Type = (props) => {
  const handleChange = (event, key) => {
    props.setFilter({ [key]: event.target.checked });
  };
  return (
    <div className="SearchTypeContainer SearchAllSub">
      <div className="inline rowTitle">Type: </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="travelStop"
          name="travel"
          onChange={(e) => handleChange(e, "travelStop")}
        />
        <label htmlFor="travel">Travel Stop</label>
      </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="countryStop"
          name="country"
          onChange={(e) => handleChange(e, "countryStop")}
        />
        <label htmlFor="country">Country Stop</label>
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
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Type);
