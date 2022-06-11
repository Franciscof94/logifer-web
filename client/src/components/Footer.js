import { makeStyles } from "@material-ui/core";
import React from "react";
import LogoWithLetter from "../images/logoWithLetter.png";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import MapGL from "./Map";
import Contact from "./Contact";

const Footer = () => {
  const classes = useStyles();
  const urlAfip = "https://www.afip.gob.ar/images/f960/DATAWEB.jpg";
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <img src={LogoWithLetter} alt="Logo" />
          <p>
            Desde 1998 operando con las marcas más importantes del mercado.
            Precios súper competitivos y trato bien personalizado.
          </p>
          <a href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx">
            <img src={urlAfip} alt="Afip" />
          </a>
        </div>
      </div>
      <div className={classes.contactContainer}>
          <div className={classes.contact}>
            <Contact />
          </div>
          <MapGL />
        </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3342B1",
    display: 'grid',
    gridTemplateColumns: '30% 70%',
    color: "white",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    height: "150px",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "205px",
    },
    "& p": {
      width: "250px",
      fontSize: "0.9rem",
    },
    "& a": {
      "& img": {
        height: "55px",
        width: "100%",
      },
    },
  },
  contactContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8b8a8a',
    borderTopLeftRadius: '170px',
    padding: '35px 0'
  },
  container: {
    maxWidth: "1100px",
    margin: "35px 0",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    padding: '35px 0'
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "0 30px",
  },
  contactTitle: {
    margin: "3px 0",
  },
  phone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      marginLeft: "10px",
    },
    "& > *": {
      display: "flex",
      flexDirection: "column",
    },
  },
  email: {
    margin: "15px 0",
    display: "flex",
    alignItems: "center",
    "& span": {
      marginLeft: "10px",
    },
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  location: {
    display: "flex",
    alignItems: "center",
    "& span": {
      marginLeft: "10px",
    },
  },
  [theme.breakpoints.down(768)]: {
    root: {
      gridTemplateColumns: 'none'
    },
    contactContainer: {
      flexDirection: 'column'
    },
    contact: {
      margin: '30px 50px'
    }
  }
}));

export default Footer;
