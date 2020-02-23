import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import loginBackground from "../images/loginBackground.jpg";

export default function LoginCard() {
  const [values, setValues] = React.useState({
    userEmail: "",
    password: "",
    showPassword: false
  });

  const handleChange = key => event => {
    setValues({ ...values, [key]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickSignIn = () => {
    console.log(">>>>>>", values);
  };

  return (
    <Card style={{ maxWidth: 1000 }}>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            style={{ height: 480 }}
            image={loginBackground}
            title="Login"
          />
        </Grid>

        <Grid item xs={6}>
          <Grid style={{ marginLeft: 10, marginTop: 50 }}>
            <Typography gutterBottom variant="h4">
              Sign in
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Enter details to sign in
            </Typography>
          </Grid>

          <Grid
            container
            direction="column"
            style={{ marginTop: 20, padding: 20 }}
          >
            <TextField
              id="outlined-required"
              label="Email address"
              onChange={handleChange("userEmail")}
              variant="outlined"
            />
            <FormControl style={{ marginTop: 10 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="Password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              size="large"
              style={{ marginTop: 40 }}
              variant="contained"
              color="primary"
              onClick={handleClickSignIn}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
