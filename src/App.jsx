import React, { Component } from "react";
import "./App.css";
import Map from "./containers/Map";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Map id="map" />
        <Result />
      </div>
    );
  }
}

export default App;
