import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  Divider,
  Link,
  CircularProgress
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { user } from "../api";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      firstName: "",
      lastName: "",
      password: "",
      showPassword: false,
      isEmailValid: true,
      isPasswordValid: true,
      isFirstNameValid: true,
      isLastNameValid: true
    };
  }

  render() {
    console.log(this.props.users);
    const {
      isFirstNameValid,
      isLastNameValid,
      isEmailValid,
      showPassword,
      isPasswordValid,
      userEmail,
      password,
      firstName,
      lastName
    } = this.state;

    const { loading } = this.props;

    const getKey = key => {
      switch (key) {
        case "userEmail":
          return "isEmailValid";
        case "password":
          return "isPasswordValid";
        case "firstName":
          return "isFirstNameValid";
        case "lastName":
          return "isLastNameValid";
        default:
          return "isEmailValid";
      }
    };

    const handleChange = key => event => {
      const keyToAssign = getKey(key);
      if (!event.target.value) {
        this.setState({
          [keyToAssign]: !keyToAssign,
          [key]: event.target.value
        });
      } else {
        this.setState({
          [key]: event.target.value,
          [keyToAssign]: true
        });
      }
    };

    const handleClickShowPassword = () => {
      this.setState({ showPassword: !showPassword });
    };

    const handleClickSignUp = () => {
      const { history } = this.props;
      const userDetails = {
        firstName,
        lastName,
        email: userEmail,
        password
      };
      const { setUserDataRequest } = this.props;
      this.setState({ loading: true });
      setUserDataRequest(userDetails);
      this.setState({ loading: false });
      setTimeout(() => history.push("signin"), 2000);
    };
    return (
      <Grid item xs={6}>
        <Grid style={{ marginLeft: 10, marginTop: 50 }}>
          <Typography gutterBottom variant="h4">
            Sign up
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Enter details to sign up
          </Typography>
        </Grid>

        <Grid container direction="column" style={{ padding: 20 }}>
          <Grid item style={{ marginBottom: 10 }}>
            <TextField
              style={{ marginRight: 10 }}
              id="outlined-first-name-required"
              label="First Name"
              onChange={handleChange("firstName")}
              variant="outlined"
              color={!isFirstNameValid ? "secondary" : "primary"}
              error={!isFirstNameValid}
              helperText={!isFirstNameValid ? "This is a required field" : ""}
            />
            <TextField
              id="outlined-last-name-required"
              label="Last Name"
              onChange={handleChange("lastName")}
              variant="outlined"
              color={!isLastNameValid ? "secondary" : "primary"}
              error={!isLastNameValid}
              helperText={!isLastNameValid ? "This is a required field" : ""}
            />
          </Grid>
          <TextField
            id="outlined-email-required"
            label="Email address"
            onChange={handleChange("userEmail")}
            variant="outlined"
            color={!isEmailValid ? "secondary" : "primary"}
            error={!isEmailValid}
            helperText={!isEmailValid ? "This is a required field" : ""}
          />
          <TextField
            style={{ marginTop: 10 }}
            id="outlined-password-required"
            label="Password"
            type={!showPassword ? "password" : "text"}
            onChange={handleChange("password")}
            variant="outlined"
            color={!isPasswordValid ? "secondary" : "primary"}
            error={!isPasswordValid}
            helperText={!isPasswordValid ? "This is a required field" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="start"
                  onClick={handleClickShowPassword}
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              )
            }}
          />
          <Button
            size="large"
            style={{ marginTop: 30 }}
            variant="contained"
            color="primary"
            onClick={handleClickSignUp}
            disabled={
              !(userEmail && password && firstName && lastName) || loading
            }
          >
            {loading ? <CircularProgress size={24} /> : "Sign up"}
          </Button>
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Link href="/stock-info-tracker/signin">Have an account?</Link>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    loading: state.loading.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUserDataRequest: userDetails =>
      user.setUserInformation(userDetails, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
