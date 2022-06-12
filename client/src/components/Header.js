import { AppBar, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { FiPhoneCall } from "react-icons/fi";
import MenuItem from "./MenuItem";
import Hamburger from "hamburger-react";
import { useResize } from './Hooks/useResize'

const Header = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);
  const { show } = useResize()
 
  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <div className={classes.phoneContainer}>
        <FiPhoneCall fontSize={23} />
        <span>02245-442493</span>
      </div>
      <div className={classes.menuContainer}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <div
              className={`${classes.logoBackground} ${show && classes.rotate}`}
            >
              <div className={classes.logoBackgroundContainer}>
                <img src={Logo} alt="Logo" className={classes.logo} />
              </div>
            </div>
          </Link>
        </div>
        <MenuItem showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className={classes.hamburger} >
        <Hamburger toggled={showMenu} toggle={setShowMenu} />
      </div>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    zIndex: "5",
  },
  logoBackground: {
    height: "130px",
    width: "130px",
    backgroundColor: "#3342b1",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "18px",
    left: "32px",
  },
  rotate: {
    transform: "rotate(0deg)",
    transition: "transform 3s",
    animation: "$slideDown 1s",
  },
  "@keyframes slideDown": {
    "0%": {
      transform: "rotate(0deg)",
    },

    "100%": {
      transform: "rotate(360deg)",
    },
  },
  logoBackgroundContainer: {
    height: "110px",
    width: "110px",
    backgroundColor: "#2D43E3",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "9px",
  },
  appBar: {
    backgroundColor: "#3342b1",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "85px",
  },
  menuContainer: {
    display: "grid",
    gridTemplateColumns: "35% 65%",
  },
  logo: {
    height: "90px",
    maxWidth: "90px",
  },
  title: {
    fontSize: "16px",
    position: "relative",
    cursor: "pointer",
  },
  phoneContainer: {
    color: "#3b3840",
    backgroundColor: "#C3BFC5",
    position: "fixed",
    top: "0",
    width: "100%",
    display: "none",
    zIndex: "32255",
    "& span": {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
  },
  hamburger: {
    position: "absolute",
    right: "23px",
    bottom: "23px",
    display: "none",
  },
  [theme.breakpoints.down(768)]: {
    phoneContainer: {
      display: "block",
    },
    appBar: {
      height: "112px",
    },
    logoBackground: {
      top: "58px",
      height: "90px",
      width: "90px"
    },
    logoBackgroundContainer: {
      height: "75px",
      width: "75px",
    },
    logo: {
      height: "65px",
      maxWidth: "65px",
    },
    hamburger: {
      display: "block",
      top: "3.1rem"
    },
    menuContainer: {
      width: "0",
    },
  },
}));

export default Header;
