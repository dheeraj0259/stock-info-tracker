import React from "react";
import { Card, Typography, Grid, Divider } from "@material-ui/core";

const profileData = {
  worldArea: {
    label: "World Area",
    value: "EMEA"
  },
  crop: {
    label: "Crop",
    value: "Tomato"
  },
  pmcName: {
    label: "Pre-Commercial Name",
    value: "15-TEST-PMC"
  },
  pmc: {
    label: "PMC",
    value: "SOMETHING-TEST-PMC"
  },
  lexiconId: {
    label: "Lexicon ID",
    value: "12345649385893"
  },
  marketProductName: {
    label: "Market Product Name",
    value: "test-market-name"
  },
  mctDesc: {
    label: "MCT Desc",
    value: "test-mct-desc-name"
  },
  mctCode: {
    label: "MCT Code",
    value: "ttt"
  }
};
function FormColumn(props) {
  const { obj } = props;
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="caption" color="textSecondary">
          <b>{obj.label}</b>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">{obj.value.toUpperCase()}</Typography>
      </Grid>
    </Grid>
  );
}

export default function ProfileCard() {
  return (
    <Card className="profileCard">
      <Grid container spacing={3} style={{ padding: "20px 40px 20px 40px" }}>
        {Object.entries(profileData).map(([key, value]) => {
          return (
            <Grid item xs={2} key={key}>
              <FormColumn obj={value} />
            </Grid>
          );
        })}
      </Grid>
      <Divider variant="middle" />
      <Grid
        container
        spacing={10}
        alignItems="center"
        direction="row"
        style={{ padding: "20px 40px 20px 40px" }}
      >
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Typography variant="subtitle2" color="primary">
            Breeder
          </Typography>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Typography variant="subtitle2" color="secondary">
            Market Dev
          </Typography>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Typography variant="subtitle2" color="primary">
            Marketing
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
