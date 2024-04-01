import React, { Component } from 'react'

import "./Loading.scss"

class Loading extends Component {
  render() {
    return (
      <div className='container'>
        <div className="loader"></div>
      </div>
    )
  }
}

export default Loading