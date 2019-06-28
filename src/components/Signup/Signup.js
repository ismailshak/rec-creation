import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      isValid: true,
      text: ""
    };
  }

  handleForm = e => {
    e.preventDefault();

    //     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    //     const passwordRegex = /^(?=.*\d).{4,16}$/
    //     if(!emailRegex.test(this.state.email)) {
    //     console.log((this.state.email))
    //     this.setState({text: 'Invalid Email!'})
    //     } else if(this.state.password !== this.state.passwordConfirm) {
    //     this.setState({text: "Passwords don't match!"})
    //     } else if(!passwordRegex.test(this.state.password)) {
    //     this.setState({text: "Password must contain: Password must be between 4 and 16 digits long and include at least one numeric digit."})
    //     } else {
    //     this.setState({text: "Valid!"})
    // }

    let t = e.target;
    if (
      !t.firstName.value ||
      !t.lastName.value ||
      !t.email.value ||
      !t.password.value ||
      !t.passwordConfirm.value
    ) {
      this.setState({ isValid: false });
    } else {
      let returnedObj = {
        firstName: t.firstName.value,
        lastName: t.lastName.value,
        email: t.email.value,
        password: t.password.value
      };
      console.log(returnedObj);
      this.props.handleSignup(returnedObj);
      this.setState({ isValid: true });
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="Signup">
        <div className="signup-info-container">
          <div className="signup-text-container">
            <h3>Fill out the form below!</h3>
            {!this.state.isValid && (
              <p className="signup-error">fill out all the fields!</p>
            )}
          </div>
          <form onSubmit={this.handleForm} className="signup-form">
            First Name:
            <input className="signup-input" type="text" name="firstName" />
            Last Name:
            <input className="signup-input" type="text" name="lastName" />
            Email:
            <input className="signup-input" type="text" name="email" />
            Password:
            <input className="signup-input" type="password" name="password" />
            Confirm Password:
            <input
              className="signup-input"
              type="password"
              name="passwordConfirm"
            />
            <input type="submit" className="submit" value="Signup" />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
