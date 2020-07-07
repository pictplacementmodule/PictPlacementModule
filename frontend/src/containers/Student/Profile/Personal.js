import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import axios from '../../../axios';

class Personal extends Component {

  genders = ['Female', 'Male', 'Other'];

  state = {
    disability: '',
  }

  componentDidMount() {
    axios.post('/industry/findById', null, { params: { id: localStorage.getItem('token') } })
      .then((response) => {
        if (response.data != '') {
          this.setState({
            ...this.state,
            sgpa: response.data.criteria,
            active_backlogs: response.data.active_backlogs,
            passive_backlogs: response.data.passive_backlogs,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
    axios.post('/filter', null, { params: { comp_id: localStorage.getItem('token') } })
      .then((response) => {
        this.setState({
          students: response.data,
          temp: response.data,
        });
        this.filter();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  blah = () => (event) => {
    this.setState({
      ...this.state,
      disability: event.target.value,
    })
  }

  render() {

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal details
        </Typography>
        <Grid spacing={2} container direction="column" alignItems="center" justify="center">
          <Grid item xs={4}>
            <img style={{border:"grey 1px solid"}} height="150" width="150" 
              src= {(this.props.profileImg=="" || this.props.profileImg==null) ?"/profile_picture.jpg":this.props.profileImg} />
          </Grid>
          <Grid style={{display:this.props.dataFilled?"none":"block"}} item xs={4}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              onChange={(event) => this.props.onFileChange(event)}
            />
            <label htmlFor="contained-button-file">
              <Button size="small" startIcon={<CloudUploadIcon />} variant="contained" color="default" component="span">
                Upload
            </Button>
            </label>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="User Id"
              autoComplete="rn"
              fullWidth
              disabled={true}
              value={localStorage.getItem("token")}
            /*error={formErrors.rollno.length>0||this.props.errors.rollno.length>0}*/
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required
              id="aadharNumber"
              name="aadharNumber"
              label="Aadhar card Number"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'aadharNumber')}
              value={this.props.aadharNumber}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.aadharNumber.length > 0}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required
              name="pancardNumber"
              label="Pancard Number"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'pancardNumber')}
              value={this.props.pancardNumber}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.pancardNumber.length > 0}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="First name"
              fullWidth
              autoComplete="fname"
              onChange={(event) => this.props.onChange(event, 'firstName')}
              value={this.props.firstName}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.firstName.length > 0}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="middleName"
              name="middleName"
              label="Middle name"
              fullWidth
              autoComplete="mname"
              onChange={(event) => this.props.onChange(event, 'middleName')}
              value={this.props.middleName}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={(event) => this.props.onChange(event, 'lastName')}
              value={this.props.lastName}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.lastName.length > 0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required
              label="Mobile Number"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'mobileNumber1')}
              value={this.props.mobileNumber1}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.mobileNumber1.length > 0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alternate Mobile Number"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'mobileNumber2')}
              value={this.props.mobileNumber2}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.mobileNumber2.length > 0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required
              id="emailAddress"
              name="emailAddress"
              label="Email address"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'email')}
              value={this.props.email}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.email.length > 0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="alternateEmail"
              label="Alternate Email address"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'alternateEmail')}
              value={this.props.alternateEmail}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.alternateEmail.length > 0}
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
                onChange={(date) => this.props.onDateChange(date, 'dateOfBirth', 'personal')}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                inputProps={{
                  readOnly: this.state.dataFilled,
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required
              id="gender"
              select
              label="Gender"
              margin="normal"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'gender')}
              value={this.props.gender}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.gender.length > 0}
            >
              {this.genders.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} xm={6}>
            <TextField required
              id="currentAddress"
              name="currentAddress"
              label="Current Address"
              fullWidth
              autoComplete="billing address-line1"
              onChange={(event) => this.props.onChange(event, 'currentAddress')}
              value={this.props.currentAddress}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.currentAddress.length > 0}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField required
              id="permanentAddress"
              name="permanentAddress"
              label="Permanent Address"
              fullWidth
              autoComplete="billing address-line2"
              onChange={(event) => this.props.onChange(event, 'permanentAddress')}
              value={this.props.permanentAddress}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            error={this.props.errors.permanentAddress.length > 0}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField required
              label="Father's Name"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'fatname')}
              value={this.props.fatname}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
              error={this.props.errors.fatname.length > 0}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField required
              label="Mother's Name"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'motname')}
              value={this.props.motname}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
              error={this.props.errors.motname.length > 0}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField required
              label="Occupation"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'occupation')}
              value={this.props.occupation}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
              error={this.props.errors.occupation.length > 0}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField required
              label="Annual Income"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'anninc')}
              value={this.props.anninc}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
              error={this.props.errors.anninc.length > 0}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Disability (If any)"
              fullWidth
              onChange={(event) => this.props.onChange(event, 'disability')}
              value={this.props.disability}
              InputProps={{
                readOnly: this.props.dataFilled,
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}


export default Personal;