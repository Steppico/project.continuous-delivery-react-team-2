import React, { Component } from "react";
import { Locations } from "./Search-Locations";
import { TruckServices } from "./Search-TruckServices";
import { Type } from "./Search-Type";
import { Amenities } from "./Search-Amenities";
import { Restaurants } from "./Search-Restaurants";
import "../Search.css";

export class SearchCriteria extends Component {
  render() {
    return (
      <div className="CriteriaContainer">
        <Locations />
        <TruckServices />
        <Type />
        <Amenities />
        <Restaurants />
      </div>
    );
  }
}
