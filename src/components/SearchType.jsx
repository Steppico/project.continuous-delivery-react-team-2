import React from "react";
import "../Search.css";
import { connect } from "react-redux";
import { setFilter, setFilteredLocations } from "../actions";

const Type = (props) => {
  const handleChange = (event, key) => {
    console.log("chick, chack", event.target.checked);
    if (event.target.checked === false) {
      props.setFilter({ store_type: null });
    } else {
      props.setFilter({ [key]: event.target.value });
    }
  };
  return (
    <div className="SearchTypeContainer SearchAllSub">
      <div className="inline rowTitle">Type: </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="Travel Stop"
          name="travel"
          onChange={(e) => handleChange(e, "store_type")}
        />
        <label htmlFor="travel">Travel Stop</label>
      </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="Country Store"
          name="country"
          onChange={(e) => handleChange(e, "store_type")}
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
      dispatch(setFilteredLocations());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Type);
