import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from '../../../axios';
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Switch from '@material-ui/core/Switch';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
// import moment from "moment";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        width: '68vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
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
    root: {
        width: '100%',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: '100%',
        maxWidth: '100vw',
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

function MySnackbarContentWrapper(props) {
    const classes = useStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}
MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function Profile(props) {
    const classes = useStyles();
    const skills = [
        'JAVA',
        'CPP',
        'PYTHON',
        'SPRING',
        'REACT',
        'MYSQL',
        'POSTGRESQL'
      ];
      const cities = [
        'PUNE',
        'DELHI',
        'SANGAMNER',
        'NAGPUR',
        'MUMBAI',
        'BARSHI',
        'SOLAPUR',
        'KOLHAPUR',
        'SATARA'
      ]

    const [open, setOpen] = React.useState(false);

    const [state, setState] = React.useState({
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
        endDate: new Date(),
        numberOfStudents: '',
        skill: [],
        city: [],
        branches: {
            computer: false,
            it: false,
            entc: false,
        },
        successSnackBar: false,
    })
    var da = [];
    const [formErrors, setError] = React.useState({
        cpName: '',
        cpEmail1: '',
        cpEmail2: '',
        contactNo1: '',
        contactNo2: '',
        contactNo3: '',
        criteria: '',
        package: '',
        numberOfStudents: '',
    })


    const submitHandler = (event) => {

        // setOpen(true);
        event.preventDefault();
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
            end_date: state.endDate,
            no_of_students: state.numberOfStudents,
            skills: state.skill,
            locality: state.city,
            computer: state.branches.computer,
            it: state.branches.it,
            entc: state.branches.entc,
        }
        console.log(industry);

        axios.post('/industry/add', industry)
            .then((response) => {
                console.log(response);
                setOpen(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleChange = (name) => (event) => {
        setState({
            ...state,
            [name]: event.target.value
        })
        const value = event.target.value;
        let error = '';
        let reg = '';
        switch (name) {

            case 'cpName':
                reg = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/
                error = reg.test(value) ? '' : 'Invalid CPName';
                break;
            case 'cpEmail1':
            case 'cpEmail2':
                reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                error = reg.test(value) ? '' : 'Invalid Email';
                break;
            case 'contactNo1':
            case 'contactNo2':
            case 'contactNo3':
                reg = /^\d{10}$/
                error = reg.test(value) ? '' : 'Invalid Phone Number';
                break;
            case 'criteria':
                error = (Number(value) > 0 && Number(value) < 10) ? '' : 'Invalid Criteria';
                break;
            case 'package':
                reg = /^[0-9]+$/
                error = reg.test(value) ? '' : 'Invalid Package';
                break;
            case 'numberOfStudents':
                error = Number(value) > 0 ? '' : 'Invalid Number Of Students';
                break;
        }
        setError({
            ...formErrors,
            [name]: error,
        })
    }

    const handleChecked = (name) => (event) => {
        console.log(event.target.checked);
        setState({
            ...state,
            branches: {
                ...state.branches,
                [name]: event.target.checked,
            }
        })
        console.log(state.branches);
    }

    const handleDateChange = (date, name) => {
        console.log(date);
        setState({
            ...state,
            [name]: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        })
    }

    const toggleBacklogs = (name) => (event) => {
        setState({
            ...state,
            [name]: event.target.checked,
        })
    }




    const printDocument = () => {
        window.print();
    }
    const getDates = () => {

        axios.get('/industry/getDateList', null)
            .then((response) => {
                console.log(response.data);
                da = response.data;

            })
            .catch((error) => {
                console.log(error);
            })


    }
    getDates();

    const retrieve = (date) => {
        // console.log(da);
        var sa = [];

        var st = [];
        // console.log(da);
        //return da;
        var n = [];
        var m = [];
        var y = [];
        var k = [];
        let i = [];
        for (i = 0; i < da.length; i++) {
            st[i] = new Date(da[i]);
        }
        for (i = 0; i < st.length; i++) {
            n[i] = st[i].getDate();
            m[i] = st[i].getMonth();
            y[i] = st[i].getFullYear();
        }
        for (let j = 0; j < st.length; j++)
            k[j] = (n[j] === date.getDate() && m[j] === date.getMonth() && y[j] === date.getFullYear());

        for (i = 0; i < st.length; i++) {
            if (k[i]) {
                return k[i];
            }
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <React.Fragment>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="success"
                    message="Profile added successfully!"
                />
            </Snackbar>
            <Paper className={classes.paper}>
                <Typography component="h2" variant="h4" align="center">
                    Company Profile
                </Typography>
                {/* <Divider className={classes.divider} /> */}
                <div id="divToPrint">
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="Company Name"
                                    fullWidth
                                    onChange={handleChange('name')}
                                    value={state.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Contact Person Name"
                                    fullWidth
                                    onChange={handleChange('cpName')}
                                    value={state.cpName}
                                    error={formErrors.cpName.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label=" Email id 1"
                                    fullWidth
                                    onChange={handleChange('cpEmail1')}
                                    value={state.cpEmail1}
                                    error={formErrors.cpEmail1.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label=" Email id 2"
                                    fullWidth
                                    onChange={handleChange('cpEmail2')}
                                    value={state.cpEmail2}
                                    error={formErrors.cpEmail2.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Contact Number 1"
                                    fullWidth
                                    onChange={handleChange('contactNo1')}
                                    value={state.contactNo1}
                                    error={formErrors.contactNo1.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Contact Number 2"
                                    fullWidth
                                    onChange={handleChange('contactNo2')}
                                    value={state.contactNo2}
                                    error={formErrors.contactNo2.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Contact Number 3"
                                    fullWidth
                                    onChange={handleChange('contactNo3')}
                                    value={state.contactNo3}
                                    error={formErrors.contactNo3.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Criteria"
                                    fullWidth
                                    onChange={handleChange('criteria')}
                                    value={state.criteria}
                                    error={formErrors.criteria.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Package"
                                    fullWidth
                                    onChange={handleChange('package')}
                                    value={state.package}
                                    error={formErrors.package.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Number of Students"
                                    fullWidth
                                    onChange={handleChange('numberOfStudents')}
                                    value={state.numberOfStudents}
                                    error={formErrors.numberOfStudents.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={state.passiveBacklogs}
                                            onChange={toggleBacklogs('passiveBacklogs')}
                                            color="primary"
                                        />
                                    }
                                    style={{ boxSizing: 'border-box', marginLeft: '50px', marginTop: '20px' }}
                                    label="Passive Backlogs"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={state.activeBacklogs}
                                            onChange={toggleBacklogs('activeBacklogs')}
                                            color="primary"
                                        />
                                    }
                                    style={{ boxSizing: 'border-box', marginTop: '20px' }}
                                    label="Active Backlogs"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Chip label="Branches Preferred" style={{ marginTop: "6px", boxSizing: 'border-box', marginLeft: '20px' }} />
                            </Grid>
                            <Grid item xs={2} align='left'>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={state.branches.computer} onChange={handleChecked('computer')} value="computer" />
                                    }
                                    label="Computer"
                                    style={{ boxSizing: 'border-box', marginLeft: '30px' }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={state.branches.it} onChange={handleChecked('it')} value="it" />
                                    }
                                    label="Information Technology"
                                    style={{ boxSizing: 'border-box', marginLeft: '45px' }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={state.branches.entc} onChange={handleChecked('entc')} value="entc" />
                                    }
                                    label="Electronics and Telecommunication"
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth
                                    label="Start date"
                                    fullWidth
                                    value={state.startDate}
                                    onChange={(date) => handleDateChange(date, 'startDate')}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider><br />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth
                                    label="End date"
                                    fullWidth
                                    value={state.endDate}
                                    onChange={(date) => handleDateChange(date, 'endDate')}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider><br />
                        </Grid>*/}
                            <Grid item xs={12} sm={6}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        label="Preffered date"
                                        fullWidth
                                        value={state.startDate}
                                        onChange={(date) => handleDateChange(date, "startDate")}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        shouldDisableDate={retrieve}

                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Skills Required</InputLabel>
                                    <Select
                                        multiple
                                        value={state.skill}
                                        onChange={handleChange('skill')}
                                        input={<Input id="select-multiple-chip" />}
                                        renderValue={selected => (
                                            <div className={classes.chips}>
                                                {selected.map(value => (
                                                    <Chip key={value} label={value} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                        fullWidth
                                    >
                                        {skills.map(s => (
                                            <MenuItem key={s} value={s}>
                                                <Checkbox checked={state.skill.indexOf(s) > -1} />
                                                <ListItemText primary={s} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Locations</InputLabel>
                                    <Select
                                        multiple
                                        value={state.city}
                                        onChange={handleChange('city')}
                                        input={<Input id="select-multiple-chip" />}
                                        renderValue={selected => (
                                            <div className={classes.chips}>
                                                {selected.map(value => (
                                                    <Chip key={value} label={value} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                        fullWidth
                                    >
                                        {cities.map(c => (
                                            <MenuItem key={c} value={c}>
                                                <Checkbox checked={state.city.indexOf(c) > -1} />
                                                <ListItemText primary={c} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} align="right" onClick={submitHandler}>
                                <Button size="large" variant="contained" color="primary">Submit</Button>
                            </Grid>




                        </Grid>

                    </form>
                </div>
            </Paper>
        </React.Fragment>
    );
}

export default Profile;


/*import React, { Component } from 'react'
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
        fontSize: '3vh'
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
     var da = [];

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

         axios.get('/industry/getDateList', null)
            .then((response) => {
                console.log(response.data);
       da = response.data;

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



    retrieve =(date)=>{
    //console.log(da);
        var sa=[];

        var st= [];
       // console.log(da);
        //return da;
            var n=[];
            var m=[];
            var y=[];
            var k=[];
            let i=[];
            for(i=0;i<da.length;i++)
            {
                st[i] = new Date(da[i]);
            }
            for(i=0;i<st.length;i++)
            {
                n[i]=st[i].getDate();
                m[i]=st[i].getMonth();
                y[i]=st[i].getFullYear();
            }
                for(let j=0;j<st.length;j++)
                    k[j]=(n[j] === date.getDate() && m[j] ===date.getMonth() && y[j] === date.getFullYear());

            for(i=0;i<st.length;i++)
            {
                if(k[i])
                {
                    return k[i];
                }
            }

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

  /*  companyDateHandler = (id,company,date) => {
        console.log(id);
        console.log(date);
        console.log(company);
        let newCompany = {
            ...company,
            finalDate: date,
        }
        let companyList = this.state.companies;
        companyList[id] = newCompany;
        this.setState({
            ...this.state,
            companies: companyList,
        })
    }



    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Paper className={classes.root}>
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
                                    value={this.state.finalDate}
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
                            {this.state.companies.map((company,id) => (
                                <TableRow key={company.id} className={classes.tableRow}>
                                    <TableCell component="th" scope="row">
                                        {company.name}
                                    </TableCell>
                                    <TableCell align="right">{company.start_date}</TableCell>
                                    <TableCell>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth
                                    label="End date"
                                    fullWidth
                                    value={company.final_date}
                                    onChange={(date) => this.companyDateHandler(id,company,date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                     shouldDisableDate= {this.retrieve}

                          />
                           </MuiPickersUtilsProvider>
                       </TableCell>
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

export default withStyles(styles)(AllCompanies);*/