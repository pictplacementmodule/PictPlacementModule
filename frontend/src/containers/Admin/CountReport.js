import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import axios from "../../axios";
import { fontSize } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import ReactToPrint from "react-to-print";
import Pagination from '../../components/Pagination'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  palette: {
    type: "dark"
  },
  root: {
    width: "70%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    margin: "auto"
  },
  button: {
    margin: theme.spacing(1),
    margin: "auto",
    left: "47%",
    backgroundColor: "rgb(70,70,120)",
    outline: "none"
  },
  table: {
    margin: "auto",
    minWidth: 500
  },
  tableRow: {
    opacity: "1",
    transition: "opacity 300ms ease",
    cursor: "pointer",
    color: "blue"
  }
});

class CountReport extends Component {
  state = {
    companies: [],
    postsPerPage: 10,
    currentPage: 1,
    show: [],
  };

  //////
  pageStand = (pageNumber) => {
    const indexOfLastPost = pageNumber * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.students.slice(indexOfFirstPost, indexOfLastPost);
    this.setState({
      ...this.state,
      show: [...currentPosts],
    })
  }

  paginate = (pageNumber) => {
    this.setState({
      ...this.state,
      currentPage: pageNumber,
    })
    this.pageStand(pageNumber);
  }
  ///////


  constructor() {
    super();
    axios
      .get("/countofplaced")
      .then(response => {
        console.log(response.data);
        this.setState({ companies: response.data });
        //this.pageStand(this.state.currentPage);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <Button
              variant="contained"
              color="primary"
              id="printbtn"
              className={classes.button}
              onClick={this.printDocument}
            >
              Print
            </Button>
          )}
          content={() => this.componentRef}
        />

        {/* <div>
          <Paper ref={el => (this.componentRef = el)} className={classes.root}>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th align="right">Number of Students placed</th>
                </tr>
              </thead>
              <tbody>
                {this.state.companies.map(company => (
                  <tr key={company.name}>
                    <td component="th" scope="row">
                      {company.name}
                    </td>
                    <td align="right">{company.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Paper>
        </div> */}
        <Paper className={classes.root}>
          <table className="table table-bordered  table-striped">
            <thead>
              <tr>
                <th>Company Name</th>
                <th align="right">Number of Students placed</th>
              </tr>
            </thead>
            <tbody>
              {this.state.companies.map(company => (
                <tr key={company.id}>
                  <td component="th" scope="row">
                    {company.name}
                  </td>
                  <td align="right">{company.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Paper>
        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.companies.length}
          paginate={this.paginate}
          paginatePrev={this.paginatePrev} />
      </div>
    );
  }
}

export default withStyles(styles)(CountReport);
