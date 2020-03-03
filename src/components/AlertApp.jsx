import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";

import { setAlertStatus } from "../actions/alert";

class AlertApp extends React.Component {
  render() {
    const { show, message, type } = this.props;
    return (
      show && (
        <Alert severity={type}>
          <AlertTitle>{type.toUpperCase()}</AlertTitle>
          {message}
        </Alert>
      )
    );
  }
}
const mapStateToProps = state => {
  return {
    show: state.alert.showAlert,
    message: state.alert.message,
    type: state.alert.type
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAlertStatus: info => dispatch(setAlertStatus(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertApp);
