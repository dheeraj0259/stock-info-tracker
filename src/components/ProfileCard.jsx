import React from "react";
import {
  Card,
  Typography,
  Grid,
  Divider,
  List,
  ListItem
} from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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

const breedingProfiles = ["Breeding 1"];
const marketDevProfiles = ["Market dev 1", "market dev 2", "market dev 3"];
const marketingProfiles = [
  "marketing 1",
  "marketing 2",
  "marketing 3",
  "marketing 4",
  "marketing 5",
  "marketing 6"
];

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

function PersonaTree(props) {
  const { personaType, setSelectedProfile, selectedProfile, profiles } = props;

  const handleSelect = (event, nodeId) => {
    if (nodeId !== "0" && personaType === "Market Dev") {
      setSelectedProfile(marketDevProfiles[nodeId - 1]);
    }
  };

  const handleProfileSelect = profileIndex => {
    if (personaType === "Market Dev") {
      setSelectedProfile(marketDevProfiles[profileIndex]);
    }
  };
  if (personaType === "Marketing" && !selectedProfile) {
    return (
      marketingProfiles &&
      marketingProfiles.length > 0 && (
        <TreeView
          style={{ flexGrow: 1 }}
          onNodeSelect={handleSelect}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="0" label={`${personaType} Profiles`}>
            <TreeItem
              nodeId="1"
              label="*Please select a Market Dev Profile"
              style={{ color: "red" }}
            />
          </TreeItem>
        </TreeView>
      )
    );
  }
  if (personaType === "Marketing") {
    return (
      marketingProfiles &&
      marketingProfiles.length > 0 && (
        <TreeView
          style={{ flexGrow: 1 }}
          onNodeSelect={handleSelect}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="0" label={`${personaType} Profiles`}>
            <Grid container direction="row" style={{ marginLeft: "15px" }}>
              {profiles.map((profile, index) => {
                return (
                  <Grid item xs={6} className="Zoom" key={index}>
                    <span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "gray",
                          fontStyle: "italic",
                          position: "relative",
                          top: 5
                        }}
                      >
                        L: English, C: Australia
                      </span>
                      <br />
                      <span>{`${selectedProfile.toUpperCase()}-${profile.toUpperCase()}`}</span>
                      <br />
                      <span
                        style={{
                          fontSize: 11,
                          color: "gray",
                          fontStyle: "italic",
                          position: "relative",
                          top: "-8px"
                        }}
                      >
                        M: All, GrowEnv: All, S: All
                      </span>
                    </span>
                  </Grid>
                );
              })}
            </Grid>
          </TreeItem>
        </TreeView>
      )
    );
  }
  return (
    profiles &&
    profiles.length > 0 && (
      <TreeView
        style={{ flexGrow: 1 }}
        onNodeSelect={handleSelect}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="0" label={`${personaType} Profiles`}>
          <List dense style={{ marginTop: "-5px" }}>
            {profiles.map((profile, index) => {
              return (
                <ListItem
                  className="Zoom"
                  button
                  key={index}
                  onClick={() => handleProfileSelect(index)}
                >
                  <span>
                    <span
                      style={{
                        fontSize: 11,
                        color: "gray",
                        fontStyle: "italic",
                        position: "relative",
                        top: 5
                      }}
                    >
                      L: English, C: Australia
                    </span>
                    <br />
                    <span>{profile.toUpperCase()}</span>
                    <br />
                    <span
                      style={{
                        fontSize: 11,
                        color: "gray",
                        fontStyle: "italic",
                        position: "relative",
                        top: "-8px"
                      }}
                    >
                      M: All, GrowEnv: All, S: All
                    </span>
                  </span>
                </ListItem>
              );
            })}
          </List>
        </TreeItem>
      </TreeView>
    )
  );
}

export default function ProfileCard() {
  const [values, setValues] = React.useState({
    selectedProfile: ""
  });

  function setSelectedProfile(profile) {
    setValues({
      ...values,
      selectedProfile: profile
    });
  }
  return (
    <Card className="profileCard">
      <Grid container>
        <Grid item xs={1} className="cardTag">
          <span className="verticalText">{profileData.lexiconId.value}</span>
        </Grid>

        <Grid item xs={11}>
          <Grid
            container
            spacing={3}
            style={{ padding: "20px 40px 20px 40px" }}
          >
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
            direction="row"
            style={{ padding: "20px 40px 20px 40px" }}
          >
            <Grid item xs={4}>
              <Typography variant="subtitle2" color="primary">
                <PersonaTree
                  personaType="Breeder"
                  profiles={breedingProfiles}
                />
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="subtitle2" color="primary">
                <PersonaTree
                  personaType="Market Dev"
                  setSelectedProfile={setSelectedProfile}
                  profiles={marketDevProfiles}
                />
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2" color="primary">
                <PersonaTree
                  personaType="Marketing"
                  selectedProfile={values.selectedProfile}
                  profiles={marketingProfiles}
                />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
