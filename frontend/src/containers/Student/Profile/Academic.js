import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Chip from '@material-ui/core/Chip';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import axios from '../../../axios'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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

  const [skills, setSkills] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios.get('/findallskills')
      .then((response) => {
        console.log(response.data);
        setSkills([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let twelfth = null;

  let firstYear = null;


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic Details <br />
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.diploma}
                onChange={(event) => props.handleCheck(event, 'diploma')}
                color="secondary"
              />
            }
            label="Twelfth"
            inputProps={{
              readOnly: props.dataFilled,
            }}
            value={props.diploma}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.diploma}
                onChange={(event) => props.handleCheck(event, 'diploma')}
                color="secondary"
              />
            }
            label="Diploma"
            inputProps={{
              readOnly: props.datafilled,
            }}
            value={props.diploma}
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
            value={props.branch}
            inputProps={{
              readOnly: props.dataFilled,
            }}
            onChange={(event) => props.onChange(event,'branch')}
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
            inputProps={{
              readOnly: props.dataFilled,
            }}
            value={props.prnNumber}
            onChange={(event) => props.onChange(event, 'prnNumber')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="collegeId"
            label="TE Roll no"
            fullWidth
            inputProps={{
              readOnly: props.dataFilled,
            }}
            value={props.collegeId}
            onChange={(event) => props.onChange(event, 'collegeId')}
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={3}>
        {/* Tenth */}
        <Grid item xs={12}>
          <ExpansionPanel defaultExpanded={true} style={{ backgroundColor: "#fafafa" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.heading}>Standard 10th</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="10th Percentage"
                    fullWidth
                    // error={formErrors.percentage.tenth.length > 0}
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    value={props.percentageTenth}
                    onChange={(event) => props.onChange(event, 'percentageTenth')}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Board of education (10th)"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    value={props.boeTenth}
                    onChange={(event) => props.onChange(event, 'boeTenth')}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      views={["year"]}
                      label="Year of passing (10th)"
                      inputProps={{
                        readOnly: props.dataFilled,
                      }} 
                      value={props.yopTenth}
                      onChange={(date) => props.onDateChange(date, 'yopTenth', 'academic')}
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
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'gapTenth')}
                    value={props.gapTenth}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    label="Reason of gap (10th)"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'rogTenth')}
                    value={props.rogTenth}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>

        {/* Twelfth */}
        <Grid item xs={12}>
          <ExpansionPanel defaultExpanded={props.diploma} disabled={!props.diploma} style={{ backgroundColor: "#fafafa" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.heading}>Standard 12th</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="12th Percentage"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'percentageTwelfth')}
                    value={props.percentageTwelfth}
                  // error={formErrors.percentage.twelfth.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Board of education (12th)"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'boeTwelfth')}
                    value={props.boeTwelfth}
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
                      inputProps={{
                        readOnly: props.dataFilled,
                      }}
                      value={props.yopTwelfth}
                      onChange={(date) => props.onDateChange(date, 'yopTwelfth', 'academic')}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Education gap after 12th"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'gapTwelfth')}
                    value={props.gapTwelfth}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    label="Reason of gap (12th)"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'rogTwelfth')}
                    value={props.rogTwelfth}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>

        {/* Diploma */}
        <Grid item xs={12}>
          <ExpansionPanel defaultExpanded={props.diploma} disabled={!props.diploma} style={{ backgroundColor: "#fafafa" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.heading}>Diploma</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Diploma Percentage"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'percentageDiploma')}
                    value={props.percentageDiploma}
                  // error={formErrors.percentage.diploma.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="University of passing"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'boeDiploma')}
                    value={props.boeDiploma}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      views={["year"]}
                      label="Year of passing (diploma)"
                      variant="inline"
                      fullWidth
                      inputProps={{
                        readOnly: props.dataFilled,
                      }}
                      value={props.yopDiploma}
                      onChange={(date) => props.onDateChange(date, 'yopDiploma', 'academic')}
                      disableToolbar
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Education gap after Diploma"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'gapDiploma')}
                    value={props.gapDiploma}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    label="Reason of gap (Diploma)"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'rogDiploma')}
                    value={props.rogDiploma}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              views={["year"]}
              label="Engineering start year"
              variant="inline"
              disableToolbar
              fullWidth
              inputProps={{
                readOnly: props.dataFilled,
              }}
              onChange={(date) => props.onDateChange(date, 'engineeringStartYear', 'academic')}
              value={props.engineeringStartYear}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Aggregate SGPA"
            fullWidth
            inputProps={{
              readOnly: props.dataFilled,
            }}
            onChange={(event) => props.onChange(event, 'sgpaAggregate')}
            value={props.sgpaAggregate}
            // error={formErrors.sgpa.aggregate.length > 0}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Aggregate Percentage"
            fullWidth
            inputProps={{
              readOnly: props.dataFilled,
            }}
            onChange={(event) => props.onChange(event, 'percentageEngineering')}
            value={props.percentageEngineering}
            // error={formErrors.percentage.engineering.length > 0}
          />
        </Grid>
      </Grid>
      <br></br>
      <Grid container spacing={3}>
        {/* Engineering first year */}
        <Grid item xs={12}>
          <ExpansionPanel defaultExpanded={true} disabled={props.diploma} style={{ backgroundColor: "#fafafa" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.heading}>Engineering First Year</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="First sem SGPA"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'sgpaFEFS')}
                    value={props.sgpaFEFS}
                    // error={formErrors.sgpa.fefs.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Second sem SGPA"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'sgpaFESS')}
                    value={props.sgpaFESS}
                    // error={formErrors.sgpa.fess.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="First sem marks"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'marksFEFS')}
                    value={props.marksFEFS}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Second sem marks"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'marksFESS')}
                    value={props.marksFESS}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        {/* Engineering second year */}
        <Grid item xs={12}>
          <ExpansionPanel defaultExpanded={true} style={{ backgroundColor: "#fafafa" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.heading}>Engineering Second Year</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="First sem SGPA"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'sgpaSEFS')}
                    value={props.sgpaSEFS}
                    // error={formErrors.sgpa.sefs.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Second sem SGPA"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'sgpaSESS')}
                    value={props.sgpaSESS}
                    // error={formErrors.sgpa.sess.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="First sem marks"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'marksSEFS')}
                    value={props.marksSEFS}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Second sem marks"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'marksSESS')}
                    value={props.marksSESS}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        {/* Engineering third year */}
        <Grid item xs={12}>
          <ExpansionPanel defaultExpanded={true} style={{ backgroundColor: "#fafafa" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.heading}>Engineering Third Year</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="First sem SGPA"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'sgpaTEFS')}
                    value={props.sgpaTEFS}
                    // error={formErrors.sgpa.tefs.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Second sem SGPA"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'sgpaTESS')}
                    value={props.sgpaTESS}
                    // error={formErrors.sgpa.tess.length > 0}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="First sem marks"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'marksTEFS')}
                    value={props.marksTEFS}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Second sem marks"
                    fullWidth
                    inputProps={{
                      readOnly: props.dataFilled,
                    }}
                    onChange={(event) => props.onChange(event, 'marksTESS')}
                    value={props.marksTESS}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
      {/* Backlogs and yeardowns */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="No. of active backlogs"
            fullWidth
            inputProps={{
              readOnly: props.dataFilled,
            }}
            onChange={(event) => props.onChange(event, 'activeBacklogs')}
            value={props.activeBacklogs}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="No. of passive backlogs"
            fullWidth
            inputProps={{
              readOnly: props.dataFilled,
            }}
            onChange={(event) => props.onChange(event, 'passiveBacklogs')}
            value={props.passiveBacklogs}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="No. of yeardowns"
            fullWidth
            inputProps={{
              readOnly: props.dataFilled,
            }}
            onChange={(event) => props.onChange(event, 'yeardowns')}
            value={props.yeardowns}
          />
        </Grid>
        {/* Skills */}
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Skillset</InputLabel>
            <Select
              multiple
              value={props.skills}
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
              inputProps={{
                readOnly: props.dataFilled,
              }}
              onChange={(event) => props.onChange(event, 'skills')}
            >
              {skills.map(s => (
                <MenuItem key={s} value={s}>
                  <Checkbox checked={props.skills.indexOf(s) > -1} />
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

export default Academic;
