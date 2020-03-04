import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

import AlertApp from "./AlertApp";

export default function Navbar() {
  return (
    <Grid container direction="column" alignItems="flex-end">
      <Grid item style={{ marginBottom: "31px" }}>
        <AppBar style={{ background: "black" }}>
          <Toolbar>
            <Link
              to="/stock-info-tracker/"
              style={{ color: "white", textDecoration: "none" }}
            >
              <IconButton edge="start" color="inherit" aria-label="menu">
                <HomeIcon style={{ marginRight: "10px" }} />
                <Typography variant="h6">Stock Info Tracker</Typography>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid
        item
        style={{ zIndex: 1, width: "30%", position: "absolute", top: 72 }}
      >
        <AlertApp />
      </Grid>
    </Grid>
  );
}
