import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

export default function Navbar() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <AppBar style={{ background: "black" }}>
        <Toolbar>
          <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <HomeIcon style={{ marginRight: "10px" }} />
              <Typography variant="h6">Stock Info Tracker</Typography>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
