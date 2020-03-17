import React, { Component } from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const filterList = [
  "Crops",
  "Country",
  "PCM",
  "Brand",
  "Status",
  "Growing Environment",
  "Market",
  "State/Province",
  "Phase"
];

class FilterDrawer extends Component {
  render() {
    const { showFilter, closeDrawer } = this.props;
    const sideList = () => (
      <div role="presentation" style={{ width: 250, marginTop: 55 }}>
        <List>
          {filterList.map((text, index) => (
            <ListItem key={text} style={{ marginTop: 10 }}>
              <FormControl style={{ width: 200 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  {text}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Drawer
          open={showFilter}
          onClose={closeDrawer}
          style={{ zIndex: "none" }}
        >
          {sideList()}
        </Drawer>
      </div>
    );
  }
}

export default FilterDrawer;
