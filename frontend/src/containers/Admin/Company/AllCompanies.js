import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import axios from '../../../axios'
import CompanyDetails from './CompanyDetails'

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const styles = (theme => ({

    palette: {
        type: 'dark',
    },
    root: {
        width: '85%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
        margin: 'auto'
    },
    tableText: {
    },
    classGrid: {
        boxSizing: 'border-box',
        margin: '20px'
    },
    tableRow: {
        opacity: '1',
        transition: 'opacity 300ms ease',
        cursor: 'pointer'
    }
}));

class AllCompanies extends Component {

    constructor() {
        super();
        axios.get('/industry/findall')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    ...this.state,
                    companies: response.data,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        name: '',
        cpName: '',
        cpEmail1: '',
        cpEmail2: '',
        contactNo1: '',
        contactNo2: '',
        contactNo3: '',
        criteria: '',
        passiveBacklogs: false,
        activeBacklogs: false,
        package: '',
        startDate: new Date(),
        finalDate: new Date(),
        numberOfStudents: '',
        skill: [],
        city: [],
        branches: {
            computer: false,
            it: false,
            entc: false,
        },
        companies: [],
    }

    dateChangeHandler = (date, name) => {
        this.setState({
            ...this.state,
            [name]: date,
        })
    }

    companyHandler = (company) => {
        console.log("clicked" + company.name);
        window.open("http://localhost:3000/admin/company-details/"+company.id, '_blank');
    }

    submitHandler = () => {
        console.log(this.state.startDate);
        console.log(this.state.finalDate);

        let state = this.state;

        var industry = {
            name: state.name,
            cpname: state.cpName,
            cpemail1: state.cpEmail1,
            cpemail2: state.cpEmail2,
            contactno1: state.contactNo1,
            contactno2: state.contactNo2,
            contactno3: state.contactNo3,
            criteria: state.criteria,
            passive_backlogs: state.passiveBacklogs,
            active_backlogs: state.activeBacklogs,
            package_lpa: state.package,
            start_date: state.startDate,
            final_date: state.finalDate,
            no_of_students: state.numberOfStudents,
            skills: state.skill,
            locality: state.city,
            branches: state.branches
        }

        axios.post('/industry/findByDate', industry)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    companies: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    submitHandler3 = (industry) =>{
       console.log(industry);
        axios.post('/industry/add', industry    )
            .then((response) => {
                this.setState(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


   submitHandler2 = (company) => {
        
         var final = this.state.finalDate;
          let state = this.state;
         console.log(final);
          axios.post('/industry/findById', null,{params:{id:company.id}})
            .then((response) => {
                this.setState( response.data)
                console.log(this.state);
                this.state.finalDate = final;
                this.state.final_date = this.state.finalDate;
                this.submitHandler3(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
      
       
    }

    printDocument = () => {
        document.getElementById("printbtn").style.visibilty="hidden";
        document.getElementById("paper1").style.visibility="hidden";
        document.getElementById("btncol").style.visibility="hidden";
        window.print();
        document.getElementById("printbtn").style.visibilty="visible";
        document.getElementById("paper1").style.visibility="visible";
        document.getElementById("btncol").style.visibility="visible";

      }
   
   
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                 <Button
            variant="contained"
            color="primary"
            id="printbtn"
            className={classes.button}
            onClick={this.printDocument}
          >
            Print
          </Button>
                <Paper className={classes.root} id="paper1">
                    <Grid container className={classes.classGrid}>
                        <Grid item xs={4}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    label="Start Date"
                                    value={this.state.startDate}
                                    onChange={(date) => this.dateChangeHandler(date, 'startDate')}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={4}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    label="End Date"
                                    value={this.state.Date}
                                    onChange={(date) => this.dateChangeHandler(date, 'finalDate')}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={4}>
                            <Button className={classes.button} variant="contained" color="primary" onClick={this.submitHandler} >Submit</Button>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow style={{ height: '8vh' }}>
                                <TableCell className={classes.tableText}>Company Name</TableCell>
                                <TableCell className={classes.tableText} align="right">Preffered Date</TableCell>
                                <TableCell className={classes.tableText} align="right">Choose final date</TableCell>
                                <TableCell className={classes.tableText} align="right">Accept</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.companies.map(company => (
                                <TableRow key={company.id} className={classes.tableRow}>
                                    <TableCell component="th" scope="row" onClick={()=>this.companyHandler(company)}>
                                        {company.name}
                                    </TableCell>
                                    <TableCell align="right">{company.start_date}</TableCell>
                                    <TableCell id="btncol"> <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    label="Final Date"
                                    value={this.state.finalDate}
                                    onChange={(date) => this.dateChangeHandler(date, 'finalDate')}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider></TableCell>
                            <TableCell>
                                
                                 <Button className={classes.button} variant="contained" color="primary" onClick={()=>this.submitHandler2(company)} >Allot</Button>
                            </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AllCompanies);