
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
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "../../../axios";
import { ButtonGroup } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import ReactToPrint from 'react-to-print';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    palette: {
        type: "dark"
    },
    root: {
        width: "85%",
        marginTop: theme.spacing(3),
        // overflowX: "auto",
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
        margin: theme.spacing(3),
        width: "100%",
    },
    button: {
        margin: theme.spacing(1),
        margin: "auto",
        marginLeft: "80%",
        marginTop: "2%",
        backgroundColor: "rgb(70,70,120)",
    },
    group: {
        margin: theme.spacing(1, 0)
    }
});


class ShortListed extends React.Component {

    state = {
        students: [],
        temp: [],
        tenth: 0,
        twelfth: 0,
        sgpa: 0,
        active_backlogs: true,
        passive_backlogs: true,
        internship: 0,
        x: []
    }
    componentDidMount() {
        axios.post('/short-listed', null, { params: { comp_id: localStorage.getItem('token') } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    students: response.data,
                    temp: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }

    handleChange = (name) => (event) => {
        this.setState({
            ...this.state,
            [name]: event.target.value,
        })
    }

    toggleChecked = (name) => (event) => {
        const prev = this.state[name];
        this.setState({
            ...this.state,
            [name]: !prev,
        })
    }


    clickHandlerForAccept = () => {
        var i = 0;
        var a = []
        for (i = 0; i < this.state.x.length; i++) {
            if (this.state.x[i].status === true)
                a.push(this.state.x[i].roll.toString());
        }
        let comp_id = localStorage.getItem("token");
        a.push(comp_id)
        axios.post("/PlacedByCompany", a)
            .then((response) => {
                window.location.reload(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    handleChangeIndex = index => event => {
        let s = this.state.students[index]
        if (event.target.checked) {
            let v = {
                roll: s.student.rollno,
                name: s.student.firstName,
                sgpaTEFS: s.sgpaTEFS,
                skills: s.skills,
                status: true
            }
            this.state.x.push(v);
            console.log(this.state.x);
        }
    };

    render() {

        const { classes } = this.props;
        return (
            <React.Fragment>
                <div>
                    <Paper className={classes.root}>
                        <table class="table table-bordered table-striped">
                            <thead>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Roll Number</th>
                                <th scope="col">SGPA</th>
                                <th scope="col">10th Percentage</th>
                                <th scope="col">12th Percentage</th>
                                <th scope="col">Place</th>
                            </thead>
                            <tbody>
                                {this.state.temp.map((s, index) => (
                                    <tr>
                                        <td scope="row">{s.collegeId}</td>
                                        <td>{s.student.firstName}</td>
                                        <td>{s.roll_no}</td>
                                        <td>{s.sgpaTEFS}</td>
                                        <td>{s.percentageTenth}</td>
                                        <td>{s.percentageTwelfth}</td>
                                        <td><FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={this.handleChangeIndex(index)}
                                                    value={s.status}
                                                />
                                            }
                                            label="Place"
                                        /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        id="printbtn"
                        className={classes.button}
                        onClick={this.clickHandlerForAccept}
                    >
                        Allot
        </Button>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ShortListed);
