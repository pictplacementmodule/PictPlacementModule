import React from 'react'
import axios from '../../../axios'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactToPrint from 'react-to-print'

const styles = (theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    paper: {
        // marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        width: '75vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    printButton: {
        // marginTop: '2vh'
    }
}));

class CompanyDetails extends React.Component {

    state = {
        company: {},
        skills: 'Null',
        locality: '',
        branchesPreffered: [],
    }

    componentDidMount(){
        axios.post('/industry/findById', null, { params: { id: this.props.match.params.id } })
        .then((response) => {
            this.setState({
                ...this.state,
                company: response.data,
            })
            let bp = [
                ["Computer",this.state.company.computer],
                ["IT",this.state.company.it],
                ["ENTC",this.state.company.entc],
            ]
            let l = bp.filter((val) => {
                return val[1]
            })
            this.setState({
                ...this.state,
                branchesPreffered: l.map((item) => item[0])
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {

        console.log(this.state.company);

        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <ReactToPrint
                    trigger={() => <Button
                        variant="contained"
                        color="primary"
                        id="printbtn"
                        className={classes.printButton}>
                        Print
                </Button>}
                    content={() => this.componentRef}
                />
                <br></br>
                <br></br>
                <div ref={el => (this.componentRef = el)} style={{marginLeft:"3vw"}}>
                <br></br>
                    <Typography variant="h4">
                        Company Details: {this.state.company.name}
                    </Typography>
                    <br></br>
                    <table class="table table-sm table-bordered table-striped" style={{ width: "70%" }}>
                    <thead>
                        <th scope="col" style={{width:"30%"}}></th>
                        <th scope="col"></th>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{this.state.company.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Start Date</th>
                            <td>{this.state.company.start_date}</td>
                        </tr>
                        <tr>
                            <th scope="row">Final Date</th>
                            <td>{this.state.company.final_date}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email 1</th>
                            <td>{this.state.company.cpemail1}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email 2</th>
                            <td>{this.state.company.cpemail2}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email 2</th>
                            <td>{this.state.company.cpemail2}</td>
                        </tr>
                        <tr>
                            <th scope="row">Contact Number 1</th>
                            <td>{this.state.company.contactno1}</td>
                        </tr>
                        <tr>
                            <th scope="row">Contact Number 2</th>
                            <td>{this.state.company.contactno2}</td>
                        </tr>
                        <tr>
                            <th scope="row">Contact Number 3</th>
                            <td> {this.state.company.contactno3}</td>
                        </tr>
                        <tr>
                            <th scope="row">Contact Number 3</th>
                            <td> {this.state.company.contactno3}</td>
                        </tr>
                        <tr>
                            <th scope="row">Active Backlogs</th>
                            <td> {String(this.state.company.active_backlogs)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Passive Backlogs</th>
                            <td>{String(this.state.company.passive_backlogs)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Branches Preffered</th>
                            <td>{Array(this.state.branchesPreffered).length>0?Array(this.state.branchesPreffered).join():'Null'}</td>
                        </tr>
                        <tr>
                            <th scope="row">Criteria</th>
                            <td>{String(this.state.company.criteria)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Number of students</th>
                            <td>{String(this.state.company.no_of_students)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Package LPA</th>
                            <td>{String(this.state.company.package_lpa)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Skills required</th>
                            <td>{Array(this.state.company.skills).length>0?Array(this.state.company.skills).join():'Null'}</td>
                        </tr>
                        <tr>
                            <th scope="row">Locations</th>
                            <td>{Array(this.state.company.locality).length>0?Array(this.state.company.locality).join():'Null'}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(CompanyDetails);