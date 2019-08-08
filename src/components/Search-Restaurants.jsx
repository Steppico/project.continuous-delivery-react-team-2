import React from "react";
import "../Search.css";

export const Restaurants = () => {
  return (
    <div className="SearchRestaurantsContainer SearchAllSub">
      <div className="inline rowTitle">Restaurants: </div>
      <div className="inline searchRowSubset">
        <input type="checkbox" value="res1" name="arby" />
        <label for="arby">Arby's</label>
      </div>

      <div className="inline searchRowSubset">
        <input type="checkbox" value="res2" name="wendy" />
        <label for="wendy">Wendy's</label>
      </div>

      <div className="inline searchRowSubset">
        <input type="checkbox" value="res3" name="other" />
        <label for="other">Other</label>
      </div>
    </div>
  );
};
