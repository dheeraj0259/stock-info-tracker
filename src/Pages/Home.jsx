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
  Icon
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Home extends Component {
  componentDidMount() {
    const { history, userAccess } = this.props;
    //  if (!userAccess) history.push("/stock-info-tracker/signin");
  }

  render() {
    return (
      <Grid container style={{ marginTop: 50 }}>
        <Grid item md={12} style={{ padding: "0 20px 0 20px" }}>
          <Grow in timeout={500}>
            <ExpansionPanel
              defaultExpanded
              style={{ backgroundColor: "#80808026" }}
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
          <Grow in style={{ transformOrigin: "0 0 0" }} timeout={1000}>
            <ExpansionPanel
              defaultExpanded
              style={{ backgroundColor: "#80808026" }}
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
