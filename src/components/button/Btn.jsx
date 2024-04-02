import React, { Component } from 'react'

import "./Btn.scss"

class Btn extends Component {
  render() {
    return (
      <button className='Btn'>
        {this.props.children}
      </button>
    )
  }
}

export default Btn