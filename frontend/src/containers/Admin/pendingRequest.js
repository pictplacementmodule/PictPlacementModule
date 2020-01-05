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
    marginTop:theme.spacing(5),
    marginLeft:theme.spacing(115)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
});

class BranchReport extends Component {
  state = {
    students: [],
    checked: []
  };

  constructor() {
    super();
    axios.post('/fetchToAdminPendingStudents')
        .then((response) => {
            console.log(response.data);
             this.setState({ students: response.data });
        })
        .catch((error) => {
            console.log(error);
        })
}


  handleChange = index => event => {
      let s = this.state.students[index]
      s.status = event.target.checked
      let a = [...this.state.students]
      a[index] = s
      this.setState({
          ...this.state,
          students: a,
      })
  };

  clickHandler = () => {
      console.log(this.state.students)

        var i=0;  
        var a = []  
        for(i=0;i<this.state.students.length;i++){
            if(this.state.students[i].status===true)
            a.push(this.state.students[i].count);
        }
        console.log(a);
        axios.post("/getStatusOfPlaced",a).catch((error) => {
          console.log(error);
        });;
       window.location.reload(false);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <br></br>
        <br></br>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Roll Number</TableCell>
                <TableCell align="right">Student Name</TableCell>
                <TableCell align="right">Company Name</TableCell>
                <TableCell align="right">Package LPA</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Approve</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.students.map((s,index) => (
                <TableRow key={s.roll}>
                     <TableCell align="right">{s.roll}</TableCell>
                  <TableCell align="right">{s.stu_name}</TableCell>
                  <TableCell align="right">{s.comp_name}</TableCell>
                  <TableCell align="right">{s.package_lpa}</TableCell>
                  <TableCell align="right">{s.location}</TableCell>
              <TableCell align="right"><FormControlLabel
                control={
                  <Checkbox
                  style={{marginLeft:"5vw"}}
                   
                    onChange={this.handleChange(index)}
                    value={s.status}
                  />
                }
                label="Accept"
              /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
         
        </Paper>
        <Button
                variant="contained"
                color="primary"
                id="printbtn"
                className={classes.button}
                onClick={this.clickHandler} 
              >
               Allot
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BranchReport);