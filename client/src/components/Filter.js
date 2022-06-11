import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";
import { setLoader } from '../actions/loaderActions'

const Filter = (props) => {
  const classes = useStyles();

  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch()
    const backgroundCategory = !props.category ? 'Todos los productos' : props.category;

  const categories = [
    "Todos los productos",
    "Cemento y cal",
    "Áridos",
    "Pegamentos",
    "Hidrofugo",
    "Caños y piezas",
    "Ladrillos",
    "Hierros y mallas",
    "Viguetas",
  ];

  const goToTop = () => {
    if (width <= 768) {
      window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
    }
  };

  
  return (
    <div className={classes.root}>
      {categories.map((category, i) => (
        <div
          className={`${classes.container} ${
            backgroundCategory === category && classes.background 
           }`}
          key={category}
          value={props.category}
          onClick={() => {
            props.filterProducts(props.products, category);
            goToTop();
            dispatch(setLoader(true))
          }}
        >
          <div
            className={`${classes.button} ${
              backgroundCategory === category && classes.letterColor
            }`}
          >
            {category}
          </div>
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "480px",
    justifyContent: "center",
  },
  button: {
    margin: "7px 0",
  },
  container: {
    borderBottom: "1px solid #A9A8AE",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    cursor: "pointer",
    transition: "all 0.5s ease-out",
    "& div": {
      padding: "6px 8px",
      fontWeight: "bold",
    },
  },
  background: {
    backgroundColor: "#8B8A8A",
  },
  letterColor: {
    color: "white",
  },
  "@media (max-width: 768px)": {
    root: {
      margin: "0 25px",
    },
  },
}));

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    category: state.products.category,
  };
};
export default connect(mapStateToProps, { filterProducts })(Filter);
