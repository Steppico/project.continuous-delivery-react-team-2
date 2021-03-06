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
      if (unlead.name === "UNLEADED")
        return <p className="mid-a">Gas: ${unlead.price.toFixed(2)}</p>;
    });
  };

  const dieselPrice = (fuels) => {
    return fuels.map((unlead) => {
      if (unlead.name === "DIESEL")
        return <p className="footer-a">Diesel: ${unlead.price.toFixed(2)}</p>;
    });
  };

  const getRestaurants = (restaurants) => {
    return restaurants.map((restaurant) => {
      console.log(restaurant.includes("Arby"));
      if (restaurant.match("Arby") || restaurant.match("Wendy"));
      <div className="imgContainer">
        <img className="img-a" alt="" src={restaurant.toLowerCase()} />
      </div>;
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
            <div className="mid">{gasPrice(location.fuels)}</div>
            <div className="footer">{dieselPrice(location.fuels)}</div>
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
