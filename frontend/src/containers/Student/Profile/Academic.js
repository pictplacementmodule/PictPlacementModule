import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Chip from '@material-ui/core/Chip';
import * as actionTypes from '../../../actions/Student'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const branches = ['Computer', 'IT', 'ENTC']


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

const useStyles = makeStyles(theme => ({
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

function Academic(props) {

  const classes = useStyles();

  const [checked, setChecked] = React.useState(props.state2.diploma);

  const toggleChecked = () => {
    setChecked(prev => !prev);
    props.onSwitch('diploma', checked)
  };

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

  let twelfth = null;

  let firstYear = null;

  let formErrors = props.state2.formErrors;

  if (!checked) {
    twelfth = (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="12th Percentage"
            fullWidth
            value={props.state2.percentage.twelfth}
            onChange={props.onChange2('percentage', 'twelfth')}
            error={formErrors.percentage.twelfth.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Board of education (12th)"
            fullWidth
            value={props.state2.boardOfEducation.twelfth}
            onChange={props.onChange2('boardOfEducation', 'twelfth')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              views={["year"]}
              label="Year of passing (12th)"
              variant="inline"
              disableToolbar
              fullWidth
              value={props.state2.yearOfPassing.twelfth}
              onChange={(year) => props.onChangeYearOfPassing(year, 'twelfth')}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Education gap after 12th"
            fullWidth
            value={props.state2.educationGap.twelfth}
            onChange={props.onChange2('educationGap', 'twelfth')}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Reason of gap (12th)"
            fullWidth
            value={props.state2.reasonOfGap.twelfth}
            onChange={props.onChange2('reasonOfGap', 'twelfth')}
          />
        </Grid>
      </Grid>
    );

    firstYear = (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} style={{ marginTop: "20px" }}>
          <Chip label="First Year" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="First sem SGPA"
            fullWidth
            value={props.state2.sgpa.fefs}
            onChange={props.onChange2('sgpa', 'fefs')}
            error={formErrors.sgpa.fefs.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Second sem SGPA"
            fullWidth
            value={props.state2.sgpa.fess}
            onChange={props.onChange2('sgpa', 'fess')}
            error={formErrors.sgpa.fess.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="First sem marks"
            fullWidth
            value={props.state2.marks.fefs}
            onChange={props.onChange2('marks', 'fefs')}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Second sem marks"
            fullWidth
            value={props.state2.marks.fess}
            onChange={props.onChange2('marks', 'fess')}
          />
        </Grid>
      </Grid>
    );
  }
  else {
    twelfth = (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Diploma Percentage"
            fullWidth
            value={props.state2.percentage.diploma}
            onChange={props.onChange2('percentage', 'diploma')}
            error={formErrors.percentage.diploma.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="University of passing"
            fullWidth
            value={props.state2.boardOfEducation.diploma}
            onChange={props.onChange2('boardOfEducation', 'diploma')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              views={["year"]}
              label="Year of passing (diploma)"
              value={props.state2.yearOfPassing.diploma}
              onChange={(year) => props.onChangeYearOfPassing(year, 'diploma')}
              variant="inline"
              fullWidth
              disableToolbar
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Education gap after Diploma"
            fullWidth
            value={props.state2.educationGap.diploma}
            onChange={props.onChange2('educationGap', 'diploma')}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Reason of gap (Diploma)"
            fullWidth
            value={props.state2.reasonOfGap.diploma}
            onChange={props.onChange2('reasonOfGap', 'diploma')}
          />
        </Grid>
      </Grid>
    );
    firstYear = null;
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic Details <br />
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={toggleChecked}
                color="primary"
              />
            }
            label="Diploma"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="branch"
            select
            label="Branch"
            fullWidth
            value={props.state2.branch}
            onChange={props.onChange('branch')}
          >
            {branches.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="prnNumber"
            name="prnNumber"
            label="University PRN Number"
            autoComplete="rn"
            fullWidth
            value={props.state2.prnNumber}
            onChange={props.onChange('prnNumber')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="collegeId"
            label="TE Roll no"
            fullWidth
            value={props.state2.collegeId}
            onChange={props.onChange('collegeId')}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="10th Percentage"
            fullWidth
            value={props.state2.percentage.tenth}
            onChange={props.onChange2('percentage', 'tenth')}
            error={formErrors.percentage.tenth.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Board of education (10th)"
            fullWidth
            value={props.state2.boardOfEducation.tenth}
            onChange={props.onChange2('boardOfEducation', 'tenth')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              views={["year"]}
              label="Year of passing (10th)"
              value={props.state2.yearOfPassing.tenth}
              onChange={(year) => props.onChangeYearOfPassing(year, 'tenth')}
              variant="inline"
              fullWidth
              disableToolbar
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Education gap after 10th"
            fullWidth
            value={props.state2.educationGap.tenth}
            onChange={props.onChange2('educationGap', 'tenth')}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Reason of gap (10th)"
            fullWidth
            value={props.state2.reasonOfGap.tenth}
            onChange={props.onChange2('reasonOfGap', 'tenth')}
          />
        </Grid>
      </Grid>
      {twelfth}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              views={["year"]}
              label="Engineering start year"
              variant="inline"
              disableToolbar
              fullWidth
              value={props.state2.engineeringStartYear}
              onChange={(year) => props.onChangeDate(year, 'engineeringStartYear')}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Aggregate SGPA"
            fullWidth
            value={props.state2.sgpa.aggregate}
            onChange={props.onChange2('sgpa', 'aggregate')}
            error={formErrors.sgpa.aggregate.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Aggregate Percentage"
            fullWidth
            value={props.state2.percentage.engineering}
            onChange={props.onChange2('percentage', 'engineering')}
            error={formErrors.percentage.engineering.length > 0}
          />
        </Grid>
      </Grid>
      <br></br>
      {firstYear}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} style={{ marginTop: "20px" }}>
          <Chip label="Second Year" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="First sem SGPA"
            fullWidth
            value={props.state2.sgpa.sefs}
            onChange={props.onChange2('sgpa', 'sefs')}
            error={formErrors.sgpa.sefs.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Second sem SGPA"
            fullWidth
            value={props.state2.sgpa.sess}
            onChange={props.onChange2('sgpa', 'sess')}
            error={formErrors.sgpa.sess.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="First sem marks"
            fullWidth
            value={props.state2.marks.sefs}
            onChange={props.onChange2('marks', 'sefs')}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Second sem marks"
            fullWidth
            value={props.state2.marks.sess}
            onChange={props.onChange2('marks', 'sess')}
          />
        </Grid>
        <Grid item xs={12} sm={2} style={{ marginTop: "20px" }}>
          <Chip label="Third Year" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="First sem SGPA"
            fullWidth
            value={props.state2.sgpa.tefs}
            onChange={props.onChange2('sgpa', 'tefs')}
            error={formErrors.sgpa.tefs.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Second sem SGPA"
            fullWidth
            value={props.state2.sgpa.tess}
            onChange={props.onChange2('sgpa', 'tess')}
            error={formErrors.sgpa.tess.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="First sem marks"
            fullWidth
            value={props.state2.marks.tefs}
            onChange={props.onChange2('marks', 'tefs')}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Second sem marks"
            fullWidth
            value={props.state2.marks.tess}
            onChange={props.onChange2('marks', 'tess')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="No. of active backlogs"
            fullWidth
            value={props.state2.activeBacklogs}
            onChange={props.onChange('activeBacklogs')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="No. of passive backlogs"
            fullWidth
            value={props.state2.passiveBacklogs}
            onChange={props.onChange('passiveBacklogs')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="No. of yeardowns"
            fullWidth
            value={props.state2.yeardowns}
            onChange={props.onChange('yeardowns')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Skillset</InputLabel>
            <Select
              multiple
              value={props.state2.skill}
              onChange={props.onChange('skill')}
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
                  <Checkbox checked={props.state2.skill.indexOf(s) > -1} />
                  <ListItemText primary={s} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br></br>
    </React.Fragment>
  );
}

const matchStateToProps = (state) => {
  return {
    state2: state.academic,
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    onChange: (name) => (event) => dispatch({ type: actionTypes.CHANGE, parName: name, value: event.target.value }),
    onChange2: (name1, name2) => (event) => dispatch({ type: actionTypes.CHANGE2, par1Name: name1, par2Name: name2, value: event.target.value }),
    onChangeYearOfPassing: (year, name) => dispatch({ type: actionTypes.CHANGE_YEAR_OF_PASSING, parName: name, value: year }),
    onChangeDate: (year, name) => dispatch({ type: actionTypes.CHANGE_DATE, parName: name, value: year }),
    onSwitch: (name, value) => dispatch({ type: actionTypes.CHANGE_SWITCH, parName: name, value: value })
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Academic);
