import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Products from "./components/Products";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FuctionalComponents from "./components/FuctionalComponents";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Iphone 12",
        brand: "Iphone",
        price: 1200,
        imgUrl: "images/iphone 12 pro.JFIF",
      },
      {
        id: 2,
        name: "Iphone 12",
        brand: "Iphone",
        price: 1300,
        imgUrl: "images/iphone 12pro max.JPG",
      },
      {
        id: 3,
        name: "Iphone 13",
        brand: "Iphone",
        price: 1500,
        imgUrl: "images/iphone 13proo.JPG",
      },
      {
        id: 4,
        name: "Samsung s21",
        brand: "Samsung",
        price: 1100,
        imgUrl: "images/Samsung s21.PNG",
      },
      {
        id: 5,
        name: "Iphone 4s",
        brand: "Iphone",
        price: 200,
        imgUrl: "images/iphone 4s.JFIF",
      },
      {
        id: 6,
        name: "Iphone 5s",
        brand: "Iphone",
        price: 300,
        imgUrl: "images/iphone 5s.JPEG",
      },
      {
        id: 7,
        name: "Iphone 6s",
        brand: "Iphone",
        price: 400,
        imgUrl: "images/iphone 6s.JPG",
      },
      {
        id: 8,
        name: "Iphone 7s",
        brand: "Iphone",
        price: 500,
        imgUrl: "images/iphone 7s.JPG",
      },
      {
        id: 9,
        name: "Iphone 11pro",
        brand: "Iphone",
        price: 1000,
        imgUrl: "images/iphone 11 pro max.JPG",
      },
      {
        id: 10,
        name: "Iphone 11 pro",
        brand: "Iphone",
        price: 950,
        imgUrl: "images/iphone 11 pro1.JPG",
      },
      {
        id: 11,
        name: "iphone 11",
        brand: "Iphone",
        price: 999,
        imgUrl: "images/iphone 11 pro2.JPG",
      },
      {
        id: 12,
        name: "iphone 13 pro",
        brand: "Iphone",
        price: 1750,
        imgUrl: "images/iphone 13pro.JPG",
      },
    ],
    temCount: 1,
  };
  changeCount = (status) => {
    if (status === "plyus") {
      this.setState({
        temCount: this.state.temCount + 1,
      })
    }
   else if (status === "minus" && this.state.temCount>1) {
      this.setState({
        temCount: this.state.temCount - 1,
      })
    }
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route path="/Section">
                <Section />
              </Route>
              <Route path="/Products">
                <Products
                  changeCount={(status) => this.changeCount(status)}
                  temCount={this.state.temCount}
                  getIndex={(index) => this.getIndex(index)}
                  products={this.state.products}
                />
              </Route>
              <Route exact path="/">
                <Homepage />
                {/* <FuctionalComponents/> */}
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}
