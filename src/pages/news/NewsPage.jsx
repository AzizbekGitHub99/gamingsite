import React, { Component, Fragment } from "react";
import Hero from "./components/hero/Hero";
import NewsCard from "./components/card/NewsCard";
import Register from "./components/register/Register";

export class NewsPage extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <Hero />
          <section>
            <NewsCard />
          </section>
          <Register />
        </main>
      </Fragment>
    );
  }
}

export default NewsPage;
