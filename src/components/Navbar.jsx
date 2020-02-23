import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    background: "#000"
  }
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "80px" }}>
      <AppBar
        classes={{
          root: classes.root
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
