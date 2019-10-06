import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux'
import * as actionTypes from '../../../actions/Student'
import axios from '../../../axios'



class Personal extends Component {

  genders = ['Female', 'Male', 'Other'];


  render() {

    //errors recieved from reducer are in this.props.formerrors
    //errors recieved from profile.js are in this.props.erros
    
    // console.log(this.props.errors);
    // console.log(this.props.formErrors);
    const formErrors = this.props.formErrors;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="TE Roll Number"
              autoComplete="rn"
              fullWidth
              onChange={this.props.onChange('rollno')}
              value={this.props.rollno}
              /*error={formErrors.rollno.length>0||this.props.errors.rollno.length>0}*/
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="aadharNumber"
              name="aadharNumber"
              label="Aadhar card Number"
              fullWidth
              onChange={this.props.onChange('aadharNumber')}
              value={this.props.aadharNumber}
              error={formErrors.aadharNumber.length>0||this.props.errors.aadharNumber.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="pancardNumber"
              label="Pancard Number"
              fullWidth
              onChange={this.props.onChange('pancardNumber')}
              value={this.props.pancardNumber}
              error={this.props.errors.pancardNumber.length>0}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              onChange={this.props.onChange('firstName')}
              value={this.props.firstName}
              error={this.props.errors.firstName.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="middleName"
              name="middleName"
              label="Middle name"
              fullWidth
              autoComplete="mname"
              onChange={this.props.onChange('middleName')}
              value={this.props.middleName}
              error={this.props.errors.middleName.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={this.props.onChange('lastName')}
              value={this.props.lastName}
              error={this.props.errors.lastName.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              fullWidth
              onChange={this.props.onChange('mobileNumber1')}
              value={this.props.mobileNumber1}
              error={formErrors.mobileNumber1.length>0 || this.props.errors.mobileNumber1.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alternate Mobile Number"
              fullWidth
              onChange={this.props.onChange('mobileNumber2')}
              value={this.props.mobileNumber2}
              error={formErrors.mobileNumber2.length>0||this.props.errors.mobileNumber2.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="emailAddress"
              name="emailAddress"
              label="Email address"
              fullWidth
              onChange={this.props.onChange('email')}
              value={this.props.email}
              error={formErrors.email.length>0||this.props.errors.email.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="alternateEmail"
              label="Alternate Email address"
              fullWidth
              onChange={this.props.onChange('alternateEmail')}
              value={this.props.alternateEmail}
              error={formErrors.alternateEmail.length>0||this.props.errors.alternateEmail.length>0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                margin="normal"
                id="dateOfBirth"
                label="Date of Birth"
                value={this.props.dateOfBirth}
                onChange={(date) => this.props.onChangeDate(date, 'dateOfBirth')}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="gender"
              select
              label="Gender"
              margin="normal"
              fullWidth
              onChange={this.props.onChange('gender')}
              value={this.props.gender}
              error={this.props.errors.gender.length>0}
            >
              {this.genders.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} xm={6}>
            <TextField
              id="currentAddress"
              name="currentAddress"
              label="Current Address"
              fullWidth
              autoComplete="billing address-line1"
              onChange={this.props.onChange('currentAddress')}
              value={this.props.currentAddress}
              error={this.props.errors.currentAddress.length>0}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="permanentAddress"
              name="permanentAddress"
              label="Permanent Address"
              fullWidth
              autoComplete="billing address-line2"
              onChange={this.props.onChange('permanentAddress')}
              value={this.props.permanentAddress}
              error={this.props.errors.permanentAddress.length>0}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rollno: state.personal.rollno,
    aadharNumber: state.personal.aadharNumber,
    pancardNumber: state.personal.pancardNumber ,
    firstName: state.personal.firstName,
    middleName: state.personal.middleName,
    lastName: state.personal.lastName,
    mobileNumber1: state.personal.modileNumber1,
    mobileNumber2: state.personal.modileNumber2,
    email: state.personal.email,
    alternateEmail: state.personal.alternateEmail,
    dateOfBirth: state.personal.dateOfBirth,
    gender: state.personal.gender,
    currentAddress: state.personal.currentAddress,
    permanentAddress: state.personal.permanentAddress,
    formErrors: state.personal.formErrors,
    valid: state.personal.valid,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name) => (event) => dispatch({ type: actionTypes.CHANGE, parName: name, value: event.target.value }),
    onChangeDate: (date, name) => dispatch({ type: actionTypes.CHANGE_DATE, parName: name, value: date }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);