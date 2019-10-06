import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "../../axios";
import { ButtonGroup } from "@material-ui/core";

const styles = theme => ({
  palette: {
    type: "dark"
  },
  root: {
    width: "85%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  table: {
    minWidth: 650
  },
  text: {
    textAlign: "center"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1),
    margin: "auto"
  },
  group: {
    margin: theme.spacing(1, 0)
  }
});

class BranchReport extends Component {
  state = {
    branch: "",
    students: []
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      branch: event.target.value
    });
  };

  printDocument = () => {
    document.getElementById("Submitbtn").style.visibility="hidden";
    document.getElementById("printbtn").style.visibility="hidden";
    window.print();
    document.getElementById("Submitbtn").style.visibility="visible";
    document.getElementById("printbtn").style.visibility="visible";
  }
  

  clickHandler = () => {
    console.log(this.state.branch);
    axios
      .post("/sortbybranch", null, { params: { branch: this.state.branch } })
      .then(response => {
        console.log(response.data)

        this.setState({
          ...this.state,
          students: response.data
        });
        console.log("this is not done")
        console.log(this.state.students)
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.text}>
              Select the branch
            </FormLabel>
            <RadioGroup
              aria-label="branch"
              name="branch"
              className={classes.group}
              value={this.state.branch}
              onChange={this.handleChange}
              row
            >
              <FormControlLabel
                value="Computer"
                control={<Radio />}
                label="Computer"
              />
              <FormControlLabel
                style={{ marginLeft: "40px", marginRight: "60px" }}
                value="IT"
                control={<Radio />}
                label="IT"
              />
              <FormControlLabel value="ENTC" control={<Radio />} label="ENTC" />
            </RadioGroup>
            <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              id="Submitbtn"
              className={classes.button}
              onClick={this.clickHandler}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="primary"
              id="printbtn"
              className={classes.button}
              onClick={this.printDocument}
            >
              Print
            </Button>
            </ButtonGroup>
          </FormControl>
        </Paper>
        <br></br>
        <br></br>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Roll Number</TableCell>
                <TableCell align="right">SGPA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.students.map(s => (
                <TableRow key={s.student.rollno}>
                  <TableCell component="th" scope="row">
                    {s.student.rollno}
                  </TableCell>
                  <TableCell align="right">{s.student.firstName}</TableCell>
                  <TableCell align="right">{s.student.rollno}</TableCell>
                  <TableCell align="right">{s.sgpaAggregate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BranchReport);
