import React, { Component, Fragment } from "react";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";

export class NewsPage extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Card />
      </Fragment>
    );
  }
}

export default NewsPage;
