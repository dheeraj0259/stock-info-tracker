import React from "react";
import { Card, CardMedia, Grid, Fab } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import loginBackground from "../images/loginBackground.jpg";

class Login extends React.Component {
  render() {
    const isSignInRoute = () => {
      const { match } = this.props;
      return match.url.includes("signin");
    };

    const styleInfo = () => {
      const signInStyle = {
        card: {
          maxWidth: "calc(100vw - 40%)",
          maxHeight: "480px"
        },
        image: {
          height: "480px"
        }
      };
      const signOutStyle = {
        card: {
          maxWidth: "calc(100vw - 30%)",
          maxHeight: "520px"
        },
        image: {
          height: "520px"
        }
      };
      return isSignInRoute() ? signInStyle : signOutStyle;
    };

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
          {isSignInRoute() ? (
            <LockIcon style={{ fontSize: 28 }} />
          ) : (
            <PersonIcon style={{ fontSize: 28 }} />
          )}
        </Fab>
        <Card
          style={{
            maxWidth: `${styleInfo().card.maxWidth}`,
            backgroundColor: "#80808026",
            maxHeight: `${styleInfo().card.maxHeight}`
          }}
        >
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                style={{ height: `${styleInfo().image.height}` }}
                image={loginBackground}
              />
            </Grid>

            {isSignInRoute() ? <SignIn /> : <SignUp />}
          </Grid>
        </Card>
      </Grid>
    );
  }
}
export default Login;
