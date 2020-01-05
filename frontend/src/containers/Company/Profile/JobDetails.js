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
    margin: theme.spacing(1)
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

function JobProfile(props) {
  const classes = useStyles();

  const [jobDesignation, setDesignation] = React.useState([]);
  const [jobDesc, setDescription] = React.useState([]);

  const [formErrors, setError] = React.useState({
    jobDesc: "",
    jobDesignation: ""
  });

  const [fetched, setFetched] = React.useState({});

  useEffect(() => {
    axios
      .post("/industry/findById", null, {
        params: { id: localStorage.getItem("token") }
      })
      .then(response => {
        console.log(response.data);
        if (response.data === "") {
        } else {
          setFetched({
            ...response.data
          });
          console.log(fetched);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [state, setState] = React.useState({
    industry: fetched,
    jobDesc: "",
    jobDesignation: ""
  });

  const [emptyError, setEmptyError] = React.useState({});

  const submitHandler = event => {
    // setOpen(true);
    event.preventDefault();
    setState({
      industry: fetched,
      jobDesc: "",
      jobDesignation: ""
    });
    console.log(props);
    if (state.jobDesc !== "" && state.jobDesignation !== "") {
      console.log(state);
      let a = {
        industry : fetched,
        jobDesc : state.jobDesc,
        jobDesignation : state.jobDesignation,
      }
      console.log(a);
      axios
        .post("/industry/acceptJobDetails",  a )
        .then(response => {
          console.log(response);  
        })
        .catch(error => {
          console.log(error);
        });
    }

    // window.location.reload(true);
  };
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
    const value = event.target.value;
    let error = "";
    let reg = "";
    reg = /^[A-Za-z\s]$/;
    error = reg.test(value) ? "" : "Invalid ";

    setError({
      ...formErrors,
      [name]: error
    });
  };
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography component="h2" variant="h4" align="center">
          Job Details
        </Typography>
        {/* <Divider className={classes.divider} /> */}
        <div id="divToPrint">
          <form className={classes.container} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{ marginTop: "20px" }}>
                <Chip
                  style={{ width: "80%" }}
                  size="large"
                  label="Designation"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="designation"
                  value={state.jobDesignation}
                  onChange={handleChange("jobDesignation")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{ marginTop: "20px" }}>
                <Chip
                  style={{ width: "80%" }}
                  size="large"
                  label="Job Description"
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="job description"
                  fullWidth
                  multiline
                  rows="4"
                  value={state.jobDesc}
                  onChange={handleChange("jobDesc")}
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Button
              style={{ marginTop: "10px", marginLeft: "50%" }}
              onClick={submitHandler}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
        </div>
      </Paper>
    </React.Fragment>
  );
}

export default JobProfile;
