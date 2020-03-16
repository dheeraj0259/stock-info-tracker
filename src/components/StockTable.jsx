import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  Checkbox,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Apple", 159, 6.0, 24, 4.0),
  createData("Microsoft", 237, 9.0, 37, 4.3),
  createData("Tesla", 262, 16.0, 24, 6.0),
  createData("Roku", 305, 3.7, 67, 4.3),
  createData("Amazon", 356, 16.0, 49, 3.9)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Table
        className={classes.table}
        aria-label="customized table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox
                indeterminate
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </StyledTableCell>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell>Shares Owned</StyledTableCell>
            <StyledTableCell>Buy Price</StyledTableCell>
            <StyledTableCell>Sell Price</StyledTableCell>
            <StyledTableCell>Buyed on</StyledTableCell>
            <StyledTableCell>Sold on</StyledTableCell>
            <StyledTableCell>Profit</StyledTableCell>
            <StyledTableCell>Loss</StyledTableCell>
            <StyledTableCell>Recommend</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>
                <Checkbox />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>ty</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
