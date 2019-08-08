import React, { Component } from "react";
import "./App.css";
import Map from "./containers/Map";
import Result from "./components/Result";
import { SearchPage } from "./components/Search-Page";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Map id="map" />
        <SearchPage />
        <Result />
      </div>
    );
  }
}

export default App;
