import React from "react";
import "../ResultsCardSingle.css";
import atm from "../resultsCardImage/atm.png";
import arby from "../resultsCardImage/arby.jpg";
import wendy from "../resultsCardImage/wendy.png";
import wifi from "../resultsCardImage/wifi.jpg";
import letterT from "../resultsCardImage/letterT.png";
import letterC from "../resultsCardImage/letterC.png";
import tire from "../resultsCardImage/tire.png";
import oil from "../resultsCardImage/oil.png";
import { connect } from "react-redux";

const ResultsCardSingle = (props) => {
  const gasPrice = (fuels) => {
    return fuels.map((unlead) => {
      if (unlead.name === "UNLEADED") return unlead.price.toFixed(2);
    });
  };

  const dieselPrice = (fuels) => {
    return fuels.map((unlead) => {
      if (unlead.name === "DIESEL") return unlead.price.toFixed(2);
    });
  };

  const getRestaurants = (restaurants) => {
    return restaurants.map((restaurant) => {
      if (restaurant.includes("Arby")) {
        return (
          <div className="imgContainer">
            <img className="img-a" alt="Arby's" src={arby} />
          </div>
        );
      }
      if (restaurant.includes("Wendy")) {
        return (
          <div className="imgContainer">
            <img className="img-a" alt="Wendy's" src={wendy} />
          </div>
        );
      }
    });
  };
  return (
    <div className="CardContainer">
      <h2>
        {props.filteredLocations.length === 1
          ? `1 result found!`
          : `${props.filteredLocations.length} results found!`}
        !
      </h2>
      {props.filteredLocations.map((location, index) => {
        return (
          <div className="SingleCardContainer" key="SingleCardContainer">
            <div className="header">
              <p className="header-a">{location.name}</p>
            </div>
            <div className="store">
              <p className="store-a">{`#${index + 1}`}</p>
            </div>
            <div className="imgMainContainer">
              {location.atm ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={atm} />
                </div>
              ) : (
                ""
              )}
              {location.wifi ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={wifi} />
                </div>
              ) : (
                ""
              )}
              {getRestaurants(location.restaurants)}
            </div>
            <div className="imgBelowContainer">
              {location.store_type === "Travel Stop" ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={letterT} />
                </div>
              ) : (
                ""
              )}
              {location.store_type === "Country Store" ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={letterC} />
                </div>
              ) : (
                ""
              )}
              {location.tirePass ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={tire} />
                </div>
              ) : (
                ""
              )}
              {location.oilChange ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={oil} />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mid">
              <p className="mid-a">
                Gas:
                {gasPrice(location.fuels)}
              </p>
            </div>
            <div className="footer">
              <p className="footer-a">Diesel: {dieselPrice(location.fuels)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredLocations: state.filteredLocations,
  };
};

export default connect(mapStateToProps)(ResultsCardSingle);
