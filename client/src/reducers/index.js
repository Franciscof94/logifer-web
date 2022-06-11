import { combineReducers } from "redux";
import productReducers from "./productReducer";
import loaderReducer from './loadingReducer'

export default combineReducers({
  products: productReducers,
  loader: loaderReducer
});
