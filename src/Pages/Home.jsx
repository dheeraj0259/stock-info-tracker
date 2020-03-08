import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  Grow,
  Divider,
  Icon
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FilterListIcon from "@material-ui/icons/FilterList";

import Stocktable from "../components/StockTable";
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
    return (
      <Grid container style={{ marginTop: 50 }}>
        <Grid item>
          <FilterDrawer
            showFilter={showFilter}
            closeDrawer={() => this.setState({ showFilter: false })}
          />
        </Grid>
        <Grid item md={12} style={{ padding: "0 20px 0 20px" }}>
          <Grow in style={{ transformOrigin: "0 0 0" }} timeout={500}>
            <ExpansionPanel
              defaultExpanded
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5" style={{ color: "darkgrey" }}>
                  Data Visualization
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>Place holder for the graphs</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grow>
          <Divider variant="middle" />
          <Grow in style={{ transformOrigin: "0 0 0" }} timeout={1000}>
            <ExpansionPanel
              defaultExpanded
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h5" style={{ color: "darkgrey" }}>
                  Stock Information
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      endIcon={<Icon>add</Icon>}
                      style={{ marginLeft: 5 }}
                    >
                      ADD
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      endIcon={<Icon>delete</Icon>}
                      style={{ marginLeft: 5 }}
                    >
                      DELETE
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="inherit"
                      endIcon={<FilterListIcon />}
                      style={{ marginLeft: 5 }}
                      onClick={() => this.setState({ showFilter: true })}
                    >
                      Filter
                    </Button>
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: 10 }}>
                    <Stocktable />
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grow>
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
