import React, { Component } from 'react';
import { makeStyles, withStyles, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Personal from './Personal'
import Academic from './Academic'
import axios from '../../../axios'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
import Chip from '@material-ui/core/Chip'


const styles = (theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    width: '65vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: '#fafafa'
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    // backgroundColor: '#fafafa'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
const useStyles = makeStyles(theme => ({
  icon: {
      fontSize: 20,
  },
  success: {
      backgroundColor: green[600],
  },
  iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
  },
  message: {
      display: 'flex',
      alignItems: 'center',
  },
}));

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
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


const steps = ['Personal details', 'Academic details'];


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      dataFilled: false,
      open: false,
      snackOpen: false,
      message: "Profile added!",
      variant: "success",
      formErrors: {
        rollno: '',
        aadharNumber: '',
        pancardNumber: '',
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber1: '',
        mobileNumber2: '',
        email: '',
        alternateEmail: '',
        gender: '',
        currentAddress: '',
        permanentAddress: '',
        per: {},
        aca: {},
        open: false,
        agree: false,
      },
      personal: {
        rollno: '',
        aadharNumber: '',
        pancardNumber: '',
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber1: '',
        mobileNumber2: '',
        email: '',
        alternateEmail: '',
        dateOfBirth: new Date(),
        gender: '',
        currentAddress: '',
        permanentAddress: '',
        valid: '',
        fatname: '',
        motname: '',
        disability: '',
        anninc: '',
        occupation: '',
      },
      academic: {
        activeBacklogs: "",
        boeDiploma: "",
        boeTenth: "",
        boeTwelfth: "",
        branch: "",
        collegeId: "",
        diploma: false,
        engineeringStartYear: new Date(),
        gapDiploma: "",
        gapTenth: "",
        gapTwelfth: "",
        marksFEFS: "",
        marksFESS: "",
        marksSEFS: "",
        marksSESS: "",
        marksTEFS: "",
        marksTESS: "",
        passiveBacklogs: "",
        percentageDiploma: "",
        percentageEngineering: "",
        percentageTenth: "",
        percentageTwelfth: "",
        placed: "",
        prnNumber: "",
        rogDiploma: "",
        rogTenth: "",
        rogTwelfth: "",
        roll_no: "",
        sgpaAggregate: "",
        sgpaFEFS: "",
        sgpaFESS: "",
        sgpaSEFS: "",
        sgpaSESS: "",
        sgpaTEFS: "",
        sgpaTESS: "",
        skills: [],
        yeardowns: "",
        yopDiploma: new Date(),
        yopTenth: new Date(),
        yopTwelfth: new Date(),
      }
    }
  }

  handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      ...this.state,
      snackOpen: false,
    })
  };

  componentDidMount() {
    if (this.props.dataFilled) {
      this.setState({
        ...this.state,
        dataFilled: true,
        personal: this.props.details.student,
        academic: {
          ...this.props.details,
          student: undefined,
        }
      });
    }
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <Personal
          dataFilled={this.state.dataFilled}
          onDateChange={(date, name, parent) => this.handleDataChange(date, name, parent)}
          {...this.state.personal}
          onChange={(event, name) => this.handleChangePersonal(event, name)}
          errors={this.state.formErrors} />;
      case 1:
        return <Academic
          dataFilled={this.state.dataFilled}
          onDateChange={(date, name, parent) => this.handleDataChange(date, name, parent)}
          {...this.state.academic}
          handleCheck={(event, name) => this.handleCheck(event, name)}
          onChange={(event, name) => this.handleChangeAcademic(event, name)} />;
      default:
        throw new Error('Unknown step');
    }
  }

  handleChangePersonal = (event, name) => {
    this.setState({
      ...this.state,
      personal: {
        ...this.state.personal,
        [name]: event.target.value,
      }
    })
  }
  handleChangeAcademic = (event, name) => {
    this.setState({
      ...this.state,
      academic: {
        ...this.state.academic,
        [name]: event.target.value,
      }
    })
  }

  handleDataChange = (date, name, parent) => {
    this.setState({
      ...this.state,
      [parent]: {
        ...this.state[parent],
        [name]: date,
      }
    })
  }

  handleCheck = (event, name) => {
    this.setState({
      ...this.state,
      academic: {
        ...this.state.academic,
        [name]: event.target.checked,
      }
    })
  }

  handleClickOpen = () => {
    this.setState({
      ...this.state,
      open: true,
    })
  }

  handleClickClose = (agreed) => {
    this.setState({
      ...this.state,
      open: false,
    })
    console.log(agreed);
    if (agreed) {
      axios.post('/addPersonaldetails', {
        ...this.state.personal,
        rollno: localStorage.getItem("token"),
      })
        .then((res) => {
          return axios.post('/addacademicdetails', {
            ...this.state.academic,
            collegeId: localStorage.getItem("token"),
            roll_no: localStorage.getItem("token"),
          })
        })
        .then((res) => {
          this.setState({
            ...this.state,
            snackOpen: true,
            variant: "success",
          })
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch((error) => {
          this.setState({
            ...this.state,
            variant: "danger"
          })
        });
    }
  }

  handleNext = () => {
    let newActiveStep = this.state.activeStep;
    switch (this.state.activeStep) {
      case 0:
        newActiveStep = this.state.activeStep + 1;
        break;
      case 1:
        this.handleClickOpen();
        break;
    }
    this.setState({ activeStep: newActiveStep });
  };

  handleBack = () => {
    const newActiveStep = this.state.activeStep - 1;
    this.setState({ activeStep: newActiveStep });
  };

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={this.state.variant}
            message={this.state.message}
          />
        </Snackbar>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Dialog
              open={this.state.open}
              onClose={this.handleClickClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Are you sure you want to save the profile?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You will be held responsible in case of any misinformation.
          </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => this.handleClickClose(false)} color="primary">
                  Disagree
                </Button>
                <Button onClick={() => this.handleClickClose(true)} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
            <Typography component="h1" variant="h4" align="center">
              Student Profile
            </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {this.state.dataFilled ? (
                steps.slice(0, 2).map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))
              ) : (
                  steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))
                )}
            </Stepper>
            {this.state.dataFilled && (
              <Typography variant="overline">
                Your profile is completed. Sorry, you can't edit the details.
              </Typography>
            )}
            <React.Fragment>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for filling the profile.
                  </Typography>
                  <Typography variant="subtitle1">
                  </Typography>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(this.state.activeStep)}
                    <div className={classes.buttons}>
                      {this.state.activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      {((this.state.dataFilled == false) || (this.state.activeStep == 0)) && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {this.state.activeStep === steps.length - 1 ? 'Save Profile' : 'Next'}
                        </Button>
                      )}
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default (withStyles(styles)(Profile));