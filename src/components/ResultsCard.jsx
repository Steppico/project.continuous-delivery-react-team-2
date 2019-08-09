import React, { Component } from "react";

const ResultsCardContainer = () => {
  const state = {
    stores: [
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
      {
        address: "123 Fake St, Beverly Hills",
        gas: 2.1,
        diesel: 2.89,
        wifi: true,
        atm: true,
        wendy: true,
        arby: true,
        store: 495,
      },
    ],
  };
  const pageOneResults = state.stores.map((store) => {});

  return (
    <div className="ResultsCardContainer">
      {pageOneResults}
      <div>Here we put the page numbers or scroll infinitely</div>
    </div>
  );
};
