import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  Zoom,
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
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Data Visualization</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Place holder for the graphs</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Stock Information</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Actions:
                <Zoom
                  in
                  style={{
                    transitionDelay: "200ms"
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    endIcon={<Icon>add</Icon>}
                    style={{ marginLeft: 5 }}
                  >
                    ADD
                  </Button>
                </Zoom>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  endIcon={<Icon>delete</Icon>}
                  style={{ marginLeft: 5 }}
                >
                  DELETE
                </Button>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
