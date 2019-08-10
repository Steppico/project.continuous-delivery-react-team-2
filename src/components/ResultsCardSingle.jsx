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
  console.log("proppity", props);

  return (
    <div className="CardContainer">
      {props.filteredLocations.map((location, index) => {
        return (
          <div className="SingleCardContainer">
            <div className="header">
              <p className="header-a">{location.address1}</p>
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
              {location.arby ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={arby} />
                </div>
              ) : (
                ""
              )}
              {location.wendy ? (
                <div className="imgContainer">
                  <img className="img-a" alt="" src={wendy} />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="imgBelowContainer">
              <div className="imgContainer">
                <img className="img-a" alt="" src={letterT} />
              </div>
              <div className="imgContainer">
                <img className="img-a" alt="" src={letterC} />
              </div>
              <div className="imgContainer">
                <img className="img-a" alt="" src={tire} />
              </div>
              <div className="imgContainer">
                <img className="img-a" alt="" src={oil} />
              </div>
            </div>
            <div className="mid">
              <p className="mid-a">Gas: $2.10</p>
            </div>
            <div className="footer">
              <p className="footer-a">Diesel: $2.89</p>
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
