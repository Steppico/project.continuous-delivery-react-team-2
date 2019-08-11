import React from "react";
import "../Search.css";
import { connect } from "react-redux";
import { setFilter, setFilteredLocations } from "../actions";

const Restaurants = (props) => {
  const handleSelect = (event, key) => {
    props.setFilter({ [key]: event.target.checked });
  };
  return (
    <div className="SearchRestaurantsContainer SearchAllSub">
      <div className="inline rowTitle">Restaurants: </div>
      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="res1"
          name="arby"
          onChange={(e) => handleSelect(e, "arbys")}
        />
        <label htmlFor="arby">Arby's</label>
      </div>

      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="res2"
          name="wendy"
          onChange={(e) => handleSelect(e, "wendys")}
        />
        <label htmlFor="wendy">Wendy's</label>
      </div>

      <div className="inline searchRowSubset">
        <input
          type="checkbox"
          value="res3"
          name="other"
          onChange={(e) => handleSelect(e, "otherRestaurants")}
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
)(Restaurants);
