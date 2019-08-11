import React from "react";
import "../Search.css";
import { connect } from "react-redux";
import { setFilter, setFilteredLocations } from "../actions";

const Locations = (props) => {
  const handleSelect = (event, key) => {
    if (props.filters.state) props.setFilter({ city: null, highway: null });
    props.setFilter({ [key]: event.target.value });
  };

  const cityDropDown = (states) => {
    const filter = states.filter((stateToFilter) => {
      return stateToFilter.name === props.filters.state;
    });
    console.log("mamamaa", filter);
    if (filter > 0 || filter[0] !== undefined)
      return filter[0].cities.map((city, index) => {
        return (
          <option value={city} key={index}>
            {city}
          </option>
        );
      });
  };

  const highwayDropDown = (states) => {
    const filter = states.filter((stateToFilter) => {
      return stateToFilter.name === props.filters.state;
    });
    if (filter > 0 || filter[0] !== undefined)
      return filter[0].highways.map((highway, index) => {
        return (
          <option value={highway} key={index}>
            {highway}
          </option>
        );
      });
  };

  const stateDropDown = (states) => {
    return states.map((state, index) => {
      return (
        <option value={state.name} key={index}>
          {state.name}
        </option>
      );
    });
  };

  return (
    <div className="SearchLocationsContainer SearchAllSub">
      <div className="inline">Location: </div>
      <form className="inline rowTitle">
        <select className="dropdown" onChange={(e) => handleSelect(e, "state")}>
          <option value="State">State</option>
          {stateDropDown(props.states)}
        </select>
      </form>
      <form className="inline searchRowSubset">
        <select onChange={(e) => handleSelect(e, "city")} className="dropdown">
          <option value="City">City</option>
          {cityDropDown(props.states)}
        </select>
      </form>
      <form className="inline searchRowSubset">
        <select
          onChange={(e) => handleSelect(e, "highway")}
          className="dropdown"
        >
          <option value="Highway">Highway</option>
          {highwayDropDown(props.states)}
        </select>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  locations: state.locations,
  filteredLocations: state.filteredLocations,
  filters: state.filters,
  states: state.states,
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
)(Locations);
