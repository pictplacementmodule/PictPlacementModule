import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "../../axios";
import { ButtonGroup } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';

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
    computer: false,
    it: false,
    entc: false,
    students: []
  };

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.checked
    });
  };

  printDocument = () => {
    document.getElementById("Submitbtn").style.visibility = "hidden";
    document.getElementById("printbtn").style.visibility = "hidden";
    window.print();
    document.getElementById("Submitbtn").style.visibility = "visible";
    document.getElementById("printbtn").style.visibility = "visible";

    // var divContents = document.getElementById("blah2").innerHTML;
    // var a = window.open('', '', 'height=500, width=500');
    // a.document.write('<html>');
    // a.document.write('<body > <h1>Div contents are <br>');
    // a.document.write(divContents);
    // a.document.write('</body></html>');
    // a.document.close();
    // a.print();
  }


  clickHandler = () => {
    var pass = {
      computer: this.state.computer,
      it: this.state.it,
      entc: this.state.entc,
    }
    console.log(pass)
    axios.post("/sortbybranch", pass)
      .then((response) => {
        this.setState({
          ...this.state,
          students: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
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
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.computer}
                    onChange={this.handleChange('computer')}
                    value="computer"
                  />
                }
                label="Computer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ marginLeft: "5vw" }}
                    checked={this.state.it}
                    onChange={this.handleChange('it')}
                    value="it"
                  />
                }
                label="IT"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ marginLeft: "5vw" }}
                    checked={this.state.entc}
                    onChange={this.handleChange('entc')}
                    value="entc"
                  />
                }
                label="ENTC"
              />
            </FormGroup>
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
        <div id="blah" style={{ display: "none" }}>
          <table border="1px">
            <tr>
              <td>computer</td>
              <td>Algorithm</td>
            </tr>
            <tr>
              <td>Microwave</td>
              <td>Infrared</td>
            </tr>
          </table>
        </div>
        <div id="blah2">
          <Paper className={classes.root}>
            <Table className={classes.table} id="printArea">
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
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BranchReport);
