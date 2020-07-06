import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux'
import * as actionTypes from '../../../actions/Student';

const useStyles = (theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

class Review extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      ...this.props.statePersonal,
      ...this.props.stateAcademic,
    }
  }

  componentDidMount() {

  }


  render() {

    console.log(this.state);

    const { classes } = this.props;

    return (
      <React.Fragment>
        <hr></hr>
        <Typography variant="h4" gutterBottom>
          Personal details
        </Typography>
        <hr></hr>
        <table style={{ width: "60vw", fontWeight: "bold", margin: "auto" }} className="table table-bordered" id="printArea">
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{this.props.personal.firstName}</td>
            </tr>
            <tr>
              <td>Middle Name</td>
              <td>{this.props.personal.middleName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{this.props.personal.lastName}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{this.props.personal.gender}</td>
            </tr>
            <tr>
              <td>Mobile Number 1</td>
              <td>{this.props.personal.mobileNumber1}</td>
            </tr>
            <tr>
              <td>Mobile Number 2</td>
              <td>{this.props.personal.mobileNumber2}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.personal.email}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              {/* <td>{this.props.personal.dateOfBirth}</td> */}
            </tr>
            <tr>
              <td>Current Address</td>
              <td>{this.props.personal.currentAddress}</td>
            </tr>
            <tr>
              <td>Permanent Address</td>
              <td>{this.props.personal.permanentAddress}</td>
            </tr>
            <tr>
              <td>Pancard Number</td>
              <td>{this.props.personal.pancardNumber}</td>
            </tr>
            <tr>
              <td>Aadhar Number</td>
              <td>{this.props.personal.aadharNumber}</td>
            </tr>
            <tr>
              <td>Father's name</td>
              <td>{this.props.personal.fatname}</td>
            </tr>
            <tr>
              <td>Mother's name</td>
              <td>{this.props.personal.motname}</td>
            </tr>
            <tr>
              <td>Occupation</td>
              <td>{this.props.personal.occupation}</td>
            </tr>
            <tr>
              <td>Annual Income</td>
              <td>{this.props.personal.anninc}</td>
            </tr>
            <tr>
              <td>Disability</td>
              <td>{this.props.personal.disability}</td>
            </tr>
          </tbody>
        </table>
        <hr></hr>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" gutterBottom>
              Academic details
            </Typography>
            <hr></hr>
            <table style={{ width: "60vw", fontWeight: "bold", margin: "auto" }} className="table table-bordered" id="printArea">
              <tbody>
                <tr>
                  <td>Roll Number</td>
                  <td>{this.props.academic.collegeId}</td>
                </tr>
                <tr>
                  <td>College ID</td>
                  <td>{this.props.academic.collegeId}</td>
                </tr>
                <tr>
                  <td>PRN Number</td>
                  <td>{this.props.academic.prnNumber}</td>
                </tr>
                <tr>
                  <td>Branch</td>
                  <td>{this.props.academic.branch}</td>
                </tr>
                <tr>
                  <td>Tenth %</td>
                  <td>{this.props.academic.percentageTenth}</td>
                </tr>
                <tr>
                  <td>Board(Tenth)</td>
                  <td>{this.props.academic.boeTenth}</td>
                </tr>
                <tr>
                  <td>Year of Passing(Tenth)</td>
                  <td>{this.props.academic.yopTenth}</td>
                </tr>
              </tbody>
            </table>
            <Typography variant="h6" gutterBottom>
              Roll Number: {this.state.rollno}
            </Typography>
            <Typography variant="h6" gutterBottom>
              College Id: {this.state.collegeId}
            </Typography>
            <Typography variant="h6" gutterBottom>
              PRN Number: {this.state.prnNumber}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Branch: {this.state.branch}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Diploma: {this.state.diploma}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Active Backlogs: {this.state.activeBacklogs}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Passive Backlogs: {this.state.passiveBacklogs}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Yeardowns: {this.state.yeardowns}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Board of education(10th): {this.state.boardOfEducation.tenth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Board of education(12th): {this.state.boardOfEducation.twelfth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Board of education(diploma): {this.state.boardOfEducation.diploma}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Education gap after 10th: {this.state.educationGap.tenth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Education gap after 12th: {this.state.educationGap.twelfth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Reason of Gap (10th): {this.state.reasonOfGap.tenth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Reason of Gap (12th): {this.state.reasonOfGap.twelfth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Reason of Gap (diploma): {this.state.reasonOfGap.diploma}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Education gap after Diploma: {this.state.educationGap.diploma}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Percentage 10th: {this.state.percentage.tenth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Percentage 12th: {this.state.percentage.twelfth}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Percentage diploma: {this.state.percentage.diploma}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Percentage engineering: {this.state.percentage.engineering}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Marks FEFS: {this.state.marks.fefs}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Marks FESS: {this.state.marks.fess}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Marks SEFS: {this.state.marks.sefs}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Marks SESS: {this.state.marks.sess}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Marks TEFS: {this.state.marks.tefs}
            </Typography>
            <Typography variant="h6" gutterBottom>
              SGPA FEFS: {this.state.sgpa.fefs}
            </Typography>
            <Typography variant="h6" gutterBottom>
              SGPA FESS: {this.state.sgpa.fess}
            </Typography>
            <Typography variant="h6" gutterBottom>
              SGPA SEFS: {this.state.sgpa.sefs}
            </Typography>
            <Typography variant="h6" gutterBottom>
              SGPA SESS: {this.state.sgpa.sess}
            </Typography>
            <Typography variant="h6" gutterBottom>
              SGPA TEFS: {this.state.sgpa.tefs}
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    statePersonal: state.personal,
    stateAcademic: state.academic,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNext: () => dispatch({ type: actionTypes.HANDLE_NEXT_PERSONAL }),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Review));