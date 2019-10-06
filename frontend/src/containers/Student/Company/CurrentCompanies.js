import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from '../../../axios'

const styles = (theme => ({

    palette: {
        type: 'dark',
    },
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

class Current extends Component {

    state = {
        companies: [],
    }

    constructor() {
        super();
        axios.get('/industry/findall')
            .then((response) => {
                this.setState({ companies: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Criteria</TableCell>
                            <TableCell align="right">Average Salary</TableCell>
                            <TableCell align="right">Skills</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.companies.map(company => (
                            <TableRow key={company.id}>
                                <TableCell component="th" scope="row">
                                    {company.name}
                                </TableCell>
                                <TableCell align="right">{company.criteria}</TableCell>
                                <TableCell align="right">{company.salary}</TableCell>
                                <TableCell align="right">{company.skills}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(Current);