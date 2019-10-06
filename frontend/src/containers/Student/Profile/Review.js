import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux'
import * as actionTypes from '../../../actions/Student'

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" }
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];
const payments = [
  { name: "Backlog", detail: "No" },
  { name: "Internships", detail: "2" },
  { name: "Co-curriculars", detail: "Inter-college football team" }
];

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
        <Typography variant="h6" gutterBottom>
          First Name: {this.state.firstName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Middle Name: {this.state.middleName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Last Name: {this.state.lastName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Gender: {this.state.gender}
        </Typography>
        {/* <Typography variant="h6" gutterBottom>
          Date of birth: {this.state.dateOfBirth}
        </Typography> */}
        <Typography variant="h6" gutterBottom>
          Mobile no1.:{this.state.mobileNumber1}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Mobile no2.:{this.state.mobileNumber2}
        </Typography>
        <Typography variant="h6" gutterBottom>
          email: {this.state.email}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Current Address: {this.state.currentAddress}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Permanent Address: {this.state.permanentAddress}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Pancard Number: {this.state.pancardNumber}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Aadhar Number: {this.state.aadharNumber}
        </Typography>
        <hr></hr>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" gutterBottom>
              Academic details
            </Typography>
            <hr></hr>
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