import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import axios from "../../../axios";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Switch from "@material-ui/core/Switch";
import ReactTooltip from "react-tooltip"
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import { amber, green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
// import moment from "moment";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
};

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: theme.palette.error.dark
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
    },
    message: {
        display: "flex",
        alignItems: "center"
    },
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: "border-box",
        width: "68vw",
        marginLeft: "auto",
        marginRight: "auto"
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: "rgb(70,70,120)",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    root: {
        width: "100%"
    },
    chips: {
        display: "flex",
        flexWrap: "wrap"
    },
    chip: {
        margin: 2
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: "100%",
        maxWidth: "100vw"
    },
    divider: {
        margin: theme.spacing(2, 0)
    }
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
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>
            ]}
            {...other}
        />
    );
}
MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

function Profile(props) {
    const classes = useStyles();

    const [skills, setskills] = React.useState([]);
    const [cities, setCities] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const [variant, setVariant] = React.useState("success");
    const [message, setMessage] = React.useState("Profile added successfully!");

    useEffect(() => {
        axios
            .post("/industry/findById", null, {
                params: { id: localStorage.getItem("token") }
            })
            .then(response => {
                console.log(response.data);
                if (response.data === null) {
                } else {
                    setState({
                        ...state,
                        id: response.data.id,
                        name: response.data.name,
                        cpName: response.data.cpname,
                        cpEmail1: response.data.cpemail1,
                        cpEmail2: response.data.cpemail2,
                        contactNo1: response.data.contactno1,
                        contactNo2: response.data.contactno2,
                        contactNo3: response.data.contactno3,
                        criteria: response.data.criteria,
                        passiveBacklogs: response.data.passive_backlogs,
                        activeBacklogs: response.data.active_backlogs,
                        package: response.data.package_lpa,
                        startDate: response.data.start_date,
                        numberOfStudents: response.data.no_of_students,
                        skills: [...response.data.skills],
                        city: [response.data.locality],
                        branches: {
                            computer: response.data.computer,
                            it: response.data.it,
                            entc: response.data.entc
                        }
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
        axios
            .get("/findallskills")
            .then(response => {
                console.log(response.data);
                setskills([...response.data]);
            })
            .catch(error => {
                console.log(error);
            });
        axios
            .get("/findalllocation")
            .then(response => {
                console.log(response.data);
                setCities([...response.data]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const [state, setState] = React.useState({
        id: "",
        name: "",
        cpName: "",
        cpEmail1: "",
        cpEmail2: "",
        contactNo1: "",
        contactNo2: "",
        contactNo3: "",
        criteria: "",
        passiveBacklogs: false,
        activeBacklogs: false,
        package: "",
        startDate: new Date(),
        endDate: new Date(),
        numberOfStudents: "",
        skills: [],
        city: [],
        branches: {
            computer: false,
            it: false,
            entc: false
        },
        successSnackBar: false
    });
    var da = [];
    const [formErrors, setError] = React.useState({
        id: "",
        name: "",
        cpName: "",
        cpEmail1: "",
        cpEmail2: "",
        contactNo1: "",
        contactNo2: "",
        contactNo3: "",
        criteria: "",
        package: "",
        numberOfStudents: ""
    });

    function validate() {
        let errors = {}
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        errors.id = (state.id.length == 0) ? "This can't be empty!" : "";
        errors.name = (state.name.length == 0) ? "This can't be empty!" : "";
        errors.cpName = (state.cpName.length == 0) ? "This can't be empty!" : "";
        errors.contactNo1 = (!/^\d+$/.test((state.contactNo1)) || state.contactNo1.length != 10) ?
            "Invalid mobile number!" : "";
        errors.contactNo2 = (!/^\d+$/.test((state.contactNo2)) || state.contactNo2.length != 10) ?
            "Invalid mobile number!" : "";
        errors.contactNo3 = (state.contactNo3.length != 0) && (!/^\d+$/.test((state.contactNo3)) || state.contactNo3.length != 10) ?
            "Invalid mobile number!" : "";
        errors.cpEmail1 = !re.test(state.cpEmail1) ? "Invalid email!" : "";
        errors.cpEmail2 = !re.test(state.cpEmail2) ? "Invalid email!" : "";
        errors.package = !/^\d+$/.test(state.package) ? "Invalid!" : "";
        errors.numberOfStudents = !/^\d+$/.test(state.numberOfStudents) ? "Invalid!" : "";
        errors.criteria = state.criteria == "" || Number(state.criteria) > 10 ? "Invalid!" : "";
        setError({
            ...errors
        });
        return !Object.values(errors).some((e) => e != "");
    }

    const submitHandler = event => {
        event.preventDefault();
        var resetState = {
            id: "",
            name: "",
            cpName: "",
            cpEmail1: "",
            cpEmail2: "",
            contactNo1: "",
            contactNo2: "",
            contactNo3: "",
            criteria: "",
            passiveBacklogs: false,
            activeBacklogs: false,
            package: "",
            startDate: new Date(),
            endDate: new Date(),
            numberOfStudents: "",
            skills: [],
            city: [],
            branches: {
                computer: false,
                it: false,
                entc: false
            },
            successSnackBar: true
        };
        var industry = {
            id: state.id,
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
            skills: state.skills,
            locality: state.city,
            computer: state.branches.computer,
            it: state.branches.it,
            entc: state.branches.entc
        };
        if (validate()) {
            axios
                .post("/industry/add", industry)
                .then(response => {
                    if (response.data) {
                        setMessage("Profile added successfully!");
                        setVariant("success");
                        setState(resetState);
                    }
                    else {
                        setMessage("Company with same ID already existing!");
                        setVariant("error");
                    }
                    setOpen(true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };
    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value
        });
    };

    const handleChecked = name => event => {
        setState({
            ...state,
            branches: {
                ...state.branches,
                [name]: event.target.checked
            }
        });
    };

    const handleDateChange = (date, name) => {
        console.log(date);
        setState({
            ...state,
            [name]:
                date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        });
    };

    const toggleBacklogs = name => event => {
        if (name === "activeBacklogs" && event.target.checked) {
            setState({
                ...state,
                passiveBacklogs: true,
                [name]: event.target.checked,
            })
        }
        else if (name === "passiveBacklogs" && !event.target.checked) {
            setState({
                ...state,
                activeBacklogs: false,
                [name]: event.target.checked,
            })
        }
        else {
            setState({
                ...state,
                [name]: event.target.checked,
            })
        }
    };

    const getDates = () => {
        axios
            .get("/industry/getDateList", null)
            .then(response => {
                da = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    };
    getDates();

    const retrieve = date => {
        var sa = [];

        var st = [];
        var n = [];
        var m = [];
        var y = [];
        var k = [];
        let i = [];
        for (i = 0; i < da.length; i++) {
            st[i] = new Date(da[i]);
        }
        // console.log(st);
        for (i = 0; i < st.length; i++) {
            n[i] = st[i].getDate();
            m[i] = st[i].getMonth();
            y[i] = st[i].getFullYear();
        }
        // console.log(n, m, y);
        for (let j = 0; j < st.length; j++)
            k[j] =
                n[j] === date.getDate() &&
                m[j] === date.getMonth() &&
                y[j] === date.getFullYear();

        for (i = 0; i < st.length; i++) {
            if (k[i]) {
                return k[i];
            }
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant={variant}
                    message={message}
                />
            </Snackbar>
            <Paper className={classes.paper}>
                <Typography component="h2" variant="h4" align="center">
                    Add Company
        </Typography>
                <br></br>
                <div id="divToPrint">
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    data-tip data-for='companyId'
                                    label="User Id"
                                    fullWidth
                                    required
                                    error={formErrors.id.length > 0}
                                    onChange={handleChange("id")}
                                    value={state.id}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    data-tip data-for='companyName'
                                    label="Company Name"
                                    fullWidth
                                    required
                                    onChange={handleChange("name")}
                                    value={state.name}
                                    error={formErrors.name.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Contact Person Name"
                                    fullWidth
                                    required
                                    onChange={handleChange("cpName")}
                                    value={state.cpName}
                                    error={formErrors.cpName.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    data-tip data-for="Email1"
                                    label=" Email id 1"
                                    fullWidth
                                    required
                                    onChange={handleChange("cpEmail1")}
                                    value={state.cpEmail1}
                                    error={formErrors.cpEmail1.length > 0}
                                />
                                <ReactTooltip id='Email1' type='info' effect='solid'>
                                    <span>Enter email in format : example@demo.com</span>
                                </ReactTooltip>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label=" Email id 2"
                                    fullWidth
                                    required
                                    onChange={handleChange("cpEmail2")}
                                    value={state.cpEmail2}
                                    error={formErrors.cpEmail2.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    data-tip data-for="contact1*"
                                    label="Contact Number 1"
                                    fullWidth
                                    required
                                    onChange={handleChange("contactNo1")}
                                    value={state.contactNo1}
                                    error={formErrors.contactNo1.length > 0}
                                />
                                <ReactTooltip id='cntact1' type='info' effect='solid'>
                                    <span>Enter 10 digit contact number</span>
                                </ReactTooltip>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Contact Number 2"
                                    fullWidth
                                    required
                                    onChange={handleChange("contactNo2")}
                                    value={state.contactNo2}
                                    error={formErrors.contactNo2.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Contact Number 3"
                                    fullWidth
                                    onChange={handleChange("contactNo3")}
                                    value={state.contactNo3}
                                    error={formErrors.contactNo3.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    data-tip data-for="criteria"
                                    label="Criteria"
                                    fullWidth
                                    required
                                    onChange={handleChange("criteria")}
                                    value={state.criteria}
                                    error={formErrors.criteria.length > 0}
                                />
                                <ReactTooltip id='criteria' type='info' effect='solid'>
                                    <span>Enter the CGPA criteria (should be less than 10)</span>
                                </ReactTooltip>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Package"
                                    fullWidth
                                    required
                                    onChange={handleChange("package")}
                                    value={state.package}
                                    error={formErrors.package.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Number of Students"
                                    fullWidth
                                    required
                                    onChange={handleChange("numberOfStudents")}
                                    value={state.numberOfStudents}
                                    error={formErrors.numberOfStudents.length > 0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={state.passiveBacklogs}
                                            onChange={toggleBacklogs("passiveBacklogs")}
                                            color="primary"
                                        />
                                    }
                                    style={{
                                        boxSizing: "border-box",
                                        marginLeft: "50px",
                                        marginTop: "20px"
                                    }}
                                    label="Accept Passive Backlogs"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={state.activeBacklogs}
                                            onChange={toggleBacklogs("activeBacklogs")}
                                            color="primary"
                                        />
                                    }
                                    style={{ boxSizing: "border-box", marginTop: "20px" }}
                                    label="Accept Active Backlogs"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Chip
                                    label="Branches Preferred"
                                    style={{
                                        marginTop: "6px",
                                        boxSizing: "border-box",
                                        marginLeft: "20px"
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} align="left">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.branches.computer}
                                            onChange={handleChecked("computer")}
                                            value="computer"
                                        />
                                    }
                                    label="Computer"
                                    style={{ boxSizing: "border-box", marginLeft: "30px" }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.branches.it}
                                            onChange={handleChecked("it")}
                                            value="it"
                                        />
                                    }
                                    label="Information Technology"
                                    style={{ boxSizing: "border-box", marginLeft: "45px" }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.branches.entc}
                                            onChange={handleChecked("entc")}
                                            value="entc"
                                        />
                                    }
                                    label="Electronics and Telecommunication"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        label="Preffered date"
                                        fullWidth
                                        value={state.startDate}
                                        onChange={date => handleDateChange(date, "startDate")}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date"
                                        }}
                                        shouldDisableDate={retrieve}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">
                                        skills Required
                  </InputLabel>
                                    <Select
                                        multiple
                                        value={state.skills}
                                        onChange={handleChange("skills")}
                                        input={<Input id="select-multiple-chip" />}
                                        renderValue={selected => (
                                            <div className={classes.chips}>
                                                {selected.map(value => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        className={classes.chip}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                        fullWidth
                                    >
                                        {skills.map(s => (
                                            <MenuItem key={s} value={s}>
                                                <Checkbox checked={state.skills.indexOf(s) > -1} />
                                                <ListItemText primary={s} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">
                                        Locations
                  </InputLabel>
                                    <Select
                                        multiple
                                        value={state.city}
                                        onChange={handleChange("city")}
                                        input={<Input id="select-multiple-chip" />}
                                        renderValue={selected => (
                                            <div className={classes.chips}>
                                                {selected.map(value => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        className={classes.chip}
                                                    />
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
                                <Button className={classes.button} size="large" variant="contained" color="primary">
                                    Submit
                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Paper>
        </React.Fragment>
    );
}

export default Profile;
