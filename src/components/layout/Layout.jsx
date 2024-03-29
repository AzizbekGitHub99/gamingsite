import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Outlet />
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
