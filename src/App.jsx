import React, { Component } from "react";
import "./App.css";
import Map from "./containers/Map";
import { SearchPage } from "./components/SearchPage";
import { ResultsCardSingle } from "./components/ResultsCardSingle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="titleBanner">Flying Truck Stops</div>
        <Map id="map" />
        <SearchPage />
        <br />
        <ResultsCardSingle />
      </div>
    );
  }
}

export default App;
