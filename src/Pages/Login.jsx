import React from "react";
import { Button } from "@material-ui/core";

function onClickLoginHandler() {
  console.log("Clicked on login button");
}

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Welocome to login page</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClickLoginHandler()}
        >
          Login
        </Button>
      </div>
    );
  }
}
export default Login;
