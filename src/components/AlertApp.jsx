import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Slide } from "@material-ui/core";

import { setAlertStatus } from "../actions/alert";

class AlertApp extends React.Component {
  render() {
    const { show, message, type, resetAlertStatus } = this.props;
    return (
      <Slide direction="left" in={show} mountOnEnter unmountOnExit>
        <Alert
          variant="filled"
          severity={type}
          onClose={() => resetAlertStatus({})}
        >
          <AlertTitle>{type.toUpperCase()}</AlertTitle>
          {message}
        </Alert>
      </Slide>
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
    resetAlertStatus: info => dispatch(setAlertStatus(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertApp);
