import React, { Component } from "react";
import "../result.css";
import { connect } from "react-redux";
import { getLocations } from "../actions/index";

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="result-block">
        <h1>Result: "[]"location found</h1>
        <div className="result-container">
          <div className="filter-icon-block">
            <p>icon for filter</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="address-block">
            <p>address1 + address2 + City + Name</p>
          </div>
          <div className="info-block">
            <p>Tel:</p>
            <p>Fax:</p>
            <p>Truck Parking:</p>
          </div>
          <div className="unleaded-block">
            <p className="price">$2.15</p>
            <p>unleaded</p>
          </div>
          <div className="midgrade-block">
            <p className="price">$3.15</p>
            <p>midgrade</p>
          </div>
          <div className="diesel-block">
            <p className="price">$2.64</p>
            <p>diesel</p>
          </div>
          <div className="propane-block">
            <p className="price">$3.95</p>
            <p>propane</p>
          </div>
          <div className="amenities-block">
            <p>amenities</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="restaurants-block">
            <p>restaurants</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
        </div>
        <div className="result-container">
          <div className="filter-icon-block">
            <p>icon for filter</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="address-block">
            <p>address1 + address2 + City + Name</p>
          </div>
          <div className="info-block">
            <p>Tel:</p>
            <p>Fax:</p>
            <p>Truck Parking:</p>
          </div>
          <div className="unleaded-block">
            <p className="price">$2.15</p>
            <p>unleaded</p>
          </div>
          <div className="midgrade-block">
            <p className="price">$3.15</p>
            <p>midgrade</p>
          </div>
          <div className="diesel-block">
            <p className="price">$2.64</p>
            <p>diesel</p>
          </div>
          <div className="propane-block">
            <p className="price">$3.95</p>
            <p>propane</p>
          </div>
          <div className="amenities-block">
            <p>amenities</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="restaurants-block">
            <p>restaurants</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
        </div>
        <div className="result-container">
          <div className="filter-icon-block">
            <p>icon for filter</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="address-block">
            <p>address1 + address2 + City + Name</p>
          </div>
          <div className="info-block">
            <p>Tel:</p>
            <p>Fax:</p>
            <p>Truck Parking:</p>
          </div>
          <div className="unleaded-block">
            <p className="price">$2.15</p>
            <p>unleaded</p>
          </div>
          <div className="midgrade-block">
            <p className="price">$3.15</p>
            <p>midgrade</p>
          </div>
          <div className="diesel-block">
            <p className="price">$2.64</p>
            <p>diesel</p>
          </div>
          <div className="propane-block">
            <p className="price">$3.95</p>
            <p>propane</p>
          </div>
          <div className="amenities-block">
            <p>amenities</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="restaurants-block">
            <p>restaurants</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
        </div>
        <div className="result-container">
          <div className="filter-icon-block">
            <p>icon for filter</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="address-block">
            <p>address1 + address2 + City + Name</p>
          </div>
          <div className="info-block">
            <p>Tel:</p>
            <p>Fax:</p>
            <p>Truck Parking:</p>
          </div>
          <div className="unleaded-block">
            <p className="price">$2.15</p>
            <p>unleaded</p>
          </div>
          <div className="midgrade-block">
            <p className="price">$3.15</p>
            <p>midgrade</p>
          </div>
          <div className="diesel-block">
            <p className="price">$2.64</p>
            <p>diesel</p>
          </div>
          <div className="propane-block">
            <p className="price">$3.95</p>
            <p>propane</p>
          </div>
          <div className="amenities-block">
            <p>amenities</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="restaurants-block">
            <p>restaurants</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
        </div>
        <div className="result-container">
          <div className="filter-icon-block">
            <p>icon for filter</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="address-block">
            <p>address1 + address2 + City + Name</p>
          </div>
          <div className="info-block">
            <p>Tel:</p>
            <p>Fax:</p>
            <p>Truck Parking:</p>
          </div>
          <div className="unleaded-block">
            <p className="price">$2.15</p>
            <p>unleaded</p>
          </div>
          <div className="midgrade-block">
            <p className="price">$3.15</p>
            <p>midgrade</p>
          </div>
          <div className="diesel-block">
            <p className="price">$2.64</p>
            <p>diesel</p>
          </div>
          <div className="propane-block">
            <p className="price">$3.95</p>
            <p>propane</p>
          </div>
          <div className="amenities-block">
            <p>amenities</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="restaurants-block">
            <p>restaurants</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
        </div>
        <div className="result-container">
          <div className="filter-icon-block">
            <p>icon for filter</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="address-block">
            <p>address1 + address2 + City + Name</p>
          </div>
          <div className="info-block">
            <p>Tel:</p>
            <p>Fax:</p>
            <p>Truck Parking:</p>
          </div>
          <div className="unleaded-block">
            <p className="price">$2.15</p>
            <p>unleaded</p>
          </div>
          <div className="midgrade-block">
            <p className="price">$3.15</p>
            <p>midgrade</p>
          </div>
          <div className="diesel-block">
            <p className="price">$2.64</p>
            <p>diesel</p>
          </div>
          <div className="propane-block">
            <p className="price">$3.95</p>
            <p>propane</p>
          </div>
          <div className="amenities-block">
            <p>amenities</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
          <div className="restaurants-block">
            <p>restaurants</p>
            <img src="" alt="test" />
            <img src="" alt="test" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => {
      const res = getLocations();
      dispatch(res);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
