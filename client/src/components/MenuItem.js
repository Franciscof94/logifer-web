import { List, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ showMenu, setShowMenu }) => {
  const classes = useStyles();


  const title = [
    { title: "INICIO", href: "/" },
    { title: "PRODUCTOS", href: "/productos" },
    { title: "CONTACTO", href: "/contacto" },
  ];

  return (
    <Toolbar className={`${classes.toolBar} ${showMenu && classes.showMenu}`}>
        <List
          component="nav"
          aria-labelledby="main navigation"
          className={classes.list}
        >
          <div className={classes.ulContainer}>
          <ul>
              {title.map((li, i) => (
                <NavLink key={i} onClick={() => setShowMenu(false)} to={li.href} className={({ isActive }) => isActive ? (classes.selected) : null}>
                 <li>{li.title}</li>
                </NavLink>
              ))}
              </ul>
          </div>
        </List>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0 55px",
  },
  selected: {
    borderBottom: "0.3rem solid #afaeaef2"
  },
  ulContainer: {
    "& ul": {
      display: "flex",
    },
    "& a": {
      textDecoration: "none",
      color: "white",
      fontSize: "1.1rem",
      margin: "0 0.8rem",
      "& li": {
        listStyle: "none",
      }
    }
  },
  title: {
    fontSize: "16px",
    position: "relative",
    cursor: "pointer",
  },
  [theme.breakpoints.down(768)]: {
    ulContainer: {
      position: "fixed",
      left: "0",
      top: "7.01rem",
      width: "100%",
      backgroundColor: "#3342b1",
      "& ul": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        "& a": {
          margin: "0.8rem 0.8rem"
        },
      },
    },
    toolBar: {
      opacity: "0",
      display: "none",
    },
    underline: {
      display: "none",
    },
    selected: {
      margin: "0",
    },
    showMenu: {
      display: "block",
      opacity: "1",
      animation: "$showMenu 0.4s",
    },
    "@keyframes showMenu": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  },
}));

export default MenuItem;
