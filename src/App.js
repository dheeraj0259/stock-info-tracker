import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import Navbar from "./components/Navbar";
import AlertApp from "./components/AlertApp";

import "./App.scss";

class App extends Component {
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

const mapStateToProps = state => {
  return {
    userAccess: state.user.userAccess
  };
};

export default connect(mapStateToProps, null)(App);
