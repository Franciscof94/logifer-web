import {
    FETCH_PRODUCTS, FILTER_CATEGORY, LOADING
  } from "./types";
  import data from '../data/products'
import { useState } from "react";
  
  export const fetchProducts = () => (dispatch) => {
  
        dispatch({ type: FETCH_PRODUCTS, payload: data });
  
  };
  
  export const filterProducts = (products, category) => (dispatch) => {
 
    dispatch({
      type: FILTER_CATEGORY,
      payload: {
        category: category,
        items:
          category === "Todos los productos"
            ? products
            : products.filter(item => item.category === category)
      },
    });
  };
  
  