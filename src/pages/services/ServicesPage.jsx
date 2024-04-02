import React, { Component, Fragment } from 'react'

import Hero from './components/hero/hero'
import Info from './components/info/info'
import SubscribeServices from './components/subscribe/SubscribeService'

class ServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Info />
        <SubscribeServices/>
      </Fragment>
    )
  }
}

export default ServicesPage