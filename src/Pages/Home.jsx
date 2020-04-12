import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";

import ProfileCard from "../components/ProfileCard";
import FilterDrawer from "../components/FilterDrawer";

class Home extends Component {
  constructor() {
    super();
    this.state = { showFilter: false };
  }

  componentDidMount() {
    const { history, userAccess } = this.props;
    //  if (!userAccess) history.push("/stock-info-tracker/signin");
  }

  render() {
    const { showFilter } = this.state;
    const profiles = [0, 1, 2, 3, 4, 5];
    return (
      <Grid container direction="row" style={{ marginTop: 50 }}>
        <FilterDrawer
          showFilter={showFilter}
          closeDrawer={() => this.setState({ showFilter: false })}
        />
        <Grid item md={12} style={{ padding: "0 20px 0 20px" }}>
          <Grid container justify="flex-end" alignItems="center">
            <Grid item>
              <TextField
                style={{ minWidth: 400, marginLeft: 10, marginTop: "-2px" }}
                label="Search"
                id="outlined-margin-dense"
                margin="dense"
                variant="outlined"
                InputProps={{
                  endAdornment: <SearchIcon />
                }}
              />
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="inherit"
                endIcon={<FilterListIcon />}
                style={{ marginLeft: 20, marginTop: "-8px" }}
                onClick={() => this.setState({ showFilter: true })}
              >
                Filter
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ padding: "0 20px 0 20px", marginTop: 10 }}>
          {profiles.map((item, index) => {
            return (
              <ProfileCard
                key={item}
                style={{ marginTop: 100 }}
                cardStyle={index % 2 === 0 ? "cardTag" : "alternateCardTag"}
              />
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    userAccess: state.user.userAccess
  };
};

export default connect(mapStateToProps, null)(Home);
