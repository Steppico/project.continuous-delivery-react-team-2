import { connect } from "react-redux";
import Map from "../components/Map";
import { getLocations } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => {
      const res = getLocations();
      dispatch(res);
    },
  };
};

const mapStateToProps = ({
  locations,
  filteredLocations,
  markers,
  filteredMarkers,
}) => {
  return {
    locations,
    filteredLocations,
    markers,
    filteredMarkers,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
