import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import VisibleItemList from '../containers/VisibleItemList';
import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./mainnavbar.css";
import UserImage from "../../Assets/sidebarlogo.png";
import logo from "../../Assets/navbarlogo.png";
import Topbar from "./Topbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#15283c",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    backgroundColor: "#ff5722",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#15283c",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
    backgroundColor: "#fff",
  },
}));

function MainNavbar() {
  const location = useLocation();

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div className="nav_background">
      <div className="user_profile">
        <div className="user_image">
          <img src={UserImage} alt="User Image" className="user_logo" />
        </div>
        <div className="user_name">
          <h6 className="h6_text">Tehreem Iqbal</h6>
        </div>
      </div>
      <div className="text_heading">
        <h4 className="h4_text">General</h4>
      </div>
      <Nav.Link>
        <div className="mt-3">
          <Link className="nav_link" to="/dashboard">
            <span className="dash_icon">
              <AiFillDashboard />
            </span>
            <span
              className={location.pathname === "/dashboard" ? "active" : ""}
            >
              Dashboard
            </span>
          </Link>
        </div>
        <div className="mt-3">
          <Link className="nav_link" to="/teacher">
            <span className="teac_icon">
              <GiTeacher />
            </span>
            <span className={location.pathname === "/teacher" ? "active" : ""}>
              Teacher
            </span>
          </Link>
        </div>
        <div className="mt-3">
          <Link className="nav_link" to="/student">
            <span className="stud_icon">
              <FaUserGraduate />
            </span>
            <span className={location.pathname === "/student" ? "active" : ""}>
              Student
            </span>
          </Link>
        </div>
        <div className="mt-3">
          <Link className="nav_link" to="/feedback">
            <span className="feed_icon">
              <MdFeedback />
            </span>
            <span className={location.pathname === "/feedback" ? "active" : ""}>
              Feedback
            </span>
          </Link>
        </div>
        <div className="mt-3">
          <Link className="nav_link" to="/contact">
            <span className="cont_icon">
              <RiContactsBook2Fill />
            </span>
            <span className={location.pathname === "/contact" ? "active" : ""}>
              Contact
            </span>
          </Link>
        </div>
      </Nav.Link>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <FiMenu />
          </IconButton>
          <div>
            <img src={logo} alt="logo" className="navbar_logo" />
          </div>
          <Topbar />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <GrFormClose />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
      </div>
    </div>
  );
}
MainNavbar.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default MainNavbar;
