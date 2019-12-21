import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import axios from '../../axios'
import MenuItem from '@material-ui/core/MenuItem';

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

    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        width: '68vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
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

export default function AddUser() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        id: '',
        pass: '',
        type: '',
    })

    const types = {
        'Admin':'admin',
        'Company':'company',
        'Student':'student',
    }

    const [open, setOpen] = React.useState(false);


    const changeHandler = (name) => (event) => {
        setState({
            ...state,
            [name]: event.target.value,
        })
    }

    const submitHandler = () => {
        axios.post('/adduser', state)
            .then((response) => {
                console.log(response.data);
                setOpen(true);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="success"
                    message="User Added!"
                />
            </Snackbar>
            <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom align="center">
                    Add User
                </Typography>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="User ID"
                            fullWidth
                            value={state.id}
                            onChange={changeHandler('id')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Password"
                            fullWidth
                            value={state.pass}
                            onChange={changeHandler('pass')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            label="Type"
                            margin="normal"
                            fullWidth
                            onChange={changeHandler('type')}
                            value={state.type}
                        >
                            {Object.keys(types).map(option => (
                                <MenuItem key={option} value={types[option]}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "3vh" }}>
                        <Button onClick={submitHandler} size="large" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}
