import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from '../../axios'
import { fontSize } from '@material-ui/system';
import Button from "@material-ui/core/Button";


const styles = (theme => ({

    palette: {
        type: 'dark',
    },
    root: {
        width: '70%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        margin: 'auto'
    },
    button: {
        margin: theme.spacing(1),
        margin: "auto",
        left:"47%"
      },
    table: {
        margin:'auto',
        minWidth: 500,
    },
    tableRow: {
        opacity: '1',
        transition: 'opacity 300ms ease',
        cursor: 'pointer',
        color: 'blue'
    }
}));

class CountReport extends Component {

    state = {
        companies: [],
    }

    constructor() {
        super();
        axios.get('/countofplaced')
            .then((response) => {
                console.log(response.data);
                this.setState({ companies: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    printDocument = () => {
        document.getElementById("printbtn").style.visibility="hidden";
        window.print();
        document.getElementById("printbtn").style.visibility="visible";
      }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button
            variant="contained"
            color="primary"
            id="printbtn"
            className={classes.button}
            onClick={this.printDocument}
          >
            Print
          </Button>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow >
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">Number of Students placed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.companies.map(company => (
                            <TableRow key={company.id}>
                                <TableCell component="th" scope="row">
                                    <u>{company.name}</u>
                                </TableCell>
                                <TableCell align="right">{company.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
               
            
            </Paper>
            
          </div>
        );
    }
}

export default withStyles(styles)(CountReport);