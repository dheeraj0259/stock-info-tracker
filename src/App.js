import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Navbar from "./components/Navbar";
import AlertApp from "./components/AlertApp";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <Grid container direction="column" alignItems="flex-end">
        <Grid item style={{ marginBottom: "31px" }} />
        <Navbar />
        <Grid />
        <Grid
          item
          style={{ zIndex: 1, width: "30%", position: "absolute", top: 72 }}
        >
          <AlertApp />
        </Grid>
      </Grid>
    );
  }
}
