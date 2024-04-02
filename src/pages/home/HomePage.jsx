import React, { Component, Fragment } from "react";

import HeroHome from "./sections/hero/HeroHome";
import TrendGames from "./sections/trend/TrendGames";
import Apps from "./sections/apps/Apps";
import Projects from "./sections/projects/Projects";
import SubscribeHome from "./sections/subscribe/SubscribeHome";


class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HeroHome/>
        <TrendGames/>
        <Apps/>
        <Projects/>
        <SubscribeHome />
      </Fragment>
    );
  }
}

export default HomePage;
