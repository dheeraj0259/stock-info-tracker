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

function SignIn(props) {
  const [values, setValues] = React.useState({
    userEmail: "",
    password: "",
    showPassword: false,
    isEmailValid: true,
    isPasswordValid: true
  });
  const { loading, userLoginRequest, history } = props;

  const handleChange = key => event => {
    const keyToAssign = key === "password" ? "isPasswordValid" : "isEmailValid";
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
    const { userEmail, password } = values;
    userLoginRequest({
      email: userEmail,
      password
    });
    setTimeout(() => history.push("/stock-info-tracker/dashboard"), 1000);
  };

  return (
    <Grid item xs={6}>
      <Grid style={{ marginLeft: 10, marginTop: 50 }}>
        <Typography gutterBottom variant="h4">
          Sign in
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Enter details to sign in
        </Typography>
      </Grid>

      <Grid container direction="column" style={{ marginTop: 20, padding: 20 }}>
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
          disabled={!(values.userEmail && values.password) || loading}
        >
          {loading ? <CircularProgress size={24} /> : "Sign in"}
        </Button>
        <Divider style={{ marginTop: 20, marginBottom: 10 }} />
        <Link href="/stock-info-tracker/signup">Dont have an account?</Link>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading.loading,
    userAccess: state.user.userAccess
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userLoginRequest: userDetails => user.logIn(userDetails, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
