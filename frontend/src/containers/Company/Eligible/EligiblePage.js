// import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import axios from '../../../axios';

// const styles = theme => ({
//   palette: {
//     type: "dark"
//   },
//   root: {
//     width: "85%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: "auto"
//   },
//   table: {
//     minWidth: 650
//   },
//   text: {
//     textAlign: "center"
//   },
//   formControl: {
//     margin: theme.spacing(3)
//   },
//   button: {
//     margin: theme.spacing(1),
//     marginTop:theme.spacing(5),
//     marginLeft:theme.spacing(110)
//   },
//   group: {
//     margin: theme.spacing(1, 0)
//   }
// });

// class BranchReport extends Component {
//   state = {
//     students: [],
//     checked: []
//   };

//   constructor() {
//     super();
//     let a =  localStorage.getItem("token");
   
//     axios.post('/fetchToCompanyEligibleStudents',null,{params:{a:a}})
//         .then((response) => {
//             console.log(response.data);
//             this.setState({ students: response.data });
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }


//   handleChange = index => event => {
//       let s = this.state.students[index]
//       s.status = event.target.checked
//       let a = [...this.state.students]
//       a[index] = s
//       this.setState({
//           ...this.state,
//           students: a,
//       })
//   };

//   clickHandler = () => {
//       console.log(this.state.students)

//         var i=0;  
//         var a = []  
//         for(i=0;i<this.state.students.length;i++){
//             if(this.state.students[i].status===true)
//             a.push(this.state.students[i].roll);
//         }
//         let comp_id=localStorage.getItem("token");
//         a.push(comp_id)
//         axios.post("/selectByCompany",a).catch((error) => {
//           console.log(error);
//         });;
//        // window.location.reload(false);
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <React.Fragment>
//         <br></br>
//         <br></br>
//         <Paper className={classes.root}>
//           <Table className={classes.table}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Roll Number</TableCell>
//                 <TableCell align="right">Student Name</TableCell>
//                 <TableCell align="right">CGPA</TableCell>
//                 {/* <TableCell align="right">Skills</TableCell> */}
//                 <TableCell align="right">Approve</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {this.state.students.map((s,index) => (
//                 <TableRow key={s.roll}>
//                   <TableCell align="left">{s.roll}</TableCell>
//                   <TableCell align="right">{s.name}</TableCell>
//                   <TableCell align="right">{s.sgpaTEFS}</TableCell>
//               <TableCell align="right"><FormControlLabel
//                 control={
//                   <Checkbox
//                   style={{marginLeft:"5vw"}}
                   
//                     onChange={this.handleChange(index)}
//                     value={s.status}
//                   />
//                 }
//                 label="Accept"
//               /></TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
         
//         </Paper>
//         <Button
//                 variant="contained"
//                 color="primary"
//                 id="printbtn"
//                 className={classes.button}
//                 onClick={this.clickHandler} 
//               >
//                Allot
//         </Button>
//       </React.Fragment>
//     );
//   }
// }

// export default withStyles(styles)(BranchReport);

import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "../../../axios";
import { ButtonGroup } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import ReactToPrint from 'react-to-print';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    palette: {
        type: "dark"
    },
    root: {
        width: "85%",
        marginTop: theme.spacing(3),
        // overflowX: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    table: {
        minWidth: 650
    },
    text: {
        textAlign: "center"
    },
    formControl: {
        margin: theme.spacing(3),
        width: "100%",
    },
    button: {
        margin: theme.spacing(1),
        margin: "auto"
    },
    group: {
        margin: theme.spacing(1, 0)
    }
});


class BranchReport extends React.Component {
  
    state = {
        students: [],
        temp: [],
        tenth: 0,
        twelfth: 0,
        sgpa: 0,
        active_backlogs: true,
        passive_backlogs: true,
        internship: 0,
        x:[]
    }
    componentDidMount() {
        axios.post('/short-listed', null, { params: { comp_id: localStorage.getItem('token') } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    students: response.data,
                    temp: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })
        
    }

    handleChange = (name) => (event) => {
        this.setState({
            ...this.state,
            [name]: event.target.value,
        })
    }

    toggleChecked = (name) => (event) => {
        const prev = this.state[name];
        this.setState({
            ...this.state,
            [name]: !prev,
        })
    }

  
    clickHandlerForAccept = () => {
        var i=0;  
        var a = []  
        for(i=0;i<this.state.x.length;i++){
            if(this.state.x[i].status===true)
            a.push(this.state.x[i].roll.toString());
        }
        let comp_id=localStorage.getItem("token");
        a.push(comp_id)
        axios.post("/PlacedByCompany", a).catch((error) => {
            console.log(error);
        });;
        window.location.reload(true);
    };


    handleChangeIndex = index => event => {
        let s = this.state.students[index]
        if (event.target.checked) {
            let v = {
                roll: s.student.rollno,
                name: s.student.firstName,
                sgpaTEFS: s.sgpaTEFS,
                skills: s.skills,
                status: true
            }
            this.state.x.push(v);
            console.log(this.state.x);
        }
    };

    render() {

        const { classes } = this.props;
        return (
            <React.Fragment>
                <div>
                    <Paper className={classes.root}>
                        <Table className={classes.table} id="printArea">
                            <TableHead>
                                <TableRow>
                                    <TableCell >ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Roll Number</TableCell>
                                    <TableCell align="right">SGPA</TableCell>
                                    <TableCell align="right">10th Percentage</TableCell>
                                    <TableCell align="right">12th Percentage</TableCell>
                                    <TableCell align="right">Place</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.temp.map((s,index) => (
                                    <TableRow key={s.roll}>
                                        <TableCell component="th" scope="row">
                                            {s.collegeId}
                                        </TableCell>
                                        <TableCell align="right">{s.student.firstName}</TableCell>
                                        <TableCell align="right">{s.roll_no}</TableCell>
                                        <TableCell align="right">{s.sgpaTEFS}</TableCell>
                                        <TableCell align="right">{s.percentageTenth}</TableCell>
                                        <TableCell align="right">{s.percentageTwelfth}</TableCell>
                                        <TableCell align="right"><FormControlLabel
                                            control={
                                                <Checkbox
                                                    style={{ marginLeft: "5vw" }}

                                                    onChange={this.handleChangeIndex(index)}
                                                    value={s.status}
                                                />
                                            }
                                            label="Accept"
                                        /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        id="printbtn"
                        className={classes.button}
                        onClick={this.clickHandlerForAccept}
                    >
                        Allot
        </Button>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(BranchReport);
