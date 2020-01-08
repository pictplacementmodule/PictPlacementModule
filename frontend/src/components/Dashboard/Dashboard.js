import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgb(70,70,120)",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  logout: {
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: "1rem"
  }
}));

function ClippedDrawer(props) {
  const classes = useStyles();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("active");
    localStorage.removeItem("type");
    props.history.push("/");
  };
  const drawerListNames = Object.keys(props.drawerList);
  const [selectedList, setSelected] = React.useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < drawerListNames.length; i++) {
      temp.push(false);
    }
    temp[localStorage.getItem("active")] = true;
    setSelected([
      ...temp
    ])
  }, [])

  const buttonHandler = (text, index) => {
    localStorage.setItem("active", index);
    props.history.push(props.match.path + "/" + props.drawerList[text][0]);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className="col-lg-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Pict_logo.png" height="60" width="50"></img>
          </div>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="h6" noWrap style={{marginTop:"4px"}}>
                PICT PLACEMENT
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Chip style={{marginTop:"4px"}} label="Basic" label={localStorage.getItem("type") + " LOGIN"} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" style={{marginRight:"20px",marginLeft:"20px"}}>
                <marquee scrolldelay="8">
                  Welcome to Pict Placement Module. Your ID  - {localStorage.getItem("token")}
                </marquee>
              </Typography>
            </Grid>
            
            <Grid item xs={1}>
              <Button
                onClick={() => logoutHandler(props)}
                className={classes.logout}
                color="inherit"
              >
                Logout
          </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {drawerListNames.map((text, index) => (
            <div data-tip data-for={text} key={text}>
              <ListItem

                button
                selected={selectedList[index]}
                onClick={() => {
                  buttonHandler(text, index);
                }}
              >
                <ListItemIcon>{props.drawerList[text][1]}</ListItemIcon>
                <ListItemText primary={text} />

              </ListItem>
              <Divider />
              <ReactTooltip id={text} place="right" type="info" effect='solid'>
                <span>{props.drawerList[text][2]}</span>
              </ReactTooltip>
            </div>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(ClippedDrawer);
