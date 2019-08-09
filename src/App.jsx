import React, { Component } from "react";
import "./App.css";
import Map from "./containers/Map";
import Result from "./components/Result";
import { SearchPage } from "./components/SearchPage";
import { ResultsCard } from "./components/ResultsCard";
import { ResultsCardSingle } from "./components/ResultsCardSingle";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Map id="map" />
        <SearchPage />
        <br />
        <ResultsCardSingle />
      </div>
    );
  }
}

export default App;
