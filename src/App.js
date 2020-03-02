import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "./actions/data";

import "./App.scss";

class App extends Component {
  componentDidMount() {
    const { getUserDataRequest } = this.props;
    getUserDataRequest();
  }

  render() {
    const { users } = this.props;
    return <h1>{users.length} Welcome to Home page</h1>;
  }
}

// redux providing state takeover
const mapStateToProps = state => {
  return {
    users: state.data.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDataRequest: () => dispatch(getUsersRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
