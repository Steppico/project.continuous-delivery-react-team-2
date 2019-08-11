import React from "react";
import "../Search.css";
import { connect } from "react-redux";
import { setFilter, setFilteredLocations } from "../actions";

const Locations = (props) => {
  const handleSelect = (event, key) => {
    if (props.filters.state) props.setFilter({ city: null, highway: null });
    props.setFilter({ [key]: event.target.value });
  };

  const cityDropDown = (cities) => {
    console.log(cities);
    // return cities.map((city, index) => {
    //   return (
    //     <option value={city} key={index}>
    //       {city}
    //     </option>
    //   );
    // });
  };

  const highwayDropDown = (states) => {
    console.log("HIGHWAYS", states);
    const filter = states.filter((stateToFilter) => {
      return stateToFilter.name === props.filters.state;
    });
    return filter.highways.map((highway, index) => {
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
          {cityDropDown(props.filteredLocations)}
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
