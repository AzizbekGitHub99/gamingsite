import React, { Component } from "react";
import "./Register.scss";
export class Register extends Component {
  render() {
    return (
      <section className="register">
        <div className="container">
          <h3 className="register__header">Lorem Ipsum</h3>
          <p className="register__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="register__btn">
            <div className="register__btn-left">
              <h2 className="register__btn-header">Stay in the loop</h2>
              <p className="register__btn-paragraph">
                Subscribe to receive the latest news and updates about TDA. We
                promise not to spam you!{" "}
              </p>
            </div>
            <div className="register__btn-right">
              <input type="email" placeholder="Enter email address" />
              <button id="clear">Continue</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
