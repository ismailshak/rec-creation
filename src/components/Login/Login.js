import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isValid: true
    };
  }

  handleForm = e => {
    e.preventDefault();
    let t = e.target;
    if (!t.email.value || !t.password.value) {
      this.setState({ isValid: false });
    } else {
      let returnedObj = {
        email: t.email.value,
        password: t.password.value
      };
      console.log(returnedObj);
      this.props.handleLogin(returnedObj);
      this.setState({ isValid: true });
      this.props.history.goBack(-2);
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="login-info-container">
          <div className="login-text-container">
            <h3>Fill out the form below!</h3>
            {!this.state.isValid && (
              <p className="login-error">fill out all the fields!</p>
            )}
          </div>
          <form className="login-form" onSubmit={this.handleForm}>
            Email:
            <input class="login-input" type="text" name="email" />
            Password:
            <input class="login-input" type="password" name="password" />
            <input class="submit" type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
