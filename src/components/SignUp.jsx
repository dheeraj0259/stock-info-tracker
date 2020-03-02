import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  Divider,
  Link
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { postUserData } from "../sagas/data";

export default function SignUp() {
  const [values, setValues] = React.useState({
    userEmail: "",
    firstName: "",
    lastName: "",
    password: "",
    showPassword: false,
    isEmailValid: true,
    isPasswordValid: true,
    isFirstNameValid: true,
    isLastNameValid: true
  });

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
      setValues({
        ...values,
        [keyToAssign]: !values[keyToAssign],
        [key]: event.target.value
      });
    } else {
      setValues({
        ...values,
        [key]: event.target.value,
        [keyToAssign]: true
      });
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickSignIn = () => {
    console.log("Inside onClick SignUp", values);
    const { firstName, lastName, userEmail, password } = values;
    const userDetails = {
      firstName,
      lastName,
      email: userEmail,
      password
    };
    postUserData(userDetails);
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
            color={!values.isFirstNameValid ? "secondary" : "primary"}
            error={!values.isFirstNameValid}
            helperText={
              !values.isFirstNameValid ? "This is a required field" : ""
            }
          />
          <TextField
            id="outlined-last-name-required"
            label="Last Name"
            onChange={handleChange("lastName")}
            variant="outlined"
            color={!values.isLastNameValid ? "secondary" : "primary"}
            error={!values.isLastNameValid}
            helperText={
              !values.isLastNameValid ? "This is a required field" : ""
            }
          />
        </Grid>
        <TextField
          id="outlined-email-required"
          label="Email address"
          onChange={handleChange("userEmail")}
          variant="outlined"
          color={!values.isEmailValid ? "secondary" : "primary"}
          error={!values.isEmailValid}
          helperText={!values.isEmailValid ? "This is a required field" : ""}
        />
        <TextField
          style={{ marginTop: 10 }}
          id="outlined-password-required"
          label="Password"
          type={!values.showPassword ? "password" : "text"}
          onChange={handleChange("password")}
          variant="outlined"
          color={!values.isPasswordValid ? "secondary" : "primary"}
          error={!values.isPasswordValid}
          helperText={!values.isPasswordValid ? "This is a required field" : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="start"
                onClick={handleClickShowPassword}
              >
                {!values.showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            )
          }}
        />
        <Button
          size="large"
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          onClick={handleClickSignIn}
          disabled={
            !(
              values.userEmail &&
              values.password &&
              values.firstName &&
              values.lastName
            )
          }
        >
          Sign up
        </Button>
        <Divider style={{ marginTop: 20, marginBottom: 10 }} />
        <Link href="/stock-info-tracker/signin">Have an account?</Link>
      </Grid>
    </Grid>
  );
}
