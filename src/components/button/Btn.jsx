import React, { Component } from 'react'

import "./Btn.scss"

class Btn extends Component {
  render() {
    console.log(this.props.children);
    return (
      <button>
        {this.props.children}
      </button>
    )
  }
}

export default Btn