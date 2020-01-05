import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import classes from "./Login.module.css";
import axios from "../../axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


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

const styles = makeStyles(theme => ({
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
}));

function MySnackbarContentWrapper(props) {
  const classes = styles();
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

class Login extends Component {
  state = {
    loggedIn: false,
    username: "",
    password: "",
    type: "",
    error: false,
    open: false,
  };

  loginHandler = event => {
    event.preventDefault();
    let user = {
      id: this.state.username,
      pass: this.state.password
    };
    axios
      .post("/authenticate", user)
      .then(response => {
        console.log(response.data);
        const s = response.data;
        switch (s.toLowerCase()) {
          case "admin":
          case "company":
          case "student":
            localStorage.setItem("token", user.id);
            localStorage.setItem("active",0);
            localStorage.setItem("type",s.toUpperCase());
            this.setState({
              ...this.state,
              loggedIn: true,
              error: false,
              open: false,
            });
            this.props.history.push({
              pathname: "/" + response.data + "/dashboard"
            });
            break;
          default:
            this.setState({
              ...this.state,
              loggedIn: false,
              error: true,
              open: true,
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeHandler = name => event => {
    let newState = { ...this.state, [name]: event.target.value };
    this.setState(newState);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      ...this.state,
      open: false,
    })
  };


  render() {
    const { classes2 } = this.props;
    return (
      <div className={classes.login}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            variant="error"
            onClose={this.handleClose}
            message="Invalid Details!"
          />
        </Snackbar>
        <div
          style={{
            width: "100%",
            height: "7vh",
            font: "Bold",
            fontSize: "4vh",
            fontFamily: "Comicsans",
            color: "white"
          }}
        >

          <AppBar position="static" style={{ backgroundColor: "rgb(70,70,120)" }}>
            <Toolbar variant="dense">
              <Typography style={{ marginLeft: "2vw", fontSize: "20px" }} variant="h5">
                PUNE INSTITUTE OF COMPUTER TECHNOLOGY PLACEMENT-CELL
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <Container component="main" maxWidth="xs">

          <CssBaseline />
          <div className={classes.paper}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Pict_logo.png"
              style={{ height: "12vh", width: "7vw", borderRadius: 125 }}
            ></img>{" "}
            <Typography component="h1" variant="h5" style={{ marginTop: "3vh" }}>
              SIGN IN
            </Typography>{" "}
            <form
              className={classes.form}
              noValidate
              onSubmit={this.loginHandler}
            >
              <TextField
                variant="outlined"
                margin="normal"
                error={this.state.error}
                style={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "5px" }}
                required
                fullWidth
                label="User ID"
                autoComplete="name"
                autoFocus
                onChange={this.changeHandler("username")}
              />
              <TextField
                variant="outlined"
                style={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "5px" }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.changeHandler("password")}
                error={this.state.error}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ outline: "none", backgroundColor: "rgba(50,50,100,1)", color: "white" }}
                // color= "primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs></Grid>
              </Grid>{" "}
            </form>{" "}
          </div>{" "}
        </Container>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Login));