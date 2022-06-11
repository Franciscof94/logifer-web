import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Marks from "./Mark";
import Products from "./Products/Products";
import WhatsAppLogo from "../images/whatsapp.png";
import { makeStyles } from "@material-ui/core";
import { useResize } from "./Hooks/useResize.js";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = ({ isActive }) => {
  const classes = useStyles();
  const { show } = useResize();

  return (
    <HelmetProvider>
    <div>
      <Helmet>
        <title>Corralon de materiales - Ferraro Materiales</title>
        <meta
          name="description"
          content="Venta de materiales para la construcción en la ciudad de Dolores - Pcia de Buenos Aires. Visita ahora nuestra web!"
        />
      </Helmet>
      <Banner isActive={isActive} />
      <Products />
      <Marks />
      <AboutUs />
      <div className={classes.container}>
        <a href="https://wa.me/2245476833">
          <img src={WhatsAppLogo} alt="Logo-WhatsApp" />
        </a>
      </div>
    </div>
    </HelmetProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    bottom: "5px",
    right: "15px",
    zIndex: "100",
    cursor: "pointer",
    "& img": {
      height: "70px",
    },
  },
}));

export default Home;
