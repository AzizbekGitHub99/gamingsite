import React, { Component } from "react";

import "./Subscribe.scss";

class Subscribe extends Component {
  render() {
    // console.log(this.props);
    const { mode, bg } = this.props;
    return (
      <div
        style={{ backgroundColor: bg }}
        className={mode === "dark" ? "subscribe dark" : "subscribe"}
      >
        <div className="subscribe__left">
          <h2>Stay in the loop</h2>
          <p>Subscribe to receive the latest news and updates about TDA.</p>
          <p>We promise not to spam you!</p>
        </div>
        <div className="subscribe__right">
          <input type="text" placeholder="Enter email address" />
          <button>Continue</button>
        </div>
      </div>
    );
  }
}

export default Subscribe;
