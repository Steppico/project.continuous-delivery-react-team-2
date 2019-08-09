import React from "react";
import { Locations } from "./SearchLocations";
import { TruckServices } from "./SearchTruckServices";
import { Type } from "./SearchType";
import { Amenities } from "./SearchAmenities";
import { Restaurants } from "./SearchRestaurants";
import "../Search.css";

export const SearchCriteria = () => {
  return (
    <div className="CriteriaContainer">
      <Locations />
      <TruckServices />
      <Type />
      <Amenities />
      <Restaurants />
    </div>
  );
};
