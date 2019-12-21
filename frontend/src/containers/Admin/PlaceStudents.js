import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import axios from '../../axios'
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import FormGroup from '@material-ui/core/FormGroup';

const useStyles = (theme => ({
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        width: '68vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    palette: {
      type: "dark"
    },
    root: {
      width: "85%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto"
    },
    table: {
      minWidth: 650
    },
    text: {
      textAlign: "center"
    },
    formControl: {
      margin: theme.spacing(3)
    },
    button: {
      margin: theme.spacing(1),
      margin: "auto"
    },
    group: {
      margin: theme.spacing(1, 0)
    }
}));


class PlaceStudents extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.text}>
                            Select the branch
                        </FormLabel>
                    </FormControl>
                </Paper>
            </React.Fragment>
                );
            }
        }
        
export default withStyles(useStyles)(PlaceStudents);