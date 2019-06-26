import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // host: null,
      // games: props.games,
      isValid: true
    };
  }

  handleForm = e => {
    e.preventDefault();
    let t = e.target;
    if (!t.name.value || !t.email.value || !t.age.value) {
      this.setState({ isValid: false });
    } else {
      let returnedForm = {
        name: t.name.value,
        email: t.email.value,
        age: t.age.value,
        status: true
      };
      console.log(returnedForm);
      this.setState({ isValid: true });
    }
  };

  render() {
    return (
      <div className="Event">
        <div className="event-text-container">
          <h3>Join an Event! Fill out the form below.</h3>
          {!this.state.isValid && (
            <p className="event-error">fill out all the fields!</p>
          )}
        </div>
        <h1>Event!</h1>
        <div className="Event-info-container">
          <form className="event-form" onSubmit={this.handleForm}>
            <p>Name:</p>
            <input type="text" className="name event-input" name="name" />
            <p>Email:</p>
            <input type="email" className="emial event-input" name="email" />
            <p>Age:</p>
            <input type="text" className="age event-input" name="age" />
            <input type="submit" className="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Event;
