import React from "react";
import { Card, CardMedia, Grid, Fab, Zoom } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import loginBackground0 from "../images/loginBackground.jpg";
import loginBackground1 from "../images/loginBackground1.jpg";
import loginBackground2 from "../images/loginBackground2.jpg";
import loginBackground3 from "../images/loginBackground3.jpg";
import loginBackground4 from "../images/loginBackground4.jpg";
import loginBackground5 from "../images/loginBackground5.jpg";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      imageCounter: 0
    };
  }

  render() {
    const { imageCounter } = this.state;

    const isSignInRoute = () => {
      const { match } = this.props;
      return match.url.includes("signin");
    };

    const getImage = () => {
      switch (imageCounter) {
        case 0:
          return loginBackground5;
        case 1:
          return loginBackground1;
        case 2:
          return loginBackground2;
        case 3:
          return loginBackground3;
        case 4:
          return loginBackground4;
        case 5:
          return loginBackground0;
        default:
          return loginBackground5;
      }
    };

    const onClickIconHandler = () => {
      const count = imageCounter + 1;
      this.setState({
        imageCounter: count > 5 ? 0 : count
      });
    };

    const styleInfo = () => {
      // TODO: remove below unused variable
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
      return isSignInRoute() ? signOutStyle : signOutStyle;
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
          onClick={onClickIconHandler}
        >
          <Zoom
            in
            style={{
              transitionDelay: "200ms"
            }}
          >
            {isSignInRoute() ? (
              <LockIcon style={{ fontSize: 28 }} />
            ) : (
              <PersonIcon style={{ fontSize: 28 }} />
            )}
          </Zoom>
        </Fab>

        <Card
          style={{
            maxWidth: `${styleInfo().card.maxWidth}`,
            maxHeight: `${styleInfo().card.maxHeight}`
          }}
        >
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                style={{ height: `${styleInfo().image.height}` }}
                image={getImage()}
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
