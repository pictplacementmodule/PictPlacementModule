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
import "bootstrap/dist/css/bootstrap.css";

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
    table: {
        margin: 'auto',
        minWidth: 500,
    },
    button: {
        margin: theme.spacing(1),
        margin: "auto",
        left:"47%"
      },
    tr: {
        opacity: '1',
        transition: 'opacity 300ms ease',
        cursor: 'pointer',
        color: 'black'
    }
}));


class SkillsReport extends React.Component {

    constructor(props){
        super(props);
        axios.get('/industry/findall')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    companies: response.data,
                })
                
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        companies: [],
        skills: [],
    }

    printDocument = () => {
        document.getElementById("printbtn").style.visibility="hidden";
        window.print();
        document.getElementById("printbtn").style.visibility="visible";
      }

    
    companyHandler = (company) => {
        console.log("clicked" + company.name);
        window.open("http://localhost:3000/admin/skill-report/"+company.id, '_blank');
    }

    render() {

        console.log(this.state.skills)
        const { classes } = this.props;
        return (
        <div>
            {/* <Button
            variant="contained"
            color="primary"
            id="printbtn"
            className={classes.button}
            onClick={this.printDocument}
          >
            Print
          </Button> */}
            <Paper className={classes.root}>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr >
                            <th className={classes.tr}>Company Name</th>
                            <th align="right">Criteria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.companies.map((company) => (
                            <tr key={company.id}>
                                <td style={{ color: "#3f51b5",cursor:"pointer" }} component="th" scope="row" className={classes.tr} onClick={()=>this.companyHandler(company)} >
                                    <u>{company.name}</u>
                                </td>
                                <td align="right">{company.criteria}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(SkillsReport);