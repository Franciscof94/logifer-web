import { Grid, makeStyles, Paper, styled, Typography } from "@material-ui/core";
import * as React from "react";
import AboutUsImage from "../images/AboutUs.jpg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "4px",
});

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img src={AboutUsImage} alt="AboutUs" />
      </div>
      <div className={classes.infoContainer}>
        <Typography variant="h3">SOBRE NOSOTROS</Typography>
        <p>
          Desde 1998 a partir de un pequeño predio y austero negocio trabajamos
          para ofrecerle a nuestros clientes servicio, atención y variedad de
          productos.
        </p>
        <p>
          Le brindamos asistencia en ventas y eficiencia en costo.
          Trabajamos productos de marcas prestigiosas del país.
        </p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    margin: "3rem 0",
  },
  imgContainer: {
    "& img": {
      height: "530px",
      borderTopRightRadius: "272px",
      borderBottomRightRadius: "272px",
      opacity: "0.9",
      width: '100%',
      objectFit: 'cover'
    },
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    "& h3": {
      fontSize: "2rem",
      fontWeight: "300",
      margin: "40px 0",
    },
    "& p":{
      maxWidth: '450px',
      fontSize: '1.1rem'
    }
  },
  [theme.breakpoints.down(968)]: {
      imgContainer: {
        "& img":{
          height: '400px'
        }
      }
  },
  [theme.breakpoints.down(768)]: {
    imgContainer: {
      "& img":{
        height: '320px'
      }
    },
    infoContainer: {
      "& h3": {
        fontSize: '1.5rem',
        margin: '0'
      },
        "& p":{
          fontSize: '0.9rem',
          maxWidth: '160px'
        }
    }
  }
}));

export default AboutUs;
