import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";import Form from "./components/Form";
import Footer from "./components/Footer";
import { connect, useDispatch } from "react-redux";
import ProductItem from './components/Products/ProductItem'
import { setLoader } from "./actions/loaderActions";

function App({ isActive }) {
  const dispatch = useDispatch()

  setTimeout(() => {
    dispatch(setLoader(false))
  }, 1500);

  return (
    <div className="App">
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={<Home isActive={isActive} />}></Route>
          <Route path="/productos" element={<ProductItem isActive={isActive} />}></Route>
          <Route path="/contacto" element={<Form />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      isActive:  state.loader.isLoading
  }
}

export default connect(mapStateToProps)(App);
