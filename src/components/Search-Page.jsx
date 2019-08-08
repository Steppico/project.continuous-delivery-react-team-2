import React from "react";
import "../Search.css";
import { SearchCriteria } from "./Search-Criteria";

export const SearchPage = () => {
  return (
    <div>
      <div className="titleBanner">Flying Truck Stops</div>
      <div className="SearchResultPhoto">Locations Map here</div>
      <SearchCriteria />
    </div>
  );
};
