// import React, { Component } from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import axios from "../../../axios";
// //import { makeData } from "./Utils";

// // Import React Table
// import ReactTable from "react-table";
// import "react-table/react-table.css";
// //import { AutoSizer, Column, Table } from 'react-virtualized';

// const styles = theme => ({
//   flexContainer: {
//     display: "flex",
//     alignItems: "center",
//     boxSizing: "border-box"
//   },
//   tableRow: {
//     cursor: "pointer"
//   },
//   tableRowHover: {
//     "&:hover": {
//       backgroundColor: theme.palette.grey[200]
//     }
//   },
//   tableCell: {
//     flex: 1
//   },
//   noClick: {
//     cursor: "initial"
//   }
// });

// class Visited extends React.PureComponent {
//   static defaultProps = {
//     headerHeight: 48,
//     rowHeight: 48
//   };

//   state = {
//     companies: []
//   };

//   constructor() {
//     super();

//     axios
//       .get("/findallCompaniesVisited")
//       .then(response => {
//         this.setState({ companies: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     const { classes } = this.props;
//     console.log(this.state.companies);

//     return (
//       <Paper className={classes.root}>
//         <Grid>
//           <Table className={classes.table}>
//             <TableHead>
//               <TableRow>
//                 <TableCell align="centre">Sno</TableCell>

//                 <TableCell align="centre">Company</TableCell>
//                 <TableCell align="centre">
//                   Criteria and GPA
//                   <TableCell align="centre">GPA</TableCell>
//                   <TableCell align="centre">Branches</TableCell>
//                 </TableCell>

//                 <TableCell align="centre" margin-left="100">
//                   UG
//                   <TableCell align="inherit">
//                     BE-CE
//                     <TableCell>S1</TableCell>
//                     <TableCell>S2</TableCell>
//                   </TableCell>
//                   <TableCell align="inherit">
//                     BE-ENTC
//                     <TableCell>S1</TableCell>
//                     <TableCell>S2</TableCell>
//                   </TableCell>
//                   <TableCell align="inherit"> BE-IT</TableCell>
//                 </TableCell>
//                 <TableCell align="centre">
//                   PG
//                   <TableCell align="centre">MECE</TableCell>
//                   <TableCell align="centre">MEIT</TableCell>
//                   <TableCell align="centre">ME ENTC</TableCell>
//                 </TableCell>
//                 <TableCell align="centre">
//                   Total
//                   <TableCell>M</TableCell>
//                   <TableCell>F</TableCell>
//                   <TableCell>T</TableCell>
//                 </TableCell>
//                 <TableCell align="centre">SalaryLPA</TableCell>
//                 <TableCell align="centre">VisitDate</TableCell>
//                 <TableCell align="centre">TotalSalaryLPA</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {this.state.companies.map(company => (
//                 <TableRow key={company.id}>
//                   <TableCell component="th" scope="row">
//                     {company.sno}
//                   </TableCell>
//                   <TableCell align="right">{company.company}</TableCell>
//                   <TableCell align="right">{company.criteria}</TableCell>
//                   <TableCell align="right">{company.ug}</TableCell>
//                   <TableCell align="right">{company.pg}</TableCell>
//                   <TableCell align="right">{company.total}</TableCell>
//                   <TableCell align="right">{company.salary}</TableCell>
//                   <TableCell align="right">{company.Visited}</TableCell>
//                   <TableCell align="right">{company.total}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Grid>
//       </Paper>
//     );
//   }
// }

// export default withStyles(styles)(Visited);
import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "../../../axios";
//import { makeData } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
//import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = theme => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  }
});

class Visited extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48
  };

  state = {
    companies: []
  };

  constructor() {
    super();

    axios
      .post("/findallCompaniesVisited")
      .then(response => {
        this.setState({ companies: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.companies);

    return (
      <Paper className={classes.root}>
        <Grid>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="centre">Sno</TableCell>

                <TableCell align="centre">Company</TableCell>
                
                  <TableCell align="centre">CGPA</TableCell>
                  <TableCell align="centre">Branch</TableCell>
                  <TableCell align="centre">BEC</TableCell>
                  <TableCell align="centre">CE</TableCell>
                  <TableCell align="centre">BEE</TableCell>
                  <TableCell align="centre">ENTC</TableCell>
                  <TableCell align="centre">BEIT</TableCell>
                  <TableCell align="centre">MECE</TableCell>
                  <TableCell align="centre">MEEENTC</TableCell>
                  <TableCell align="centre">MEIT</TableCell>
                  <TableCell align="centre">M</TableCell>
                  <TableCell align="centre">F</TableCell>
                  <TableCell align="centre">T</TableCell>
                  <TableCell align="centre">SALLPA</TableCell>
                  <TableCell align="centre">VISITDATE</TableCell>
                  <TableCell align="centre">TSALLPA</TableCell>
                  

                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.companies.map(company => (
                <TableRow key={company.id}>
                  <TableCell component="th" scope="row">
                    {company.sno}
                  </TableCell>
                  <TableCell align="right">{company.company}</TableCell>
                  <TableCell align="right">{company.cgpa}</TableCell>
                  <TableCell align="right">{company.branch}</TableCell>
                  <TableCell align="right">{company.bec}</TableCell>
                  <TableCell align="right">{company.ce}</TableCell>
                  <TableCell align="right">{company.bee}</TableCell>
                  <TableCell align="right">{company.entc}</TableCell>
                  <TableCell align="right">{company.beit}</TableCell>
                  <TableCell align="right">{company.mece}</TableCell>
                  <TableCell align="right">{company.meentc}</TableCell>
                  <TableCell align="right">{company.meit}</TableCell>
                  <TableCell align="right">{company.m}</TableCell>
                  <TableCell align="right">{company.f}</TableCell>
                  <TableCell align="right">{company.t}</TableCell>
                  <TableCell align="right">{company.sal}</TableCell>
                  <TableCell align="right">{company.vistdate}</TableCell>
                  <TableCell align="right">{company.tsal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Visited);