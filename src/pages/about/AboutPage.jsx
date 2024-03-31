import React, { Component, Fragment } from 'react';

import Hero from './components/hero/Hero';
import Work from './components/work/work';
import Info from './components/info/Info';
import Team from './components/team/Team';
import Subscribe from './components/subscribe/Subscribe';


class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <Hero/>
        <Work/>
        <Info/>
        <Team/>
        <Subscribe/>
      </Fragment>
    )
  }
}

export default AboutPage