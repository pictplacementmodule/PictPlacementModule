import React, { useEffect, useState, Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom'
import classes from './Login.module.css'
import axios from '../../axios'


class Login extends Component {

  state = {
    loggedIn: false,
    username: '',
    password: '',
    type: '',
    error: false,
  }

  loginHandler = (event) => {
    event.preventDefault();
    let user = {
      id: this.state.username,
      pass: this.state.password,
    }
    axios.post("/authenticate", user)
      .then((response) => {
        console.log(response.data);
        switch (response.data) {
          case 'admin':
          case 'company':
          case 'student':
            localStorage.setItem("token", user.id);
            this.setState({
              ...this.state,
              loggedIn: true,
              error: false,
            });
            this.props.history.push({
              pathname: '/'+response.data+'/dashboard',
          });
            break;
          default:
            this.setState({
              ...this.state,
              loggedIn: false,
              error: true,
            })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = name => event => {
    let newState = { ...this.state, [name]: event.target.value };
    this.setState(newState);
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.loginHandler} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              error={this.state.error}
              required
              fullWidth
              label="Id"
              autoComplete="name"
              autoFocus
              onChange={this.changeHandler('username')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.changeHandler('password')}
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
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    )
  }
}

export default withRouter(Login);