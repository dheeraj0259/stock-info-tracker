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
        style={{ marginTop: 150 }}
      >
        <Fab
          size="medium"
          aria-label="add"
          style={{
            position: "absolute",
            marginTop: 8,
            marginLeft: -10
          }}
        >
          <LockIcon />
        </Fab>
        <LoginCard />
      </Grid>
    );
  }
}
export default Login;
