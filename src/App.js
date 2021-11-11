import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Content from "./pages/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Newletter from "./components/Newletter/Newletter";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";
import { useDispatch } from "react-redux";
import {getUser} from './redux/userSlide';
import Cart from "./pages/Cart/Cart";
function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    if(localStorage.getItem('user') !== null){
      dispatch(getUser(localStorage.getItem('user')))
    }
  },[dispatch])
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/:category/product/:id"><ProductDetails/></Route>
        <Route exact path="/men'sclothing"><Content cate="men's clothing"/></Route>
        <Route exact path="/women'sclothing"><Content cate="women's clothing"/></Route>
        <Route exact path='/electronics'><Content cate="electronics"/></Route>
        <Route exact path='/jewelery'><Content cate="jewelery"/></Route>
        <Route exact path='/cart'><Cart/></Route>
        <Route exact path='/'><Home/></Route>
        <Route path='*'></Route>
      </Switch>
      <Newletter/>
      <Footer/>
    </Router>
  );
}

export default App;
