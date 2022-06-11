import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect, useDispatch } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import Filter from "../Filter";
import Loading from "../Loading";

const ProductItem = (props) => {
  const { isActive, products } = props;


  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <HelmetProvider>
    <div className={classes.main}>
      <Helmet>
        <title>Productos - Ferraro Materiales</title>
        <meta
          name="description"
          content="Venta de materiales para la construcción en la ciudad de Dolores - Pcia de Buenos Aires. Visita ahora nuestra web!"
        />
      </Helmet>
      <Typography variant="h3">PRODUCTOS</Typography>
      <div className={classes.root}>
        <Paper elevation={0} className={classes.paper}>
          <Filter isActive={isActive} />
        </Paper>
        {isActive ? (
          <Loading />
        ) : (
          <Container className={classes.container}>
            {products.map((product, i) => (
              <div key={i} className={classes.product}>
                <img src={product.img} alt={product.info} />
                <Typography variant="h6">{product.info}</Typography>
              </div>
            ))}
          </Container>
        )}
      </div>
    </div>
    </HelmetProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    "& h3": {
      fontSize: "2rem",
      marginTop: "2.4rem",
      fontWeight: "200",
    },
  },
  root: {
    display: "grid",
    gridTemplateColumns: "22% 78%",
    justifyItems: "center",
    position: "relative",
  },
  loader: {
    color: "red",
  },
  paper: {
    display: "flex",
    width: "210px",
    flexDirection: "column",
    height: "485px",
    justifyContent: "center",
  },
  MyLoader_spinner: {
    color: "black",
    position: "absolute",
    left: "50%",
    top: "30%",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "0",

    "& img": {
      height: "190px",
      margin: "8px",
      width: "100%",
      objectFit: "contain",
    },
  },
  product: {
    margin: "15px",
    padding: "8px",
    borderRadius: "0.2rem",
    height: "245px",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%)"
  },
  item: {
    margin: "18px",
  },
  "@media (max-width: 1024px)": {
    root: {
      gridTemplateColumns: "30% 70%",
    },
    container: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  "@media (max-width: 768px)": {
    main: {
      "& h3": {
        fontSize: "1.5rem",
        marginTop: "3.8rem",
      },
    },
    root: {
      gridTemplateColumns: "none",
    },
    container: {
      gridTemplateColumns: "repeat(2, 1fr)",
      "& div": {
        height: "215px",
      },
      "& h6": {
        fontSize: "1.2rem",
      },
    },
    paper: {
      width: "100%",
      margin: "15px",
    },
    MyLoader_spinner: {
      top: "80%",
      left: "39%",
    },
  },
}));

const mapStateToProps = (state) => {
  return {
    products: state.products.filteredItems,
  };
};
export default connect(mapStateToProps, { fetchProducts })(ProductItem);
