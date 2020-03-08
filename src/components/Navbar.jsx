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

export default function Navbar() {
  return (
    <AppBar style={{ background: "#111116" }}>
      <Toolbar>
        <Grid container direction="row" alignItems="center">
          <Link
            to="/stock-info-tracker/"
            style={{ color: "white", textDecoration: "none" }}
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <HomeIcon style={{ marginRight: "2px" }} />
              <Typography variant="h6">Stock Info Tracker</Typography>
            </IconButton>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
