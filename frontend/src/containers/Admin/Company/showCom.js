import React, { Component, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button'
import axios from '../../../axios'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    root: {
        width: '100%',
    },
    tableWrapper: {
        maxHeight: 407,
        overflow: 'auto',
    },
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        width: '65vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

const columns = [
    {
        id: 'c_id',
        label: 'ID',
        minWidth: 120,
        align: 'center',
        format: value => value.toLocaleString(),
    },
    { id: 'com_name', label: 'Name', minWidth: 200 },
    { id: 'criteria', label: 'Criteria', minWidth: 100, format: value => value.toFixed(2) },
    {
        id: 'skills',
        label: 'Skills',
        minWidth: 120,
        align: 'right',
    },
   
    {
        id: 'dateOfVisit',
        label: 'Visit Date',
        minWidth: 120,
        align: 'right',
        format: value => toLocaleString(),
    },
];


export default function AddVisited() {

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const [submit, setSubmit] = React.useState(0);

    const [state, setState] = React.useState({
        c_id:'',
    })

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const handleChange = (name) => (event) => {
        setState({
            ...state,
            [name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({
            ...state,
            visitDate: date,
        })
    }

    const submitHandler = (event) => {
        axios.get('/findallCompaniesVisited')
            .then((response) => {
                setState(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    
    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom align="center">
                   Add Company Visited
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                   <Grid container spacing={3}>
                     <Grid item xs={12} sm={6}>
                            <TextField
                                label="company id"
                                fullWidth
                                onChange={handleChange('c_id')}
                                value={state.c_id}
                            />
                        </Grid>
                       <Grid item xs={12} sm={4}>
                            <TextField
                                label="Criteria"
                                fullWidth
                                onChange={handleChange('criteria')}
                                value={state.criteria}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Skills"
                                fullWidth
                                onChange={handleChange('skills')}
                                value={state.skills}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="company id"
                                fullWidth
                                onChange={handleChange('c_id')}
                                value={state.c_id}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth
                                    label="Date of Visit"
                                    fullWidth
                                    value={state.visitDate}
                                    onChange={(date) => handleDateChange(date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider><br />
                        </Grid>
                        <Grid item xs={12} align="right">
                            <Button size="large" variant="contained" color="primary" onClick={submitHandler}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </React.Fragment>
    );
}
