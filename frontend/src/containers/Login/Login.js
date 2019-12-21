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
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { blue } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



class Login extends Component {

  componentDidMount(){
    console.log(new Date())
    this.setState({
      ...this.state,
      type: this.props.location.state.type,
    })
  }

  

  state = {
    loggedIn: false,
    username: '',
    password: '',
    type:'',
    error: false,
  }
  

  loginHandler = (event) => {
    event.preventDefault();
    let user = {
      id: this.state.username,
      pass: this.state.password,
      type: this.state.type,
    }
    console.log(user);
    axios.post("/authenticate",user)
      .then((response) => {
        console.log(response.data);
        if(response.data){
          localStorage.setItem("token","vidhidhoka");
          this.setState({
            ...this.state,
            loggedIn: true,
            error: false,
          });
        }
        else{
          localStorage.removeItem("token");
          this.setState({
            ...this.state,
            loggedIn: false,
            error: true,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  clickHandler() {
    
  }

  changeHandler = name => event => {
    let newState={...this.state,[name]:event.target.value};
    this.setState(newState);
  }

  render() {
    if(this.state.loggedIn){
      this.props.history.push(this.props.match.path+'/dashboard');
    }
      return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={7}>
      
                    
                    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
                        PICT PLACEMENT
                    </Typography>
                    <Button >Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
      </Grid>
      
      <Grid item xs={12} sm={4} md={7} >
        <div className={classes.image}>
          
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper} >
          <Avatar className={classes.avatar}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Grid container>
          <form className={classes.form} noValidate>
            <Grid item>
            <TextField
              variant="outlined"
              style={{marginLeft:"10vw"}}
              justify="center"
              align="center"
              required
              align="centre"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </Grid>
            <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              style={{marginLeft:"10vw"}}
              required
              align="center"
              justify="center"
              
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            </Grid>
            <Grid item>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </Grid>
            <Grid item>
            <Button
              type="submit"
              justify="center"
              variant="contained"
              style={{marginLeft:"12vw",width:"10vw"}}
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            </Grid>
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid>

              </Grid>
            </Grid>
            
          </form>
          </Grid>
        </div>
      </Grid>
    </Grid>
      );
  }
}

export default withRouter(Login);