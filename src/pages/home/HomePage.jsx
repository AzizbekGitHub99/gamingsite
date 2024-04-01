import React, { Component } from 'react'

import "./HomePage.scss"
import Subscribe from '../../components/subscribe/Subscribe'

class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <Subscribe/>
      </div>
    )
  }
}

export default HomePage