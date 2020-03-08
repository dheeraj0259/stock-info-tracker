import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

class Home extends Component {
  componentDidMount() {
    const { history, userAccess } = this.props;
    if (!userAccess) history.push("/stock-info-tracker/signin");
  }

  render() {
    return <h1>Welcome to dashboard</h1>;
  }
}

const mapStateToProps = state => {
  return {
    userAccess: state.user.userAccess
  };
};

export default connect(mapStateToProps, null)(Home);
