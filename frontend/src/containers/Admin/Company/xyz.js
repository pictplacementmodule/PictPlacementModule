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
import axios from "../../axios";
import { ButtonGroup } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import ReactToPrint from 'react-to-print';
import Switch from '@material-ui/core/Switch';
import Pagination from '../../components/Pagination'

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
        margin: "auto"
    },
    group: {
        margin: theme.spacing(1, 0)
    }
});


class Filter extends React.Component {

    state = {
        students: [],
        temp: [],
        tenth: 0,
        twelfth: 0,
        sgpa: 0,
        active_backlogs: true,
        passive_backlogs: true,
        internship: 0,
        x: [],
        postsPerPage: 3,
        currentPage: 1,
        show: [],
        computer: false,
        it: false,
        entc: false,
    }

    //////
    pageStand = (pageNumber) => {
        const indexOfLastPost = pageNumber * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.temp.slice(indexOfFirstPost, indexOfLastPost);
        this.setState({
            ...this.state,
            show: [...currentPosts],
        })
    }

    paginate = (pageNumber) => {
        this.setState({
            ...this.state,
            currentPage: pageNumber,
        })
        this.pageStand(pageNumber);
    }
    ///////

    componentDidMount() {
        axios.post('/filter', null, { params: { comp_id: localStorage.getItem('token') } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    students: response.data,
                    temp: response.data,
                });
                this.pageStand(this.state.currentPage);
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
    handleChecked = name => event => {
        this.setState({
          ...this.state,
          [name]: event.target.checked
        });
      };

    clickHandler = () => {
        console.log(this.state);
        let temp2 = [...this.state.students]
        temp2 = temp2.filter((student) => {
            return (
                student.sgpaTEFS >= this.state.sgpa
                && student.percentageTenth >= this.state.tenth
                && student.percentageTwelfth >= this.state.twelfth
                // && student.internship>=this.state.internship
            )
        })
        if (!this.state.active_backlogs) {
            temp2 = temp2.filter((student) => { return student.activeBacklogs === false })
        }
        if (!this.state.passive_backlogs) {
            temp2 = temp2.filter((student) => { return student.passiveBacklogs === false })
        }
        console.log(temp2);
        this.setState({
            ...this.state,
            temp: temp2,
        });
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
        axios.post("/selectByCompany", a).catch((error) => {
            console.log(error);
        });;
        window.location.reload(true);
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

                <Paper className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.text}>
                            Select the filters
                        </FormLabel>
                        <Grid container spacing={1} style={{ marginTop: "2vh" }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Tenth Percentage"
                                    fullWidth
                                    onChange={this.handleChange("tenth")}
                                    value={this.state.tenth}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Twelfth Percentage"
                                    fullWidth
                                    onChange={this.handleChange("twelfth")}
                                    value={this.state.twelfth}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="SGPA"
                                    fullWidth
                                    onChange={this.handleChange("sgpa")}
                                    value={this.state.sgpa}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Number of Internships"
                                    fullWidth
                                    onChange={this.handleChange("internship")}
                                    value={this.state.internship}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.active_backlogs}
                                            onChange={this.toggleChecked('active_backlogs')}
                                            color="primary"
                                        />
                                    }
                                    label="Accept Active Backlogs"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.passive_backlogs}
                                            onChange={this.toggleChecked('passive_backlogs')}
                                            color="primary"
                                        />
                                    }
                                    label="Accept Passive Backlogs"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormGroup row style={{width:"100%"}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.computer}
                                                onChange={this.handleChecked('computer')}
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
                                                onChange={this.handleChecked('it')}
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
                                                onChange={this.handleChecked('entc')}
                                                value="entc"
                                            />
                                        }
                                        label="ENTC"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} justify="flex-end">
                            <Grid item xs={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    id="Submitbtn"
                                    className={classes.button}
                                    onClick={this.clickHandler}
                                >
                                    Submit
                             </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </Paper>
                <br></br>
                <br></br>
                <div>
                    <Paper className={classes.root}>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th >ID</th>
                                    <th align="right">Name</th>
                                    <th align="right">Roll Number</th>
                                    <th align="right">SGPA</th>
                                    <th align="right">10th Percentage</th>
                                    <th align="right">12th Percentage</th>
                                    <th align="right">Approve</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.show.map((s, index) => (
                                    <tr key={s.roll}>
                                        <td component="th" scope="row">
                                            {s.collegeId}
                                        </td>
                                        <td>{s.student.firstName}</td>
                                        <td>{s.roll_no}</td>
                                        <td>{s.sgpaTEFS}</td>
                                        <td>{s.percentageTenth}</td>
                                        <td>{s.percentageTwelfth}</td>
                                        <td align="left">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        // style={{ marginLeft: "5vw" }}

                                                        onChange={this.handleChangeIndex(index)}
                                                        value={s.status}
                                                    />
                                                }
                                                label="Accept"
                                            />
                                        </td>
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
                <Pagination
                    postsPerPage={this.state.postsPerPage}
                    totalPosts={this.state.temp.length}
                    paginate={this.paginate}
                    paginatePrev={this.paginatePrev} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Filter);