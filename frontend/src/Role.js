import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    group: {
        margin: theme.spacing(1, 0),
    },
    rootPaper: {
        padding: theme.spacing(3, 10),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: theme.spacing(1),
        width: '10vw',
        height: '6vh',
        marginTop: '0',
    },
}));

export default function RadioButtonsGroup(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('company');

    function handleChange(event) {
        setValue(event.target.value);
    }

    const handleLogin = () => {
        props.history.push({
            pathname: '/'+value,
            state:{
                type: value,
            }
        });
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.rootPaper}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select a choice</FormLabel>
                    <RadioGroup
                        aria-label="user"
                        name="user"
                        className={classes.group}
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="student" control={<Radio />} label="Student" />
                        <FormControlLabel value="company" control={<Radio />} label="Company" />
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                    </RadioGroup>
                </FormControl>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleLogin}>
                    Go to Login
                </Button>
            </Paper>
        </div>
    );
}
