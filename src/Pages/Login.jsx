import React from "react";
import { Grid, Fab } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import LoginCard from "../components/LoginCard";

class Login extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={{ position: "fixed", top: "22%" }}
      >
        <Fab
          size="medium"
          style={{
            position: "absolute",
            marginTop: 8,
            marginLeft: -10
          }}
        >
          <LockIcon style={{ fontSize: 28 }} />
        </Fab>
        <LoginCard />
      </Grid>
    );
  }
}
export default Login;
