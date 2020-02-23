import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataRequest } from "./actions/data";

import "./App.scss";

class App extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data } = this.props;
    return <h1>{data} Welcome to Home page</h1>;
  }
}

// redux providing state takeover
const mapStateToProps = state => {
  return {
    data: state.data.test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getDataRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
